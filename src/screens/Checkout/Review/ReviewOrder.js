import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import ProductHeader from '../../Components/Cards/ProductHeader'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import Separator from '../../../constant/Separator'
import { wp, hp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import { ExpressView } from '../../../constant/ListConstant'
import ProductCounter from '../../../constant/ProductCounter'
import AppButton from '../../Components/AppButton'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { getParticularSelectedAddress } from '../../Store/actions/checkoutAction'
import { getItemsFromCart } from '../../Store/actions/cartAction'
import CartProductCards from '../../../Components/CartedProducts'
import { PlaceOrderAPICall } from '../../../services/apis/OrdersAPI'
import Coupon from '../../CartScreen/Coupon'
import { showInfoToast, showErrorToast } from '../../../Components/universal/Toast'
import { getBuyNowData } from '../../Store/actions/orderAction'
import Loader from '../../../constant/Loader'


const ReviewOrder = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { signleAddressDetail } = useSelector(state => state.checkoutReducer);
  const { isCartDataLoading, cartItems, cartData } = useSelector(state => state.cartReducer);
  const { productQtyIdInfo, isBuyNowButton } = useSelector(state => state.productListReducer);
  const { isProductLoading, Product, ProductData } = useSelector(state => state.orderReducer);


  const [quantity, setQuantity] = useState(productQtyIdInfo?.productQty)

  const isLoading = isBuyNowButton ? isProductLoading : isCartDataLoading;
  const data = isBuyNowButton ? ProductData : cartData;
  const listItems = isBuyNowButton ? Product : cartItems;


  console.log('data , listItems, data', listItems, data)


  useEffect(() => {
    if (isBuyNowButton) {
      dispatch(getBuyNowData(productQtyIdInfo?.productId, productQtyIdInfo?.productQty))
    }
    else {
      dispatch(getItemsFromCart(1));
    }
    dispatch(getParticularSelectedAddress(props.AddressId))
  }, [isFocused])

  console.log('single address detail : ', signleAddressDetail)


  const OrderSummary = () => {
    return (
      <>
        <ProductHeader title={'Order Summary'} />

        <View style={styles.priceViewCont}>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Subtotal (1 item)</Text>
            <Text style={styles.price}>$ {data?.total_cost}</Text>
          </View>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Coupon Discount</Text>
            <Text style={[styles.price, { color: Colors.GREEN }]}>$ 0</Text>
          </View>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Shipping Cost</Text>
            <Text style={styles.price}>$ 0</Text>
          </View>
          <Separator separatorStyle={{ width: wp(90) }} />
          <View style={styles.rowCont}>
            <Text style={styles.TotalPrice}>Total <Text style={{ color: Colors.PRICEGRAY, fontWeight: 500 }}>(Inclusive of VAT)</Text></Text>
            <Text style={styles.TotalPrice}>$ {data?.total_cost}</Text>
          </View>
        </View>
      </>
    );
  }

  const PayDetail = () => {
    return (
      <>
        <ProductHeader title={'Pay With'} RightText={'Change'} onPress={() => props.setScreenType('PAYMENT')} />

        <View style={styles.payCard}>
          <Image source={Images.ZainCash} style={{ height: 40, width: 45 }} />
          <View>
            <Text
              style={styles.payMode}
            >{'ZainCash'}</Text>
            <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay online via Zaincash'}</Text>
          </View>
        </View>
      </>
    );
  }

  const keyExtractor = (item, index) => {
    return index;
  };

  const DeliveryDetail = () => {
    return (
      <>
        <ProductHeader title={'Deliver to'} RightText={'Change'} onPress={() => props.setScreenType('ADDRESS')} />
        <View style={styles.DeliveryCard}>
          <View style={styles.rowCont}>
            <Text style={styles.deliverUserName}>{signleAddressDetail?.name}</Text>
            <View style={styles.deliveryLocation}>
              <Text style={styles.deliveryType}>{signleAddressDetail?.address_type}</Text>
            </View>
          </View>
          <Text style={styles.deliverUserAdd}>{`${signleAddressDetail?.house} ${signleAddressDetail?.building} ${signleAddressDetail?.street}, ${signleAddressDetail?.city}`}</Text>
          <Text style={styles.deliverUserAdd}>{signleAddressDetail?.phone_number}</Text>
        </View>
      </>
    );
  }


  const ReviewItemDetail = ({ item, index }) => {
    return (
      <>
        {/* <ProductHeader title={'Review Item'} />
        <View style={styles.itemReviewCard}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={Images.mobile4} style={styles.reviewItemImage} />
            </View>
            <View style={{ gap: 5 }}>
              <Text style={styles.itemName} numberOfLines={2}>{'Apple iPad  10.2 - inch Bionic chip rose (4th Generation)'}</Text>
              <Text style={styles.itemDetail}>Memory : <Text style={styles.grayColor}>128 GB</Text></Text>
              <Text>Color : <Text style={styles.grayColor}>Purple Black</Text></Text>
              <Text style={[styles.itemDetail, styles.grayColor]}>Estimated Delivery on <Text style={styles.blackColor}>{'Sunday, 5 February.'}</Text></Text>
              <Text style={[styles.itemDetail, styles.grayColor]}>Order Within  <Text style={styles.blackColor}>{'8hr 40 mins.'}</Text></Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemDetail}>Fullfilled by <Text>Hanooot </Text></Text>
                <ExpressView containerStyle={{ width: '20%', marginHorizontal: '1%' }} />
              </View>
              <Text style={styles.itemDetail} >Sold by <Text style={styles.themeColor}>Ecom Nation</Text></Text>
              <Text style={styles.itemName} >{'$ 5,00.00'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemQuantityView}>
          <Text style={styles.quantityText}>Qty : </Text>
          <ProductCounter />
        </View> */}

        <CartProductCards
          item={item}
          getCount={(val) => { console.log('check quantiti : ', productQtyIdInfo?.productId, val), setQuantity(Number(val)) }}
          onIncrement={(data) => {
            if (data?.success === true) {
              // dispatch(getItemsFromCart(1))

              if (isBuyNowButton) {
                dispatch(getBuyNowData(productQtyIdInfo?.productId, quantity))
              }
              else {
                dispatch(getItemsFromCart(1));
              }
            }
          }}
        />
      </>
    );
  }

  const OnPlaceOrder = async () => {
    try {

      const data =
        isBuyNowButton ?
          {
            address_id: props.AddressId,
            product_id: productQtyIdInfo?.productId,
            quantity: quantity,
            payment_method: "zen cash"
          }
          :
          {
            address_id: props.AddressId,
            payment_method: "zen cash"
          }
      const orderPlaced = await PlaceOrderAPICall(data);
      console.log('orderPlaced', orderPlaced)


      if (orderPlaced?.success) {
        showInfoToast('SUCCESS', orderPlaced?.message)

        navigation.navigate('SuccessScreen')
      }
      else {
        showErrorToast('Sorry!!', orderPlaced?.message)
      }
      // navigation.navigate('OtpVerifySuccess')
    }
    catch (error) {
      console.log('error from place order', error)
    }
  }

  const CouponDetail = () => {
    return (
      <>
        <ProductHeader title={'Coupon'} />
        <Coupon />
      </>
    )
  }


  return (
    // <AppBackground>
    //   <AppHeader />
    <>
      {
        isLoading ?
          <Loader />
          :
          <>
            <ScrollView style={{ marginBottom: hp(5) }}>

              {CouponDetail()}
              {OrderSummary()}
              {PayDetail()}
              {DeliveryDetail()}
              <ProductHeader title={'Review Item'} />
              {
                listItems?.length > 0
                  ?
                  <FlatList
                    style={{ marginBottom: hp(5) }}
                    data={listItems}
                    renderItem={ReviewItemDetail}
                    keyExtractor={keyExtractor}
                    scrollEnabled={false}
                  />
                  :
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.priceLeftText}>{'No Item Found'}</Text>
                  </View>
              }


            </ScrollView>
            <View style={styles.bottomButtonCont}>
              <AppButton
                label={'Place Your Order'}
                onPress={OnPlaceOrder}
              />
            </View>
          </>
      }

    </>
    // </AppBackground>
  )
}

