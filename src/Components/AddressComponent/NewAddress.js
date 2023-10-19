import { StyleSheet, View, ScrollView, Button, Image, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductHeader from '../../screens/Components/Cards/ProductHeader';
import AppHeader from '../../screens/Components/AppHeader';
import AppBackground from '../../screens/Components/AppBackground';
import Images from '../../constant/Images';
import AppButton from '../../screens/Components/AppButton';
import AppInput from '../../constant/AppInput';
import Separator from '../../constant/Separator';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import DropdownPicker from '../../constant/DropdownPicker';
import DeliveryType from './DeliveryAddType';
import { AddNewAddressAPICall, updateAddressAPICall } from '../../services/apis/AddressAPI';
import { showErrorToast, showInfoToast } from '../universal/Toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Location from './Location';
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';
import { translate } from '../../utility';
import { useSelector } from 'react-redux';
import BuildingDropdown from '../../constant/BuildingDropdown';
import { getFonts } from '../../screens/utils';
import { maxLength10, validatePhoneNo } from '../../screens/utils';
import { SIZE } from '../../constant/responsiveFunc';
import { handleAuthError, signInWithPhoneNumber } from '../../services/socialAuth';
import { getCountryCode } from '../../screens/utils';
import { regionCountry } from '../../utility';
import { checkPhoneNumberOrEmailExists } from '../../services/apis';




const NewAddress = (props) => {
  const editDataDetail = props?.route?.params?.editData;
  const profile = props?.route?.params?.isProfileScreen;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  // const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState({
    street: '',
    building: '',
    house: '',
    landmark: '',
    name: '',
    phone_number: '',
    address_type: '',
    city: '',
    latitude: "33.312805",
    longitude: "44.361488",
    locationDetail: {
      latitude: '',
      longitude: '',
      address: ''
    }
  });
  const [formattedNum, setFormattedNum] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [cityValue, setCityName] = useState()
  const [buildingType, setBuildingType] = useState()
  const [loadingButton, setLoadingButton] = useState(false)


  const { selectedLanguageItem } = useSelector((state) => state.languageReducer);
  const { userData } = useSelector((state) => state.userReducer);

  const splitMobileNumber = (phoneNumber) => {
    const lastTenDigits = phoneNumber?.slice(-10); // Extract the last 10 digits
    const remainingDigits = phoneNumber?.slice(0, -10); // Extract the remaining digits

    return {
      lastTenDigits,
      remainingDigits,
    };
  };

  console.log('userData: ', userData)
  useEffect(() => {
    // if (Object.keys(userData).length) {
    //   setInputFields({ ...inputFields, name: userData?.displayName })
    //   setInputFields({ ...inputFields, phone_number: userData?.phoneNumber })
    //   setFormattedNum(userData?.phoneNumber)
    // }
    // const { lastTenDigits, remainingDigits } = splitMobileNumber(userData?.phoneNumber)

    // const newInputFields = { ...inputFields, phone_number: lastTenDigits };
    // console.log('newInputFields', newInputFields)
    // setInputFields(newInputFields);
    // setFormattedNum(userData?.phoneNumber)
    if (Object.keys(userData).length) {
      setInputFields({ ...inputFields, name: userData?.displayName })
      setFormattedNum(userData?.phoneNumber ? userData?.phoneNumber : '')
    }
  }, [userData])

  // useEffect(() => {
  //   // Assuming userData contains the user's data
  //   // if (userData && userData?.phoneNumber) {
  //   //   const { lastTenDigits, remainingDigits } = splitMobileNumber(userData.phoneNumber);
  //   //   // setInputFields({ ...inputFields, phone_number: lastTenDigits });
  //   //   setInputFields({ ...inputFields, name: userData?.displayName });
  //   //   // setFormattedNum(userData.phoneNumber);
  //   // }
  //   setInputFields({ ...inputFields, phone_number: 'rupali chohan' })
  //   setFormattedNum('+88999999999')
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(userData).length) {
  //     setInputFields({ ...inputFields, name: userData?.displayName })
  //     setInputFields({ ...inputFields, phone_number: userData?.phoneNumber })
  //     setFormattedNum(userData?.phoneNumber)
  //   }
  // }, [isFocused])

  // useEffect(async () => {
  //   // // if (userData) {
  //   // const last10Digits = userData?.phoneNumber?.slice(-10);

  //   // console.log('last10Digits: ',)
  //   if (Object.keys(userData).length) {
  //     setInputFields({ ...inputFields, name: userData?.displayName })
  //     const { lastTenDigits, remainingDigits } = splitMobileNumber(userData?.phoneNumber)
  //     setInputFields({ ...inputFields, phone_number: lastTenDigits })
  //     getCountryCode(remainingDigits)

  //     // setFormattedNum(userData?.phoneNumber ? last10Digits : null)
  //   }

  //   // console.log('getCountryCode: ', typeof (getCountryCode('+91')))
  //   // setInputFields({ ...inputFields, name: userData?.displayName, phone_number: last10Digits ? last10Digits : '' })
  //   // }
  // }, [isFocused])

  const { lastTenDigits, remainingDigits } = splitMobileNumber(userData?.phoneNumber)

  // console.log('lastTenDigits, remainingDigits: ', lastTenDigits, remainingDigits)





  // setInputFields({ ...inputFields, name: userData?.displayName })
  // setInputFields({ ...inputFields, phone_number: lastTenDigits })
  // setFormattedNum(userData?.phoneNumber)

  console.log('editDataDetail: ', editDataDetail)
  useEffect(() => {
    if (editDataDetail) {
      setInputFields({
        street: editDataDetail?.street,
        building: editDataDetail?.building,
        house: editDataDetail?.house,
        landmark: editDataDetail?.landmark,
        name: editDataDetail?.name,
        phone_number: editDataDetail?.phone_number,
        address_type: editDataDetail?.address_type,
        city: editDataDetail?.city,
        latitude: editDataDetail?.locationDetail?.latitude,
        longitude: editDataDetail?.locationDetail?.longitude,
        locationDetail: {
          latitude: editDataDetail?.latitude,
          longitude: editDataDetail?.longitude,
          address: editDataDetail?.location_address
        }
      });
      setCityName(editDataDetail?.city)
      setBuildingType(editDataDetail?.building)
      setFormattedNum(editDataDetail?.phone_number)
    }
    // else if (Object.keys(userData).length) {
    //   setInputFields({ ...inputFields, phone_number: 'rupali chohan' })
    //   // setFormattedNum(userData?.phoneNumber)
    // }
    // else if (userData) {
    //   const last10Digits = userData?.phoneNumber?.slice(-10);

    //   console.log('last10Digits: ', last10Digits)

    //   setInputFields({ ...inputFields, name: userData?.displayName, phone_number: last10Digits ? last10Digits : '' })
    // }

  }, [editDataDetail]);




  // console.log('userData', userData)

  console.log('input fileds: ', inputFields?.phone_number)


  const handleInputChange = (fieldName, value) => {
    const newInputFields = { ...inputFields, [fieldName]: value };
    setInputFields(newInputFields);
  };

  const handleError = (label, value) => {
    console.log('check labl & value', label, value)
    if (label === 'city') {
      return Object.keys(value).length ? null : translate('common.pleaseFillField', { label: `${label}` })
    }
    // else if (label === 'phone_number') {
    //   if (maxLength10(inputFields?.phone_number)) {
    //     return maxLength10(phoneNo)

    //   } else if (!isValidNumber(formattedNum)) {
    //     return validatePhoneNo(phoneNo)
    //   }
    // }
    else {
      if (!value?.trim()?.length) {
        return translate('common.pleaseFillField', { label: `${label}` });
      }
    }
  }

  const verifyWithNumber = async () => {
    try {
      setLoadingButton(true)

      const res = await checkPhoneNumberOrEmailExists(formattedNum)
      if (res?.success) {
        const authResults = await signInWithPhoneNumber(formattedNum)
        setLoadingButton(false)

        navigation.navigate('OtpVerification', {
          authResult: authResults,
          phoneNumber: formattedNum,
          navigationFromAdd: true
        });
      }
      else {
        setLoadingButton(false)
        showErrorToast(translate('common.autherror'), selectedLanguageItem?.language_id === 0 ? res?.message : res?.message_arabic)

      }
      // console.log('Response from signInWithNumber', result)
    } catch (error) {
      setLoadingButton(false)

      console.log('Error from verifyWithNumber', error)
      handleAuthError(error)
      // showErrorToast()
    }
    // try {
    //   setLoadingButton(true)
    //   // await checkPhoneNumberOrEmailExists(formattedNum)

    //   console.log('before verify number: ', formattedNum)
    //   const result = await signInWithPhoneNumber(formattedNum)
    //   console.log('Response from signInWithNumber', result)
    //   setLoadingButton(false)

    //   // navigation.navigate('OtpVerification', {
    //   //   authResult: result,
    //   //   phoneNumber: formattedNum,
    //   //   isFromSignUp: false
    //   // });
    // } catch (error) {
    //   setLoadingButton(false)

    //   console.log('Error from signInWithNumber', error)
    // }
    console.log('verify button pressed')
    // try {
    //   setLoadingButton(true)
    //   const res = await checkPhoneNumberOrEmailExists(formattedNum)
    //   // if (res?.success) {
    //   //   const authResults = await signInWithPhoneNumber(formattedNum)
    //   //   setLoadingButton(false)

    //   //   navigation.navigate('OtpVerification', {
    //   //     authResult: authResults,
    //   //     phoneNumber: formattedNum,
    //   //     isFromSignUp: false,
    //   //   });
    //   // }
    //   // else {
    //   //   setLoadingButton(false)
    //   //   showErrorToast(translate('common.autherror'), selectedLanguageItem?.language_id === 0 ? res?.message : res?.message_arabic)

    //   // }

    // }
    // catch (error) {
    //   console.log('Error from Check phone number api', error)
    //   // showErrorToast()
    //   // setLoadingButton(false)
    // }
  }



  const handleSubmit = async () => {
    const errorList = {};
    console.log('input fields name : ', inputFields.name)
    const data = {
      street: inputFields?.street,
      building: inputFields?.building,
      landmark: inputFields?.landmark,
      name: inputFields?.name,
      phoneNumber: inputFields?.phone_number ? inputFields?.phone_number : splitMobileNumber(editDataDetail ? editDataDetail?.phone_number : userData?.phoneNumber)?.lastTenDigits,
      city: inputFields?.city
    }

    for (const key in data) {
      if (handleError(key, data[key])) {
        errorList[key] = await handleError(key, data[key])
      }
    }
    setErrorMsg(errorList);

    if (Object.keys(errorList).length === 0) {
      setErrorMsg({});

      const data = {
        // city: inputFields?.city?.name,
        city: inputFields?.city,
        street: inputFields?.street,
        building: inputFields?.building,
        house: inputFields?.house,
        landmark: inputFields?.landmark,
        latitude: inputFields?.locationDetail?.latitude.toString(),
        longitude: inputFields?.locationDetail?.longitude.toString(),
        name: inputFields?.name,
        // phone_number: inputFields?.phone_number,
        phone_number: inputFields?.phone_number ? formattedNum : editDataDetail?.phone_number ? editDataDetail?.phone_number : userData?.phoneNumber,
        address_type: inputFields?.address_type,
        location_address: inputFields?.locationDetail?.address,
      }

      console.log('data : ', data)

      editDataDetail && Object.keys(editDataDetail).length
        ?
        callUpdateAddressAPI({ ...data, id: editDataDetail?.id })
        :
        callAddNewAddressAPI(data)
    }


  };

  const callAddNewAddressAPI = async (newData) => {
    try {
      const response = await AddNewAddressAPICall(newData)

      profile
        ?
        navigation.navigate('ToastScreen', { title: translate('common.addressSaved') })
        :
        (navigation.navigate('CheckoutScreen'),
          showInfoToast(translate('common.success'), selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic))
    }
    catch (error) {
      console.log('Error from add new address api ', error)
    }
  }

  const callUpdateAddressAPI = async (updateData) => {
    try {
      const response = await updateAddressAPICall(updateData)

      profile
        ?
        navigation.navigate('ToastScreen', { title: translate('common.addressSaved') })
        :
        (navigation.navigate('CheckoutScreen'), showInfoToast(translate('common.success'), selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic))
    }
    catch (error) {
      console.log('Error from add new address api ', error)
    }
  }


  // console.log( onConfirmLocation={(val) => {console.log('onConfirmLocation : ', val)}})

  const onChildDataChange = (data) => {
    // setDataFromChild(data);
    console.log('onChildDataChange : ', data)
  };


  console.log(inputFields?.locationDetail?.address != '' ? true : false)

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={editDataDetail ? translate('common.updateaddress') : translate('common.addAddress')} />
      <KeyboardAwareScrollView nestedScrollEnabled={true}>

        {
          inputFields?.locationDetail?.address != ''
            // Object.keys(inputFields?.locationDetail).length
            ?
            (
              <View style={{ flexDirection: 'row', margin: '5%' }}>
                <Image
                  source={Images.MapImage}
                  style={{ width: 85, height: 85 }}
                />
                <View style={{ flex: 1, margin: 10, justifyContent: 'space-between' }}>
                  <Text style={{
                    fontFamily: getFonts.REGULAR,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    textAlign: 'left'
                  }} numberOfLines={2}>{translate('common.address')} {inputFields?.locationDetail?.address}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Location', {
                        updateAddress: inputFields.locationDetail,
                        onGoBack: (data) => {
                          console.log('location data : ', data), setInputFields({
                            ...inputFields, locationDetail: {
                              latitude: data?.latitude,
                              longitude: data?.longitude,
                              address: data?.address
                            }
                          })
                        }
                      });
                    }}
                  >
                    <Text style={{
                      fontFamily: getFonts.REGULAR,
                      fontWeight: 500,
                      letterSpacing: 0.5,
                      textAlign: 'left',
                      color: Colors.themeColor
                    }}>{translate('common.update')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
            :
            (
              <AppButton
                isEmptyBG
                label={translate('common.pinyourlocation')}
                leftSideImg
                ImgURI={Images.PinLocation}
                containerStyle={{ marginVertical: "6%" }}
                // onPress={() => navigation.navigate('Location')}
                onPress={() => {
                  navigation.navigate('Location', {
                    onGoBack: (data) => {
                      console.log('location data : ', data), setInputFields({
                        ...inputFields, locationDetail: {
                          latitude: data?.latitude,
                          longitude: data?.longitude,
                          address: data?.address
                        }
                      })
                    }
                  });
                }}
              />
            )
        }
        <ProductHeader title={translate('common.addressdetail')} />
        <DropdownPicker
          onSetCountry={(city) => {
            console.log('country value : ', city);//{"code": "KA", "name": "Bangalore"}
            handleInputChange('city', city)
            setErrorMsg({ ...errorMsg, ['city']: null })
          }}
          SetValue={setCityName}
          Value={cityValue}
          error={errorMsg['city']}
        // mainStyle={{ zIndex: 1 }}
        />
        <AppInput
          label={translate('common.streetname')}
          placeholder={translate('common.enterstreetname')}
          required
          value={inputFields.street}
          onChangeText={text => {
            handleInputChange('street', text)
            setErrorMsg({ ...errorMsg, ['street']: null })
          }}
          error={errorMsg['street']}
        />



        <BuildingDropdown
          // onSetCountry={(city) => {
          //   console.log('country value : ', city);//{"code": "KA", "name": "Bangalore"}
          //   handleInputChange('city', city)
          //   setErrorMsg({ ...errorMsg, ['city']: null })
          // }}
          // SetValue={setCityName}
          // Value={cityValue}
          // error={errorMsg['city']}
          // mainStyle={{ zIndex: 1 }}
          onSetBuilding={(building) => {
            console.log(building)
            handleInputChange('building', building)
            setErrorMsg({ ...errorMsg, ['building']: null })
          }}
          error={errorMsg['building']}
          setValue={setBuildingType}
          value={buildingType}
        />



        <AppInput
          label={translate('common.houseNo')}
          value={inputFields.house}
          onChangeText={text => handleInputChange('house', text)}
          placeholder={translate('common.enterHouseNo')}
        />
        <AppInput
          label={translate('common.nearbylandmark')}
          value={inputFields.landmark}
          onChangeText={text => {
            handleInputChange('landmark', text)
            setErrorMsg({ ...errorMsg, ['landmark']: null })
          }}
          placeholder={translate('common.enternearbylandmark')}
          required
          error={errorMsg['landmark']}
        />








        <ProductHeader title={translate('common.deliverycontactdetail')} />

        <AppInput
          label={translate('common.name')}
          value={inputFields.name}
          onChangeText={text => {
            handleInputChange('name', text);
            setErrorMsg({ ...errorMsg, ['name']: null })
          }}
          placeholder={translate('common.enteryourname')}
          required
          error={errorMsg['name']}
        />



        <AppInput
          label={translate('common.mobilephonenumber')}
          placeholder={translate('common.enteryourphonenumber')}
          required
          isNumberField
          // value={lastTenDigits ? lastTenDigits : inputFields?.phone_number}
          value={inputFields?.phone_number ? inputFields?.phone_number : splitMobileNumber(editDataDetail ? editDataDetail?.phone_number : userData?.phoneNumber)?.lastTenDigits}
          onChangeText={text => {
            handleInputChange('phone_number', text)
            setErrorMsg({ ...errorMsg, ['phoneNumber']: null })
          }}
          validate={[maxLength10, validatePhoneNo]}
          error={errorMsg['phoneNumber']}
          onChangeCountry={(val) => console.log(val)}
          onChangeFormattedText={(val) => { console.log('onChangeFormattedText', val), setFormattedNum(val) }}
          defaultCode={inputFields?.phone_number ? regionCountry : getCountryCode(splitMobileNumber(editDataDetail ? editDataDetail?.phone_number : userData?.phoneNumber)?.remainingDigits)}
        />
        {
          // formattedNum == userData?.phoneNumber && inputFields?.phone_number ? null :
          formattedNum === userData?.phoneNumber ? null :
            < View style={styles.btnContainer}>
              {
                loadingButton ?
                  <ActivityIndicator size="large" color={Colors.themeColor} style={{ marginRight: '5%' }} />
                  :
                  <TouchableOpacity style={[styles.button, inputFields?.phone_number?.length != 10 && formattedNum != userData?.phoneNumber ? styles.inActive : null]} onPress={() => verifyWithNumber()} disabled={inputFields?.phone_number?.length != 10 && formattedNum != userData?.phoneNumber ? true : false}>
                    <Text style={styles.buttonText}>{translate('common.verifyphoneno')}</Text>
                  </TouchableOpacity>
              }
            </View>
        }





        <Separator separatorStyle={{ marginVertical: '8%' }} />

        <ProductHeader title={translate('common.saveas')} />
        <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
          <DeliveryType
            isSelected={inputFields.address_type}
            onPress={(val) => setInputFields({ ...inputFields, address_type: val })}
          />
        </View>

        <AppButton label={editDataDetail ? translate('common.updateaddress') : translate('common.saveaddress')} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </AppBackground >


  )
}

export default React.memo(NewAddress);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: Colors.themeColor,
    width: SIZE(150),  // Set the desired width
    padding: 10,
    borderRadius: 100,
    marginHorizontal: '5%',
    marginTop: '2%',
    // right: 0,
    // alignItems: 'flex-end'
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: getFonts.BOLD,

    // fontWeight: 'bold',
  },
  inActive: {
    opacity: 0.4,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',  // Align the button to the bottom
    alignItems: 'flex-end',      // Align the button to the right
    // padding: 20,
  }
})