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
import { capitalizeFirstLetter } from '../utils';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SVGS from '../../constant/Svgs';

const { HeartIconActive, HeartIcon, ShareIcon } = SVGS



const ProductDetailCard = (props) => {
    const [isLike, setLike] = useState(props?.isItemLiked)
    const { carouselData, title, avgRating, noOfReview, price, discount, categoryName, isItemLiked, productLink } = props;


    const addToWishlistProduct = async () => {
        try {
            await addToWishlistAPICall(props.productId);
            setLike(!isLike);
        }
        catch (error) {
            console.log('Error from add to wishlist API api ', error)
        }
    }


    const onShare = async () => {
        let productName = title
        let productUrl = productLink
        try {
           const result = await Share.share({
              title: 'Product Detail',
              url: productUrl,
              message: productName + ' ' + productUrl,
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
     };


    const ShareButton = () => {
        return (
            <View style={[styles.circleView, props.contStyle]}>
                <TouchableOpacity
                    onPress={() => onShare()}
                >
                    {/* <Image
                        source={Images.ShareIcon}
                        style={[{ height: 20, width: 20, resizeMode: 'center', tintColor: Colors.GRAY2}, props.imageStyle]}
                    /> */}
                    <ShareIcon />
                </TouchableOpacity>
            </View>
        )
    }

    const WishlistButton = (props) => {
        return (
            // <View style={[styles.circleView, props.contStyle]}>
            //     <TouchableOpacity
            //         onPress={props.onPress}
            //     >
            //         <Image
            //             source={props.Image}
            //             style={[{ height: 20, width: 20, resizeMode: 'center', tintColor: Colors.GRAY}, props.imageStyle]}
            //         />
            //     </TouchableOpacity>
            //     <HeartIconActive  />
            // </View>


            <View style={[styles.circleView, props.contStyle]}>
                <TouchableOpacity
                    onPress={addToWishlistProduct}
                >
                    {
                        isLike ? <HeartIconActive /> : <HeartIcon />
                    }

                </TouchableOpacity>
                {/* <HeartIconActive  /> */}
            </View>

        )
    }


    const RatingAndReview = useCallback(() => {
        const starRating = 2.5; // 3.5-star rating
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < avgRating) {
                stars.push(
                    <Image
                        key={i}
                        style={{ width: 10, height: 10, resizeMode: 'contain' }}
                        source={Images.star}
                    />
                );
            } else {
                stars.push(
                    <Image
                        key={i}
                        style={{ width: 10, height: 10, resizeMode: 'contain', tintColor: Colors.GRAY }}
                        source={Images.star}
                    />
                );
            }
        }


        // return stars;
        return (
            // <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            //     {stars}
            //     <Text style={{
            //         fontSize: 11,
            //         lineHeight: 21,
            //         letterSpacing: 0.5,
            //         fontFamily: fonts.VISBY_CF_REGULAR,
            //         fontWeight: 500
            //     }}>{`(${noOfReview})`}</Text>
            // </View>
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
                    fontFamily: fonts.VISBY_CF_REGULAR,
                    fontWeight: 500
                }}>{`(${noOfReview})`}</Text>
            </View >

            //             <AirbnbRating
            //   count={11}
            //   reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
            //   defaultRating={11}
            //   size={20}
            // />

        );
    }, [])

    const renderText = (val) => {
        if(val.includes('-')){
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
                    {/* <Rating />
                     */}
                    <RatingAndReview />
                </View>

                <Text style={styles.productName} numberOfLines={2}>{title}</Text>

                <View style={styles.yellowLineView}>
                    <View style={styles.logoView}>
                        <Image
                            source={Images.Logo}
                            style={styles.logoStyle}
                        />
                        <Text style={styles.choiceTextStyle}>Choice</Text>
                    </View>
                    <Text style={styles.forTextStyle}>{renderText(props?.title)}</Text>
                </View>
            </View>
            <Separator />
            <ProductImageCarousel
                // data={carouselData}
                data={carouselData}
            />
            <Separator />


            <View style={styles.iconCotainer}>
                {/* <ShareWishlistView Image={isLike ? Images.CartImage : Images.Wishlist} onPress={addToWishlistProduct}  /> */}
                {/* <ShareWishlistView Image={Images.ShareIcon} /> */}
                {/* <ShareWishlistView /> */}
                <WishlistButton />
                <ShareButton />
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.firstLineView}>

                    <View style={styles.textView}>
                        <Text style={styles.totalPrice}>{price}</Text>
                        <Text style={styles.inclusiveTax}>(Inclusive of VAT)</Text>
                    </View>
                    <ExpressView />
                </View>
                {/* <View style={styles.textView}>
                    <Text style={styles.discountPrice}>{price}</Text>
                    <Text style={styles.discountPercent}>{props.PricePercentOff}</Text>
                </View> */}
                <Text style={styles.discountPercent}>{'Free Shipipng'}</Text>
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
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.themeColor
    },
    productName: {
        fontWeight: 700,
        lineHeight: 21,
        fontFamily: fonts.VisbyCF_Bold,
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
        fontFamily: fonts.VisbyCF_Demibold,
        color: Colors.YELLOW
    },
    forTextStyle: {
        alignSelf: 'center',
        left: 10,
        fontFamily: fonts.VisbyCF_Medium,
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
        fontFamily: fonts.VisbyCF_Bold, lineHeight: 23, letterSpacing: 0.5, fontWeight: 700, fontSize: 18
    },
    inclusiveTax: {
        fontFamily: fonts.VisbyCF_Medium, lineHeight: 23, letterSpacing: 0.5, fontWeight: 400, fontSize: 10, color: Colors.PRICEGRAY
    },
    discountPrice: {
        fontFamily: fonts.VisbyCF_Demibold,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontWeight: 600,
        color: Colors.GRAYDARK,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 18
    },
    discountPercent: {
        fontFamily: fonts.VisbyCF_Demibold,
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
    }




})