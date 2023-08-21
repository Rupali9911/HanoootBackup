import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import AppBackground from '../../Components/AppBackground';
import Colors from '../../../constant/Colors';
import AppHeader from '../../Components/AppHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import AppInput from '../../../constant/AppInput';
import AppButton from '../../Components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthBottomContainer from '../AuthBottomContainer';
import { maxLength10, validatePhoneNo, validateUserName, validatePassword, maxLength8, validateFullName, maxLength50, validateEmail } from '../../utils';
import { isValidNumber } from 'react-native-phone-number-input';
import AuthHeader from '../AuthHeader';
import { useNavigation } from '@react-navigation/native';
import CustomSwitch from '../customSwitch';
import { checkPhoneNumberOrEmailExists, userRegister } from '../../../services/apis'
import { createUserWithEmail, updateDisplayName, signInWithPhoneNumber } from '../../../services/socialAuth'
import { saveUserDetails, updateNameWithSaveDetails } from '../../../helpers/user';


const Signup = () => {
    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [formattedNum, setFormattedNum] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [successPassword, setSuccessPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [mobileSwitch, setMobileSwitch] = useState(true)
    const [error, setError] = useState({})

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const signupTapped = () => {
        const errorList = {}

        //=============Fullname Validation================
        if (validateFullName(name)) {
            errorList.nameErr = validateFullName(name)
        }

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
            if (validatePassword(password)) {
                errorList.passwordErr = validatePassword(password)
            }
        }

        setError(errorList)

        //================API Call Fuction================
        if (Object.keys(errorList).length == 0) {
            setError({});
            (mobileSwitch) ? signUpWithNumber() : signUpWithEmail()
        }
    }

    const signUpWithNumber = async () => {
        // checkPhoneNumberOrEmailExists(formattedNum)
        //     .then((response) => {
        //         console.log('Response from Check phone number api', response)
        //         navigation.navigate('OtpVerification', {
        //             authResult: response,
        //             phoneNumber: formattedNum
        //         });
        //     })
        //     .catch((error) => {
        //         console.log('Error from Check phone number api', error)
        //     })

        try {
            await checkPhoneNumberOrEmailExists(formattedNum)
            const authResults = await signInWithPhoneNumber(formattedNum)

            navigation.navigate('OtpVerification', {
                authResult: authResults,
                phoneNumber: formattedNum,
                isFromSignUp: true
            });
        }
        catch (error) {
            console.log('Error from Check phone number api', error)
        }
    }

    const signUpWithEmail = async () => {
        try {
            await checkPhoneNumberOrEmailExists(email)
            const userCredentials = await createUserWithEmail(email, password)
            await userRegister(userCredentials?.user?.uid, password)
            await updateNameWithSaveDetails(userCredentials, dispatch)
            // if (userCredentials?.user) {
            //     await updateDisplayName(userCredentials, name)
            //     userCredentials.user.displayName = name
            //     saveUserDetails(userCredentials?.user)
            // }
            //dispatch(setUserData(userCredentials.user))
            navigation.navigate('Home')
        }
        catch (error) {
            console.log('Error from createUserWithEmail or ', error)
        }


        // createUserWithEmail(email, password)
        //     .then((userCredentials) => {
        //         console.log('response from createUserWithEmail ', userCredentials)
        //         console.log('response from createUserWithEmail ', userCredentials?.user)
        //         const updateName = updateDisplayName(userCredentials, name)
        //         dispatch(setUserData(userCredentials.user))
        //         navigation.navigate('Home')
        //         if (userCredentials?.user) {
        //             await updateDisplayName(userCredentials, name)
        //             dispatch(setUserData(userCredentials.user))
        //             navigation.navigate('Home')
        //         } else {
        //             navigation.navigate('Home')
        //         }

        //         // {"additionalUserInfo": {"isNewUser": true, "profile": null, "providerId": "password", "username": null}, "user": {"displayName": null, "email": "rupali.c@webllisto.com", "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBwOplEQ9FnF13SYraOBrzjrv5Rsoow64JwJLSpM6oBi4OGRbATV1oDxtJlTg6uSGFJMEh-7MdS1raDACEDsZJLqIMwaT-PjhhxQowfa4hZhY40r7bhpZSjKJOwKw53KTtb4PYliM6IcO5VIwjuq8ZWfbpVuPbJnyvgnP_pRohhJCYx_uJTHRIx-iBw_9JCX56_7DbX6h1ng7m1q6h2cfmK3w67gBA", "tenantId": null, "uid": "CiMdFlBYwxUWEOoGOAeXE3GsfjZ2"}}

        //     })
        //     .catch((error) => {
        //         console.log('Error from Check phone number api', error)
        //     })
    }
    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('15%') }} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
                <AuthHeader title={'Register to Hanooot'} />

                <CustomSwitch
                    selectionMode={1}
                    onSelectSwitch={(value) => {
                        setError({})
                        setMobileSwitch(value === 'Mobile' ? true : false)
                    }}
                    selectionColor={Colors.themeColor}
                />

                <AppInput
                    label={'Your Name'}
                    placeholder={'Enter your Name'}
                    required
                    onChangeText={(name) => {
                        setName(name);
                        setError({ ...error, ['nameErr']: null })
                    }}
                    value={name}
                    validate={[validateUserName]}
                    error={error['nameErr']}

                />

                {
                    mobileSwitch ?
                        (
                            <AppInput
                                label={'Mobile Phone Number'}
                                placeholder={'Enter your phone number'}
                                required
                                isNumberField
                                onChangeText={(phoneNo) => {
                                    setPhoneNo(phoneNo)
                                    setError({ ...error, ['phoneErr']: null })
                                }}
                                value={phoneNo}
                                validate={[maxLength10, validatePhoneNo]}
                                error={error['phoneErr']}
                                onChangeCountry={(val) => console.log(val)}
                                onChangeFormattedText={(val) => setFormattedNum(val)}
                            />
                        ) : (
                            <>
                                <AppInput
                                    label={'Email'}
                                    placeholder={'Enter your eamil'}
                                    onChangeText={(email) => {
                                        setEmail(email)
                                        setError({ ...error, ['emailErr']: null })
                                    }}
                                    required
                                    value={email}
                                    maxLength={50}
                                    validate={[maxLength50, validateEmail]}
                                    error={error['emailErr']}
                                />

                                <AppInput
                                    label={'Password'}
                                    placeholder={'at least 8 characters'}
                                    required
                                    rightComponent
                                    passwordError
                                    onChangeText={(password) => {
                                        setPassword(password)
                                        if (validatePassword(password)) {
                                            setSuccessPassword(false)
                                        } else {
                                            setError({ ...error, ['passwordErr']: null })
                                            setSuccessPassword(true)
                                        }
                                    }}
                                    value={password}
                                    validate={[maxLength8, validatePassword]}
                                    error={error['passwordErr']}
                                    passwordSuccess={successPassword}
                                    secureTextEntry={showPassword}
                                    onPasswordPress={() => setShowPassword(!showPassword)}
                                />
                            </>
                        )
                }



                <View style={{ marginHorizontal: '5%', marginVertical: '5%' }}>
                    <Text style={styles.termsPrivacy} >
                        By Continuing, you agree to Hanooot
                        <Text suppressHighlighting={true} onPress={() => console.log('Terms & Condition')} style={{ color: Colors.themeColor }} > Terms and Conditions </Text>
                        and
                        <Text suppressHighlighting={true} onPress={() => console.log('Privacy Policy')} style={{ color: Colors.themeColor }} > Privacy Policy </Text>
                    </Text>
                </View>

                <AppButton
                    label={'Continue'}
                    containerStyle={{ marginVertical: '5%' }}
                    onPress={signupTapped}
                />

                <AuthBottomContainer
                    title={'Or Sign Up with'}
                    isAccountText={'Already have an account?'}
                    // button={' Sign in'}
                    isSignUp={true}
                    onPressButton={() => navigation.navigate('Login')}
                />

            </KeyboardAwareScrollView>
        </AppBackground>
    )
}

export default Signup;

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    titleContainer: {
        paddingVertical: '5%',
        // backgroundColor: 'red',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1
    },
    termsPrivacy: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAY3,
        // marginHorizontal: '5%',
        // backgroundColor: 'red'




        //         //styleName: English/Body Text Medium;
        // font-family: Visby CF;
        // font-size: 14px;
        // font-weight: 500;
        // line-height: 19px;
        // letter-spacing: 0.005em;
        // text-align: left;

    },

    //     //styleName: English/H1 Text Semi Bold;
    // font-family: Visby CF;
    // font-size: 22px;
    // font-weight: 600;
    // line-height: 27px;
    // letter-spacing: 0.005em;
    // text-align: center;

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: Colors.GRAY,
        width: wp(30),
        paddingVertical: '4%',
        gap: 10
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    text: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'

    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: '5%',
        // width: '90%',
        flexWrap: 'wrap',
        textAlign: 'left'
    }
})


//============================================================
