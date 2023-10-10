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
import { translate } from '../../utility'
import { getFonts } from '../utils'
// import {
//     getHash, requestHint,
//     startOtpListener,
//     useOtpVerify,
// } from 'react-native-otp-verify';

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
    const name = route?.params?.name
    const navigationFromAdd = route?.params?.navigationFromAdd

    // console.log('route?.params?.authResult', route?.params?.authResult)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const otpInput = useRef([])

    const [otpField, setOtpField] = useState(otpObj)
    const [isFocus, setIsFocus] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const [loadingButton, setLoadingButton] = useState(false)

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


    // using methods
    // useEffect(() => {
    //     getHash().then(hash => {
    //         console.log('hash: ', hash)
    //         // use this hash in the message.
    //         // startOtpListener(hash)
    //     }).catch('console.log');

    //     startOtpListener(message => {
    //         console.log('message: ', message)
    //         // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
    //         const otp = /(\d{4})/g.exec(message)[1];
    //         console.log('otp: ', otp)
    //         // setOtp(otp);
    //     });
    //     // return () => removeListener();
    // }, []);

    const renderOTPInput = () => {
        let inputs = [
            {
                placeholder: "",
                stateName: "otp1",
                maxLength: 1,
                nextField: "otp2",
            },
            {
                placeholder: "",
                stateName: "otp2",
                maxLength: 1,
                nextField: "otp3",
            },
            {
                placeholder: "",
                stateName: "otp3",
                maxLength: 1,
                nextField: "otp4",
            },
            {
                placeholder: "",
                stateName: "otp4",
                maxLength: 1,
                nextField: "otp5",
            },
            {
                placeholder: "",
                stateName: "otp5",
                maxLength: 1,
                nextField: "otp6",
            },
            {
                placeholder: "",
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
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => {
                            console.log('text', text)
                            setOtpField({ ...otpField, [input.stateName]: text })
                            // if (text.length === input.maxLength && input.nextField) {
                            //     otpInput.current[index + 1]?.focus()
                            // } else if (text.length === 0) {
                            //     otpInput.current[index - 1]?.focus()
                            // }
                        }}
                        onFocus={() => setIsFocus(true)}
                        ref={input => otpInput.current[index] = input}
                        value={otpField[input.stateName]}
                        onKeyPress={({ nativeEvent }) => {
                            console.log('nativeEvent', nativeEvent, otpField[input.stateName])
                            if (nativeEvent.key === 'Backspace') {
                                otpInput?.current[index - 1]?.focus()
                            } else {
                                otpInput?.current[index + 1]?.focus()
                            }
                        }}
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
            setLoadingButton(true)
            const userCredentials = await confirmOtp(authResult, otp)
            console.log('Verify OTp response', userCredentials?.user)
            if (isFromSignUp) {
                await userRegister(userCredentials?.user?.uid, '')
                console.log('userCredentials', userCredentials)
                // if (userDetails?.user) {
                //     await updateDisplayName(userDetails, name)
                //     userDetails.user.displayName = name
                // }
                console.log('Name from OTP verification', name)

                await updateNameWithSaveDetails(userCredentials, name, dispatch)
            } else {
                saveUserDetails(userCredentials?.user, dispatch)
            }
            // dispatch(setUserData(userCredentials?.user))
            setLoadingButton(false)
            navigationFromAdd ?
                navigation.goBack() :
                navigation.navigate('OtpVerifySuccess')
        }
        catch (error) {
            setLoadingButton(false)
            console.log('error from either  confirmOtp or userRegister', error)
        }
    }

    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader
                Logo
                titleComponentStyle={{ backgroundColor: Colors.themeColor }}
                mainContainerStyle={{ height: hp(18.47) }} />
            <AuthHeader
                title={translate('common.youronetimepassword')}
            />
            <View style={styles.container}>
                {/* <Text style={styles.title}>{'Enter your OTP'}</Text> */}
                <Text style={[styles.text, styles.grayColor]}>{translate('common.OTPSent')}</Text>
                <Text style={[styles.rowContainer, { gap: 5 }]}>
                    <Text style={styles.text}>{phoneNumber}</Text>
                    <Text suppressHighlighting={true} onPress={() => changeNumber()} style={[styles.text, styles.themeColor]}>
                        {` ${translate('common.change')}`}
                    </Text>
                </Text>


                <View style={styles.OTPView}>
                    <View style={styles.otpContainer}>{renderOTPInput()}</View>
                    <View>
                        <Text style={styles.text}>{translate('common.OTPDidntGet')}</Text>
                        <View style={{ height: hp(5), marginTop: 5 }}>
                            {seconds > 0 ? (
                                <Text style={[styles.text, styles.grayColor]}>{`${translate('common.resendotp')} ${translate('common.in')} ${seconds} ${translate('common.seconds')}`}</Text>
                            ) : (
                                <Text suppressHighlighting={true} onPress={() => handleResendOTP()} style={[styles.text, styles.themeColor]}>{translate('common.resendotp')}</Text>
                            )}
                        </View>
                    </View>
                </View>

                <AppButton
                    label={translate('common.submit')}
                    disabled={(otp1 && otp2 && otp3 && otp4 && otp5 && otp6) ? false : true}
                    onPress={() => verifyOTP()}
                    isIndicatorLoading={loadingButton}
                />
                <Text suppressHighlighting={true} onPress={() => changeNumber()} style={[styles.text, styles.themeColor]}>{translate('common.goback')}</Text>
            </View>

        </AppBackground>
    )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginVertical: '8%',
        gap: 5,
        alignItems: 'center'
    },
    title: {
        fontFamily: getFonts.SEMI_BOLD,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center',
        marginVertical: '2%'
    },
    text: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        textAlign: 'center',
        fontSize: 16,

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
        backgroundColor: Colors.WHITE,
        paddingVertical: 0,
        lineHeight: 20,
        color: Colors.BLACK
    }),
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})




