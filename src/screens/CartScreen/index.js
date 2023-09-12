import { StyleSheet, View } from 'react-native'
import React, { useEffect, useCallback } from 'react'
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
import { getItemsFromCart, cartLoadingStart, cartItemReset, getCoupon } from '../Store/actions/cartAction'
import Loader from '../../constant/Loader'
import EmptyDetailScreen from '../../Components/EmptyDetailScreen'
import { wp } from '../../constant/responsiveFunc'

const CartScreen = (props) => {

  const screen = props?.route?.params?.screen;

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isCartDataLoading, cartItems, cartPageNo, couponSucess } = useSelector(state => state.cartReducer);


  useEffect(() => {
    dispatch(cartLoadingStart(true))
    dispatch(cartItemReset())
    getCartedProducts(1)


    dispatch(getCoupon());

    // dispatch(cartDataLPageChange(1));

  }, [isFocused]);

  const getCartedProducts = useCallback(page => {
    dispatch(getItemsFromCart(page));
  }, []);

  console.log('Here is our coupon : ', couponSucess)


  return (
    <>
      <AppBackground>
        <AppHeader
          showBackButton={screen ? true : false}
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
              <EmptyDetailScreen
                image={Images.CartImage}
                title={'Your Hanoot Cart is empty'}
                description={'Start adding items you love to your wishlist by tapping on the heart icon!'}
                buttonLabel={'Start Shopping'}
                imgStyle={{
                  width: wp(73)
                }}
                onpress={() => navigation.navigate('HomeTab')}
              />
        }
        {
          cartItems?.length !== 0 && !isCartDataLoading &&
          <View style={styles.buttonContainer}>
            <AppButton label={'Proceed Checkout'}
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
})
