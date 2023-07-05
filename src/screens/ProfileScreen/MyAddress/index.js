import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyAddresss from '../../../Components/MyAddress'
import { useSelector, useDispatch } from 'react-redux';
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import Images from '../../../constant/Images';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constant/Colors';


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
                    <MyAddresss
                    // onPressEdit={() => navigation.navigate('AddNewAddress')}

                    />
                    : <EmptyDetailScreen
                        image={Images.EmptyAddress}
                        title={'Whare is your saved address?'}
                        description={'Add an address so we can get cracking on the delivery!'}
                        buttonLabel={'Add Address'}
                        imgStyle={{
                            width: wp(73)
                        }}
                        onpress={() => navigation.navigate('NewAddress')}
                    />
            }
            {
                ADDRESS_DETAIL.length ?
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.navigate('NewAddress')}>
                        <Image
                            source={Images.PlusWhiteIcon} style={{ height: 21, width: 21, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    : null
            }


        </AppBackground>
    )
}

export default MyAddress;

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'red'
    },
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35
    },
    submitButton: {
        // height: 85,
        flex: 1,
        backgroundColor: Colors.YELLOW1,
        // borderColor: "#555555",
        // borderWidth: 0,
        // borderRadius: 0,
        // marginTop: 200,
        height: 48,
        width: 48,
        borderRadius: 48 / 2,
        justifyContent: "center",
        alignItems: 'center',

        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 0
    }
})