import {
    ScrollView, StyleSheet, Text, View, TouchableHighlight, Modal, ToastAndroid,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import AppBackground from '../Components/AppBackground';
import AppHeader from '../Components/AppHeader';
import AppButton from '../Components/AppButton';
import Colors from '../../constant/Colors';
import ProductDetailCard from './ProductDetailCard';
import UserReview from './UserReview';
import ProductwithTitle from '../Components/Cards/ProductWithTitle';
import ProductHeader from '../Components/Cards/ProductHeader';
import ProductList from '../Components/Cards/ProductList';
import { productCollection, productColorVariation, productMemoryVariation, productVersionVariation, Description } from '../../constant/DemoArray';
import ProductVariation from './ProductVariation';
import ProductQuantity from './ProductQty';
import ProductSpecification from './ProductSpecification';
import Banner from '../Components/Cards/Banner';
import Images from '../../constant/Images';
import { hp, wp } from '../../constant/responsiveFunc';
import Separator from '../../constant/Separator';
import ProductSpecCard from './ProductSpecCard';
import ProductDelivery from './ProductDeliveryOptn';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';
import fonts from '../../constant/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, setCartLabel } from '../Store/actions/cartAction';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { getProductDetail, productDetailReset, productDetailLoading } from '../Store/actions/productListAction';
import Loader from '../../constant/Loader';
import ListView from '../../Components/ListView';
import ProductDescription from './ProductDescription';
import { capitalizeFirstLetter } from '../utils';
import { changeCartButtonLabel } from '../Store/actions/cartAction';
import { AddtoCartAPICall } from '../../services/apis/CartAPI';
import { showErrorToast, showInfoToast } from '../../Components/universal/Toast';
import { getItemsFromCart } from '../Store/actions/cartAction';
import { useIsFocused } from '@react-navigation/native';

const ProductDetail = (props) => {
    const product_detail_Id = props?.route?.params?.id;
    const { isDetailPageLoad, productDetail, productFilterByCategory } = useSelector(state => state.productListReducer);
    const { cartButtonLabel, cartItems } = useSelector(state => state.cartReducer);
    const [totalCartPrice, setTotalCartPrice] = useState({
        totalPrice: 0,
        noOfProducts: ''
    });
    const [productQty, setProductQty] = useState(Number(1));
    const [isAddedToBag, setAddedToBag] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Add to Cart');




    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(productDetailReset())
        dispatch(productDetailLoading())
        dispatch(getProductDetail(product_detail_Id))
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
                    images.slice(0, 3).map((key, index) => {
                        return (<Banner Image={{ uri: key }} imgStyle={{ height: hp(65) }} key={index} />)
                    })
                }
            </View>
        )
    }

    const onAddtoCartPress = async (isCartedItem) => {
        try {
            if (!isCartedItem) {

                const response = await AddtoCartAPICall(productDetail?.product_details_id, productQty)
                if (response?.success) {
                    dispatch(productDetailLoading())
                    dispatch(getProductDetail(product_detail_Id))
                    setTimeout(() => {
                        showInfoToast('SUCCESS', response?.message)
                    }, 1000);

                }
                else {
                    showErrorToast()
                }
            }
            else if (isCartedItem) {
                navigation.navigate('CartScreen')
            }

        }
        catch (error) {
            console.log('Error from onAddtoCartPress api ', error)
        }
    }

    return (
        <AppBackground>
            <AppHeader
                placeholderText={'What are you looking for?'}
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
                                    categoryName={productDetail?.ManagementCategory?.name}
                                    title={productDetail?.title}
                                    avgRating={productDetail?.ManagementProductReview?.average_rating}
                                    noOfReview={productDetail?.ManagementProductReview?.number_of_reviews}
                                    price={productDetail?.ManagementProductPricing?.hanooot_price}
                                    discount={productDetail?.ManagementProductPricing?.hanooot_discount}
                                    productId={productDetail?.product_details_id}
                                    isItemLiked={productDetail?.isLike}
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
                                    label={productDetail?.isCart ? 'View Cart' : 'Add to Cart'}
                                    onPress={() => onAddtoCartPress(productDetail?.isCart)}
                                    isIndicatorLoading={isDetailPageLoad}
                                />

                                <AppButton label={'Buy Now'} containerStyle={styles.outLineButton} />
                                <ProductSpecCard data={productDetail} />
                                <ProductSpecification data={productDetail?.ManagementProductSeo?.short_description} />
                                <ProductDescription data={productDetail?.ManagementProductSeo?.long_description} />
                                {renderProductImages()}
                                {
                                    productDetail?.children.length > 0 ?
                                        <>
                                            <ProductHeader title={'Frequently Bought Together'} />
                                            <FlatList
                                                data={productDetail?.children}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <ListView
                                                            item={item}
                                                            centerImage={item?.product_image}
                                                            productName={item?.title}
                                                            price={item?.ManagementProductPricing?.hanooot_price}
                                                            detailId={item?.product_details_id}
                                                            isExpress
                                                            isCheckBox
                                                            productPriceTotal={(totalPrice, noOfProducts) => { setTotalCartPrice({ totalPrice: totalPrice, noOfProducts: noOfProducts }), console.log('check data : ', totalCartPrice) }}
                                                        />
                                                    );
                                                }}
                                                style={{ marginHorizontal: '5%' }}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                            />
                                            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                                                <View style={styles.infoView}>
                                                    <Image source={Images.InfoIcon} style={{ height: 15, width: 15 }} />
                                                    <Text style={[styles.infoMsg, { fontSize: 12 }]}>These items are dispatched from and sold by different sellers</Text>
                                                </View>
                                                <Text style={[styles.infoMsg, { margin: 10 }]}>{`Total Price : ${totalCartPrice?.totalPrice}`}</Text>
                                            </View>
                                            <AppButton containerStyle={{ backgroundColor: Colors.LightGray }} label={`Add ${totalCartPrice?.noOfProducts} Items to Cart`} labelStyle={{ color: Colors.themeColor }} />
                                        </>
                                        : null
                                }

                                <UserReview data={productDetail?.ManagementProductReview} />
                                {
                                    productFilterByCategory?.length > 0 ?
                                        <>
                                            <ProductHeader title={`More From ${capitalizeFirstLetter(productDetail?.ManagementCategory?.name)}`} />
                                            <FlatList
                                                data={productFilterByCategory}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <ListView
                                                            // item={item}
                                                            centerImage={item?.product_image}
                                                            productName={item?.title}
                                                            price={item?.ManagementProductPricing?.hanooot_price}
                                                            detailId={item?.product_details_id}
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
                        </>
                        :
                        null




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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    innerContainer: {
        alignItems: 'center',
    },
    toastMsgText: {
        fontFamily: fonts.VisbyCF_Medium,
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
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.5,
    },
    infoView: {
        flexDirection: 'row', gap: 2
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
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5
    }
})

