import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Platform, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import fonts from './fonts';
import Colors from './Colors';
import { hp, wp } from './responsiveFunc';
import Images from './Images';
import PhoneInput from "react-native-phone-number-input";
import { COLORS, SVGS } from '../constant'
import { translate } from '../utility';
import { regionCountry } from '../utility';
import { getFonts } from '../screens/utils';
console.log('regionCountry', regionCountry)
const { DropDownIcon, EyeOff, Eye } = SVGS

const heightTextInput = hp('6%')

const AppInput = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const phoneInput = useRef(null);
    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => {
        setIsFocus(false);
    }
    const PasswordErrorRender = (props) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                    source={Images.rightIcon}
                    style={{
                        width: 8,
                        height: 6,
                        resizeMode: 'contain',
                        tintColor: props.isSuccess ? Colors.GREEN : Colors.GRAYDARK
                    }}
                />
                <Text style={[styles.passwordError, { color: props.isSuccess ? Colors.GREEN : Colors.GRAYDARK }]}>{props.label}</Text>
            </View>
        );
    }



    return (
        <View style={styles.mainContainer}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}{props.required && <Text style={{ color: 'red' }}>*</Text>}</Text>

            <View style={styles.container}>
                <View style={styles.inputContainer(isFocus)}>
                    {
                        props.isNumberField ?
                            <PhoneInput
                                ref={phoneInput}
                                // defaultValue={'+964'}
                                defaultCode={props.defaultCode || 'IQ'}
                                layout="first"
                                onChangeText={props.onChangeText}
                                value={props.value}
                                onChangeCountry={props.onChangeCountry}
                                onChangeFormattedText={props.onChangeFormattedText}
                                countryPickerButtonStyle={[styles.countryCodePickerStyle(isFocus), styles.countryButtonPicker]}
                                textInputStyle={styles.input}
                                isValidNumber={true}
                                textInputProps={{
                                    keyboardType: "phone-pad",
                                    onFocus: () => handleFocus(),
                                    onBlur: () => handleBlur(),
                                    selectionColor: Colors.themeColor,
                                    maxLength: 10
                                }}
                                textContainerStyle={styles.countryCodePickerStyle(isFocus)}
                                placeholder={props.placeholder}
                                codeTextStyle={styles.codeText}
                                renderDropdownImage={
                                    <DropDownIcon style={styles.imgDropDwn} />
                                }
                                countryPickerProps={{
                                    countryCodes: ['IQ', 'IN', 'GB', 'AE', 'AU', 'US', 'JO', 'SA', 'KW', 'OM', 'QA', 'EG', 'SY', 'SE', 'CA'],
                                }}
                                {...props}
                            />
                            :
                            <TextInput
                                style={styles.input}
                                placeholder={props.placeholder}
                                onChangeText={props.onChangeText}
                                value={props.value}
                                secureTextEntry={props.secureTextEntry}
                                placeholderTextColor={Colors.GRAYDARK}
                                required={props.required}
                                {...props}
                                // secureTextEntry={showPassword}
                                // onBlur={props.onBlur}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                keyboardType={props.keyboardType}
                                selectionColor={Colors.themeColor}
                            />
                    }
                    {
                        props.rightComponent &&
                        <View style={styles.rightComp}>
                            <TouchableOpacity onPress={props.onPasswordPress}>
                                {/* <Image source={props.secureTextEntry ? Images.Eye : Images.EyeOff}
                                    style={styles.imgEye}
                                /> */}

                                {props.secureTextEntry ? <Eye /> : <EyeOff />}

                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
            {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
            {props.success && <Text style={styles.successMessage}>{props.success}</Text>}
            {
                props.passwordError &&
                <View style={{
                    marginTop: '5%'
                }}>
                    <PasswordErrorRender label={translate('common.mustincludealetter')} isSuccess={props.passwordSuccess} />
                    <PasswordErrorRender label={translate('common.mustincludeanumber')} isSuccess={props.passwordSuccess} />
                    <PasswordErrorRender label={translate('common.charBtn8n30')} isSuccess={props.passwordSuccess} />
                </View>
            }
        </View>
    );
};

export default AppInput

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: '5%',
        marginTop: '5%',
        // zIndex: -1
    },
    label: {
        fontFamily: getFonts.REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginBottom: 5,
        fontWeight: '500',
        color: Colors.PRICEGRAY,
        fontSize: 14
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: heightTextInput,
    },
    inputContainer: isFocus => ({
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: isFocus ? Colors.themeColor : Colors.GRAY,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: Colors.WHITE,
        height: heightTextInput,
    }),
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontFamily: getFonts.REGULAR,
        fontWeight: '500',
        letterSpacing: 0.5,
        width: '100%',
        height: heightTextInput,
        alignSelf: "center",
        color: Colors.BLACK
    },
    errorMessage: {
        fontSize: 14,
        color: Colors.RED1,
        marginTop: 5,
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500
    },
    successMessage: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
    },
    passwordError: {
        fontFamily: getFonts.MEDIUM,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAYDARK
    },
    countryCodePickerStyle: isFocus => ({
        height: heightTextInput,
        borderTopColor: isFocus ? Colors.themeColor : Colors.GRAY,
        borderBottomColor: isFocus ? Colors.themeColor : Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: COLORS.WHITE
    }),
    countryButtonPicker: {
        width: 50,
        borderRightColor: Colors.GRAY,
        borderRightWidth: 1,
    },
    rightComp: {
        right: '5%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        bottom: 0
    },
    imgEye: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    imgDropDwn: {
        right: 5
    },
    codeText: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: '500',
        letterSpacing: 0.5,
        height: heightTextInput,
        lineHeight: Platform.OS === 'android' ? heightTextInput - 7 : heightTextInput,
    }

})