import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyAddresss from '../../../Components/MyAddress'
import { useSelector, useDispatch } from 'react-redux';
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import Images from '../../../constant/Images';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import { useNavigation } from '@react-navigation/native';


const MyAddress = () => {
    const { ADDRESS_DETAIL } = useSelector(state => state.checkoutReducer);
    const navigation = useNavigation();

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'My Address'}
            />
            {
                ADDRESS_DETAIL.length ?
                    <MyAddresss />
                    : <EmptyDetailScreen
                        image={Images.EmptyAddress}
                        title={'Whare is your saved address?'}
                        description={'Add an address so we can get cracking on the delivery!'}
                        buttonLabel={'Add Address'}
                        imgStyle={{
                            width: wp(73)
                        }}
                        onpress={() => navigation.navigate('AddNewAddress')}
                    />
            }
        </AppBackground>
    )
}

export default MyAddress

const styles = StyleSheet.create({})