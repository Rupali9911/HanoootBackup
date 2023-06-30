import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import fonts from '../../constant/fonts';
import Rating from './rating';
import Images from '../../constant/Images';
import ProductImageCarousel from './ProductImageCarousel';
import { ExpressView } from '../../constant/ListConstant';
import Separator from '../../constant/Separator';

const ProductDetailCard = (props) => {


//    const items =  [
//         {
//             "name": "Apple iPhone 11 Pro Max",
//             "price": 1299.00,
//             "quantity": 1,
//             "color": "Midnight Green"
//         },
//         {
//             "name": "Apple iPad Pro",
//             "price": 999.00,
//             "quantity": 1,
//             "color": "Space Gray"
//         },
//         {
//             "name": "Apple Watch Series 5",
//             "price": 399.00,
//             "quantity": 1,
//             "color": "Silver"
//         },
//         {
//             "name": "Apple AirPods Pro",
//             "price": 249.00,
//             "quantity": 1,
//             "color": "White"
//         },
//         {
//             "name": "Apple MacBook Pro",
//             "price": 2199.00,
//             "quantity": 1,
//             "color": "Space Gray"
//         }
//     ]

const CircleView = (props) => {
    return (
      <View style={[styles.circleView, props.contStyle]}>
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Image
            source={props.Image}
            style={{ height: 20, width: 20, tintColor: Colors.GRAY, resizeMode: 'center' }}
          />
        </TouchableOpacity>
      </View>
      
    )
  }


    return (
        <View style={styles.mainContainer}>
            <View style={{paddingHorizontal: 20}}>
            <View style={styles.topLinewithRating}>
                <Text style={styles.brandName}>
                    Apple Store
                </Text>
                <Rating />
            </View>

            <Text style={styles.productName} numberOfLines={2}>{props.ProductName}</Text>

            <View style={styles.yellowLineView}>
                <View style={styles.logoView}>
                    <Image
                        source={Images.Logo}
                        style={styles.logoStyle}
                    />
                    <Text style={styles.choiceTextStyle}>Choice</Text>
                </View>
                <Text style={styles.forTextStyle}>For "iPad-rose"</Text>
            </View>
            </View>
            <Separator />
            <ProductImageCarousel ProductImage={props.Image}/>
            <Separator />


            <View style={styles.wishListCotainer}>
                <CircleView Image={Images.Wishlist}/>
                <CircleView Image={Images.ShareIcon}/>
            </View>

            <View style={{paddingHorizontal: 20}}>
                <View style={styles.firstLineView}>
                    
                    <View style={styles.textView}>
                        <Text style={styles.totalPrice}>{props.TotalPrice}</Text>
                    <Text style={styles.inclusiveTax}>(Inclusive of VAT)</Text>
                    </View>
                    <ExpressView />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.discountPrice}>{props.DiscountPrice}</Text>
                    <Text style={styles.discountPercent}>{props.PricePercentOff}</Text>
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
        marginVertical: hp('2%')
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
        paddingHorizontal: '1%'
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
        fontWeight: 500
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        width: wp(95)
    },
    topLinewithRating: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    wishListCotainer: {
        right: 10, position: 'absolute', top: 200 
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
        fontFamily: fonts.VisbyCF_Medium, lineHeight: 23, letterSpacing: 0.5, fontWeight: 400, fontSize: 10 , color: Colors.PRICEGRAY
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