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
import { maxLength10, maxLength8, maxLength50, validatePhoneNo, validateEmail, validatePassword, maxLength32, validateBlankPassword, getFonts } from '../../utils'
import ToggleSwitch from 'toggle-switch-react-native'
import { isValidNumber } from 'react-native-phone-number-input';
import { signInWithPhoneNumber, signInWithEmailAndPwd } from '../../../services/socialAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../Store/actions/userAction'
import { saveUserDetails } from '../../../helpers/user'
import { translate } from '../../../utility'
import { checkPhoneNumberOrEmailExists } from '../../../services/apis'
import { showErrorToast } from '../../../Components/universal/Toast'

const Login = (props) => {
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false);
    const [formattedNum, setFormattedNum] = useState('')
    const [error, setError] = useState('')
    const [mobileSwitch, setMobileSwitch] = useState(true)
    const [loadingButton, setLoadingButton] = useState(false)

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);




    const Login = () => {
        const errorList = {}

        if (mobileSwitch) {
            //=============Phone Number Validation================
            if (maxLength10(phoneNo)) {
                errorList.phoneErr = maxLength10(phoneNo)
            } else if (!isValidNumber(formattedNum)) {
                errorList.phoneErr = validatePhoneNo(phoneNo)
            }
        }
        else if (!mobileSwitch) {
            //=============Email Validation================
            if (maxLength50(email)) {
                errorList.emailErr = maxLength50(email)
            } else if (validateEmail(email)) {
                errorList.emailErr = validateEmail(email)
            }

            //=============Password Validation================
            if (validateBlankPassword(password)) {
                errorList.passwordErr = validatePassword(password)
            }
        }

        setError(errorList)

        //================API Call Fuction================
        if (Object.keys(errorList).length == 0) {
            setError({});
            (mobileSwitch) ? signInWithNumber() : signInWithEmail()
        }
    }

    const signInWithNumber = async () => {
        try {
            setLoadingButton(true)
            const res = await checkPhoneNumberOrEmailExists(formattedNum)
            if (!res.success) {
                const result = await signInWithPhoneNumber(formattedNum)
                console.log('Response from signInWithNumber', result)
                setLoadingButton(false)

                navigation.navigate('OtpVerification', {
                    authResult: result,
                    phoneNumber: formattedNum,
                    isFromSignUp: false
                });
            }
            else {
                setLoadingButton(false)
                showErrorToast(translate('common.autherror'), selectedLanguageItem?.language_id === 0 ? res?.message : res?.message)

            }
        } catch (error) {
            setLoadingButton(false);
            showErrorToast();
            console.log('Error from signInWithNumber', error);
        }
    }

    const signInWithEmail = () => {
        console.log('signInWithEmail Email and Password', email, password)
        try {
            setLoadingButton(true);

            signInWithEmailAndPwd(email, password)
                .then((response) => {
                    console.log('Response from signInWithEmailAndPwd', response)
                    console.log('Response from signInWithEmailAndPwd is user object exists', response?.user)
                    // dispatch(setUserData(response?.user))
                    saveUserDetails(response?.user, dispatch)
                    // if (props?.route?.params?.cameFrom) {
                    //     navigation.navigate(props?.route?.params?.cameFrom);
                    // }
                    // else {
                    setLoadingButton(false);

                    navigation.navigate('HomeTab');
                    // }

                }).catch((err) => {
                    setLoadingButton(false);

                    console.log('error signInWithEmail', err)
                })
        } catch (error) {
            setLoadingButton(false);

            console.log('Error from signInWithEmail', error);
        }

    }



    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}>
            <AppHeader
                Logo
                titleComponentStyle={{ backgroundColor: Colors.themeColor }}
                mainContainerStyle={{ height: hp(18.47) }} />

            <KeyboardAwareScrollView>
                <AuthHeader
                    title={translate('common.signintoyouraccount')}
                />
                <CustomSwitch
                    selectionMode={1}
                    onSelectSwitch={(value) => {
                        setError({})
                        setMobileSwitch(value === 'Mobile' ? true : false)
                    }}
                    selectionColor={Colors.themeColor}
                />
                {
                    mobileSwitch ?
                        <AppInput
                            label={translate('common.mobilephonenumber')}
                            required
                            placeholder={translate('common.enteryourphonenumber')}
                            isNumberField
                            onChangeText={(phoneNo) => {
                                setPhoneNo(phoneNo)
                                setError({ ...error, ['phoneErr']: null })
                            }}
                            value={phoneNo}
                            validate={[maxLength10, validatePhoneNo]}
                            error={error['phoneErr']}
                            onChangeFormattedText={(val) => setFormattedNum(val)}
                            maxLength={10}
                        />
                        :
                        (
                            <>
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
                                <AppInput
                                    label={translate('common.password')}
                                    placeholder={translate('common.enteryourpassword')}
                                    required
                                    rightComponent
                                    onChangeText={(password) => {
                                        setPassword(password)
                                        setError({ ...error, ['passwordErr']: null })
                                    }}
                                    value={password}
                                    secureTextEntry={showPassword}
                                    onPasswordPress={() => setShowPassword(!showPassword)}
                                    validate={[maxLength8]}
                                    error={error['passwordErr']}
                                />
                                <View style={{ flexDirection: 'row-reverse', margin: '5%' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                        <Text style={[styles.text, { textAlign: 'right' }]}>{translate('common.forgotPassword')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                }

                <AppButton
                    label={translate('common.signin')}
                    containerStyle={{ marginVertical: '5%' }}
                    onPress={Login}
                    isIndicatorLoading={loadingButton}
                />

                {/* <View style={styles.rowContainer}>
                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor={Colors.themeColor}
                        offColor={Colors.GRAY}
                        size='small'
                        onToggle={(isOn) => setIsEnabled(isOn)}
                    />
                    <Text style={[styles.text, { color: Colors.GRAY3 }]}>Keep me signed in</Text>
                </View> */}

                <AuthBottomContainer
                    title={translate('common.orsigninwith')}
                    isAccountText={translate('common.don’thaveaaccount?')}
                    // button={' Sign up'}
                    isSignUp={false}
                    onPressButton={() => navigation.navigate('Signup')}
                />

            </KeyboardAwareScrollView>

        </AppBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    text: {
        fontFamily: getFonts.MEDIUM,
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