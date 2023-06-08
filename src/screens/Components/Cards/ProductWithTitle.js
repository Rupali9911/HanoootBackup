import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import ProductHeader from './ProductHeader'
import { hp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import { electronicsArr } from '../../../constant/DemoArray'

const ProductwithTitle = (props) => {

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.Container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        
      </View>
    );
  }

  const keyExtractor = (item, index) => {
    return `_${index}`;
  };

  return (
    <>
      <ProductHeader title={props.title} />
      <FlatList
        data={electronicsArr}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default ProductwithTitle;

const styles = StyleSheet.create({

  Container: {
    width: 100,
    height: hp(16),
    padding: 20,
    backgroundColor: Colors.WHITE,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.5,
    fontWeight: 500,
    fontFamily: fonts.VisbyCF_Medium
  },
  image: {
    height: 75,
    width: 65,
    resizeMode: 'contain'
  },

})