import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors';
import { productCollection, ProductListData } from '../../../constant/DemoArray';
import fonts from '../../../constant/fonts';
import ProductList from './ProductList';
import { getFonts } from '../../utils';

const HanoootProducts = (props) => {

    return (
        <View style={[styles.mainContainer, props.mainContStyle]}>
            <Text style={styles.title}>{props.title}</Text>
            <ProductList
                Data={ProductListData}
                imgContStyle={{ padding: 5 }}
                TextViewStyle={{ alignItems: 'center', textAlign: 'center' }}
                DisCountPrice
                PriceInGreen
            // ViewContStyle={{margin: 10}}
            />
            <ProductList
                Data={ProductListData}
                imgContStyle={{ padding: 5 }}
                TextViewStyle={{ alignItems: 'center' }}
                DisCountPrice
                PriceInGreen
            // ViewContStyle={{margin: 10}}
            />
        </View>
    )
}

export default HanoootProducts;

const styles = StyleSheet.create({
    mainContainer: {
        padding: '5%',
        backgroundColor: Colors.LightBlue,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        lineHeight: 22,
        // fontWeight: 700,
        fontFamily: getFonts.BOLD
    },

})