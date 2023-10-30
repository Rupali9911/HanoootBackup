import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, BackHandler } from 'react-native'
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
import CartItemCard from '../../CartScreen/CartItemCard'
import { translate } from '../../../utility'
import { formattedPrice, getFonts } from '../../utils'
import CouponDetail from '../../../Components/universal/coupon'


const ReviewOrder = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { signleAddressDetail } = useSelector(state => state.checkoutReducer);
  const { isCartDataLoading, cartItems, cartData } = useSelector(state => state.cartReducer);
  const { productQtyIdInfo, isBuyNowButton } = useSelector(state => state.productListReducer);
  const { isProductLoading, Product, ProductData } = useSelector(state => state.orderReducer);
  const { couponSucess } = useSelector(state => state.cartReducer);



  const [quantity, setQuantity] = useState()
  const [shippingAmount, setShippingAmount] = useState()
  const [couponApplied, setCouponApplied] = useState(false)

  console.log('coupon success', couponApplied)


  let buyNowQty = productQtyIdInfo?.productQty;

  console.log('quansdjfisdfskfisfsdifs: ', quantity)


  const isLoading = isBuyNowButton ? isProductLoading : isCartDataLoading;
  const data = isBuyNowButton ? ProductData : cartData;
  const listItems = isBuyNowButton ? Product : cartItems;

  let shippingCost = signleAddressDetail?.city === 'Baghdad' ? Number(5000) : Number(8000);
  let couponCost = couponApplied ? Number(shippingCost) : Number(0)
  let costAfterApplyCpn = shippingCost - couponCost;

  useEffect(() => {
    shippingCost = signleAddressDetail?.city === 'Baghdad' ? Number(5000) : Number(8000);
    couponCost = couponApplied ? Number(shippingCost) : Number(0)
    costAfterApplyCpn = shippingCost - couponCost;
  }, [couponApplied])
  // let costAfterApplyCpn = 0;

  console.log('costAfterApplyCpn', costAfterApplyCpn)
  useEffect(() => {
    if (isBuyNowButton) {
      dispatch(getBuyNowData(productQtyIdInfo?.productId, buyNowQty))
    }
    else {
      dispatch(getItemsFromCart(1));
    }
    dispatch(getParticularSelectedAddress(props.AddressId))
  }, [isFocused])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Disable the back button functionality here
      return true; // Return true to prevent default behavior (navigating back)
    });

    // Cleanup the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  console.log('single address detail : ', signleAddressDetail)


  const OrderSummary = () => {
    // let shippingCost = signleAddressDetail?.city === 'Baghdad' ? Number(5000) : Number(8000);
    // let couponCost = couponApplied ? Number(shippingCost) : Number(0)
    // let costAfterApplyCpn = shippingCost - couponCost;
    // console.log('costAfterApplyCpn: ', costAfterApplyCpn)
    // setShippingAmount(costAfterApplyCpn)
    // useEffect(() => {
    //   setShippingAmount(costAfterApplyCpn)
    // }, [couponApplied, costAfterApplyCpn])

    return (
      <>
        <ProductHeader title={translate('common.ordersummary')} />

        <View style={styles.priceViewCont}>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>{translate('common.subtotal')} ({listItems?.length} {translate('common.item')})</Text>
            <Text style={styles.price}>{`${formattedPrice(data?.total_cost)} ${translate('common.currency_iqd')}`}</Text>
          </View>
          {/* <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>{translate('common.hanoootdiscount')}</Text>
            <Text style={styles.price}>{`${formattedPrice(data?.total_hanooot_discount)} ${translate('common.currency_iqd')}`}</Text>
          </View> */}
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>{translate('common.shippingcost')}</Text>
            <Text style={styles.price}>{`${formattedPrice(shippingCost)} ${translate('common.currency_iqd')}`}</Text>
          </View>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>{translate('common.coupondiscount')}</Text>
            <Text style={[styles.price, { color: Colors.GREEN }]}>{`- ${formattedPrice(couponCost)} ${translate('common.currency_iqd')}`}</Text>
          </View>
          <Separator separatorStyle={{ width: wp(90) }} />
          <View style={styles.rowCont}>
            <Text style={styles.TotalPrice}>{translate('common.total')} </Text>
            <Text style={styles.TotalPrice}>{`${formattedPrice((isBuyNowButton ? Number(data?.total_cost) : Number(data?.total_payable_cost)) + Number(costAfterApplyCpn))} ${translate('common.currency_iqd')}`}</Text>
          </View>
        </View>
      </>
    );
  }

  const PayDetail = () => {
    return (
      <>
        <ProductHeader title={translate('common.paywith')} rightButtonLabel={translate('common.change')} onPress={() => props.setScreenType('PAYMENT')} />

        {/* <View style={styles.payCard}>
          <Image source={Images.ZainCash} style={{ height: 40, width: 45 }} />
          <View>
            <Text
              style={styles.payMode}
            >{'ZainCash'}</Text>
            <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay online via Zaincash'}</Text>
          </View>
        </View> */}


        <View style={styles.payCard}>
          <Image source={Images.cashOnDelivery} style={{ height: 40, width: 45 }} />
          <View>
            <Text
              style={styles.payMode}
            >{translate('common.cashondelivery')}</Text>
            <Text style={styles.payModeDesc} numberOfLines={2}>{translate('common.paywhenyougetorder')}</Text>
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
        <ProductHeader title={translate('common.deliverto')} rightButtonLabel={translate('common.change')} onPress={() => props.setScreenType('ADDRESS')} />
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
        <CartProductCards
          item={item}
          onIncrement={(data) => {
            if (data?.success === true) {
              // dispatch(getItemsFromCart(1))
              console.log('ReviewItemDetail', item?.product_id, quantity)
              if (isBuyNowButton) {
                console.log('is buy now callled: ', item?.product_id, item?.quantity)
                dispatch(getBuyNowData(item?.product_id, buyNowQty))
              }
              else {
                dispatch(getItemsFromCart(1));
              }
            }
          }}
          getCounterValue={(qty) => { console.log('here is quianity and  set it: ', qty), setQuantity(Number(qty)), buyNowQty = qty }}
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
            quantity: buyNowQty,
            payment_method: "COD",
            shipping_cost: Number(costAfterApplyCpn),
            promocode: couponSucess[0]?.code
          }
          :
          {
            address_id: props.AddressId,
            payment_method: "COD",
            shipping_cost: Number(costAfterApplyCpn),
            promocode: couponSucess[0]?.code
          }
      // console.log('data from order : ', data)
      const orderPlaced = await PlaceOrderAPICall(data);
      // console.log('orderPlaced', orderPlaced)


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

  const CouponInfo = () => {
    return (
      <>
        <ProductHeader title={translate('common.coupan')} />
        {/* <Coupon />
         */}
        <CouponDetail couponEnable={(coupon) => { setCouponApplied(coupon) }} />
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

              {CouponInfo()}
              {OrderSummary()}
              {PayDetail()}
              {DeliveryDetail()}
              <ProductHeader title={translate('common.reviewitem')} />
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
                    <Text style={styles.priceLeftText}>{translate('common.noitemfound')}</Text>
                  </View>
              }


            </ScrollView>
            <View style={styles.bottomButtonCont}>
              <AppButton
                label={translate('common.placeyourorder')}
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
    fontFamily: getFonts.MEDIUM,
    fontWeight: 500,
    letterSpacing: 0.5,
    lineHeight: 21
  },
  price: {
    fontFamily: getFonts.BOLD,
    letterSpacing: 0.5,
    // fontWeight: 700,
    lineHeight: 21

  },
  TotalPrice: {
    fontSize: 16,
    // fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0.5,
    fontFamily: getFonts.BOLD
  },
  payCard: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  payMode: {
    fontFamily: getFonts.SEMI_BOLD,
    fontWeight: 600,
    letterSpacing: 0.5,
    lineHeight: 21,
    fontSize: 16
  },
  payModeDesc: {
    fontFamily: getFonts.MEDIUM,
    fontWeight: 500,
    letterSpacing: 0.5,
    color: Colors.PRICEGRAY
  },

  DeliveryCard: {
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  buttonText: {
    fontFamily: getFonts.SEMI_BOLD,
    fontWeight: 600,
    color: Colors.themeColor
  },
  deliverUserName: {
    fontFamily: getFonts.SEMI_BOLD,
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: 0.5
  },
  deliverUserAdd: {
    fontFamily: getFonts.MEDIUM,
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
    fontFamily: getFonts.BOLD
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
    // fontWeight: 700,
    fontFamily: getFonts.BOLD,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.5,
    maxWidth: '90%'
  },
  itemDetail: {
    fontFamily: getFonts.REGULAR,
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
    // fontWeight: 700,
    fontFamily: getFonts.BOLD,
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
    // paddingVertical: '2%'
    height: hp(9.85)
  },
})