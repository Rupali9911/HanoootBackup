import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { wp } from '../../constant/responsiveFunc'
import { DataTable } from 'react-native-paper';
import ProductCounter from '../../constant/ProductCounter';
import fonts from '../../constant/fonts';
import { translate } from '../../utility';
import { getFonts } from '../utils';


const CartItemQuantity = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{translate('common.qty')} : </Text>
      <ProductCounter
        getCountValue={(val) => props.getCount(val)}
        productId={props.productId}
        onIncPressed={(val) => props.onIncrement(val)}
        noOfQty={props.quantity}

      />
      <TouchableOpacity
        onPress={props.onRemovePress}
      >
        <Text style={[styles.Text, { color: Colors.themeColor }]}>{translate('common.remove')}</Text>
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
    // fontWeight: 700,
    fontFamily: getFonts.BOLD,
    letterSpacing: 0.5
  }
})