import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// import ProductHeader from '../../Components/Cards/ProductHeader'
// import AppHeader from '../../Components/AppHeader'
// import AppBackground from '../../Components/AppBackground'
// import Images from '../../../constant/Images'
// import Colors from '../../../constant/Colors'
// import fonts from '../../../constant/fonts'
// import AppButton from '../../Components/AppButton'
// import AppInput from '../../../constant/AppInput'
// import ToggleButtons from './ToggleButtons'
// import Separator from '../../../constant/Separator'
// import { useNavigation } from '@react-navigation/native';
// import { useIsFocused } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'
// // import DropdownPicker from '../../../constant/DropdownPicker'
// import { useDispatch } from 'react-redux'
// import { setAddressDetails, updateAddress } from '../../Store/actions/checkoutAction'
// import DropdownPicker from '../../../constant/DropdownPicker'
import ProductHeader from '../../screens/Components/Cards/ProductHeader';
import AppHeader from '../../screens/Components/AppHeader';
import AppBackground from '../../screens/Components/AppBackground';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';
import AppButton from '../../screens/Components/AppButton';
import AppInput from '../../constant/AppInput';
import ToggleButtons from '../../screens/Checkout/Address/ToggleButtons';
import Separator from '../../constant/Separator';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressDetails, updateAddress } from '../../screens/Store/actions/checkoutAction';
import DropdownPicker from '../../constant/DropdownPicker';
import DeliveryType from './DeliveryAddType';



const NewAddress = (props) => {
  const updateDetail = props?.route?.params?.EDIT_DETAIL;
  const isProfileAddress = props?.route?.params?.PROFILE;


  console.log('isprofileNavigate: ', props?.route?.params)

  // console.log('This is Edited Data  : ', props?.route?.params?.EDIT, updateDetail);

  // const { route } = props;
  // const EDIT = route?.params?.EDIT;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  // const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);



  const [inputFields, setInputFields] = useState({
    streetName: '',
    buildingType: '',
    houseFlatNo: '',
    nearByLandMark: '',
    name: '',
    phoneNo: '',
    saveAddAs: 'Home',
    countryName: '',
  });
  const [errorMsg, setErrorMsg] = useState('')
  const [countryValue, setCountryValue] = useState()


  useEffect(() => {

    // const filterArr = ADDRESS_DETAIL.length && ADDRESS_DETAIL.filter(item => item.id == EDIT?.id);

    // console.log('check filter data : ', filterArr)




    // console.log('useeffect : ', EDIT?.Value)
    if (updateDetail) {
      // const updateDetail = updateDetail?.Value;
      // console.log('details updated : ', updateDetail)
      setInputFields({
        streetName: updateDetail?.Value?.streetName,
        buildingType: updateDetail?.Value?.buildingType,
        houseFlatNo: updateDetail?.Value?.houseFlatNo,
        nearByLandMark: updateDetail?.Value?.nearByLandMark,
        name: updateDetail?.Value?.name,
        phoneNo: updateDetail?.Value?.phoneNo,
        saveAddAs: updateDetail?.Value?.saveAddAs,
        countryName: updateDetail?.Value?.countryName?.code
      });
      // console.log('Edited Adress', EDIT)
      setCountryValue(updateDetail?.Value?.countryName?.code)
    }
    else {
      setInputFields({
        streetName: '',
        buildingType: '',
        houseFlatNo: '',
        nearByLandMark: '',
        name: '',
        phoneNo: '',
        saveAddAs: 'Home',
        country: ''
      });
      setCountryValue('')
    }
  }, [isFocused]);

  const handleInputChange = (fieldName, value) => {
    const newInputFields = { ...inputFields, [fieldName]: value };
    setInputFields(newInputFields);
  };


  const handleSubmit = () => {

    const { streetName,
      buildingType,
      houseFlatNo,
      nearByLandMark,
      name,
      phoneNo,
      saveAddAs,
      country
    } = inputFields;

    if (streetName && buildingType && houseFlatNo && nearByLandMark && name && phoneNo) {
      // Navigate to another screen and pass the input field values
      if (updateDetail) {
        // dispatch(updateAddress({ editData: inputFields, editId: EDIT.id }))
        // console.log('now data is updataedßß')
        dispatch(updateAddress({ updateData: inputFields, updateId: updateDetail?.id }));
        isProfileAddress ? navigation.navigate('ToastMessageScreen', { title: 'Address Updated Successfully!' }) : navigation.goBack();
      }
      else {
        dispatch(setAddressDetails(inputFields));
        isProfileAddress ? navigation.navigate('ToastMessageScreen', { title: 'Address Saved Successfully!' }) : navigation.goBack();

      }
      // navigation.navigate('ToastMessageScreen');
      // navigation.goBack();

      // props.onPressAddNewAdrs;
    } else {
      alert('Please fill all the fields');
    }


  };

  const handleError = (value) => {
    const errorMsg = (`Please fill ${value} field`);
    return errorMsg;
  }

  // console.log('get Country value : ', inputFields.countryName, countryValue)

  return (
    <AppBackground>
      <AppHeader
        showBackButton
        title={'Add Address'} />
      <ScrollView>
        <ProductHeader title={'Address Detail'} />
        {/* <View style={{ zIndex: 2 }}>
                    <AppInput
                        label="Town/City"
                        isDropDown
                        required
                    />
                </View> */}
        <View style={{ zIndex: 1 }}>
          <DropdownPicker
            onSetCountry={(country) => {
              console.log('country value : ', country);
              // setCountryValue(country.name)
              handleInputChange('countryName', country)
            }}

            SetValue={setCountryValue}
            Value={countryValue}
          />
        </View>
        <AppInput
          label="Street Name"
          placeholder={'Enter Street Name'}
          required
          value={inputFields.streetName}
          onChangeText={text => handleInputChange('streetName', text)}
        // error={handleError('Street Name')}
        />
        <AppInput
          label="Building Type"
          value={inputFields.buildingType}
          onChangeText={text => handleInputChange('buildingType', text)}
          placeholder={'Enter Building Type'}
          required
        />
        <AppInput
          label="House/Flat No."
          value={inputFields.houseFlatNo}
          onChangeText={text => handleInputChange('houseFlatNo', text)}
          placeholder={'Enter House/Flat No.'}
        />
        <AppInput
          label="NearBy Landmark"
          value={inputFields.nearByLandMark}
          onChangeText={text => handleInputChange('nearByLandMark', text)}
          placeholder={'Enter NearBy Landmark'}
          required
        />

        <AppButton
          isEmptyBG
          label={'Pin Your Location'}
          leftSideImg
          ImgURI={Images.PinLocation}
          containerStyle={{ marginVertical: "6%" }}
          onPress={() => navigation.navigate('Location')}
        />

        <ProductHeader title={'Delivery Contact Detail'} />

        <AppInput
          label="Name"
          value={inputFields.name}
          onChangeText={text => handleInputChange('name', text)}
          placeholder={'Enter Your Name'}
        />
        <AppInput
          label="Phone Number"
          value={inputFields.phoneNo}
          onChangeText={text => handleInputChange('phoneNo', text)}
          placeholder={'Enter Your Phone Number'}
        />

        <Separator separatorStyle={{ marginVertical: '8%' }} />

        <ProductHeader title={'Save as'} />
        <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
          <DeliveryType
            Value={inputFields.streetName}
            onPress={(val) => setInputFields({ ...inputFields, saveAddAs: val })}
          />
        </View>
        <AppButton label={'Save Address'} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
      </ScrollView>
    </AppBackground>
  )
}

export default NewAddress;

const styles = StyleSheet.create({

})