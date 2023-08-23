import { Image, StyleSheet, Text,  View } from 'react-native'
import React, { } from 'react'
import Colors from '../../constant/Colors';
import { hp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
import ProductCounter from '../../constant/ProductCounter';

const ProductQuantity = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.qtyText}>Qty : </Text>
            <View style={styles.buttonWithCounter}>
                <ProductCounter 
                getCountValue={(val) => {props.getNoOfQty(val)}}
                productId={props.productId} 
                />
            </View>
        </View>
    )
}

export default ProductQuantity;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 11,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: hp('1%')
    },
    buttonView: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        backgroundColor: Colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContent: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    qtyText: {
        fontWeight: 500,
        fontFamily: fonts.VisbyCF_Medium
    },
    buttonWithCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    }
})