export default ReviewOrder

const styles = StyleSheet.create({
  priceViewCont: {
    backgroundColor: Colors.WHITE,
    padding: 20
  },
  rowCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 5
  },
  priceLeftText: {
    fontFamily: fonts.VisbyCF_Medium,
    fontWeight: 500,
    letterSpacing: 0.5,
    lineHeight: 21
  },
  price: {
    fontFamily: fonts.VisbyCF_Bold,
    letterSpacing: 0.5,
    fontWeight: 700,
    lineHeight: 21

  },
  TotalPrice: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0.5,
    fontFamily: fonts.VisbyCF_Bold
  },
  payCard: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  payMode: {
    fontFamily: fonts.VisbyCF_Demibold,
    fontWeight: 600,
    letterSpacing: 0.5,
    lineHeight: 21,
    fontSize: 16
  },
  payModeDesc: {
    fontFamily: fonts.VisbyCF_Medium,
    fontWeight: 500,
    letterSpacing: 0.5,
    color: Colors.PRICEGRAY
  },

  DeliveryCard: {
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  buttonText: {
    fontFamily: fonts.VisbyCF_Demibold,
    fontWeight: 600,
    color: Colors.themeColor
  },
  deliverUserName: {
    fontFamily: fonts.VisbyCF_Demibold,
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: 0.5
  },
  deliverUserAdd: {
    fontFamily: fonts.VisbyCF_Medium,
    fontWeight: 500,
    color: Colors.PRICEGRAY,
    letterSpacing: 0.5,
    lineHeight: 19
  },
  deliveryLocation: {
    backgroundColor: Colors.LIGHTBLUE1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30
  },
  deliveryType: {
    color: Colors.WHITE,
    fontFamily: fonts.VisbyCF_Bold
  },

  itemReviewCard: {
    backgroundColor: Colors.WHITE,
    padding: 20,

    // flexDirection: 'row',
  },
  reviewItemImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    margin: '2%'
  },
  itemName: {
    fontWeight: 700,
    fontFamily: fonts.VisbyCF_Bold,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.5,
    maxWidth: '90%'
  },
  itemDetail: {
    fontFamily: fonts.VISBY_CF_REGULAR,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.5,
  },

  grayColor: {
    color: Colors.PRICEGRAY
  },
  blackColor: {
    color: Colors.BLACK
  },
  themeColor: {
    color: Colors.themeColor
  },


  itemQuantityView: {
    borderTopColor: Colors.GRAY,
    borderTopWidth: 1,
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    backgroundColor: Colors.WHITE,
    gap: 8,

  },
  quantityText: {
    fontWeight: 700,
    fontFamily: fonts.VisbyCF_Bold,
    letterSpacing: 0.5
  },
  bottomButtonCont: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: '2%'
  },
})