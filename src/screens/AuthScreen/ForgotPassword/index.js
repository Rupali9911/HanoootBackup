import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import { hp } from '../../../constant/responsiveFunc'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthHeader from '../AuthHeader'
import fonts from '../../../constant/fonts'
import AppInput from '../../../constant/AppInput'
import AppButton from '../../Components/AppButton'
import { maxLength32, validateEmail, maxLength50 } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { sendPasswordResetEmail } from '../../../services/socialAuth'
import { translate } from '../../../utility'
const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState({})

    const navigation = useNavigation();

    const forgotPassTapped = () => {
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
            sendForgotEmail()
        }
    }

    const sendForgotEmail = () => {
        console.log('sendForgotEmail called', email)
        sendPasswordResetEmail(email)
            .then((response) => {
                console.log('Response from firebase sendPasswordResetEmail', response)
                navigation.navigate('EmailLinkSuccess')
            })
    }

    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}>
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />

            <KeyboardAwareScrollView>
                <AuthHeader
                    title={translate('common.lostyourpassword')}
                />

                <Text style={styles.text}>{translate('common.emailAssociated')}</Text>

                <AppInput
                    label={translate('common.emailaddress')}
                    required
                    placeholder={translate('common.enteryouremailaddress')}
                    onChangeText={(email) => {
                        setEmail(email)
                        setError({ ...error, ['emailErr']: null })
                    }}
                    value={email}
                    validate={[maxLength32, validateEmail]}
                    error={error['emailErr']}
                />
                <AppButton label={translate('common.continue')} containerStyle={{ marginVertical: '5%' }} onPress={forgotPassTapped} />

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.text, { color: Colors.themeColor, fontWeight: '600' }]}>{translate('common.backtosignin')}</Text>
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