// import React, { useEffect } from 'react'
// import { StyleSheet, Button, Text, View } from 'react-native';
// import SmsRetriever from 'react-native-sms-retriever';

// const WELCOME_TEXT = 'React Native SMS Retriever';
// const PHONE_NUMBER_TITLE = 'Request phone number';
// const ADD_SMS_LISTENER_TITLE = 'Add SMS listener';

// const OtpVerification = () => {

//     useEffect(() => {
//         SmsRetriever.startSmsRetriever();
//         const subscription = SmsRetriever.onSmsRetrieved(event => {
//             console.log('OTP received:', event.message);
//             // Extract OTP and autofill in your app
//             // Implement the logic to extract OTP and autofill it in your app
//         });
//         return () => {
//             subscription.remove();
//         };
//     }, []);

//     // Actions

//     // const _onPhoneNumberPressed = async () => {
//     //     try {
//     //         const phoneNumber = await SmsRetriever.requestPhoneNumber();
//     //         alert(`Phone Number: ${phoneNumber}`);
//     //     } catch (error) {
//     //         alert(`Phone Number Error: ${JSON.stringify(error)}`);
//     //     }
//     // };

//     // const _onSmsListenerPressed = async () => {
//     //     try {
//     //         const registered = await SmsRetriever.startSmsRetriever();

//     //         if (registered) {
//     //             SmsRetriever.addSmsListener(this._onReceiveSms);
//     //         }

//     //         alert(`SMS Listener Registered: ${registered}`);
//     //     } catch (error) {
//     //         alert(`SMS Listener Error: ${JSON.stringify(error)}`);
//     //     }
//     // };

//     // // Handlers

//     // const _onReceiveSms = (event) => {
//     //     alert(event.message);
//     //     SmsRetriever.removeSmsListener();
//     // };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.welcome}>{WELCOME_TEXT}</Text>

