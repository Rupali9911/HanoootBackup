import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Address from './Address/Address'
import ReviewOrder from './Review/ReviewOrder'
import Payment from './Payment'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { translate } from '../../utility'
import { getFonts } from '../utils'

const Checkout = (props) => {
  const { route } = props;
  const getData = route?.params?.AddressDetail;
  const editData = route?.params?.EDIT;
  const { addressRecordList } = useSelector(state => state.checkoutReducer);
  // const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);
  // console.log('Address details show from reducers : ', ADDRESS_DETAIL);
  const isFocused = useIsFocused();
  // console.log('Checkout screen Data : ', getData);
  const [screenType, setScreenType] = useState('ADDRESS')
  const [addressID, setAddressID] = useState(addressRecordList[0]?.id)
  console.log('chekcslkfj ', addressRecordList[0]?.id, addressID)

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




  console.log('addressID is here : ', addressID)

  // console.log('Check Screen Type : ', screenType)
  return (
    <>
      <AppBackground>

        <AppHeader
          title={translate('common.checkout')}
          showRightComponent
          titleComponentStyle={{ alignItems: 'flex-start' }}
        />


        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle} >
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{' ' + translate('common.addressTxt')}</Text>
            <View style={styles.line1(screenType)} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle1(screenType)} >
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{' ' + translate('common.payment')}</Text>
            <View style={styles.line2(screenType)} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.circle2(screenType)} >
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{' ' + translate('common.placeorder')}</Text>
          </View>
        </View>

        {
          screenType === 'ADDRESS' ?
            <Address setScreenType={(sType, getAddId) => { console.log('ScreenType from Address Component', sType, getAddId), setScreenType(sType), setAddressID(getAddId ? getAddId : addressRecordList[0]?.id) }} />
            :
            screenType === 'PAYMENT' ? <Payment setScreenType={(sType) => { console.log('ScreenType from Payment Component', sType), setScreenType(sType) }} />
              :
              screenType === 'PLACEORDER' ? <ReviewOrder AddressId={addressID} setScreenType={(sType) => { console.log('ScreenType from Place Order Component', sType), setScreenType(sType) }} />
                :
                null
        }

        {/* <Address setScreenType={(sType) => { console.log('ScreenType from Address Component', sType), setScreenType(sType) }} /> */}

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
    fontFamily: getFonts.SEMI_BOLD,
    // fontWeight: 700
  },
  text: {
    fontSize: 12,
    fontFamily: getFonts.SEMI_BOLD,
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