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
import { maxLength32, maxLength10, validatePhoneNo, validateUserName, validatePassword, maxLength8, validateFullName } from '../../utils';
import { isValidNumber } from 'react-native-phone-number-input';
import AuthHeader from '../AuthHeader';
import { useNavigation } from '@react-navigation/native';
import { CHECK_PHONE_NUMBER } from '../../../utility/apiUrls'
import sendRequest from '../../../services/axios/AxiosApiRequest'

const Signup = () => {
    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [formattedNum, setFormattedNum] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errUsername, setErrUsername] = useState(false);
    const [errPhoneNo, setErrPhoneNo] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [errPassword, setErrPassword] = useState(false);
    const [successPassword, setSuccessPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const navigation = useNavigation();

    const Signup = () => {
        let validateNum = 0;

        if (maxLength32(name)) {
            setErrUsername(maxLength32(name));
        } else {
            if (validateFullName(name)) {
                setErrUsername(validateFullName(name));
            } else {
                console.log('Name validated')
                validateNum++;
            }
        }

        if (maxLength10(phoneNo)) {
            setErrPhoneNo(maxLength10(phoneNo));
        } else {
            if (!isValidNumber(formattedNum)) {
                setErrPhoneNo(validatePhoneNo(phoneNo));
            } else {
                validateNum++;
            }
        }
        if (validatePassword(password)) {
            setErrPassword(validatePassword(password));
            setSuccessPassword(false)
        } else {
            setSuccessPassword(true)
            validateNum++;
        }

        // Call check phone API
        if (validateNum === 3) {
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
                //  navigation.navigate('OtpVerification')
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
                <AuthHeader title={'Create Your Account'} />
                <AppInput
                    label={'Your Name'}
                    placeholder={'Enter your Name'}
                    required
                    onChangeText={(name) => {
                        setName(name);
                        setErrUsername(false);
                    }}
                    value={name}
                    validate={[maxLength32, validateUserName]}
                    error={errUsername}
                />

                <AppInput
                    label={'Mobile Phone Number'}
                    placeholder={'Enter your phone number'}
                    required
                    isNumberField
                    onChangeText={(phoneNo) => {
                        setPhoneNo(phoneNo)
                        setErrPhoneNo(false)
                    }}
                    value={phoneNo}
                    validate={[maxLength10, validatePhoneNo]}
                    error={errPhoneNo}
                    onChangeCountry={(val) => console.log(val)}
                    onChangeFormattedText={(val) => setFormattedNum(val)}
                />

                <AppInput
                    label={'Email'}
                    placeholder={'Enter your eamil'}
                    onChangeText={(email) => {
                        setEmail(email)
                        setErrEmail(false)
                    }}
                    value={email}
                    error={errEmail}
                    maxLength={50}
                />

                <AppInput
                    label={'Password'}
                    placeholder={'at least 8 characters'}
                    required
                    rightComponent
                    passwordError
                    onChangeText={(password) => {
                        setPassword(password)
                        setErrPassword(false)
                        if (validatePassword(password)) {
                            setSuccessPassword(false)
                        } else {
                            setSuccessPassword(true)
                        }
                    }}
                    value={password}
                    validate={[maxLength8, validatePassword]}
                    error={errPassword}
                    passwordSuccess={successPassword}
                    secureTextEntry={showPassword}
                    onPasswordPress={() => setShowPassword(!showPassword)}
                />
                <View style={{ marginHorizontal: '3%' }}>
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
                    onPressButton={() => navigation.navigate('LoginScreen')}
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
