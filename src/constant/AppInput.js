import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Platform, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import fonts from './fonts';
import Colors from './Colors';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { hp, wp } from './responsiveFunc';
import Images from './Images';
import PhoneInput from "react-native-phone-number-input";




const AppInput = (props) => {
    const [showPassword, setShowPassword] = useState(true);
    const [password, setPassword] = useState('');
    const [isFocus, setIsFocus] = useState(false)
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    const phoneInput = useRef(null);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = () => setIsFocus(true);

    const handleBlur = () => {
        setIsFocus(false);
    }

    // console.log('check focus : ', props.success)

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
                <Text style={[styles.passwordError, {color: props.isSuccess ? Colors.GREEN : Colors.GRAYDARK}]}>{props.label}</Text>
            </View>
        );
    }

    return (

        // <View style={[styles.inputContainer, props.inputContainerStyle]}>
        //     <Text style={[styles.label, props.labelStyle]}>{props.label}{props.required && <Text style={{ color: 'red' }}>*</Text>}</Text>
        //     <View style={{ height: hp('6%'), flexDirection: 'row' }}>
        //         <TextInput
        //             style={[styles.input(isFocus), props.textInputStyle]}
        //             placeholder={props.placeholder}
        //             onChangeText={props.onChangeText}
        //             value={props.value}
        //             // secureTextEntry={props.secureTextEntry}
        //             placeholderTextColor={Colors.GRAYDARK}
        //             required={props.required}
        //             // {...props}
        //             // secureTextEntry={showPassword}
        //             // onBlur={props.onBlur}
        //             onBlur={handleBlur}
        //             onFocus={handleFocus}
        //             // onSubmitEditing={a => console.log(`onSubmitEditing: ${a}`) }
        //             {...props}
        //         />
        //         {
        //             props.isEyeIconShow &&
        //             <View style={{
        //                 right: '5%',
        //                 position: 'absolute',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 top: 0,
        //                 bottom: 0
        //             }}>
        //                 <TouchableOpacity onPress={toggleShowPassword}>
        //                     <Image source={showPassword && props.value ? Images.Eye : Images.EyeOff}
        //                         style={{
        //                             height: 20,
        //                             width: 20,
        //                             resizeMode: 'contain'
        //                         }}
        //                     />
        //                 </TouchableOpacity>
        //             </View>
        //         }
        //     </View>
        //     {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
        //     {props.success && <Text style={styles.successMessage}>{props.success}</Text>}
        //     {
        //         props.passwordError &&
        //         <View style={{
        //             marginVertical: '5%'
        //         }}>
        //             <PasswordErrorRender label={'Must include a letter'} />
        //             <PasswordErrorRender label={'Must include a number'} />
        //             <PasswordErrorRender label={'Must be 8 -30 characters'} />
        //         </View>
        //     }
        // </View>


        <View style={styles.mainContainer}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}{props.required && <Text style={{ color: 'red' }}>*</Text>}</Text>

            <View style={styles.container}>
                <View style={styles.inputContainer(isFocus)}>
                    {
                        props.isNumberField ?
                            <PhoneInput
                                ref={phoneInput}
                                defaultValue={props.value}
                                defaultCode="IN"
                                layout="first"
                                onChangeText={props.onChangeText}
                                value={props.value}
                                onChangeFormattedText={(text) => {
                                    setFormattedValue(text);
                                }}
                                onChangeCountry={props.onChangeCountry}
                                // onChangeFormattedText={props.onChangeFormattedText}
                                countryPickerButtonStyle={[styles.countryCodePickerStyle(isFocus), styles.countryButtonPicker ]}
                                textInputStyle={styles.input}
                                isValidNumber={true}
                                textInputProps={{
                                    keyboardType: "phone-pad",
                                    onFocus: () => handleFocus(),
                                    onBlur: () => handleBlur(),
                                }}
                                textContainerStyle={styles.countryCodePickerStyle(isFocus)}
                                placeholder={props.placeholder}
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
                            />
                    }

                    {/* <TextInput
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
                    /> */}
                    {
                        props.rightComponent &&
                        <View style={{
                            right: '5%',
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 0,
                            bottom: 0
                        }}>
                            <TouchableOpacity onPress={props.onPasswordPress}>
                                <Image source={props.secureTextEntry || isFocus ? Images.Eye : Images.EyeOff}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        resizeMode: 'contain'
                                    }}
                                />
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
                    marginVertical: '5%'
                }}>
                    <PasswordErrorRender label={'Must include a letter'} isSuccess={props.passwordSuccess}/>
                    <PasswordErrorRender label={'Must include a number'} isSuccess={props.passwordSuccess}/>
                    <PasswordErrorRender label={'Must be 8 -30 characters'} isSuccess={props.passwordSuccess}/>
                </View>
            }

        </View>



    );
};

export default AppInput

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    label: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginBottom: 5,
        fontWeight: '500',
        color: Colors.BLACK
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('6%'),
        // backgroundColor: 'yellow'
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
        height: hp('6%'),
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
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: '500',
        letterSpacing: 0.5,
        // padding: 0
        // backgroundColor: 'red'
    },
    errorMessage: {
        fontSize: 14,
        color: Colors.RED1,
        marginTop: 5,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500
    },
    successMessage: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
    },
    passwordError: {
        //         //styleName: English/Small Text Medium;
        // font-family: Visby CF;
        // font-size: 12px;
        // font-weight: 500;
        // line-height: 17px;
        // letter-spacing: 0.005em;
        // text-align: left;


        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAYDARK

    },
    countryCodePickerStyle: isFocus => ({
        height: hp('6%'),
       
        borderTopColor: isFocus ? Colors.themeColor : Colors.GRAY,
        borderBottomColor: isFocus ? Colors.themeColor : Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: Colors.WHITE
       
    }),
    countryButtonPicker: {
        width: 70,
        borderRightColor: Colors.GRAY,
        borderRightWidth: 1
    }
    // borderTopColor: isFocus ? Colors.themeColor : Colors.GRAY,
    // borderBottomColor: isFocus ? Colors.themeColor : Colors.GRAY,

    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // backgroundColor: Colors.WHITE,
    // height: hp('6%'),



    // container: {
    //     flexDirection: 'column',
    //     marginVertical: 10,
    //   },
    //   labelContainer: {
    //     marginBottom: 5,
    //   },
    //   label: {
    //     fontSize: 16,
    //   },
    //   inputContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderColor: '#ccc',
    //     padding: 10,
    //     borderRadius: 5,
    //   },
    //   input: {
    //     flex: 1,
    //   },
    //   icon: {
    //     fontSize: 16,
    //     paddingHorizontal: 10,
    //   },
    //   modalContainer: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //   },
    //   picker: {
    //     flex: 1,
    //   },
    //   errorContainer: {
    //     marginTop: 5,
    //   },
    //   errorMessage: {
    //     fontSize: 12,
    //     color: '#f00',
    //   },
    //   successContainer: {
    //     marginTop: 5,
    //   },
    //   successMessage: {
    //     fontSize: 12,
    //     color: '#0f0',
    //   },

})