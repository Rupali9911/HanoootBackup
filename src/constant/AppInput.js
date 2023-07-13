import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Platform, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import fonts from './fonts';
import Colors from './Colors';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { hp } from './responsiveFunc';
import Images from './Images';
import { CountryPicker } from "react-native-country-codes-picker";





const AppInput = (props) => {
    const [showPassword, setShowPassword] = useState(true);
    const [password, setPassword] = useState('');
    const [isFocus, setIsFocus] = useState(false)


    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = () => setIsFocus(true);

    const handleBlur = () => setIsFocus(false)

    // console.log('check focus : ', isFocus)

    const PasswordErrorRender = (props) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                    source={Images.rightIcon}
                    style={{
                        width: 8,
                        height: 6,
                        resizeMode: 'contain',
                        tintColor: Colors.GRAYDARK
                    }}
                />
                <Text style={styles.passwordError}>{props.label}</Text>
            </View>
        );
    }

    return (
        <View style={[styles.inputContainer, props.inputContainerStyle]}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}{props.required && <Text style={{ color: 'red' }}>*</Text>}</Text>
            <View style={{ height: hp('6%'), flexDirection: 'row' }}>
                {/* ============================= */}

                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => setShow(true)}
                        style={{
                            width: '80%',
                            height: 60,
                            backgroundColor: 'black',
                            padding: 10,
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20
                        }}>
                            {countryCode}
                        </Text>
                    </TouchableOpacity>

                    <CountryPicker
                        show={show}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                            setCountryCode(item.dial_code);
                            setShow(false);
                        }}
                    />
                </View>




                {/* ============================= */}
                <TextInput
                    style={[styles.input(isFocus), props.textInputStyle]}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    // secureTextEntry={props.secureTextEntry}
                    placeholderTextColor={Colors.GRAYDARK}
                    required={props.required}
                    // {...props}
                    // secureTextEntry={showPassword}
                    // onBlur={props.onBlur}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    // onSubmitEditing={a => console.log(`onSubmitEditing: ${a}`) }
                    {...props}
                />
                {
                    props.isEyeIconShow &&
                    <View style={{
                        right: '5%',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        bottom: 0
                    }}>
                        <TouchableOpacity onPress={toggleShowPassword}>
                            <Image source={showPassword && props.value ? Images.Eye : Images.EyeOff}
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
            {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
            {props.success && <Text style={styles.successMessage}>{props.success}</Text>}
            {
                props.passwordError &&
                <View style={{
                    marginVertical: '5%'
                }}>
                    <PasswordErrorRender label={'Must include a letter'} />
                    <PasswordErrorRender label={'Must include a number'} />
                    <PasswordErrorRender label={'Must be 8 -30 characters'} />
                </View>
            }
        </View>



        // <View style={{
        //     backgroundColor: '#171717',
        //     flex: 1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     paddingHorizontal: 15
        // }}>
        //     <DropDownPicker
        //         open={open}
        //         value={value}
        //         items={items}
        //         setOpen={setOpen}
        //         setValue={setValue}
        //         setItems={setItems}

        //         // theme="LIGHT"
        //         // mode="BADGE"
        //         style={!open && styles.input}
        //                />
        // </View>

        //         <View style={styles.container}>
        //         <View style={styles.labelContainer}>
        //           <Text style={styles.label}>{props.label}</Text>
        //         </View>
        //         <View style={styles.inputContainer}>
        //           <TextInput
        //             style={styles.input}
        //             value={inputValue}
        //             onChangeText={text => setInputValue(text)}
        //           />
        //           <TouchableOpacity onPress={toggleDropdown}>
        //             <Text style={styles.icon}>{props.icon}</Text>
        //           </TouchableOpacity>
        //         </View>
        //         <Modal visible={showDropdown} animationType="slide">
        //           <View style={styles.modalContainer}>
        //             {/* <Picker
        //               selectedValue={selectedValue}
        //               style={styles.picker}
        //               onValueChange={onValueChange}
        //             >
        //               {props.data.map((item, index) => (
        //                 <Picker.Item label={item} value={item} key={index} />
        //               ))}
        //             </Picker> */}
        //             <Picker
        //   selectedValue={selectedLanguage}
        //   onValueChange={(itemValue, itemIndex) =>
        //     setSelectedLanguage(itemValue)
        //   }>
        //   <Picker.Item label="Java" value="java" />
        //   <Picker.Item label="JavaScript" value="js" />
        // </Picker>
        //           </View>
        //         </Modal>
        //         {props.errorMessage && (
        //           <View style={styles.errorContainer}>
        //             <Text style={styles.errorMessage}>{props.errorMessage}</Text>
        //           </View>
        //         )}
        //         {props.successMessage && (
        //           <View style={styles.successContainer}>
        //             <Text style={styles.successMessage}>{props.successMessage}</Text>
        //           </View>
        //         )}
        //       </View>
    );
};

export default AppInput

const styles = StyleSheet.create({
    inputContainer: {
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
    input: isFocus => ({
        borderWidth: 1,
        borderColor: isFocus ? Colors.themeColor : Colors.GRAY,
        // paddingVertical: Platform.OS === 'ios' ? 15 : 8,
        // paddingHorizontal: 20,
        paddingHorizontal: 20,
        // fontSize: 16,
        borderRadius: 100,
        backgroundColor: Colors.WHITE,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: '500',
        letterSpacing: 0.5,
        height: hp('6%'),
        flex: 1,
        alignItems: 'center'
    }),
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

    }



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