import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors';
import { hp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';

const ProductDelivery = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{'Sunday, 5 February.'}</Text></Text>
            <Text style={styles.text}>Order Within  <Text style={{ color: Colors.BLACK }}>{'8hr 40 mins.'}</Text></Text>
            <Text style={[styles.text, { color: Colors.themeColor }]}>{'Bagdad - Sign In for better delivery estimate'}</Text>
        </View>
    )
}

export default ProductDelivery;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, borderColor: Colors.GRAY, width: '90%', borderRadius: 8, marginVertical: hp('1%'), alignSelf: 'center', padding: 10
    },
    text: {
        color: Colors.PRICEGRAY, fontFamily: fonts.VISBY_CF_REGULAR, fontSize: 12, fontWeight: 600
    },
    link: {
        color: Colors.themeColor,
        fontSize: 12,
        fontFamily: fonts.VISBY_CF_REGULAR,
        // fontWeight: 
    }
})