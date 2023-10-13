import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors';
import { hp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
import { estimatedDelivery, getFonts } from '../utils';
import { translate } from '../../utility';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProductDelivery = (props) => {
    const { data } = props;

    const navigation = useNavigation();

    const userData = useSelector((state) => state.userReducer.userData);


    const getTime = (val) => {
        let newStr = val.replace(/-/g, "").trim();
        const time = newStr.split(' ');

        return `${time[0]}${translate('common.hours')} ${time[1]}${translate('common.minutes')}`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{translate('common.estimateddeliveryon')} <Text style={{
                color: Colors.BLACK,
                fontFamily: getFonts.BOLD
            }}
            >{estimatedDelivery(data?.delivery)}</Text></Text>
            < Text style={styles.text}>{translate('common.orderwithin')}  <Text style={{
                color: Colors.BLACK,
                fontFamily: getFonts.BOLD
            }}>{data?.time ? getTime(data?.time) : null}</Text></Text>
            <TouchableOpacity onPress={() => { !userData ? navigation.navigate('Login') : null }}><Text style={[styles.text, { color: Colors.themeColor }]}>{`${data?.city} - ${translate('common.signinforbetterdeliveryestimate')}`}</Text></TouchableOpacity>
        </View >
    )
}

export default ProductDelivery;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, borderColor: Colors.GRAY, width: '90%', borderRadius: 8, marginVertical: hp('1%'), alignSelf: 'center', padding: 10
    },
    text: {
        color: Colors.PRICEGRAY, fontFamily: getFonts.REGULAR, fontSize: 12, fontWeight: 600
    },
    link: {
        color: Colors.themeColor,
        fontSize: 12,
        fontFamily: getFonts.REGULAR,
        // fontWeight: 
    }
})