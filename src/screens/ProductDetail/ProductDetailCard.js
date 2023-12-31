import { StyleSheet, Text, View, Image, TouchableOpacity, Share } from 'react-native'
import React, { useCallback, useState } from 'react'
import { hp, wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import fonts from '../../constant/fonts';
import Images from '../../constant/Images';
import ProductImageCarousel from './ProductImageCarousel';
import { ExpressView } from '../../constant/ListConstant';
import Separator from '../../constant/Separator';
import { addToWishlistAPICall } from '../../services/apis/WishlistAPI';
import { capitalizeFirstLetter, getFonts } from '../utils';
import { Rating } from 'react-native-ratings';
import SVGS from '../../constant/Svgs';
import { showErrorToast } from '../../Components/universal/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail, createShareLinkApiCall } from '../Store/actions/productListAction';
import { showInfoToast } from '../../Components/universal/Toast';
import { translate } from '../../utility';
import { formattedPrice } from '../utils';

const { HeartIconActive, HeartIcon, ShareIcon } = SVGS


const ProductDetailCard = (props) => {
    const dispatch = useDispatch();

    const { carouselData, title, avgRating, noOfReview, price, categoryName, productLink, discount } = props;

    const userData = useSelector((state) => state.userReducer.userData);
    const { productDetail } = useSelector(state => state.productListReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    const addToWishlistProduct = async () => {
        if (userData) {
            try {
                const response = await addToWishlistAPICall(props.productId);
                if (response?.success) {
                    const resp1 = dispatch(getProductDetail(props.productId, userData))
                    if (resp1) {
                        const typeCheck = response?.message == 'product added successfully in wishlist' ? 'SUCCESS' : 'REMOVE'

                        setTimeout(() => {
                            showInfoToast(typeCheck, selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)
                        }, 1000);
                    }
                }
                else {
                }

            }
            catch (error) {
                console.log('Error from add to wishlist API api ', error)
                showErrorToast()
            }
        }
    }

    const onShare = async () => {

        try {
            await dispatch(createShareLinkApiCall(props.productId)).
                then(async (response) => {
                    if (response?.success) {
                        const productUrl = response?.data;
                        try {
                            console.log('try block')
                            const result = await Share.share({
                                title: translate('common.productdetail'),
                                url: productUrl,
                                // message: productName + ' ' + productUrl,
                                message: productUrl,
                            });
                            if (result.action === Share.sharedAction) {
                                if (result.activityType) {
                                    // shared with activity type of result.activityType
                                } else {
                                    // shared
                                }
                            } else if (result.action === Share.dismissedAction) {
                                // dismissed
                            }
                        } catch (error) {
                            console.log('Share error', error)
                        }
                    }
                }).
                catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log('createShareLinkApiCall err: ', error)
        }
    };


    const ShareButton = () => {
        return (
            <View style={[styles.circleView, props.contStyle]}>
                <TouchableOpacity
                    onPress={() => onShare()}
                >
                    <ShareIcon />
                </TouchableOpacity>
            </View>
        )
    }

    const WishlistButton = () => {
        return (
            <View style={[styles.circleView, props.contStyle]}>
                <TouchableOpacity
                    onPress={userData ? addToWishlistProduct : props.onPressWishlist}
                >
                    {productDetail?.isLike ? <HeartIconActive /> : <HeartIcon />}
                </TouchableOpacity>
            </View>
        )
    }


    const RatingAndReview = useCallback(() => {

        return (
            avgRating ?
                <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                    <Rating
                        type='custom'
                        readonly={true}
                        startingValue={Number(avgRating)}
                        ratingCount={5}
                        imageSize={10}
                        ratingColor={Colors.YELLOW}
                        ratingBackgroundColor={Colors.GRAY}
                    />
                    <Text style={{
                        fontSize: 11,
                        lineHeight: 21,
                        letterSpacing: 0.5,
                        fontFamily: getFonts.REGULAR,
                        fontWeight: 500
                    }}>{`(${noOfReview})`}</Text>
                </View >
                : null
        );
    }, [])

    const renderText = (val) => {
        if (val.includes('-')) {
            return val.split('-')[0]
        }
        return val;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.topLinewithRating}>
                    <Text style={styles.brandName}>
                        {categoryName ? capitalizeFirstLetter(categoryName) : ''}
                    </Text>
                    <RatingAndReview />
                </View>

                <Text style={styles.productName} >{title}</Text>

                <View style={styles.yellowLineView}>
                    <View style={styles.logoView}>
                        <Image
                            source={Images.Logo}
                            style={styles.logoStyle}
                        />
                        <Text style={styles.choiceTextStyle}>{translate('common.choice')}</Text>
                    </View>
                    <Text style={styles.forTextStyle} numberOfLines={2}>{renderText(props?.title)}</Text>
                </View>
            </View>
            <Separator />
            <ProductImageCarousel
                data={carouselData}
            />
            <Separator />

            {carouselData ?
                <View style={styles.iconCotainer}>
                    <WishlistButton />
                    <ShareButton />
                </View>
                : null}
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.firstLineView}>

                    <View style={styles.textView}>
                        {
                            discount ?
                                <Text style={styles.discountPercent}>{`${formattedPrice(discount)} ${translate('common.currency_iqd')}`}</Text>
                                : price ? <Text style={styles.totalPrice}>{`${formattedPrice(price)} ${translate('common.currency_iqd')}`}</Text> : null
                        }
                    </View>
                    <ExpressView title={props.isExpress} />
                </View>
                <View style={styles.textView}>
                    {
                        price && discount ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{`${formattedPrice(price)} ${translate('common.currency_iqd')}`} </Text>
                            </View>
                            : null
                    }
                </View>
            </View>

        </View>
    )

}

