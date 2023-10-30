import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, I18nManager } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constant/Colors'
import Images from '../constant/Images'
import fonts from '../constant/fonts'
import { hp, wp, SIZE } from '../constant/responsiveFunc'
import { LikeImage, ExpressView } from '../constant/ListConstant'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeWishlistItem } from '../screens/Store/actions/wishlistActions'
import { addToWishlistAPICall } from '../services/apis/WishlistAPI'
import SVGS from '../constant/Svgs'
import { showErrorToast, showInfoToast } from './universal/Toast'
import { translate } from '../utility'
import { formattedPrice, getFonts } from '../screens/utils'
import ImageRenderer from './universal/ImageRender'
import { removeWishlistProduct, updateWishlistProduct } from '../screens/Store/actions/productListAction'
import { updateNewArrivalLike, removeNewArrivalLike, updateSuggestedLike, removeSuggestedLike, updateRecentViewLike, removeRecentViewLike } from '../screens/Store/actions/HomeAction'

const { HeartIconActive, HeartIcon, DiscountTag } = SVGS



const ListView = (props) => {
    const {
        centerImage,
        productName,
        price,
        discount,
        averageRating,
        noOfReview,
        detailId,
        showLike,
        isCheckBox,
        isExpress,
        isItemLiked,
        categoryId,
        getIds,
        isLeftImage,
        item
    } = props;

    // console.log('averageRating : ', averageRating,noOfReview)


    console.log('CHECK Product items : ', item, '------------', item?.isLike)



    const [isLiked, setLiked] = useState(isItemLiked);
    const [checkedItems, setCheckedItems] = useState([]);
    const [arr, setArr] = useState([]);
    const [totalProductPrice, setTotalProductPrice] = useState(0);
    const [totalCost, setTotalCost] = useState(0)
    const [checkboxCount, setCheckboxCount] = useState(0);
    const [checked, setChecked] = useState([]);


    const dispatch = useDispatch();

    // const { item } = props;
    const navigation = useNavigation();
    const userData = useSelector((state) => state.userReducer.userData);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

    const flippedIconStyle = I18nManager.isRTL ? { transform: [{ scaleX: -1 }] } : {};

    console.log('props.isHome', props.isHome)
    var total = 0
    const addToWishlistProduct = async (id) => {
        // console.log('addToWishlistProduct', id)
        if (userData) {
            try {
                // await addToWishlistAPICall(detailId);    
                console.log('check liked  :', isLiked)
                const response = await addToWishlistAPICall(detailId);
                if (response?.success) {
                    // console.log('response : ', reponse)

                    const infoMsg = selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic;
                    if (response?.message == 'product added successfully in wishlist') {
                        // props.isHome && setLiked(true)

                        props.isHome && props?.isHomeType == 'NewArrival'
                            ?
                            dispatch(updateNewArrivalLike(id))
                            :
                            props.isHome && props?.isHomeType == 'Suggested'
                                ?
                                dispatch(updateSuggestedLike(id))
                                :
                                props.isHome && props?.isHomeType == 'RecentView'
                                    ?
                                    dispatch(updateRecentViewLike(id))
                                    :
                                    dispatch(updateWishlistProduct(id))



                        showInfoToast('SUCCESS', infoMsg)


                        // setTimeout(() => {
                        //     setLiked(true)
                        //     showInfoToast('SUCCESS', selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)
                        // }, 500);
                    }
                    else {
                        // props.isHome && setLiked(false)
                        props.isHome && props?.isHomeType == 'NewArrival'
                            ?
                            dispatch(removeNewArrivalLike(id))
                            :
                            props.isHome && props?.isHomeType == 'Suggested'
                                ?
                                dispatch(removeSuggestedLike(id))
                                :
                                props.isHome && props?.isHomeType == 'RecentView'
                                    ?
                                    dispatch(removeRecentViewLike(id))
                                    :
                                    dispatch(removeWishlistProduct(id))


                        showInfoToast('REMOVE', infoMsg)
                        // setTimeout(() => {
                        //     setLiked(false)
                        //     showInfoToast('REMOVE', selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)
                        // }, 500);
                    }
                }
                else {
                    setLiked(false)
                }
                // setLiked(!isLiked);
            }
            catch (error) {
                console.log('Error from add to wishlist API api ', error)
                // setLiked(false);
            }
        }
        // else {
        //     // showErrorToast(translate('common.shoppingNeedsText'), translate('common.pleaseloginfirst'))
        //     // setModalVisible(true)
        //     props.onWishlistPress
        // }

    }


    const handleCheckboxChange = (id, price) => {

        let itemIndex = getIds.indexOf(id);

        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== id));
            getIds.splice(itemIndex, 1);
        } else {
            setCheckedItems([...checkedItems, id]);
            getIds.push(id);

        }

        props.productPriceTotal(getIds)
    };



    return (
        <View style={[props.mainContainer]}>
            <TouchableOpacity
                style={[styles.ProductListContainer, props.ViewContStyle]}
                // onPress={() => navigation.navigate('ProductDetail', { id: detailId })}
                onPress={() => navigation.push('ProductDetail', { id: detailId })}
            >

                <View style={styles.topLine}>

                    {
                        isExpress ? <ExpressView title={isExpress} /> : null
                    }
                    {
                        showLike
                            ?
                            <TouchableOpacity
                                onPress={userData ? () => addToWishlistProduct(props.isHome && props?.isHomeType == 'RecentView' ? item?.product_id : item?.id) : props.onWishlistPress}
                            >
                                {item?.isLike ? <HeartIconActive /> : <HeartIcon />}
                            </TouchableOpacity>
                            : null
                    }
                    {
                        isCheckBox ?
                            <CheckBox
                                onClick={() => {
                                    // toggleChecked(item.id);
                                    handleCheckboxChange(detailId, 20)

                                }}
                                isChecked={checkedItems.includes(detailId) || false}
                                checkBoxColor={Colors.themeColor}
                                uncheckedCheckBoxColor={Colors.GRAY}
                            /> : null
                    }
                </View>

                <View style={[styles.imageContainer, props.imgContStyle]}>
                    {/* <Image
                        source={{ uri: centerImage ? centerImage : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }}
                        style={[styles.productImg, props.imgStyle]}
                    /> */}
                    <ImageRenderer height={SIZE(100)} width={SIZE(100)} style={[styles.productImg, props.imgStyle]} uri={centerImage} />
                </View>

                <View style={[styles.textView, props.TextViewStyle]}>
                    {/* {
                        props.isPriceButton &&

                        <View style={styles.priceBtnView}>
                            <Text style={styles.priceBtnText}>{'50% Off'}</Text>
                        </View>

                    } */}
                    <Text style={styles.productName} numberOfLines={2}>{productName}</Text>


                    {
                        discount ?
                            <Text style={[styles.price, props.TotalPriceStyle]}>{`${formattedPrice(discount)} ${translate('common.currency_iqd')}`}</Text>
                            : null
                    }
                    {
                        price && discount ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{`${formattedPrice(price)} ${translate('common.currency_iqd')}`} </Text>
                            </View>
                            : price ? <Text style={[styles.price, props.TotalPriceStyle]}>{`${formattedPrice(price)} ${translate('common.currency_iqd')}`}</Text> : null
                    }

                    {/* {
                        discount &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{discount} </Text>
                            {props.isDiscountPercent && <Text style={styles.ProductDiscPercent} numberOfLines={1}>{discount}</Text>}
                        </View>
                    } */}

                    {/* {
                        props.PriceInGreen && <Text style={[styles.price, { color: Colors.PRICEGREEN }]}>{item.price}</Text>
                    } */}

                    {
                        averageRating &&

                        <View style={styles.rowContainer}>
                            <Text style={styles.rating}>{averageRating}</Text>
                            <Image source={Images.star} style={styles.ratingImg} />
                            <Text style={styles.noOfReview}>{`(${noOfReview})`}</Text>
                        </View>
                    }

                </View>

            </TouchableOpacity>
            {/* {props.isDiscountTag &&
                <>
                    <View style={{
                        position: 'absolute', bottom: 10, right: 0, marginVertical: wp('2'),
                        marginHorizontal: wp('1.5'), justifyContent: 'center', alignItems: 'center'
                    }}>
                        <DiscountTag />

                    </View>
                    View style={{}}> <Text>1</Text></View> 
                </>
            } */}
            {/* <ImageBackground source={Images.DiscountTag} style={{
                // height: hp(4.43), width: wp(5.87), resizeMode: 'contain',
                height: hp(7), width: wp(10)
            }}>
                {/* <DiscountTag /> */}
            {/* </ImageBackground> * /} */}
        </View >
    )
}

