import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmptyAddress from './Address/EmptyAddress'
import Address from './Address/Address'
import AddAddress from './Address/AddAddress'
import OrderSuccessScreen from './SucessFull'
import ReviewOrder from './Review/ReviewOrder'
import Payment from './Payment'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoactionPin from './Address/LoactionPin'
import { useSelector } from 'react-redux';
import DropdownPicker from '../../constant/DropdownPicker'

const Checkout = (props) => {
  const { route } = props;
  const getData = route?.params?.AddressDetail;
  const editData = route?.params?.EDIT;


  // const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);

  // console.log('Address details show from reducers : ', ADDRESS_DETAIL);


  const isFocused = useIsFocused();
  // console.log('Checkout screen Data : ', getData);

  const [screenType, setScreenType] = useState('ADDRESS')



  //   useEffect(() => {
  // console.log('useeffct call')
  //     const getButtonName = async () => {
  //       try {
  //         const getBtnVal = await AsyncStorage.getItem("BUTTON");
  //         console.log('CHECK BUTTON CODE : ', getBtnVal);
  //         if(getBtnVal != null){
  //           setScreenType(getBtnVal);
  //         }
  //       } catch (error) {
  //        console.log(error); 
  //       }
  //     };

  //     getButtonName();
  //   }, [isFocused])





  // console.log('Check Screen Type : ', screenType)
  return (
    <>
      <AppBackground>

        <AppHeader title={'Checkout'} showRightComponent />
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle} >
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Address</Text>
            <View style={styles.line1(screenType)} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle1(screenType)} >
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Payment</Text>
            <View style={styles.line2(screenType)} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle2(screenType)} >
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Place Order</Text>
          </View>
        </View>

        {
          screenType === 'ADDRESS' ?
            <Address setScreenType={(sType) => { console.log('ScreenType from Address Component', sType), setScreenType(sType) }} />
            :
            screenType === 'PAYMENT' ? <Payment setScreenType={(sType) => { console.log('ScreenType from Payment Component', sType), setScreenType(sType) }} />
              :
              screenType === 'PLACEORDER' ? <ReviewOrder />
                :
                null
        }

        {/* <DropdownPicker onSetCountry={(country) => console.log('countryvalue : ', country)}/> */}

      </AppBackground>
    </>
  )
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE
    // justifyContent: 'space-around'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle1: type => ({
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: type === 'ADDRESS' ? Colors.GRAY : Colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  circle2: type => ({
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: type === 'PLACEORDER' ? Colors.themeColor : Colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  btnText: {
    color: Colors.WHITE,
    fontFamily: fonts.VisbyCF_Demibold,
    fontWeight: 700
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.VisbyCF_Demibold,
    letterSpacing: 0.5,
    fontWeight: 600
  },
  line1: type => ({
    width: 20,
    height: 1,
    backgroundColor: type === 'ADDRESS' ? Colors.GRAY : Colors.themeColor
  }),

  line2: type => ({
    width: 20,
    height: 1,
    backgroundColor: type === 'PLACEORDER' ? Colors.themeColor : Colors.GRAY
  })

})