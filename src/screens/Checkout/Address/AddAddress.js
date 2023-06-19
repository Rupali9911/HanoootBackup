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




const AddAddress = (props) => {
    const { route } = props;
    const Edit = route?.params?.EditData?.item;
    console.log('Check Edit Data : ', route?.params?.EditData)
    const navigation = useNavigation();
    const isFocused = useIsFocused();



    const [inputFields, setInputFields] = useState({
        streetName: '',
        buildingType: '',
        houseFlatNo: '',
        nearByLandMark: '',
        name: '',
        phoneNo: '',
        // deliveryAdd: ''
    });
    const [saveAddAs, setSaveAddAs] = useState('Home');

    useEffect(() => {

        if (Edit) {
            setInputFields({
                streetName: Edit.streetName,
                buildingType: Edit.buildingType,
                houseFlatNo: Edit.houseFlatNo,
                nearByLandMark: Edit.nearByLandMark,
                name: Edit.name,
                phoneNo: Edit.phoneNo,
            });
        }
        else {
            setInputFields({
                streetName: '',
                buildingType: '',
                houseFlatNo: '',
                nearByLandMark: '',
                name: '',
                phoneNo: '',
            });
        }
    }, [isFocused]);

    const handleInputChange = (fieldName, value) => {
        const newInputFields = { ...inputFields, [fieldName]: value };
        setInputFields(newInputFields);
    };


    const handleSubmit = async () => {
        const { streetName,
            buildingType,
            houseFlatNo,
            nearByLandMark,
            name,
            phoneNo,
            // deliveryAdd
        } = inputFields;

        if (streetName && buildingType && houseFlatNo && nearByLandMark && name && phoneNo) {
            // Navigate to another screen and pass the input field values


            navigation.navigate('CheckoutScreen', {
                AddressDetail: {
                    streetName,
                    buildingType,
                    houseFlatNo,
                    nearByLandMark,
                    name,
                    phoneNo,
                    saveAddAs
                },
                EDIT: Edit ? true : false

            });
        } else {
            alert('Please fill all the fields');
        }
    };

    return (
        <AppBackground>
            <AppHeader showBackButton heading={'Add Address'} />
            <ScrollView>
                <ProductHeader title={'Address Detail'} />
                <View style={{ zIndex: 2 }}>
                    <AppInput
                        label="Town/City"
                        isDropDown
                        required
                    />
                </View>

                <AppInput
                    label="Street Name"
                    placeholder={'Enter Street Name'}
                    required
                    value={inputFields.streetName}
                    onChangeText={text => handleInputChange('streetName', text)}
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
                    <ToggleButtons Image={Images.HomeButton} Title={'Home'}
                    // onPress={() => setSaveAddAs('Home')}
                    />
                    <ToggleButtons Image={Images.HomeButton} Title={'Office'}
                    // onPress={() => setSaveAddAs('Office')} 
                    />
                </View>
                <AppButton label={'Save Address'} containerStyle={{ marginVertical: '5%' }} onPress={handleSubmit} />
            </ScrollView>
        </AppBackground>
    )
}

export default AddAddress

const styles = StyleSheet.create({

})