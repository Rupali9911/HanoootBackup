import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressDetail from '../../../Components/AddressComponent';
import { useSelector, useDispatch } from 'react-redux';
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import Images from '../../../constant/Images';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import { wp } from '../../../constant/responsiveFunc';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Colors from '../../../constant/Colors';
import { fetchAddressDetails } from '../../Store/actions/checkoutAction';
import Loader from '../../../constant/Loader';

const MyAddress = () => {

    const { addressRecordList, isAddresDetailLoading } = useSelector(state => state.checkoutReducer);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAddressDetails())
    }, [isFocused])

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'My Address'}
            />
            {
                isAddresDetailLoading ?
                    <Loader />
                    :
                    addressRecordList.length > 0 ?
                        <AddressDetail
                            profile={true}
                        />
                        : <EmptyDetailScreen
                            image={Images.EmptyAddress}
                            title={'Whare is your saved address?'}
                            description={'Add an address so we can get cracking on the delivery!'}
                            buttonLabel={'Add Address'}
                            imgStyle={{
                                width: wp(73)
                            }}
                            onpress={() => navigation.navigate('NewAddress', { isProfileScreen: true })}
                        />
            }
            {
                addressRecordList.length ?
                    <TouchableOpacity
                        style={[styles.addButton]}
                        onPress={() => navigation.navigate('NewAddress', { isProfileScreen: true })}>
                        <Image
                            source={Images.PlusWhiteIcon} style={styles.image} />
                    </TouchableOpacity>
                    : null
            }


        </AppBackground>
    )
}

export default MyAddress;

const styles = StyleSheet.create({
    addButton: {
        flex: 1,
        backgroundColor: Colors.YELLOW1,
        height: 48,
        width: 48,
        borderRadius: 48 / 2,
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
    },
    image: {
        height: 21, width: 21, resizeMode: 'contain'
    }
})