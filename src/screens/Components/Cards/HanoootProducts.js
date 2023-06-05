import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors';
import { productCollection } from '../../../constant/DemoArray';
import fonts from '../../../constant/fonts';
import ProductList from './ProductList';

const HanoootProducts = (props) => {

  return (
    <View style={[styles.mainContainer, props.mainContStyle]}>
            <Text style={styles.title}>{props.title}</Text>
            <ProductList  Data={productCollection} imgContStyle={{padding: 5}} TextViewStyle={{ alignItems: 'center'}}/>
            <ProductList  Data={productCollection}  imgContStyle={{padding: 5}} TextViewStyle={{ alignItems: 'center'}}/>
        </View>
  )
}

export default HanoootProducts;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: Colors.LightBlue,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        lineHeight: 22,
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold
    },
})