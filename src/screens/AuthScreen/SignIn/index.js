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
import { maxLength10, maxLength8, maxLength50, validatePhoneNo, validateEmail, validatePassword, maxLength32 } from '../../utils'
import ToggleSwitch from 'toggle-switch-react-native'
import { isValidNumber } from 'react-native-phone-number-input';



const Login = () => {
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const [formattedNum, setFormattedNum] = useState('')
    const [error, setError] = useState('')
    const [toggle, setToggle] = useState('Mobile')

    const navigation = useNavigation();

    const Login = () => {
        const errorList = {}

        if (toggle === 'Mobile') {
            //=============Phone Number Validation================
            if (maxLength10(phoneNo)) {
                errorList.phoneErr = maxLength10(phoneNo)

            } else if (!isValidNumber(formattedNum)) {
                errorList.phoneErr = validatePhoneNo(phoneNo)
            }
        }
        else if (toggle === 'Email') {
            //=============Email Validation================
            if (maxLength50(email)) {
                errorList.emailErr = maxLength50(email)
            }
            else if (validateEmail(email)) {
                errorList.emailErr = validateEmail(email)
            }

            //=============Password Validation================
            if (maxLength8(password)) {
                errorList.passwordErr = maxLength8(password)
            }
            else if (validatePassword(password)) {
                errorList.passwordErr = validatePassword(password)
            }
        }

        setError(errorList)

        //================API Call Fuction================
        if (Object.keys(errorList).length == 0) {
            setError({});
            // checkPhoneNumber(formattedNum)
            navigation.navigate('OtpVerification')
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
                    onSelectSwitch={(value) => {
                        setError({})
                        setToggle(value)
                    }}
                    selectionColor={Colors.themeColor}
                />
                {
                    toggle === 'Mobile' ?
                        <AppInput
                            label={'Mobile Phone Number'}
                            required
                            placeholder={'Enter your phone number'}
                            isNumberField
                            onChangeText={(phoneNo) => {
                                setPhoneNo(phoneNo)
                                setError({ ...error, ['phoneErr']: null })
                            }}
                            value={phoneNo}
                            validate={[maxLength10, validatePhoneNo]}
                            error={error['phoneErr']}
                            onChangeFormattedText={(val) => setFormattedNum(val)}
                        />
                        :
                        (
                            <>
                                <AppInput
                                    label={'Email Address'}
                                    required
                                    placeholder={'Enter Your Email Address'}
                                    onChangeText={(email) => {
                                        setEmail(email)
                                        setError({ ...error, ['emailErr']: null })
                                    }}
                                    value={email}
                                    validate={[maxLength32, validateEmail]}
                                    error={error['emailErr']}
                                />
                                <AppInput
                                    label={'Password'}
                                    placeholder={'Enter your password'}
                                    required
                                    rightComponent
                                    onChangeText={(password) => {
                                        setPassword(password)
                                        if (validatePassword(password) || maxLength8(password)) {
                                        } else {
                                            setError({ ...error, ['passwordErr']: null })
                                        }
                                    }}
                                    value={password}
                                    secureTextEntry={showPassword}
                                    onPasswordPress={() => setShowPassword(!showPassword)}
                                    validate={[maxLength8, validatePassword]}
                                    error={error['passwordErr']}
                                />
                                <TouchableOpacity style={{ margin: '5%' }} onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text style={[styles.text, { textAlign: 'right' }]}>Forgot password?</Text>
                                </TouchableOpacity>
                            </>
                        )
                }

                <AppButton label={'Sign In'} containerStyle={{ marginVertical: '5%' }} onPress={Login} />

                <View style={styles.rowContainer}>
                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor={Colors.themeColor}
                        offColor={Colors.GRAY}
                        size='small'
                        onToggle={(isOn) => setIsEnabled(isOn)}
                    />
                    <Text style={[styles.text, { color: Colors.GRAY3 }]}>Keep me signed in</Text>
                </View>

                <AuthBottomContainer
                    title={'Or Sign In with'}
                    isAccountText={'Don’t have a account ?'}
                    button={' Sign up'}
                    onPressButton={() => navigation.navigate('Signup')}
                />
                
            </KeyboardAwareScrollView>

        </AppBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.themeColor
    },
    rowContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        margin: '5%'
    }

})