export default ListView

const styles = StyleSheet.create({
    ProductListContainer: {
        marginVertical: wp('2'),
        marginHorizontal: wp('2'),
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        borderRadius: SIZE(10),
        // elevation: 5,
        backgroundColor: Colors.WHITE1,
        paddingVertical: SIZE(10),
        paddingHorizontal: SIZE(10),
        gap: SIZE(10),
        // verticalAlign: 'top',
        // overflow: 'hidden',
        // alignContent: 'flex-start',
        width: wp(40),
        height: 273
    },
    textView: {
        // marginTop: SIZE(20),
        // height: hp(12.32),
        // backgroundColor: 'red'
        // maxWidth: wp(35)
        // flex: 1
    },
    price: {
        fontFamily: getFonts.BOLD,
        lineHeight: 19,
        letterSpacing: 0.5,
        // fontWeight: 700,
    },
    imageContainer: {
        alignSelf: 'center',
        // height: hp(12.32),
        justifyContent: 'center',
        // backgroundColor: 'green',
        flex: 1


        // padding: 10
    },
    discountPrice: {
        fontFamily: getFonts.BOLD,
        lineHeight: 19,
        letterSpacing: 0.5,
        // fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    topLine: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: SIZE(20),
        alignItems: 'stretch',
        // backgroundColor: 'red'
    },
    productImg: {
        height: SIZE(100),
        width: SIZE(100),
        resizeMode: 'contain',
        // backgroundColor: 'red'
    },
    productName: {
        fontFamily: getFonts.MEDIUM,
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.5,
        fontWeight: 500,
        // backgroundColor: 'red'
        // maxWidth: wp(35)
    },
    productDiscountPrice: {
        fontFamily: getFonts.BOLD,
        lineHeight: 19,
        letterSpacing: 0.5,
        // fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    ProductDiscPercent: {
        fontFamily: getFonts.BOLD,
        lineHeight: 19,
        letterSpacing: 0.5,
        // fontWeight: 700,
        color: Colors.PRICEGREEN
    },
    rating: {
        fontFamily: getFonts.BOLD,
        fontSize: 11,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontWeight: 800
    },
    noOfReview: {
        fontSize: 11,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: getFonts.REGULAR,
        fontWeight: 500
    },
    ratingImg: {
        height: SIZE(12), width: SIZE(12), resizeMode: 'contain',
        // width: wp('3%')
    },
    rowContainer: {
        flexDirection: 'row', alignItems: 'center', gap: 3,
        // justifyContent: 'center'
    },
    priceBtnView: {
        // paddingVertical: 2, 
        // paddingHorizontal: 10, 
        backgroundColor: Colors.RED,
        width: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: SIZE(1)
    },
    priceBtnText: {
        fontFamily: getFonts.SEMI_BOLD,
        fontSize: 10,
        fontWeight: '600',
        color: Colors.WHITE
    },
    productBrandView: {
        height: hp(12), width: wp(26), backgroundColor: Colors.WHITE, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10
    },
    brandImage: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    }
})