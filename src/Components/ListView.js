import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import Images from '../constant/Images'
import fonts from '../constant/fonts'
import { hp, wp } from '../constant/responsiveFunc'
import { LikeImage, ExpressView } from '../constant/ListConstant'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';




const ListView = (props) => {
    const {item} = props;
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
                        <LikeImage /> :
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
                        source={item.image}
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
                    <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>



                    {
                        props.TotalPrice && <Text style={[styles.price, props.TotalPriceStyle]}>{item.price}</Text>
                    }


                    {
                        props.DisCountPrice &&
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.productDiscountPrice, props.DisCountPriceStyle]}>{item.discountPrice} </Text>
                            {props.isDiscountPercent && <Text style={styles.ProductDiscPercent} numberOfLines={1}>{item.pricePercentOff}</Text>}
                        </View>
                    }

                    {
                        props.PriceInGreen && <Text style={[styles.price, { color: Colors.PRICEGREEN }]}>{item.price}</Text>
                    }


                    {
                        props.isRating &&

                        <View style={styles.ratingView}>
                            <Text style={styles.rating}>{'4.0'}</Text>
                            <Image source={Images.star} style={styles.ratingImg} />
                            <Text style={styles.ratingVal}>{'(79)'}</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
  )
}

export default ListView

const styles = StyleSheet.create({
    ProductListContainer: {
        backgroundColor: Colors.WHITE,
        width: wp(33),
        padding: 15,
        borderRadius: 10,
        // margin: 10
        marginRight: 8
    },
    textView: {
        top: 10
    },
    price: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontWeight: 700,
    },
    imageContainer: {
        alignSelf: 'center',
        padding: 20
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productImg: {
        height: 70, width: 70, resizeMode: 'contain'
    },
    productName: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.5,
        fontWeight: 500,
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
    ratingVal: {
        fontSize: 11,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 600
    },
    ratingImg: {
        height: 12, width: 12, resizeMode: 'contain'
    },
    ratingView: {
        flexDirection: 'row', alignItems: 'center', gap: 3
    },
    priceBtnView: {
        paddingVertical: 2, paddingHorizontal: 10, backgroundColor: Colors.RED, width: 60, borderRadius: 10, marginVertical: 5
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