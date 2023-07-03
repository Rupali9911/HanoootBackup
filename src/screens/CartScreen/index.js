import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppModal from '../../constant/AppModal'
import EmptyCart from './EmptyCart'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import CartItemCard from './CartItemCard'
import AppButton from '../Components/AppButton'
import Colors from '../../constant/Colors'
import { useIsFocused } from '@react-navigation/native';
import fonts from '../../constant/fonts'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Images from '../../constant/Images'

const CartScreen = (props) => {

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const { cartItems } = useSelector(state => state.cartReducer);

  useEffect(() => {
  }, [isFocused]);

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={`Cart (${cartItems.length} item)`}
        titleComponentStyle={{alignItems: 'flex-start'}}
        showRightIcon
        rightIcon={
          <Image
              source={Images.Wishlist}
              style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: Colors.BLACK
              }}
          />
      }
        // titleContainerStyle={{margin: '5%'}}
      />
      {/* <View
        // style={{flex: 1}}
      > */}
        {
          cartItems.length > 0
            ?
            <CartItemCard CART={cartItems} />
            :
            <EmptyCart />
        }
      {/* </View> */}

      {
        cartItems.length > 0 &&
        <View style={styles.buttonContainer}>
          <AppButton
            label={'Proceed Checkout'}
            onPress={() => navigation.navigate('CheckoutScreen')}
          />
        </View>
      }
    </AppBackground>

  )
}

export default CartScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: '2%',
    // zIndex: -1
  },
})
