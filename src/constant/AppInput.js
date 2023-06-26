import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useRef } from 'react'
import fonts from './fonts';
import Colors from './Colors';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';




const AppInput = (props) => {
    // const [showDropdown, setShowDropdown] = useState(false);
    // const [selectedValue, setSelectedValue] = useState(props.defaultValue);
    // const [inputValue, setInputValue] = useState(props.defaultValue);
    // const [selectedLanguage, setSelectedLanguage] = useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
        {
            "label": "United States",
            "value": "US"
        },
        {
            "label": "Canada",
            "value": "CA"
        },
        {
            "label": "United Kingdom",
            "value": "UK"
        },
        {
            "label": "France",
            "value": "FR"
        },
        {
            "label": "Germany",
            "value": "DE"
        },
        {
            "label": "Australia",
            "value": "AU"
        },
        {
            "label": "Japan",
            "value": "JP"
        },
        {
            "label": "India",
            "value": "IN"
        },
        {
            "label": "China",
            "value": "CN"
        },
        {
            "label": "Italy",
            "value": "IT"
        },
        {
            "label": "Brazil",
            "value": "BR"
        },
        {
            "label": "Mexico",
            "value": "MX"
        },
        {
            "label": "South Africa",
            "value": "ZA"
        },
        {
            "label": "Russia",
            "value": "RU"
        },
        {
            "label": "Spain",
            "value": "ES"
        },
        {
            "label": "Indonesia",
            "value": "ID"
        },
        {
            "label": "Turkey",
            "value": "TR"
        },
        {
            "label": "Netherlands",
            "value": "NL"
        },
        {
            "label": "Switzerland",
            "value": "CH"
        },
        {
            "label": "Argentina",
            "value": "AR"
        },
        {
            "label": "Austria",
            "value": "AT"
        },
        {
            "label": "Belgium",
            "value": "BE"
        },
        {
            "label": "Greece",
            "value": "GR"
        },
        {
            "label": "Hong Kong",
            "value": "HK"
        },
        {
            "label": "Ireland",
            "value": "IE"
        },
        {
            "label": "Israel",
            "value": "IL"
        },
        {
            "label": "Malaysia",
            "value": "MY"
        },
        {
            "label": "New Zealand",
            "value": "NZ"
        },
        {
            "label": "Philippines",
            "value": "PH"
        },
        {
            "label": "Poland",
            "value": "PL"
        },
        {
            "label": "Singapore",
            "value": "SG"
        },
        {
            "label": "South Korea",
            "value": "KR"
        },
        {
            "label": "Sweden",
            "value": "SE"
        },
        {
            "label": "Thailand",
            "value": "TH"
        }
    ]);


    // const toggleDropdown = () => {
    //     setShowDropdown(!showDropdown);
    // };

    // const onValueChange = (value, index) => {
    //     setSelectedValue(value);
    //     setInputValue(value);
    //     props.onValueChange(value, index);
    // };

    // const pickerRef = useRef();

    // function open() {
    //     pickerRef.current.focus();
    // }

    // function close() {
    //     pickerRef.current.blur();
    // }

    return (
        <View style={[styles.inputContainer, props.inputContainerStyle]}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}{props.required && <Text style={{ color: 'red' }}>*</Text>}</Text>
            {
                props.isDropDown ? 
                
                // <View style={{zIndex: 2}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={!open ? styles.input : { borderWidth: 0 }}
                    dropDownContainerStyle={{ borderWidth: 0 }}
                    dropDownDirection="BOTTOM"
                />
                // </View>
                 : 
                // <View style={open ? {zIndex: -1} : {}}>
                <TextInput
                    style={[styles.input, props.textInputStyle]}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    secureTextEntry={props.secureTextEntry}
                    placeholderTextColor={Colors.GRAYDARK}
                    required={props.required}
                />
                // </View>

            }
            {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
            {props.success && <Text style={styles.successMessage}>{props.success}</Text>}
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
        fontWeight: '500'
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.GRAY,
        paddingVertical: 15,
        // paddingHorizontal: 20,
        paddingHorizontal: 20,
        // fontSize: 16,
        borderRadius: 100,
        backgroundColor: Colors.WHITE,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: '500',
        letterSpacing: 0.5
    },
    errorMessage: {
        fontSize: 14,
        color: "red",
        marginTop: 5,
    },
    successMessage: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
    },



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