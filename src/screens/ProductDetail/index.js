import {
    ScrollView, StyleSheet, Text, View, TouchableHighlight, Modal, ToastAndroid,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
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
import { getProductDetail } from '../Store/actions/productListAction';
import Loader from '../../constant/Loader';
import ListView from '../../Components/ListView';
import ProductDescription from './ProductDescription';



const ProductDetail = (props) => {
    const product_detail_Id = props?.route?.params?.id;
    const { isDetailPageLoad, productDetail } = useSelector(state => state.productListReducer);
    const [totalCartPrice, setTotalCartPrice] = useState({
        totalPrice: 0,
        noOfProducts: ''
    });



    const dispatch = useDispatch();
    // const { route } = props;
    // const { item } = route.params;
    // const dispatch = useDispatch();
    // const navigation = useNavigation();
    // const { cartLabel, cartItems } = useSelector(state => state.cartReducer);

    // const [scrollBtn, setScrollBtn] = useState(false);
    // const [lastContentOffset, setLastContentOffset] = useState(Dimensions.get('window').height)
    // const [specifications, setSpecifications] = useState({
    //     version: 'Physical Dual Sim Version',
    //     memory: '128GB',
    //     color: 'Dual Purple'
    // });

    useEffect(() => {
        dispatch(getProductDetail(product_detail_Id))
        // ProductDetailAPICall() 
    }, [])


    const product_images = [
        "https://m.media-amazon.com/images/G/39/img15/MarchEye/premiumaplus/AEEN_iPhone14_Pro_5G_Q223_AMZ_Marketing_Pages_L_01_2x._CB595199550_.jpg",
        "https://m.media-amazon.com/images/G/39/img15/MarchEye/premiumaplus/AEEN_iPhone14_Pro_5G_Q223_AMZ_Marketing_Pages_L_02_2x._CB595199550_.jpg",
        "https://m.media-amazon.com/images/G/39/img15/MarchEye/premiumaplus/AEEN_iPhone14_Pro_5G_Q223_AMZ_Marketing_Pages_L_03_2x._CB595199550_.jpg"
    ]




    // useEffect(() => {
    //     if (cartItems && cartItems.includes(item)) {
    //         dispatch(setCartLabel('View Cart'))
    //     }
    //     else {
    //         dispatch(setCartLabel('Add to Cart'))
    //     }
    // }, [])




    // const AddToCart = (obj) => {
    //     // obj.specifications = specifications;
    //     dispatch(addToCart(obj));
    // }


    // const updateButtonText = () => {
    //     dispatch(setCartLabel('View Cart'));
    // }

    // // const toastConfig = {
    // //     info: ({ text1, text2 }) => (
    // //         <View style={styles.toastMsgContainer}>
    // //             <Image source={Images.ToastSuccess} style={{ height: 20, width: 20 }} />
    // //             <View>
    // //                 <Text
    // //                     style={styles.toastMsgText}
    // //                 >{text1}</Text>
    // //                 <Text style={styles.toastMsgText}>{text2}</Text>
    // //             </View>
    // //         </View>
    // //     )
    // // };

    // const toastConfig = {
    //     /*
    //       Overwrite 'success' type,
    //       by modifying the existing `BaseToast` component
    //     */
    //     success: (props) => (
    //         <BaseToast
    //             {...props}
    //             style={{ borderLeftColor: 'pink' }}
    //             contentContainerStyle={{ paddingHorizontal: 15 }}
    //             text1Style={{
    //                 fontSize: 15,
    //                 fontWeight: '400'
    //             }}
    //         />
    //     ),
    //     /*
    //       Overwrite 'error' type,
    //       by modifying the existing `ErrorToast` component
    //     */
    //     error: (props) => (
    //         <ErrorToast
    //             {...props}
    //             text1Style={{
    //                 fontSize: 17
    //             }}
    //             text2Style={{
    //                 fontSize: 15
    //             }}
    //         />
    //     ),
    //     /*
    //       Or create a completely new type - `tomatoToast`,
    //       building the layout from scratch.

    //       I can consume any custom `props` I want.
    //       They will be passed when calling the `show` method (see below)
    //     */
    //     info: ({ text1, props }) => (
    //         //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
    //         //     <Text>{text1}</Text>
    //         //     <Text>{props.uuid}</Text>
    //         //   </View>

    //         <View style={styles.toastMsgContainer}>
    //             <Image source={props.image} style={{ height: 20, width: 20 }} />
    //             <View>
    //                 <Text
    //                     style={styles.toastMsgText}
    //                 >{props.msg1}</Text>
    //                 <Text style={styles.toastMsgText}>{props.msg2}</Text>
    //             </View>
    //         </View>
    //     )
    // };

    // const showToast = (message) => {
    //     // Toast.show({
    //     //     type: 'info',
    //     //     text1: message,
    //     //     text2: message2

    //     // });
    //     Toast.show({
    //         type: 'info',

    //         // And I can pass any custom props I want
    //         props: {
    //             image: Images.ToastSuccess,
    //             msg1: message,
    //             msg2: 'Add to cart'
    //         }
    //     });
    // }



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


    // const getSpacification = (value, type) => {
    //     const newSpecifications = { ...specifications, [type]: value };
    //     setSpecifications(newSpecifications);
    // }


    const renderProductImages = () => {
        const images = productDetail?.ManagementProductDetail?.product_images;
        // console.log('check iamges : ', images, images.length )
        // if(images.length > 0){
        //     console.log('inside if')
        //     images.map((key, index) => {
        //         console.log("key", key)
        //         return ( <Text>{'klsdf'}</Text>)
        //     })
        // }
        return (
            <View>
                {
                    images.length > 0 
                    ?
                     images.slice(0, 3).map((key, index) => {
                        return (<Banner Image={{ uri: key }} imgStyle={{ height: hp(65) }} key={index} />)
                    })
                    : 
                    null
                }
            </View>
        )
    }

    return (

        // <AppBackground>
        //     <AppHeader 
        //     placeholderText={'What are you looking for?'} 
        //     showBackButton 
        //     />
        //     <ScrollView
        //         onScroll={onScroll}
        //         scrollEventThrottle={0}


        //     >
        //         <ProductDetailCard
        //             ProductName={item.name}
        //             Image={item.image}
        //             TotalPrice={item.price}
        //             DiscountPrice={item.discountPrice}
        //             PricePercentOff={item.pricePercentOff}
        //         />
        //         <ProductVariation Data={productVersionVariation} title={'Version'} getValue={(spec) => getSpacification(spec, 'version')} />
        //         <ProductVariation Data={productMemoryVariation} title={'Memory'} getValue={(spec) => getSpacification(spec, 'memory')} />
        //         <ProductVariation Data={productColorVariation} title={'Color'} getValue={(spec) => getSpacification(spec, 'color')} />
        //         <ProductDelivery />
        //         <ProductQuantity />
        //         <AppButton label={cartLabel}
        //             onPress={() => {
        //                 if (cartLabel === 'View Cart') {
        //                     navigation.navigate('CartScreen')
        //                 }
        //                 else {
        //                     updateButtonText(item);
        //                     AddToCart(item);
        //                     // showToast(item.name, 'Add to Cart');
        //                     showToast(item.name);
        //                 }
        //             }}
        //         />

        //         <AppButton label={'Buy Now'} containerStyle={styles.outLineButton} />
        //         <ProductSpecCard Item={item} />
        //         <ProductSpecification Heading={'Specification & Highlight'} />
        //         <Separator />
        //         <ProductSpecification Heading={'Description'} data={Description} />

        //         <Banner Image={Images.iPad} imgStyle={{ height: hp(52.71) }} />
        //         <Banner Image={Images.ProductPerformance} imgStyle={{ height: hp(65) }} />
        //         <Banner Image={Images.iPad2} imgStyle={{ height: hp(67) }} />
        //         <ProductHeader title={'Frequently Bought Together'} />
        //         <ProductList
        //             Data={productCollection}
        //             isExpress
        //             TotalPrice
        //             isCheckBox
        //         />
        //         <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        //             <View style={styles.infoView}>
        //                 <Image source={Images.InfoIcon} style={{ height: 15, width: 15 }} />
        //                 <Text style={[styles.infoMsg, { fontSize: 12 }]}>These items are dispatched from and sold by different sellers</Text>
        //             </View>
        //             <Text style={[styles.infoMsg, { margin: 10 }]}>{`Total Price : $ 5,00,000`}</Text>
        //         </View>
        //         <AppButton containerStyle={{ backgroundColor: Colors.LightGray }} label={'Add Items to Cart'} labelStyle={{ color: Colors.themeColor }} />
        //         <UserReview Item={item} />
        //         {/* <ProductwithTitle title={'More from Apple'} /> */}
        //         <ProductHeader title={'More From Apple'} />
        //         <ProductList
        //             Data={productCollection}
        //             TotalPrice
        //         />
        //     </ScrollView>

        //     <Toast config={toastConfig}
        //         position="bottom"
        //         visibilityTime={2000}
        //         autoHide={true}
        //     />

        //     {scrollBtn && (
        //         <TouchableOpacity style={{ backgroundColor: 'red', bottom: 10, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', flex: 1, position: 'absolute', backgroundColor: Colors.YELLOW1, padding: '3%', marginHorizontal: '35%', borderRadius: 100 }}>
        //             <Text style={styles.scrollBtnText}>Add to Cart</Text>
        //         </TouchableOpacity>
        //         // <TouchableOpacity style={styles.button}>
        //         //     <Text style={styles.scrollBtnText}>Add to Cart</Text>
        //         // </TouchableOpacity>
        //     )}
        // </AppBackground>




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
                                // avgRating={'4.6'}
                                // noOfReview={'1,411'}
                                price={productDetail?.ManagementProductPricing?.hanooot_price}
                                discount={productDetail?.ManagementProductPricing?.hanooot_discount}
                                productId={productDetail?.product_details_id}
                            // hanootChoice={productDetail?.ManagementProductPricing?.hanooot_discount}
                            />
                            <ProductVariation variants={productDetail?.ManagementProductVariantStyle} />
                            <ProductDelivery data={productDetail?.deliveryObj} />
                            <ProductQuantity />
                            <AppButton label={'Add to Cart'} />

                            <AppButton label={'Buy Now'} containerStyle={styles.outLineButton} />
                            <ProductSpecCard data={productDetail} />
                            <ProductSpecification data={productDetail?.ManagementProductSeo?.short_description} />
                            <ProductDescription data={productDetail?.ManagementProductSeo?.long_description} />
                            {/* {
                                productDetail?.ManagementProductDetail && productDetail?.ManagementProductDetail?.product_images.slice(0,2).map((key, index) => {
                                    // product_images.map((key, index) => {
                                    console.log('this are images keys : ', key)
                                    return  <Banner Image={{uri: key}} imgStyle={{ height: hp(52.71) }} key={index}/>

                                })
                            } */}
                            {
                                renderProductImages()
                            }
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
                                                        productPriceTotal={(totalPrice, noOfProducts) => { setTotalCartPrice({totalPrice: totalPrice, noOfProducts: noOfProducts}), console.log('check data : ', totalCartPrice) }}
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

                            <UserReview data={productDetail?.ManagementProductReview}/>
                        </ScrollView>
                    </>
                    :
                    null

            }
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

