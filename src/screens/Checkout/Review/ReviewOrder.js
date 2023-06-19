import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import ProductHeader from '../../Components/Cards/ProductHeader'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import Separator from '../../../constant/Separator'
import { wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import { ExpressView } from '../../../constant/ListConstant'
import ProductCounter from '../../../constant/ProductCounter'
import AppButton from '../../Components/AppButton'
import { useNavigation } from '@react-navigation/native';


const ReviewOrder = (props) => {
  const navigation = useNavigation();


  const OrderSummary = () => {
    return (
      <>
        <ProductHeader title={'Order Summary'} />

        <View style={styles.priceViewCont}>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Subtotal (1 item)</Text>
            <Text style={styles.price}>$ 5,00.00</Text>
          </View>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Coupon Discount</Text>
            <Text style={[styles.price, { color: Colors.GREEN }]}>- $ 5.00</Text>
          </View>
          <View style={styles.rowCont}>
            <Text style={styles.priceLeftText}>Shipping Cost</Text>
            <Text style={styles.price}>$10</Text>
          </View>
          <Separator separatorStyle={{ width: wp(90) }} />
          <View style={styles.rowCont}>
            <Text style={styles.TotalPrice}>Total <Text style={{ color: Colors.PRICEGRAY, fontWeight: 500 }}>(Inclusive of VAT)</Text></Text>
            <Text style={styles.TotalPrice}>$ 4,95.00</Text>
          </View>
        </View>
      </>
    );
  }

  const PayDetail = () => {
    return (
      <>
        <ProductHeader title={'Pay With'} RightText={'Change'} />

        <View style={styles.payCard}>
          <Image source={Images.cashOnDelivery} style={{ height: 40, width: 45 }} />
          <View>
            <Text
              style={styles.payMode}
            >{'Cash On Delivery'}</Text>
            <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay when you get order'}</Text>
          </View>
        </View>
      </>
    );
  }

  const DeliveryDetail = () => {
    return (
      <>
        <ProductHeader title={'Deliver to'} RightText={'Change'} />
        <View style={styles.DeliveryCard}>
          <View style={styles.rowCont}>
            <Text style={styles.deliverUserName}>Gregory R. Butler</Text>
            <View style={styles.deliveryLocation}>
              <Text style={styles.deliveryType}>{'Home'}</Text>
            </View>
          </View>
          <Text style={styles.deliverUserAdd}>{'717 Mills Gardens, Anbar-iraq'}</Text>
          <Text style={styles.deliverUserAdd}>{'9713380901'}</Text>
        </View>
      </>
    );
  }


  const ReviewItemDetail = () => {
    return (
      <>
        <ProductHeader title={'Review Item'} />
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
        </View>
      </>
    );
  }


  return (
    // <AppBackground>
    //   <AppHeader />
    <>
      <ScrollView>

        {OrderSummary()}
        {PayDetail()}
        {DeliveryDetail()}
        {ReviewItemDetail()}

      </ScrollView>
      <View style={styles.bottomButtonCont}>
        <AppButton 
        label={'Place Your Order'}
        onPress={() => {
          // const storeUser = async () => {
          //     try {
          //         let name = "PLACEORDER";
          //         await AsyncStorage.setItem("BUTTON", name);
          //     } catch (error) {
          //         console.log(error);
          //     }
          // };
          // storeUser();

          navigation.navigate('SuccessScreen')

      }}
        />
      </View>
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