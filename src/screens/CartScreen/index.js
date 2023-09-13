import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
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
import { getItemsFromCart, cartLoadingStart, cartItemReset, cartDataLPageChange } from '../Store/actions/cartAction'
import Loader from '../../constant/Loader'
import { showErrorToast } from '../../Components/universal/Toast'
import EmptyDetailScreen from '../../Components/EmptyDetailScreen'
import { wp } from '../../constant/responsiveFunc'
import { translate } from '../../utility'
const CartScreen = (props) => {

  const screen = props?.route?.params?.screen;

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const { isCartDataLoading, cartItems, cartItemFail, cartPageNo, cartTotalCount, cartData } = useSelector(state => state.cartReducer);
  const userData = useSelector((state) => state.userReducer.userData);


  useEffect(() => {
    dispatch(cartLoadingStart(true))
    dispatch(cartItemReset())
    // dispatch(getItemsFromCart())
    getCartedProducts(1)
    // dispatch(cartDataLPageChange(1));

  }, [isFocused]);

  const getCartedProducts = useCallback(page => {
    dispatch(getItemsFromCart(page));
  }, []);


  return (
    <>
      <AppBackground>
        <AppHeader
          // showBackButton
          showBackButton={screen ? true : false}
          title={`${translate('common.cart')} (${cartItems.length ? cartItems.length : 0} ${translate('common.item')})`}
          showLikeIcon
          titleComponentStyle={{ alignItems: 'flex-start' }}
        />
        {
          isCartDataLoading && cartPageNo === 1 ?
            <Loader /> :
            cartItems?.length !== 0 ?
              <CartItemCard />
              :
              <EmptyDetailScreen
                image={Images.CartImage}
                title={translate('common.cartEmpty')}
                description={translate('common.startAddingItems')}
                buttonLabel={translate('common.startshopping')}
                imgStyle={{
                  width: wp(73)
                }}
                onpress={() => navigation.navigate('HomeTab')}
              />
        }
        {
          cartItems?.length !== 0 && !isCartDataLoading &&
          <View style={styles.buttonContainer}>
            <AppButton label={translate('common.proceedcheckout')}
              onPress={() => navigation.navigate('CheckoutScreen')}
            />
          </View>
        }
      </AppBackground>
    </>



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
  //   bottomButtonContainer: {
  //     position: 'absolute',
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: Colors.WHITE,
  // },
})
