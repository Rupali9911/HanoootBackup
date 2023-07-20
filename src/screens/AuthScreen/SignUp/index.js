import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground';
import Colors from '../../../constant/Colors';
import AppHeader from '../../Components/AppHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import AppInput from '../../../constant/AppInput';
import AppButton from '../../Components/AppButton';
import Images from '../../../constant/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthBottomContainer from '../AuthBottomContainer';
import { maxLength32, maxLength10, validatePhoneNo, validateUserName, validatePassword, maxLength8, validateFullName, maxLength50, validateEmail } from '../../utils';
import { isValidNumber } from 'react-native-phone-number-input';
import AuthHeader from '../AuthHeader';
import { useNavigation } from '@react-navigation/native';
import { CHECK_PHONE_NUMBER } from '../../../utility/apiUrls'
import sendRequest from '../../../services/axios/AxiosApiRequest'
import CustomSwitch from '../customSwitch';

const Signup = () => {
    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [formattedNum, setFormattedNum] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [successPassword, setSuccessPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [toggle, setToggle] = useState('Mobile')
    const [error, setError] = useState({})

    const navigation = useNavigation();

    const Signup = () => {
        const errorList = {}

        //=============Fullname Validation================
        if (validateFullName(name)) {
            errorList.nameErr = validateFullName(name)
        }

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
            checkPhoneNumber(formattedNum)
        }
    }

    const checkPhoneNumber = (phoneNumber) => {
        sendRequest({
            url: CHECK_PHONE_NUMBER,
            method: 'POST',
            data: {
                phone_number: phoneNumber
            }
        })
            .then(response => {
                console.log('Response from Check phone number api', response)
                 navigation.navigate('OtpVerification')
            })
            .catch(error => {
                console.log('Error from Check phone number api', error)
            })
    };


    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />
            <KeyboardAwareScrollView>
                <AuthHeader title={'Register to Hanooot'} />

                <CustomSwitch
                    selectionMode={1}
                    onSelectSwitch={(value) => {
                        setError({})
                        setToggle(value)
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
                    toggle === 'Mobile' ?
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
                                    validate={[maxLength50, validatePhoneNo]}
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
                                        if (validatePassword(password) || maxLength8(password)) {
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



                <View style={{ marginHorizontal: '3%', marginVertical: '5%' }}>
                    <Text style={styles.termsPrivacy} >
                        By Continuing, you agree to Hanooot
                        <TouchableOpacity onPress={() => console.log('Terms & Condition')}>
                            <Text style={{ color: Colors.themeColor }} > Terms and Conditions </Text>
                        </TouchableOpacity>
                        and
                        <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
                            <Text style={{ color: Colors.themeColor }} > Privacy Policy </Text>
                        </TouchableOpacity>
                    </Text>
                </View>

                <AppButton
                    label={'Continue'}
                    containerStyle={{ marginVertical: '5%' }}
                    onPress={Signup}
                />

                <AuthBottomContainer
                    title={'Or Sign Up with'}
                    isAccountText={'Already have an account?'}
                    button={' Sign in'}
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
