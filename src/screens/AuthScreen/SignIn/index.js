import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../constant/Colors'
import { hp } from '../../../constant/responsiveFunc'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthHeader from '../AuthHeader'
import AuthBottomContainer from '../AuthBottomContainer'
import { useNavigation } from '@react-navigation/native'
import AppInput from '../../../constant/AppInput'
import fonts from '../../../constant/fonts'
import AppButton from '../../Components/AppButton'
import CustomSwitch from '../customSwitch'
import { maxLength10, maxLength8, validatePhoneNo, validateEmail, validatePassword, maxLength32 } from '../../utils'


const Login = () => {
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errPhoneNo, setErrPhoneNo] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [errPassword, setErrPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)



    const [toggle, setToggle] = useState('Mobile')








    const navigation = useNavigation();

    const Login = () => {
        let validateNum = 0;

        if (toggle === 'Mobile') {
            if (maxLength10(phoneNo)) {
                setErrPhoneNo(maxLength10(phoneNo));
            } else {
                if (validatePhoneNo(phoneNo)) {
                    setErrPhoneNo(validatePhoneNo(phoneNo));
                } else {
                    validateNum++;
                }
            }
        }
        else {
            if (maxLength32(email)) {
                setErrEmail(maxLength32(email));
            } else {
                if (validateEmail(email)) {
                    setErrEmail(validateEmail(email));
                } else {
                    validateNum++;
                }
            }

            if (maxLength8(password)) {
                setErrPassword(maxLength8(password));
            } else {
                if (validatePassword(password)) {
                    setErrPassword(validatePassword(password));
                } else {
                    validateNum++;
                }
            }
        }

       





    }


    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}>
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />

            <KeyboardAwareScrollView>
                <AuthHeader
                    title={'Sign in to Your Account'}
                />

                <CustomSwitch
                    selectionMode={1}
                    onSelectSwitch={(value) => setToggle(value)}
                    selectionColor={Colors.themeColor}
                />


                {
                    toggle === 'Mobile' ?
                        (<AppInput
                            label={'Mobile Phone Number'}
                            required
                            placeholder={'Enter your phone number'}
                            isNumberField
                            onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
                            value={phoneNo}
                            validate={[maxLength10, validatePhoneNo]}
                            error={errPhoneNo}
                        />)
                        :
                        (
                            <><AppInput
                                label={'Email Address'}
                                required
                                placeholder={'Enter Your Email Address'}
                                onChangeText={(email) => setEmail(email)}
                                value={email}
                                validate={[maxLength32, validateEmail]}
                                error={errEmail}
                            />

                                <AppInput
                                    label={'Password'}
                                    placeholder={'Enter your password'}
                                    required
                                    rightComponent
                                    onChangeText={(password) => setPassword(password)}
                                    value={password}
                                    secureTextEntry={showPassword}
                                    onPasswordPress={() => setShowPassword(!showPassword)}
                                    validate={[maxLength8, validatePassword]}
                                    error={errPassword}
                                />


                                <TouchableOpacity style={{ margin: '5%' }} onPress={() => {navigation.navigate('ForgotPasswordScreen') }}>
                                    <Text style={styles.forgotText}>
                                        Forgot password?</Text>
                                </TouchableOpacity >
                            </>
                        )

                }








                <AppButton label={'Continue'} containerStyle={{ marginVertical: '5%' }} onPress={Login} />
                <AuthBottomContainer
                    title={'Or Sign In with'}
                    isAccountText={'Don’t have a account ?'}
                    button={' Sign up'}
                    onPressButton={() => navigation.navigate('SignUpScreen')}
                />
            </KeyboardAwareScrollView>

        </AppBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    forgotText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.themeColor
    }
})