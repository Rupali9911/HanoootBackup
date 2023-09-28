import {
    ScrollView, StyleSheet, Text, View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppBackground from '../Components/AppBackground';
import AppHeader from '../Components/AppHeader';
import AppButton from '../Components/AppButton';
import Colors from '../../constant/Colors';
import ProductDetailCard from './ProductDetailCard';
import UserReview from './UserReview';
import ProductHeader from '../Components/Cards/ProductHeader';
import ProductVariation from './ProductVariation';
import ProductQuantity from './ProductQty';
import ProductSpecification from './ProductSpecification';
import Banner from '../Components/Cards/Banner';
import Images from '../../constant/Images';
import { hp, wp } from '../../constant/responsiveFunc';
import ProductSpecCard from './ProductSpecCard';
import ProductDelivery from './ProductDeliveryOptn';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../constant/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail, productDetailReset, productDetailLoading, productInfoStore, setTappedButtonName } from '../Store/actions/productListAction';
import Loader from '../../constant/Loader';
import ListView from '../../Components/ListView';
import ProductDescription from './ProductDescription';
import { capitalizeFirstLetter, getFonts } from '../utils';
import { AddtoCartAPICall } from '../../services/apis/CartAPI';
import { showErrorToast, showInfoToast } from '../../Components/universal/Toast';
import { useIsFocused } from '@react-navigation/native';
import AppModal from '../../Components/universal/Modal';
import { translate } from '../../utility';
import SVGS from '../../constant/Svgs';

const { InfoIcon } = SVGS

