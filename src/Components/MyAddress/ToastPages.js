import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import fonts from '../../constant/fonts'
import AppButton from '../../screens/Components/AppButton'
import { useNavigation } from '@react-navigation/native'

const ToastPages = (props) => {
    const navigation = useNavigation();

    return (
        <>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
            }}>
                <Image
                    source={Images.ToastSuccessBanner}
                    style={{
                        height: hp(15),
                        width: wp(34),
                        resizeMode: 'contain'
                    }}

                />
                <Text
                    style={{
                        fontFamily: fonts.VisbyCF_Bold,
                        fontWeight: 700,
                        fontSize: 24,
                        letterSpacing: 0.5,
                        textAlign: 'center'
                    }}

                >{props.route.params.title}</Text>



            </View>
            <AppButton
                label={'Go Back'}
                containerStyle={{ bottom: 50 }}
                onPress={() => navigation.navigate('MyAddress')}
            />
        </>
    )
}

export default ToastPages

const styles = StyleSheet.create({})