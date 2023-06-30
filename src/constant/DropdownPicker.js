// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedValue: 'Select an item',
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>React Native Dropdown Picker</Text>
//         <DropDownPicker
//           items={[
//             {label: 'Item 1', value: 'item1'},
//             {label: 'Item 2', value: 'item2'},
//             {label: 'Item 3', value: 'item3'},
//             {label: 'Item 4', value: 'item4'},
//           ]}
//           defaultValue={this.state.selectedValue}
//           containerStyle={{height: 40}}
//           style={{backgroundColor: '#fafafa'}}
//           itemStyle={{
//             justifyContent: 'flex-start'
//           }}
//           dropDownStyle={{backgroundColor: '#fafafa'}}
//           onChangeItem={item => this.setState({
//             selectedValue: item.value
//           })}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from './Colors';
import fonts from './fonts';
import { wp, hp } from './responsiveFunc';

const DropdownPicker = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [countries, setCountries] = useState([
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
        }]);

    return (
        <View style={styles.container}>
            {/* <DropDownPicker
                items={[
                    { label: 'Item 1', value: 'item1' },
                    { label: 'Item 2', value: 'item2' },
                    { label: 'Item 3', value: 'item3' },
                    { label: 'Item 4', value: 'item4' },
                ]}
                defaultValue={selectedValue}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setSelectedValue(item.value)}
            /> */}

<Text style={[styles.label, props.labelStyle]}>{'Town/City'}<Text style={{ color: 'red' }}>*</Text></Text>


            <DropDownPicker
                open={open}
                value={props.Value}
                // value={value}
                items={countries}
                // closeAfterSelecting={true}
                // searchable={true}
                // listMode={'MODAL'}
                // defaultValue={props.Value}

                placeholder={'Select Country'}
                placeholderStyle={{ 
                 fontFamily: fonts.VisbyCF_Medium,
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    color: Colors.GRAYDARK
                    
                }}
                // searchPlaceholder={'adsdasd'}
                setOpen={setOpen}
                setValue={props.SetValue}
                // setValue={setValue}
                onChangeValue={(value) => {
                    const country = countries.find(item => item.value == value);
                    if (country) {
                        props.onSetCountry && props.onSetCountry({
                            code: value,
                            name: country.label
                        });
                    }
                }}
                style={[styles.pickerStyle, {borderRadius: open ? 0 : 100}]}
                dropDownContainerStyle={styles.dropDownContainer}
                // textStyle={styles.title}
                // labelStyle={styles.label}
                // listItemLabelStyle={styles.itemLabel}
                // searchContainerStyle={styles.searchContainer}
                // searchTextInputStyle={styles.searchInput}
            // ArrowUpIconComponent={({style}) => arrow}
            // ArrowDownIconComponent={({style}) => arrow}
            />
        </View>
    );
}

export default DropdownPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        height: hp('6%'),
        marginTop: '5%'
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
    pickerStyle: {
        // width: wp("39%"),
        // alignSelf: 'center',
        // borderColor: Colors.themeColor,
        // marginVertical: hp("1.5%")

        borderWidth: 1,
        borderColor: Colors.GRAY,
        // paddingVertical: Platform.OS === 'ios' ? 15 : 8,
        // height: hp('6%'),
        // paddingHorizontal: 20,
        paddingHorizontal: 20,
        // fontSize: 16,
        // borderRadius: 100,
        backgroundColor: Colors.WHITE,
        minHeight: hp('6%')
        // height: hp('6%')
        // fontFamily: fonts.VisbyCF_Medium,
        // fontWeight: '500',
        // letterSpacing: 0.5,
        // color: Colors.GRAY
    },
    dropDownContainer: {
        // width: wp("100%"),
        // marginHorizontal: '5%',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        // top: 50,
        alignSelf: 'center',
        // borderWidth: 0.5,
        elevation: 10,
        
    },
    title: {
        // ...CommonStyles.text(Fonts.ARIAL_BOLD, Colors.titleColor, RF(1.6)),
        fontWeight: "700",
        marginHorizontal: wp('2%'),
        color: 'red'
    },
    label: {
        // ...CommonStyles.text(Fonts.ARIAL_BOLD, Colors.titleColor, RF(1.6)),
        fontWeight: "700",
        // marginHorizontal: wp('2%'),
        //  textAlign: 'center',
    },
    arrow: {
        height: wp("2%"),
        width: wp("3%"),
    },
    searchInput: {
        borderColor: 'red',
        paddingVertical: hp("1.5%"),
        // fontSize: RF(2),
        fontWeight: 'normal'
    },
    searchContainer: {
        borderBottomColor: 'green'
    },
    itemLabel: {
        // fontSize: RF(1.8),
        color: Colors.BLACK,
        fontWeight: 'normal'
    },
    label: {
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginBottom: 5,
        fontWeight: '500',
        color: Colors.BLACK
    },
})