const ProductDetail = (props) => {
    const product_detail_Id = props?.route?.params?.id;

    const [modalVisible, setModalVisible] = useState(false);
    const [productQty, setProductQty] = useState(Number(1));
    const [isProductChecked, setProductChecked] = useState([])
    const [totalCartItemDetail, setTotalCartItemDetail] = useState({
        totalPrice: 0,
        noOfProducts: []
    });

    const { isDetailPageLoad, productDetail, productFilterByCategory } = useSelector(state => state.productListReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);
    const userData = useSelector((state) => state.userReducer.userData);


    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(productDetailReset())
        dispatch(productDetailLoading())
        dispatch(getProductDetail(product_detail_Id, userData))

        // return () => dispatch(setTappedButtonName(''));
    }, [isFocused])


    // const onScroll = event => {
    //     const scrollY = event.nativeEvent.contentOffset.y;
    //     console.log('Y Axis Scroll : ', scrollY, lastContentOffset)
    //     const showButton = scrollY > lastContentOffset;
    //     // if(cartLabel != 'View Cart' || showButton){
    //     //     setScrollBtn(showButton);
    //     // }
    //     // else{
    //     //     setScrollBtn(showButton)
    //     // }
    //     if (cartLabel != 'View Cart') {
    //         setScrollBtn(showButton)
    //         // setLastContentOffset(scrollY)
    //     }

    //     // lastContentOffset.value = event.contentOffset.y;
    //     // setLastContentOffset(scrollY);
    // };


    const renderProductImages = () => {
        const images = productDetail?.ManagementProductDetail?.product_images;
        return (
            <View style={{ marginVertical: '2%' }}>
                {
                    images?.slice(0, 3).map((key, index) => {
                        return (<Banner Image={{ uri: key }} imgStyle={{ height: hp(65) }} key={index} />)
                    })
                }
            </View>
        )
    }

    const onAddtoCartPress = async (isCartedItem) => {
        dispatch(setTappedButtonName(false))
        try {
            if (!isCartedItem) {

                const response = await AddtoCartAPICall(productDetail?.product_details_id, productQty)
                if (response?.success) {
                    dispatch(productDetailLoading())
                    const resp1 = dispatch(getProductDetail(product_detail_Id, userData))
                    if (resp1) {
                        setTimeout(() => {
                            showInfoToast('SUCCESS', selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)
                        }, 1000);
                    }
                }
                else {
                    showErrorToast()
                }
            }
            else if (isCartedItem) {
                navigation.navigate('CartScreen', { screen: true })
            }

        }
        catch (error) {
            console.log('Error from onAddtoCartPress api ', error)
        }
    }

    const onAddMultipleItemToCart = async () => {
        try {
            if (totalCartItemDetail?.noOfProducts?.length > 0) {
                totalCartItemDetail?.noOfProducts.map(async id => {
                    const response = await AddtoCartAPICall(id, 1)
                    if (response?.success) {
                        showInfoToast('SUCCESS', `${totalCartItemDetail?.noOfProducts?.length} ${translate('common.itemsAdded!!')}`)
                    }
                    else {
                        showErrorToast()
                    }
                })
            }
        }
        catch (error) {
            console.log('Error from onAddtoCartPress api ', error)
            showErrorToast()
        }
    }


    const renderNoDataFound = () => {
        return (
            <View style={styles.sorryMessageCont}>
                <Text style={styles.sorryMessage}>{translate('common.nodatafound')}</Text>
            </View>
        );
    }

    const ModalContent = (props) => {
        return (
            <View style={styles.modalContainer}>
                <Text style={styles.removeHeading}>{translate('common.loginFirstMessage')}</Text>
                <Text style={styles.removeDesc}>{translate('common.wantContinue')}</Text>
                <View style={styles.modalBtnCont}>
                    <TouchableOpacity
                        onPress={props.onCancelPress}
                        style={styles.btnViewCont}
                    >
                        <Text style={styles.modalBtnText}>{translate('common.no')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.onOkPress}
                        style={[styles.btnViewCont, { backgroundColor: Colors.themeColor }]}
                    >
                        <Text style={[styles.modalBtnText, { color: Colors.WHITE }]}>{translate('common.yes')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }


    return (
        <>
            <AppBackground>
                <AppHeader
                    placeholderText={translate('common.whatLookingFor')}
                    showBackButton
                />
                {
                    isDetailPageLoad && Object.keys(productDetail).length === 0 ?
                        <Loader />
                        :
                        Object.keys(productDetail).length > 0
                            ?
                            <>
                                <ScrollView>
                                    <ProductDetailCard
                                        carouselData={productDetail?.images}
                                        categoryName={selectedLanguageItem?.language_id === 0 ? productDetail?.ManagementCategory?.name : productDetail?.ManagementCategory?.name_arabic}
                                        title={selectedLanguageItem?.language_id === 0 ? productDetail?.ManagementProductSeo?.product_name : productDetail?.ManagementProductSeo?.product_name_arabic}
                                        avgRating={productDetail?.ManagementProductReview?.average_rating}
                                        noOfReview={productDetail?.ManagementProductReview?.number_of_reviews}
                                        price={productDetail?.ManagementProductPricing?.price_iqd}
                                        discount={productDetail?.ManagementProductPricing?.hanooot_discount}
                                        productId={productDetail?.product_details_id}
                                        isItemLiked={productDetail?.isLike}
                                        productLink={productDetail?.link}
                                        onPressWishlist={() => setModalVisible(true)}

                                    // hanootChoice={productDetail?.ManagementProductPricing?.hanooot_discount}
                                    />
                                    <ProductVariation variants={productDetail?.ManagementProductVariantStyle} />
                                    <ProductDelivery data={productDetail?.deliveryObj} />
                                    <ProductQuantity
                                        getNoOfQty={(val) => {
                                            setProductQty(val)
                                        }}
                                        productId={productDetail?.product_details_id}
                                    />
                                    <AppButton
                                        label={productDetail?.isCart ? translate('common.viewcart') : translate('common.addtocart')}
                                        onPress={() => userData ? onAddtoCartPress(productDetail?.isCart) : setModalVisible(true)}
                                        isIndicatorLoading={isDetailPageLoad}
                                    />

                                    <AppButton label={translate('common.buynow')} containerStyle={styles.outLineButton}
                                        onPress={() => userData ?
                                            (
                                                dispatch(setTappedButtonName(true)),
                                                dispatch(productInfoStore({ productQty: productQty, productId: productDetail?.product_details_id })),
                                                navigation.navigate('CheckoutScreen')
                                            )
                                            : setModalVisible(true)}
                                    />
                                    <ProductSpecCard data={productDetail} />
                                    <ProductSpecification data={selectedLanguageItem?.language_id === 0 ? productDetail?.ManagementProductSeo?.short_description : productDetail?.ManagementProductSeo?.short_description_arabic} />
                                    <ProductDescription data={selectedLanguageItem?.language_id === 0 ? productDetail?.ManagementProductSeo?.long_description : productDetail?.ManagementProductSeo?.long_description_arabic} />
                                    {renderProductImages()}
                                    {
                                        productDetail?.children.length > 0 ?
                                            <>
                                                <ProductHeader title={translate('common.frequently')} />
                                                <FlatList
                                                    data={productDetail?.children}
                                                    renderItem={({ item, index }) => {
                                                        return (
                                                            <ListView
                                                                item={item}
                                                                centerImage={item?.images[0]}
                                                                productName={selectedLanguageItem?.language_id === 0 ? item?.ManagementProductSeo?.product_name : item?.ManagementProductSeo?.product_name_arabic}
                                                                price={item?.ManagementProductPricing?.price_iqd}
                                                                detailId={item?.product_details_id}
                                                                isExpress
                                                                isCheckBox
                                                                productPriceTotal={(val) => {
                                                                    console.log('CheckedItems : ', val),
                                                                        setProductChecked(val)
                                                                    uniq = [...new Set(val)];

                                                                    let totalPrice = 0;

                                                                    productDetail?.children.forEach(item => {
                                                                        if (uniq.includes(item.product_details_id)) {
                                                                            totalPrice += item?.ManagementProductPricing?.price_iqd ? Number(item?.ManagementProductPricing?.price_iqd) : Number(0);
                                                                        }
                                                                    });

                                                                    setTotalCartItemDetail({
                                                                        totalPrice: totalPrice,
                                                                        noOfProducts: uniq
                                                                    })

                                                                }}
                                                                getIds={isProductChecked}
                                                            />
                                                        );
                                                    }}
                                                    style={{ marginHorizontal: '5%' }}
                                                    horizontal
                                                    showsHorizontalScrollIndicator={false}
                                                />
                                                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                                                    <View style={styles.infoView}>
                                                        {/* <Image source={Images.InfoIcon} style={{ height: 15, width: 15 }} />
                                                         */}
                                                        <InfoIcon />
                                                        <Text style={[styles.infoMsg, { fontSize: 12 }]}>{translate('common.itemsSoldSeller')}</Text>
                                                    </View>

                                                    <Text style={[styles.infoMsg, { margin: 10 }]}>{`${translate('common.totalprice')} : $ ${totalCartItemDetail?.totalPrice}`}</Text>
                                                </View>
                                                <AppButton
                                                    containerStyle={{ backgroundColor: Colors.LightGray }}
                                                    label={`${translate('common.add')} ${totalCartItemDetail?.noOfProducts?.length} ${translate('common.itemstocart')}`}
                                                    labelStyle={{ color: Colors.themeColor }}
                                                    onPress={() => onAddMultipleItemToCart()}
                                                />
                                            </>
                                            : null
                                    }

                                    <UserReview data={productDetail?.ManagementProductReview} />
                                    {
                                        productFilterByCategory?.length > 0 ?
                                            <>
                                                <ProductHeader title={`${translate('common.morefrom')} ${capitalizeFirstLetter(productDetail?.ManagementCategory?.name)}`} />
                                                <FlatList
                                                    data={productFilterByCategory}
                                                    renderItem={({ item, index }) => {
                                                        return (
                                                            <ListView
                                                                // item={item}
                                                                centerImage={item?.product_image}
                                                                productName={selectedLanguageItem?.language_id === 0 ? item?.ManagementProductSeo?.product_name : item?.ManagementProductSeo?.product_name_arabic}
                                                                price={item?.ManagementProductPricing?.price_iqd}
                                                                detailId={item?.product_details_id}
                                                            // ViewContStyle={{ height: hp(17.86) }}
                                                            />
                                                        );
                                                    }}
                                                    style={{ marginHorizontal: '5%' }}
                                                    horizontal
                                                    showsHorizontalScrollIndicator={false}
                                                />
                                            </>
                                            : null
                                    }

                                </ScrollView>
                                <AppModal
                                    visible={modalVisible}
                                    onRequestClose={() => setModalVisible(false)}>
                                    <ModalContent
                                        onCancelPress={() => {
                                            setModalVisible(false);
                                        }}
                                        onOkPress={() => {
                                            navigation.navigate('Login', { cameFrom: "ProductDetail" });
                                            setModalVisible(false);
                                        }}
                                    />
                                </AppModal>
                            </>
                            :
                            renderNoDataFound()
                }
                {/* {scrollBtn && (
                //         <TouchableOpacity style={{ backgroundColor: 'red', bottom: 10, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', flex: 1, position: 'absolute', backgroundColor: Colors.YELLOW1, padding: '3%', marginHorizontal: '35%', borderRadius: 100 }}>
                //             <Text style={styles.scrollBtnText}>Add to Cart</Text>
                //         </TouchableOpacity>
                //         // <TouchableOpacity style={styles.button}>
                //         //     <Text style={styles.scrollBtnText}>Add to Cart</Text>
                //         // </TouchableOpacity>
                //     )} */}

            </AppBackground>
        </>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    outLineButton: {
        backgroundColor: Colors.YELLOW1,
        borderColor: Colors.YELLOW1,
        marginBottom: hp('2%')
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // modalContainer: {
    //     // flex: 1,
    //     // justifyContent: 'center',
    //     // // backgroundColor: '#F5FCFF',
    //     // backgroundColor: 'red',
    //     width: wp(85.07),
    //     height: hp(20.32),
    //     backgroundColor: 'red'
    // },
    innerContainer: {
        alignItems: 'center',
    },
    toastMsgText: {
        fontFamily: getFonts.MEDIUM,
        fontSize: 16,
        letterSpacing: 0.5
    },
    toastMsgContainer: {
        height: 60, width: '90%', backgroundColor: Colors.WHITE, flexDirection: 'row', padding: 10, borderRadius: 8, marginHorizontal: 20, alignItems: 'center', gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
    },
    infoMsg: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
    },
    infoView: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center'
    },
    button: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: 'red'
    },
    scrollBtnText: {
        // backgroundColor: Colors.YELLOW1,
        // adding: 10, borderRadius: 24, 
        color: Colors.WHITE,
        fontFamily: getFonts.SEMI_BOLD,
        letterSpacing: 0.5
    },
    sorryMessageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sorryMessage: {
        fontSize: 15,
        fontFamily: getFonts.SEMI_BOLD,
    },
    // modalMainCont: {
    //     flex: 1, justifyContent: "center", alignItems: "center"
    // },
    // modalContainer: {
    //     backgroundColor: Colors.WHITE1,
    //     padding: 20,
    //     height: hp(18),
    //     borderRadius: 4,
    //     width: wp(85),
    //     gap: 10
    // },
    // removeHeading: {
    //     fontWeight: 600,
    //     fontSize: 16,
    //     lineHeight: 21,
    //     letterSpacing: 0.5,
    //     color: 'red'



    // },
    // removeDesc: {
    //     fontWeight: 500,
    //     letterSpacing: 0.5,
    //     lineHeight: 19,
    //     color: Colors.PRICEGRAY
    // },
    // modalBtnCont: {
    //     flexDirection: 'row',
    //     // marginVertical: '5%', 
    //     justifyContent: 'space-between'
    // },
    // btnViewCont: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     borderRadius: 24,
    //     padding: 8,
    //     width: '50%',
    //     justifyContent: 'center',
    //     marginHorizontal: '1%',
    //     borderWidth: 1,
    //     borderColor: Colors.themeColor
    // },
    // modalBtnText: {
    //     fontWeight: 500,
    //     fontSize: 12,
    //     letterSpacing: 0.5,
    //     textAlign: 'center',
    //     color: Colors.themeColor
    // },
    modalMainCont: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    modalContainer: {
        backgroundColor: Colors.WHITE1,
        padding: 20,
        height: hp(20),
        // marginHorizontal: 20, 
        borderRadius: 4,
        width: wp(85),
        gap: 10
    },
    removeHeading: {
        fontFamily: getFonts.REGULAR,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5



    },
    removeDesc: {
        fontFamily: getFonts.REGULAR,
        fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 19,
        color: Colors.PRICEGRAY
    },
    modalBtnCont: {
        flexDirection: 'row',
        //  marginVertical: '5%', 
        justifyContent: 'space-between'
    },
    btnViewCont: {
        borderRadius: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.themeColor,
        height: hp(4.06),
        width: wp(35.73)
    },
    modalBtnText: {
        fontFamily: getFonts.REGULAR,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: Colors.themeColor
    },
})

