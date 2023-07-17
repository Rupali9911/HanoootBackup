import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import { hp, wp } from '../../../constant/responsiveFunc'
import AuthHeader from '../AuthHeader'
import fonts from '../../../constant/fonts'
import AppButton from '../../Components/AppButton'
import { useNavigation } from '@react-navigation/native'

const OtpVerification = () => {

    const navigation = useNavigation();
    const otpInput = useRef([])



    const [otpField, setOtpField] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
        otp6: "",
    })
    const [isFocus, setIsFocus] = useState(false)
    const [seconds, setSeconds] = useState(60)




    useEffect(() => {
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
                        style={styles.otpInput(isFocus)}
                        placeholder={input.placeholder}
                        maxLength={input.maxLength}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            setOtpField({...otpField, [input.stateName]: text})
                            console.log('otpInput : ', otpInput.current[index])
                            
                            // setOtpField({...otpField, [input.stateName]: text}, () => {
                                if(text.length === input.maxLength && input.stateName != 'otp6'){
                                    otpInput.current[index+1].focus()
                                    // otpInput[input.nextField].focus();
                                    // otpInput.current = input.nextField;
                                    // otpInput.current.focus();
                                    // this.ref.input.nextField.focus()
                                    // console.log('otpInput : ', otpInput)

                                    // otpInput = this[input.nextField]
                                    // otpInput.current.focus();

                                }


                            // setOtpField({ [input.stateName]: text }, () => {
                            //     if (text.length == input.maxLength) {
                            //         this.refs[input.nextField].focus();
                            //     }
                            // });
                        }}
                        // onSubmitEditing={}
                        onFocus={() => setIsFocus(true)}
                    ref={ input => otpInput.current[index] = input}
                    // ref={otpInput(input.stateName)}

                    value={otpField[input.stateName]}
                    />
                </View>
            );
        });
    };


    const handleResendOTP = () => {
        setSeconds(60)
    }



    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />
            <AuthHeader
                title={'Verify Your Mobile Number'}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{'Enter your OTP'}</Text>
                <Text style={[styles.text, styles.grayColor]}>{'We have sent a OTP on below mobile'}</Text>
                <Text style={styles.text}>{'+967 945 454 4542'}<Text style={styles.themeColor}>{' Change'}</Text></Text>


                <View style={styles.OTPView}>
                    <View style={styles.otpContainer}>{renderOTPInput()}</View>
                    <View>
                        <Text style={styles.text}>Didn't get the OTP?</Text>
                        <View style={{ height: hp(5), marginTop: 5 }}>
                            {seconds > 0 ? (
                                <Text style={[styles.text, styles.grayColor]}>{`Resend OTP in ${seconds} seconds`}</Text>
                            ) : (
                                <View style={styles.rowContainer}>
                                    <Button title="Resend" onPress={handleResendOTP} style={styles.text} color={Colors.themeColor} /><Text style={[styles.text, styles.grayColor]}>Now</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>


                <AppButton
                    label={'Submit'}
                    onPress={() => navigation.navigate('OtpVerifySuccess')}
                />

            </View>

        </AppBackground>
    )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        margin: '5%',
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
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: '5%',
        // height: 20,
        // width: 20,
        // borderColor: Colors.themeColor,
        // borderWidth: 1

    },
    otpContainer: {
        flexDirection: "row",
        marginBottom: 30,
    },
    otpInputContainer: {
        // borderBottomWidth: 1,
        // borderBottomColor: "#000",
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

