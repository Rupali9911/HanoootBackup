import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import { hp, wp } from '../../../constant/responsiveFunc'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthHeader from '../AuthHeader'
import fonts from '../../../constant/fonts'
import AppInput from '../../../constant/AppInput'
import AppButton from '../../Components/AppButton'
import { maxLength10, maxLength32, validatePhoneNo, validateEmail, maxLength50 } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import CustomSwitch from '../customSwitch'

const ForgotPassword = () => {
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [errPhoneNo, setErrPhoneNo] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [toggle, setToggle] = useState('Mobile')
    const [error, setError] = useState({})

    const navigation = useNavigation();

    const ForgotPassword = () => {

        const errList = {}

        if (maxLength50(email)) {
            errList.emailErr = maxLength32(email)
        }
        else if (validateEmail(email)) {
            errList.emailErr = validateEmail(email)
        }
        
        setError(errList)

        if (Object.keys(errList).length == 0) {
            setError({});
            navigation.navigate('EmailLinkSuccess')
        }


        // if (toggle === 'Mobile') {
        //     if (maxLength10(phoneNo)) {
        //         errList.phoneErr = maxLength10(phoneNo)
        //     }
        //     else if (validatePhoneNo(phoneNo)) {
        //         errList.phoneErr = validatePhoneNo(phoneNo)
        //     }
        //     else {
        //         navigation.navigate('OtpVerification', { contactNo: phoneNo })
        //     }
        //     setError(errList);
        // }
        // else if (toggle === 'Email') {
        //     if (maxLength32(email)) {
        //         errList.emailErr = maxLength32(email)
        //     }
        //     else if (validateEmail(email)) {
        //         errList.emailErr = validateEmail(email)
        //     }
        //     else {
        //         navigation.navigate('NewPasswordScreen')
        //     }
        //     setError(errList);
        // }
    }

    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}>
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />

            <KeyboardAwareScrollView>
                <AuthHeader
                    title={'Lost Your Password?'}
                />

                <Text style={styles.text}>Enter the email associated with your Hanooot account.</Text>

                <AppInput
                    label={'Email Address'}
                    required
                    placeholder={'Enter Your Email Address'}
                    onChangeText={(email) => {
                        setEmail(email)
                        setError({})
                    }}
                    value={email}
                    validate={[maxLength32, validateEmail]}
                    error={error['emailErr']}
                />
                <AppButton label={'Continue'} containerStyle={{ marginVertical: '5%' }} onPress={ForgotPassword} />

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.text, { color: Colors.themeColor, fontWeight: '600' }]}>Back to Sign In</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

        </AppBackground>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5,
        textAlign: 'center',
        fontWeight: 500,
        margin: '5%'



    }
})