import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductHeader from '../../Components/Cards/ProductHeader'
import AppHeader from '../../Components/AppHeader'
import AppBackground from '../../Components/AppBackground'
import Images from '../../../constant/Images'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import AppButton from '../../Components/AppButton'
import AppInput from '../../../constant/AppInput'
import ToggleButtons from './ToggleButtons'
import Separator from '../../../constant/Separator'
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
// import DropdownPicker from '../../../constant/DropdownPicker'
import { useDispatch } from 'react-redux'
import { setAddressDetails, updateAddress } from '../../Store/actions/checkoutAction'
import DropdownPicker from '../../../constant/DropdownPicker'



const AddAddress = (props) => {
    const { route } = props;
    const EDIT = route?.params?.EDIT;
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();



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
        console.log('useeffect : ', EDIT?.Value)
        if (EDIT) {
            setInputFields({
                streetName: EDIT.Value.streetName,
                buildingType: EDIT.Value.buildingType,
                houseFlatNo: EDIT.Value.houseFlatNo,
                nearByLandMark: EDIT.Value.nearByLandMark,
                name: EDIT.Value.name,
                phoneNo: EDIT.Value.phoneNo,
                saveAddAs: EDIT.Value.saveAddAs,
                countryName: EDIT?.Value?.countryName?.code
            });
            console.log('Edited Adress', EDIT)
            setCountryValue(EDIT?.Value?.countryName?.code)
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
            if(EDIT){
                dispatch(updateAddress({editData: inputFields, editId: EDIT.id}))
            }
            else{
                dispatch(setAddressDetails(inputFields));
            }
            navigation.navigate('CheckoutScreen');
        } else {
            alert('Please fill all the fields');
        }

       
    };

    const handleError = (value) => {
        const errorMsg = (`Please fill ${value} field`);
        return errorMsg;
    }

    console.log('get Country value : ', inputFields.countryName, countryValue)

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
                    onSetCountry={(country) => 
                        {
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
                onPress={() => navigation.navigate('PinLocation')}
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
                    <ToggleButtons
                    Value={inputFields.streetName}
                    onPress={(val) => setInputFields({...inputFields, saveAddAs: val})}
                    />
                </View>
                <AppButton label={'Save Address'} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
            </ScrollView>
        </AppBackground>
    )
}

export default AddAddress;

const styles = StyleSheet.create({

})