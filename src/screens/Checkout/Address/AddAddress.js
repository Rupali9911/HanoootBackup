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
import { translate } from '../../../utility'



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
            if (EDIT) {
                dispatch(updateAddress({ editData: inputFields, editId: EDIT.id }))
            }
            else {
                dispatch(setAddressDetails(inputFields));
            }
            navigation.navigate('CheckoutScreen');
        } else {
            alert(translate('common.pleasefillallthefields'));
        }


    };

    const handleError = (value) => {
        const errorMsg = (translate('commin.pleaseFillField', { label: `${value}` }));
        return errorMsg;
    }

    console.log('get Country value : ', inputFields.countryName, countryValue)

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={translate('common.addAddress')} />
            <ScrollView>
                <ProductHeader title={translate('common.addressdetail')} />
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
                    label={translate('common.streetname')}
                    placeholder={translate('common.enterstreetname')}
                    required
                    value={inputFields.streetName}
                    onChangeText={text => handleInputChange('streetName', text)}
                // error={handleError('Street Name')}
                />
                <AppInput
                    label={translate('common.buildingtype')}
                    value={inputFields.buildingType}
                    onChangeText={text => handleInputChange('buildingType', text)}
                    placeholder={translate('common.enterbuildingtype')}
                    required
                />
                <AppInput
                    label={translate('common.houseNo')}
                    value={inputFields.houseFlatNo}
                    onChangeText={text => handleInputChange('houseFlatNo', text)}
                    placeholder={translate('common.enterHouseNo')}
                />
                <AppInput
                    label={translate('common.nearbylandmark')}
                    value={inputFields.nearByLandMark}
                    onChangeText={text => handleInputChange('nearByLandMark', text)}
                    placeholder={translate('common.enternearbylandmark')}
                    required
                />

                <AppButton
                    isEmptyBG
                    label={translate('common.pinyourlocation')}
                    leftSideImg
                    ImgURI={Images.PinLocation}
                    containerStyle={{ marginVertical: "6%" }}
                    onPress={() => navigation.navigate('PinLocation')}
                />

                <ProductHeader title={translate('common.deliverycontactdetail')} />

                <AppInput
                    label={translate('common.name')}
                    value={inputFields.name}
                    onChangeText={text => handleInputChange('name', text)}
                    placeholder={translate('common.enteryourname')}
                />
                <AppInput
                    label={translate('common.phonenumber')}
                    value={inputFields.phoneNo}
                    onChangeText={text => handleInputChange('phoneNo', text)}
                    placeholder={translate('common.enteryourphonenumber')}
                />

                <Separator separatorStyle={{ marginVertical: '8%' }} />

                <ProductHeader title={translate('common.saveas')} />
                <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
                    <ToggleButtons
                        Value={inputFields.streetName}
                        onPress={(val) => setInputFields({ ...inputFields, saveAddAs: val })}
                    />
                </View>
                <AppButton label={translate('common.saveaddress')} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
            </ScrollView>
        </AppBackground>
    )
}

export default AddAddress;

const styles = StyleSheet.create({

})