export default ProductDetailCard;

const styles = StyleSheet.create({
    mainContainer: {
        // width: '100%',
        backgroundColor: Colors.WHITE,
        // backgroundColor: 'red',
        // padding: 20,
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    brandName: {
        fontWeight: 600,
        fontFamily: getFonts.SEMI_BOLD,
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.themeColor
    },
    productName: {
        // fontWeight: 700,
        lineHeight: 21,
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontSize: 16
    },
    yellowLineView: {
        height: hp('5%'),
        width: '100%',
        backgroundColor: 'rgba(255, 205, 26, 0.15)',
        flexDirection: 'row',
        marginVertical: hp('1%'),
        // width: '90%'
    },
    logoView: {
        backgroundColor: Colors.themeColor,
        height: hp('5%'),
        // width: '20%',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: wp(1.2)
    },
    logoStyle: {
        height: 15,
        width: 15,
        // left: 5,
        resizeMode: 'contain'
    },
    choiceTextStyle: {
        fontFamily: getFonts.SEMI_BOLD,
        color: Colors.YELLOW
    },
    forTextStyle: {
        alignSelf: 'center',
        left: 10,
        fontFamily: getFonts.MEDIUM,
        fontSize: 10,
        fontWeight: 500,
        maxWidth: '70%'
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        width: wp(95)
    },
    topLinewithRating: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    iconCotainer: {
        right: 0,
        position: 'absolute',
        top: '50%'
    },
    firstLineView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    textView: {
        flexDirection: 'row', alignItems: 'center', gap: 5
    },
    totalPrice: {
        fontFamily: getFonts.BOLD, lineHeight: 23, letterSpacing: 0.5,
        // fontWeight: 700,
        fontSize: 18
    },
    inclusiveTax: {
        fontFamily: getFonts.MEDIUM, lineHeight: 23, letterSpacing: 0.5, fontWeight: 400, fontSize: 10, color: Colors.PRICEGRAY
    },
    discountPrice: {
        fontFamily: getFonts.SEMI_BOLD,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontWeight: 600,
        color: Colors.GRAYDARK,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 18
    },
    discountPercent: {
        fontFamily: getFonts.SEMI_BOLD,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontWeight: 600,
        color: Colors.GREEN,
        fontSize: 16
    },
    circleView: {
        backgroundColor: Colors.WHITE,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        // shadowRadius: 3.84,
        elevation: 7,
        margin: '5%'
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




})