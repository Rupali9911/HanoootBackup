import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors';
import { hp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
import { estimatedDelivery } from '../utils';
import { translate } from '../../utility';

const ProductDelivery = (props) => {
    const { data } = props;

    const getTime = (val) => {
        let newStr = val.replace(/-/g, "").trim();
        const time = newStr.split(' ');

        return `${time[0]}${translate('common.hours')} ${time[1]}${translate('common.minutes')}`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{estimatedDelivery(data?.delivery)}</Text></Text>
            <Text style={styles.text}>Order Within  <Text style={{ color: Colors.BLACK }}>{data?.time ? getTime(data?.time) : null}</Text></Text>
            <Text style={[styles.text, { color: Colors.themeColor }]}>{`${data?.city} - Sign In for better delivery estimate`}</Text>
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