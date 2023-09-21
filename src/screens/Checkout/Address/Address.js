

import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AddressDetail from '../../../Components/AddressComponent';
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../../constant/Images';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Colors from '../../../constant/Colors';
import ProductHeader from '../../Components/Cards/ProductHeader';
import AppButton from '../../Components/AppButton';
import { fetchAddressDetails } from '../../Store/actions/checkoutAction';
import Loader from '../../../constant/Loader';
import fonts from '../../../constant/fonts';
import { translate } from '../../../utility';
import { hp } from '../../../constant/responsiveFunc';

const Address = (props) => {
    const { addressRecordList, isAddresDetailLoading } = useSelector(state => state.checkoutReducer);
    const [addressId, setAddressId] = useState(addressRecordList[0]?.id)
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAddressDetails())
    }, [isFocused])

    const EmptyAddressView = () => {
        return (
            <View style={styles.emptyViewCont}>
                <View style={styles.rowCont}>
                    <Image source={Images.LocationClrImg} style={styles.image} />
                    <View >
                        <Text
                            style={styles.text}
                        >{translate('common.haventAddedAddress')}</Text>
                        <Text style={[styles.text, { color: Colors.PRICEGRAY }]} numberOfLines={2} >{translate('common.pleaseaddnewaddress')}</Text>
                    </View>
                </View>
                <AppButton label={translate('common.addnewaddress')}
                    leftSideImg
                    ImgURI={Images.plusIcon}
                    labelStyle={{ color: Colors.themeColor }}
                    containerStyle={{ backgroundColor: Colors.WHITE }}
                    onPress={() => navigation.navigate('NewAddress', { isProfileScreen: false })}
                />
            </View>
        );
    }

    return (
        <>
            <ProductHeader
                title={translate('common.delieveryAdd')}
                ContainerStyle={{ marginVertical: '5%' }}
            />

            {
                isAddresDetailLoading ?
                    <Loader />
                    :
                    addressRecordList.length > 0 ?
                        <AddressDetail
                            showBottomButton
                            profile={false}
                            showRadioButton
                            getParticularAddId={(id) => setAddressId(id)}
                        />
                        : <EmptyAddressView />


            }

            {/* <View style={[styles.bottomButtonContainer, { zIndex: toastVisible ? -1 : 1 }]}> */}
            <View style={[styles.bottomButtonContainer]}>
                <AppButton label={translate('common.deliverToAdd')}
                    disabled={addressRecordList.length ? false : true}
                    onPress={() => {
                        // const storeUser = async () => {
                        //     try {
                        //         let name = "PAYMENT";
                        //         await AsyncStorage.setItem("BUTTON", name);
                        //     } catch (error) {
                        //         console.log(error);
                        //     }
                        // };
                        // storeUser();
                        props.setScreenType('PAYMENT', addressId)
                    }}
                />
            </View>
            {/* </View> */}
        </>
    )
}

export default Address;

const styles = StyleSheet.create({
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        height: hp(9.85)

    },
    emptyViewCont: {
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderBottomColor: Colors.GRAY,
        borderTopColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        gap: 10
    },
    text: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
        fontSize: 16
    },
    rowCont: {
        flexDirection: 'row', alignItems: 'center', gap: 20,
    },
    image: {
        height: 30, width: 20, resizeMode: 'contain'
    }
})