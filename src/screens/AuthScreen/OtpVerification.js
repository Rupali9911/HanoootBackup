import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import Colors from '../../constant/Colors'
import { hp, wp } from '../../constant/responsiveFunc'
import AuthHeader from './AuthHeader'
import fonts from '../../constant/fonts'
import AppButton from '../Components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { signInWithPhoneNumber, confirmOtp, updateDisplayName } from '../../services/socialAuth'
import { setUserData } from '../Store/actions/userAction'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../services/apis'
import { saveUserDetails, updateNameWithSaveDetails } from '../../helpers/user'

const otpObj = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
}

const OtpVerification = ({ route }) => {
    const [authResult, setauthResult] = useState(route?.params?.authResult)
    const isFromSignUp = route?.params?.isFromSignUp
    const phoneNumber = route?.params?.phoneNumber
    // console.log('route?.params?.authResult', route?.params?.authResult)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const otpInput = useRef([])

    const [otpField, setOtpField] = useState(otpObj)
    const [isFocus, setIsFocus] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = otpField;

    useEffect(() => {
        // console.log('check how many times useEffect called : ', seconds)
        let interval;
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000);
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval);

    }, [seconds])

    const renderOTPInput = () => {
        let inputs = [
            {
                placeholder: "0",
                stateName: "otp1",
                maxLength: 1,
                nextField: "otp2",
            },
            {
                placeholder: "0",
                stateName: "otp2",
                maxLength: 1,
                nextField: "otp3",
            },
            {
                placeholder: "0",
                stateName: "otp3",
                maxLength: 1,
                nextField: "otp4",
            },
            {
                placeholder: "0",
                stateName: "otp4",
                maxLength: 1,
                nextField: "otp5",
            },
            {
                placeholder: "0",
                stateName: "otp5",
                maxLength: 1,
                nextField: "otp6",
            },
            {
                placeholder: "0",
                stateName: "otp6",
                maxLength: 1,
            },
        ];

        return inputs.map((input, index) => {
            return (
                <View key={index} style={styles.otpInputContainer}>
                    <TextInput
                        // ref={otpInput => otpInput = input.stateName}
                        autoFocus={index == 0}
                        style={styles.otpInput(isFocus)}
                        placeholder={input.placeholder}
                        maxLength={input.maxLength}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            console.log('text', text)
                            setOtpField({ ...otpField, [input.stateName]: text })
                            if (text.length === input.maxLength && input.nextField) {
                                otpInput.current[index + 1]?.focus()
                            }
                            else if (text.length === 0) {
                                otpInput.current[index - 1]?.focus()
                            }
                        }}
                        onFocus={() => setIsFocus(true)}
                        ref={input => otpInput.current[index] = input}
                        value={otpField[input.stateName]}
                    />
                </View>
            );
        });
    };


    const handleResendOTP = async () => {
        try {
            const result = await signInWithPhoneNumber(phoneNumber)
            console.log('Resend Result', result)
            setSeconds(60)
            setauthResult(result);
            setOtpField(otpObj)
        } catch (error) {
            console.log('Resend Result', error)
        }
    }

    const changeNumber = () => {
        navigation.goBack()
    }
    const verifyOTP = async () => {
        const otp = Object.values(otpField).join('')
        console.log('authResult', authResult)
        // authResult.confirm(otp).then(confirmResult => {
        //     console.log('Verify OTp response', confirmResult?.user)
        //     console.log('Verify OTp response if user exists', confirmResult?.user)
        //     // dispatch(setUserData(userCredentials?.user))
        //     // setauthResult(null)
        //     // setOtpField(otpObj)
        //     navigation.navigate('OtpVerifySuccess')

        //     // result
        //     // {"additionalUserInfo": {"isNewUser": false, "profile": null, "providerId": "phone", "username": null}, "user": {"displayName": null, "email": null, "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": "+919907193313", "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBzKv4EYWGm4_L7qKibexpUQ4To7nd1bizJ1ggBVujenoy-ULpLuV9US7_SOQvgN6K3-zUnEQJCFY1wLwbLHXikoIY0vB1s7vs9AGdUSJlbK1ESdh5Eux2W5zoIWKm0HSk6GT9v_h7_BE0RunrxoRRGmTOnRroVfkUrUk0fc0dB8WZqaw8H8u301DX9ADBWOJ2AnGbpm", "tenantId": null, "uid": "j5v6deVa7pXdZd6TB5wva018ce93"}}
        // })
        //     .catch(error => {
        //         console.log('Verify OTp ERROR', error.code, error.message)
        //         handleAuthError(error)
        //     })

        try {
            const userCredentials = await confirmOtp(authResult, otp)
            console.log('Verify OTp response', userCredentials?.user)
            if (isFromSignUp) {
                await userRegister(userCredentials?.user?.uid, '')
                console.log('userCredentials', userCredentials)
                // if (userDetails?.user) {
                //     await updateDisplayName(userDetails, name)
                //     userDetails.user.displayName = name
                // }
                await updateNameWithSaveDetails(userCredentials, dispatch)
            } else {
                saveUserDetails(userCredentials?.user, dispatch)
            }
            // dispatch(setUserData(userCredentials?.user))
            navigation.navigate('OtpVerifySuccess')
        }
        catch (error) {
            console.log('error from either  confirmOtp or userRegister', error)
        }
    }

    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />
            <AuthHeader
                title={'Your One Time Password'}
            />
            <View style={styles.container}>
                {/* <Text style={styles.title}>{'Enter your OTP'}</Text> */}
                <Text style={[styles.text, styles.grayColor]}>{'We have sent a OTP on below mobile'}</Text>
                <Text style={[styles.rowContainer, { gap: 5 }]}>
                    <Text style={styles.text}>{phoneNumber}</Text>
                    <TouchableOpacity onPress={() => changeNumber()}>
                        <Text style={[styles.text, styles.themeColor]}>
                            {' Change'}
                        </Text>
                    </TouchableOpacity>
                </Text>


                <View style={styles.OTPView}>
                    <View style={styles.otpContainer}>{renderOTPInput()}</View>
                    <View>
                        <Text style={styles.text}>Didn't get the OTP?</Text>
                        <View style={{ height: hp(5), marginTop: 5 }}>
                            {seconds > 0 ? (
                                <Text style={[styles.text, styles.grayColor]}>{`Resend OTP in ${seconds} seconds`}</Text>
                            ) : (
                                <Button title="Resend OTP" onPress={handleResendOTP} style={styles.text} color={Colors.themeColor} />
                            )}
                        </View>
                    </View>
                </View>

                <AppButton
                    label={'Submit'}
                    disabled={(otp1 && otp2 && otp3 && otp4 && otp5 && otp6) ? false : true}
                    onPress={() => verifyOTP()
                    }
                />
                <Button title="Go Back" onPress={() => changeNumber()} style={styles.text} color={Colors.themeColor} />
            </View>

        </AppBackground>
    )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginVertical: '8%',
        gap: 5
    },
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center',
        marginVertical: '2%'
    },
    text: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        textAlign: 'center',
        fontSize: 16
    },
    themeColor: {
        color: Colors.themeColor
    },
    grayColor: {
        color: Colors.GRAY3
    },
    OTPView: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: '5%',
    },
    otpContainer: {
        flexDirection: "row",
        marginBottom: 30,
    },
    otpInputContainer: {
        marginRight: 10,
    },
    otpInput: isFocus => ({
        width: 50,
        height: 50,
        fontSize: 20,
        borderRadius: 25,
        borderColor: isFocus ? Colors.themeColor : Colors.GRAY,
        borderWidth: 1,
        padding: 0,
        margin: 0,
        textAlign: "center",
        backgroundColor: Colors.WHITE
    }),
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
