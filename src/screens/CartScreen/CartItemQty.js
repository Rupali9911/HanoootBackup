import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { wp } from '../../constant/responsiveFunc'
import { DataTable } from 'react-native-paper';
import ProductCounter from '../../constant/ProductCounter';
import fonts from '../../constant/fonts';


const CartItemQuantity = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Qty : </Text>
      <ProductCounter
        getCountValue={(val) => props.getCount(val)}
        productId={props.productId}
        onIncPressed={() => { console.log('incremented') }}
      // getCountClickData={data => props.getData(data)}
      />
      <TouchableOpacity
        onPress={props.onRemovePress}
      >
        <Text style={[styles.Text, { color: Colors.themeColor }]}>REMOVE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartItemQuantity;

const styles = StyleSheet.create({
  container: {
    borderTopColor: Colors.GRAY,
    borderBottomColor: Colors.GRAY,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: wp(100),
    flexDirection: 'row',
    // justifyContent: 'center'
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '2%'

  },
  Text: {
    fontWeight: 700,
    fontFamily: fonts.VisbyCF_Bold,
    letterSpacing: 0.5
  }
})