import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import ProductHeader from './ProductHeader'
import { hp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import { electronicsArr } from '../../../constant/DemoArray'
import { getFonts } from '../../utils'

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
    return index;
  };

  return (
    <View style={{}}>
      <ProductHeader title={props.title} rightButtonLabel={'See All'} />
      <FlatList
        data={electronicsArr}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: '5%', marginVertical: '2%' }}
      />
    </View>
  )
}

export default ProductwithTitle;

const styles = StyleSheet.create({

  Container: {
    // width: 100,
    height: hp(16),
    padding: 20,
    backgroundColor: Colors.WHITE,
    marginRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: '2%'
  },
  name: {
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.5,
    fontWeight: 500,
    fontFamily: getFonts.MEDIUM
  },
  image: {
    height: 75,
    width: 65,
    resizeMode: 'contain'
  },

})