//             <View style={styles.space} />

//             <Button
//                 style={styles.button}
//                 title={PHONE_NUMBER_TITLE}
//                 onPress={() => _onPhoneNumberPressed()}
//             />

//             <View style={styles.space} />

//             <Button
//                 style={styles.button}
//                 title={ADD_SMS_LISTENER_TITLE}
//                 onPress={() => _onSmsListenerPressed()}
//             />
//         </View>
//     )
// }

// export default OtpVerification

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center'
//     },
//     space: {
//         margin: 20
//     }
// })




// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import {
//     getHash, requestHint,
//     startOtpListener,
//     useOtpVerify,
// } from 'react-native-otp-verify';

// // const { hash, otp, message, timeoutError, stopListener, startListener } = useOtpVerify({ numberOfDigits: 4 });


// const OtpVerification = () => {
//     const [hashFromMethod, setHashFromMethod] = React.useState();
//     const [otpFromMethod, setOtpFromMethod] = React.useState();
//     const [hint, setHint] = React.useState();


//     const { hash, otp, timeoutError, stopListener, startListener } = useOtpVerify();


//     // using methods
//     // useEffect(() => {
//     //     getHash().then(hash => {
//     //         console.log('hash: ', hash)
//     //         // use this hash in the message.
//     //         // startOtpListener(hash)
//     //     }).catch('console.log');

//     //     startOtpListener(message => {
//     //         console.log('message: ', message)
//     //         // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
//     //         // const otp = /(\d{4})/g.exec(message)[1];
//     //         // console.log('otp: ', otp)
//     //         // setOtp(otp);
//     //     });
//     //     // return () => removeListener();
//     // }, []);

//     // useEffect(() => {
//     //     getHash().then(setHashFromMethod).catch(console.log);
//     //     requestHint().then(setHint).catch(console.log);
//     //     startOtpListener(setOtpFromMethod);
//     // }, []);

//     useEffect(() => {
//         // Function to start OTP listener
//         const startOTPListener = async () => {
//             try {
//                 await getHash().then(hash => {
//                     console.log('Hash:', hash);
//                     // Use this hash in your message
//                 });
//                 startOtpListener(message => {
//                     message = ["xMx9lwYXQ04"];
//                     // Extract OTP from message (e.g., using regex)
//                     const otpMatch = /(\d{4})/g.exec(message);
//                     if (otpMatch && otpMatch[1]) {
//                         const otp = otpMatch[1];
//                         console.log('Extracted OTP:', otp);
//                         // Use this extracted OTP in your application
//                     }
//                 });
//             } catch (error) {
//                 console.error('Error starting OTP listener:', error);
//             }
//         };

//         // Start OTP listener
//         startOTPListener();

//         // Cleanup: Remove the OTP listener when the component is unmounted
//         // return () => removeListener();
//     }, []);



//     return (
//         <View style={styles.container}>
//             <View style={styles.resultView}>
//                 <Text style={styles.resultHeader}>Using Methods</Text>
//                 <Text>Your Hash is: {hashFromMethod}</Text>
//                 <Text>Your message is: {otpFromMethod}</Text>
//                 <Text>Selected Mobile Number is: {hint}</Text>
//             </View>
//             <View style={styles.resultView}>
//                 <Text style={styles.resultHeader}>Using Hook</Text>
//                 <Text>Your Hash is: {hash}</Text>
//                 <Text>Your otp is: {otp}</Text>
//                 <Text>Timeout Error: {String(timeoutError)}</Text>
//             </View>
//         </View>
//     )
// }

// export default OtpVerification

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     resultView: {
//         margin: 10,
//     },
//     resultHeader: {
//         fontSize: 18,
//         marginBottom: 5,
//     },
//     box: {
//         width: 60,
//         height: 60,
//         marginVertical: 20,
//     },
// })