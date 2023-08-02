import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constant/Colors'
import Images from '../constant/Images'
import fonts from '../constant/fonts'
import { hp, wp, SIZE } from '../constant/responsiveFunc'
import { LikeImage, ExpressView } from '../constant/ListConstant'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeWishlistItem } from '../screens/Store/actions/wishlistActions'


const ListView = (props) => {
    const {
        centerImage,
        productName,
        price,
        discount,
        averageRating,
        noOfReview
      } = props;

    // console.log('averageRating : ', averageRating,noOfReview)

    const [isLiked, setLiked] = useState(false);
    const dispatch = useDispatch();

    const { item } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.ProductListContainer, props.ViewContStyle]}
            onPress={() => navigation.navigate('ProductDetail', { item: item })}
        >

            <View style={styles.topLine}>
                {
                    props.isExpress && <ExpressView />
                }
                {
                    props.isLike ?
                        <LikeImage
                            onPress={() => {
                                setLiked(!isLiked);
                                !isLiked ? dispatch(addToWishlist(item)) : dispatch(removeWishlistItem(item));
                            }}
                            imgStyle={{ tintColor: isLiked ? Colors.RED : Colors.BLACK }}
                        /> :
                        props.isCheckBox ?
                            <CheckBox
                                onClick={() => {
                                    toggleChecked(item.id);
                                }}
                                isChecked={isChecked(item.id)}
                                checkBoxColor={Colors.themeColor}
                                uncheckedCheckBoxColor={Colors.GRAY}
                            /> : null
                }
            </View>
            <View style={[styles.imageContainer, props.imgContStyle]}>
                <Image
                    source={{uri: centerImage ? centerImage : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png'}}
                    style={[styles.productImg, props.imgStyle]}
                />
            </View>
            <View style={[styles.textView, props.TextViewStyle]}>
                {
                    props.isPriceButton &&

                    <View style={styles.priceBtnView}>
                        <Text style={styles.priceBtnText}>{'50% Off'}</Text>
                    </View>

                }
                <Text style={styles.productName} numberOfLines={2}>{productName}</Text>

                {
                    price && <Text style={[styles.price, props.TotalPriceStyle]}>{price}</Text>
                }


                {
                    discount &&
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{discount} </Text>
                        {props.isDiscountPercent && <Text style={styles.ProductDiscPercent} numberOfLines={1}>{discount}</Text>}
                    </View>
                }

                {
                    props.PriceInGreen && <Text style={[styles.price, { color: Colors.PRICEGREEN }]}>{item.price}</Text>
                }


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
    )
}

export default ListView

const styles = StyleSheet.create({
    ProductListContainer: {
        marginVertical: wp('2'),
        marginHorizontal: wp('2'),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        borderRadius: SIZE(10),

        elevation: 5,
        backgroundColor: 'white',
        paddingVertical: SIZE(15),
        paddingHorizontal: SIZE(10),
        verticalAlign: 'top',
        overflow: 'hidden',
    },
    textView: {
        marginTop: SIZE(20),
        // maxWidth: wp(35)
    },
    price: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
    },
    imageContainer: {
        alignSelf: 'center',
        // padding: 10
    },
    discountPrice: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    topLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZE(20)
    },
    productImg: {
        height: SIZE(70),
        width: SIZE(70),
        resizeMode: 'contain'
    },
    productName: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.5,
        fontWeight: 500,
        // backgroundColor: 'red'
        // maxWidth: wp(35)
    },
    productDiscountPrice: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    ProductDiscPercent: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
        color: Colors.PRICEGREEN
    },
    rating: {
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 11,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontWeight: 800
    },
    noOfReview: {
        fontSize: 11,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500
    },
    ratingImg: {
        height: SIZE(12), width: SIZE(12), resizeMode: 'contain',
        width: wp('3%')
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
        fontFamily: fonts.VisbyCF_Demibold,
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