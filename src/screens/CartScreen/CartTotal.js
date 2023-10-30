import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import Separator from '../../constant/Separator'
import fonts from '../../constant/fonts'
import { translate } from '../../utility'
import { formattedPrice, getFonts } from '../utils'

const CartTotal = (props) => {
    return (
        <View style={styles.mainCont}>
            <View style={styles.container}>
                <Text style={styles.Text}>{translate('common.subtotal')}({props.total_Item} {translate('common.itemCap')})</Text>
                <Text style={[styles.Text, { fontWeight: 'bold' }]}>{`${formattedPrice(props?.total_cost)} ${translate('common.currency_iqd')}`}</Text>
            </View>
            {/* <View style={styles.container}>
                <Text style={styles.Text}>{translate('common.hanoootdiscount')}</Text>
                <Text style={[styles.Text, { fontWeight: 'bold' }]}>{`${formattedPrice(props?.total_hanooot_discount)} ${translate('common.currency_iqd')}`}</Text>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.Text}>{translate('common.coupondiscount')}</Text>
                <Text style={[styles.Text, { fontWeight: 'bold', color: Colors.GREEN }]}>{`0 ${translate('common.currency_iqd')}`}</Text>
            </View>
            <Separator />
            <View style={styles.container}>
                <Text style={[styles.Text, { fontWeight: 'bold', fontSize: 16 }]}>{translate('common.total')} </Text>
                <Text style={[styles.Text, { fontWeight: 'bold', fontSize: 18 }]}>{`${formattedPrice(props?.total_payable_cost)} ${translate('common.currency_iqd')}`}</Text>
            </View>
        </View >
    )
}

export default CartTotal;

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2%'
    },
    Text: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        letterSpacing: 0.5,


    }
})