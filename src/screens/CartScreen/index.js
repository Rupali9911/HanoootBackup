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
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../constant/Images'
import { getItemsFromCart, cartLoadingStart, cartItemReset } from '../Store/actions/cartAction'
import Loader from '../../constant/Loader'

const CartScreen = (props) => {

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const { isCartDataLoading, cartItems, cartItemFail, cartPageNo, cartTotalCount, cartData } = useSelector(state => state.cartReducer);

  useEffect(() => {
    dispatch(cartItemReset())
    dispatch(cartLoadingStart(true))
    dispatch(getItemsFromCart())
  }, [isFocused]);


  console.log('this is cart data : ', cartData)
  
  const renderNoDataFound = () => {
    return (
      <View style={styles.sorryMessageCont}>
        <Text style={styles.sorryMessage}>{'No data found'}</Text>
      </View>
    );
  }

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={`Cart (${cartItems.length ? cartItems.length : 0} item)`}
        showLikeIcon
        titleComponentStyle={{ alignItems: 'flex-start' }}
      />
      {
        isCartDataLoading && cartPageNo === 1 ?
          <Loader /> :
          cartItems?.length !== 0 ?
              <CartItemCard />
            :
              renderNoDataFound()
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
  sorryMessageCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sorryMessage: {
    fontSize: 15,
    fontFamily: fonts.VisbyCF_Demibold,
  },
})
