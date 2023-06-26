import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import Separator from '../../constant/Separator'
import fonts from '../../constant/fonts'

const CartTotal = () => {
    return (
        <View style={styles.mainCont}>
            <View style={styles.container}>
                <Text style={styles.Text}>SubTotal(1 Item)</Text>
                <Text style={[styles.Text, { fontWeight: 'bold' }]}>$ 5,00.00</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.Text}>Coupon Discount</Text>
                <Text style={[styles.Text, { fontWeight: 'bold', color: Colors.GREEN }]}>- $ 5.00</Text>
            </View>
            <Separator />
            <View style={styles.container}>
                <Text style={[styles.Text, { fontWeight: 'bold', fontSize: 16 }]}>Total <Text style={{ fontSize: 12, color: Colors.PRICEGRAY }}> (Inclusive of Vat)</Text></Text>
                <Text style={[styles.Text, { fontWeight: 'bold', fontSize: 18 }]}>$ 5,00.00</Text>
            </View>
        </View>
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
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,


    }
})