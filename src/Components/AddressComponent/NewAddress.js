import { StyleSheet, View, ScrollView, Button, Image, Text, TouchableOpacity } from 'react-native'
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
import { showInfoToast } from '../universal/Toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Location from './Location';
import fonts from '../../constant/fonts';
import Colors from '../../constant/Colors';



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
    latitude: "189.98.89",
    longitude: "31238.3213",
    locationDetail: {
      latitude: '',
      longitude: '',
      address: ''
    }


  });
  const [errorMsg, setErrorMsg] = useState('')
  const [cityValue, setCityName] = useState()


  console.log('editDataDetail : ', editDataDetail)

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
        locationDetail:  {
          latitude: editDataDetail?.latitude,
          longitude: editDataDetail?.longitude,
          address: editDataDetail?.location_address
        }
      });
      setCityName(editDataDetail?.city)
    }
  }, []);

  const handleInputChange = (fieldName, value) => {
    const newInputFields = { ...inputFields, [fieldName]: value };
    setInputFields(newInputFields);
  };

  const handleError = (label, value) => {
    if (label === 'city') {
      return Object.keys(value).length ? null : `Please fill ${label} field`
    }
    else {
      if (!value.trim().length) {
        return `Please fill ${label} field`;
      }
    }
  }

  const handleSubmit = () => {
    const errorList = {};
    const data = {
      street: inputFields.street,
      building: inputFields.building,
      landmark: inputFields.landmark,
      name: inputFields.name,
      // city: inputFields.city
    }

    for (const key in data) {
      if (handleError(key, data[key])) {
        errorList[key] = handleError(key, data[key])
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
        latitude: inputFields?.locationDetail?.latitude,
        longitude: inputFields?.locationDetail?.longitude,
        name: inputFields?.name,
        phone_number: inputFields?.phone_number,
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
        navigation.navigate('ToastScreen', { title: 'Address Saved Successfully!' })
        :
        (navigation.navigate('CheckoutScreen'),
          showInfoToast('SUCCESS', response?.message))
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
        navigation.navigate('ToastScreen', { title: 'Address Updated Successfully!' })
        :
        (navigation.navigate('CheckoutScreen'), showInfoToast('SUCCESS', response?.message))
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
        title={editDataDetail ? 'Update Address' : 'Add Address'} />
      <ScrollView>
        <ProductHeader title={'Address Detail'} />
        <View style={{ zIndex: 1 }}>
          <DropdownPicker
            onSetCountry={(city) => {
              console.log('country value : ', city);//{"code": "KA", "name": "Bangalore"}
              handleInputChange('city', city)
              setErrorMsg({ ...errorMsg, ['city']: null })
            }}
            SetValue={setCityName}
            Value={cityValue}
            error={errorMsg['city']}
          />
        </View>
        <KeyboardAwareScrollView>
          <AppInput
            label="Street Name"
            placeholder={'Enter Street Name'}
            required
            value={inputFields.street}
            onChangeText={text => {
              handleInputChange('street', text)
              setErrorMsg({ ...errorMsg, ['street']: null })
            }}
            error={errorMsg['street']}
          />
          <AppInput
            label="Building Type"
            value={inputFields.building}
            onChangeText={text => {
              handleInputChange('building', text)
              setErrorMsg({ ...errorMsg, ['building']: null })
            }}
            placeholder={'Enter Building Type'}
            required
            error={errorMsg['building']}
          />
          <AppInput
            label="House/Flat No."
            value={inputFields.house}
            onChangeText={text => handleInputChange('house', text)}
            placeholder={'Enter House/Flat No.'}
          />
          <AppInput
            label="NearBy Landmark"
            value={inputFields.landmark}
            onChangeText={text => {
              handleInputChange('landmark', text)
              setErrorMsg({ ...errorMsg, ['landmark']: null })
            }}
            placeholder={'Enter NearBy Landmark'}
            required
            error={errorMsg['landmark']}
          />

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
                      fontFamily: fonts.VISBY_CF_REGULAR,
                      fontWeight: 500,
                      letterSpacing: 0.5,
                      textAlign: 'left'
                    }} numberOfLines={2}>Address: {inputFields?.locationDetail?.address}</Text>
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
                        fontFamily: fonts.VISBY_CF_REGULAR,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        textAlign: 'left',
                        color: Colors.themeColor
                      }}>Update</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
              :
              (
                <AppButton
                  isEmptyBG
                  label={'Pin Your Location'}
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






          <ProductHeader title={'Delivery Contact Detail'} />

          <AppInput
            label="Name"
            value={inputFields.name}
            onChangeText={text => {
              handleInputChange('name', text);
              setErrorMsg({ ...errorMsg, ['name']: null })
            }}
            placeholder={'Enter Your Name'}
            required
            error={errorMsg['name']}
          />
          <AppInput
            label="Phone Number"
            value={inputFields.phone_number}
            onChangeText={text => handleInputChange('phone_number', text)}
            placeholder={'Enter Your Phone Number'}
            maxLength={10}
            keyboardType={'numeric'}
          />

          <Separator separatorStyle={{ marginVertical: '8%' }} />

          <ProductHeader title={'Save as'} />
          <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
            <DeliveryType
              isSelected={inputFields.address_type}
              onPress={(val) => setInputFields({ ...inputFields, address_type: val })}
            />
          </View>
          <AppButton label={editDataDetail ? 'Update Address' : 'Save Address'} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
        </KeyboardAwareScrollView>
      </ScrollView>
    </AppBackground>
  )
}

export default React.memo(NewAddress);

const styles = StyleSheet.create({

})