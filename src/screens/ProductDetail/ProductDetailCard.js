import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import fonts from '../../constant/fonts';
import Rating from './rating';
import Images from '../../constant/Images';
import ProductImageCarousel from './ProductImageCarousel';
import WishList from './WishList';
import ExpressView from '../../constant/ExpressView';

const ProductDetailCard = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.brandName}>
                    Apple Store
                </Text>
                <Rating />
            </View>

            <Text style={styles.productName} numberOfLines={2}>Apple iPad  10.2 - inch Bionic chip rose (4th Generation)</Text>

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

            <View style={styles.separator} />
            <ProductImageCarousel />
            <View style={styles.separator} />

            <View style={{ right: 50, position: 'absolute', top: 150 }}>
                <WishList />
            </View>

            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Text style={{ fontFamily: fonts.VisbyCF_Bold, lineHeight: 23, letterSpacing: 0.5, fontWeight: 400, fontSize: 18 }}>$5,00.00</Text>
                    <Text style={{ fontFamily: fonts.VisbyCF_Medium, lineHeight: 23, letterSpacing: 0.5, fontWeight: 400, fontSize: 10 , color: Colors.PRICEGRAY}}>(Inclusive of VAT)</Text>
                    </View>
                    <ExpressView />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Text style={{ 
                        fontFamily: fonts.VisbyCF_Demibold,
                        lineHeight: 21,
                        letterSpacing: 0.5,
                        fontWeight: 600,
                        color: Colors.GRAYDARK,
                        textDecorationLine: 'line-through', 
                        textDecorationStyle: 'solid',
                        fontSize: 18}}>$ 5,00.00</Text>
                    <Text style={{fontFamily: fonts.VisbyCF_Demibold,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    fontWeight: 600,
                    color: Colors.GREEN,
                    fontSize: 16
                    }}>10% Off</Text>
                </View>
            </View>

        </View>
    )
}

export default ProductDetailCard;

const styles = StyleSheet.create({
    mainContainer: {
        width: wp(100),
        backgroundColor: Colors.WHITE,
        padding: 10,
        paddingBottom: 20,
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
        height: 30,
        width: '100%',
        backgroundColor: 'rgba(255, 205, 26, 0.15)',
        flexDirection: 'row',
        marginVertical: 10
    },
    logoView: {
        backgroundColor: Colors.themeColor,
        height: 30,
        width: '20%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    logoStyle: {
        height: 15,
        width: 15,
        left: 5,
        resizeMode: 'contain'
    },
    choiceTextStyle: {
        fontFamily: fonts.VisbyCF_Demibold,
        color: Colors.YELLOW
    },
    forTextStyle: {
        alignSelf: 'center',
        left: 10
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        width: wp(95)
    }



})