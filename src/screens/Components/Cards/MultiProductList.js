import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import { wp } from '../../../constant/responsiveFunc'
import ProductList from './ProductList'
import { productCollection, ProductListData } from '../../../constant/DemoArray';

const MultiProductList = (props) => {

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <ProductList
                Data={ProductListData}
                imgContStyle={styles.productImgCont}
                DisCountPrice
                PriceInGreen
            />
            <ProductList
                Data={ProductListData}
                imgContStyle={styles.productImgCont}
                DisCountPrice
                PriceInGreen
            />
        </View>
    )
}

export default MultiProductList;

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 25,
        paddingTop: 25,
        backgroundColor: Colors.WHITE,
        borderRadius: 4,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.10,
        // elevation: 7,
        width: wp(100),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '2%'
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5,
        lineHeight: 22,
        alignSelf: 'flex-start'
    },
    productImgCont: {
        alignSelf: 'center',
        padding: 22,
        borderWidth: 1,
        borderColor: Colors.GRAYRGBA,
        borderRadius: 10
    }

})