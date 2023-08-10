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


import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from './Colors';
import fonts from './fonts';
import { wp, hp } from './responsiveFunc';
import {getStates} from 'country-state-picker';
import { Country, State, City }  from 'country-state-city';




const DropdownPicker = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState();




  // console.log('get all cities : ', cities )

  // const [countries, setCountries] = useState([
  //   {
  //     "label": "Delhi",
  //     "value": "DL"
  //   },
  //   {
  //     "label": "Mumbai",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Kolkata",
  //     "value": "WB"
  //   },
  //   {
  //     "label": "Chennai",
  //     "value": "TN"
  //   },
  //   {
  //     "label": "Bangalore",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Hyderabad",
  //     "value": "TS"
  //   },
  //   {
  //     "label": "Ahmedabad",
  //     "value": "GJ"
  //   },
  //   {
  //     "label": "Pune",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Surat",
  //     "value": "GJ"
  //   },
  //   {
  //     "label": "Lucknow",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Kanpur",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Nagpur",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Patna",
  //     "value": "BR"
  //   },
  //   {
  //     "label": "Indore",
  //     "value": "MP"
  //   },
  //   {
  //     "label": "Vadodara",
  //     "value": "GJ"
  //   },
  //   {
  //     "label": "Bhopal",
  //     "value": "MP"
  //   },
  //   {
  //     "label": "Ludhiana",
  //     "value": "PB"
  //   },
  //   {
  //     "label": "Agra",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Jaipur",
  //     "value": "RJ"
  //   },
  //   {
  //     "label": "Ghaziabad",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Varanasi",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Srinagar",
  //     "value": "JK"
  //   },
  //   {
  //     "label": "Kota",
  //     "value": "RJ"
  //   },
  //   {
  //     "label": "Jodhpur",
  //     "value": "RJ"
  //   },
  //   {
  //     "label": "Amritsar",
  //     "value": "PB"
  //   },
  //   {
  //     "label": "Visakhapatnam",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Rajkot",
  //     "value": "GJ"
  //   },
  //   {
  //     "label": "Coimbatore",
  //     "value": "TN"
  //   },
  //   {
  //     "label": "Madurai",
  //     "value": "TN"
  //   },
  //   {
  //     "label": "Allahabad",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Noida",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Jabalpur",
  //     "value": "MP"
  //   },
  //   {
  //     "label": "Gwalior",
  //     "value": "MP"
  //   },
  //   {
  //     "label": "Vijayawada",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Kochi",
  //     "value": "KL"
  //   },
  //   {
  //     "label": "Dehradun",
  //     "value": "UA"
  //   },
  //   {
  //     "label": "Ranchi",
  //     "value": "JH"
  //   },
  //   {
  //     "label": "Thiruvananthapuram",
  //     "value": "KL"
  //   },
  //   {
  //     "label": "Guwahati",
  //     "value": "AS"
  //   },
  //   {
  //     "label": "Chandigarh",
  //     "value": "CH"
  //   },
  //   {
  //     "label": "Hubli",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Mysore",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Aurangabad",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Solapur",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Nashik",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Jalandhar",
  //     "value": "PB"
  //   },
  //   {
  //     "label": "Gorakhpur",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Bhubaneswar",
  //     "value": "OD"
  //   },
  //   {
  //     "label": "Kolhapur",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Guntur",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Udaipur",
  //     "value": "RJ"
  //   },
  //   {
  //     "label": "Kurnool",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Bokaro",
  //     "value": "JH"
  //   },
  //   {
  //     "label": "Mangalore",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Tiruchirappalli",
  //     "value": "TN"
  //   },
  //   {
  //     "label": "Belgaum",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Aligarh",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Jamshedpur",
  //     "value": "JH"
  //   },
  //   {
  //     "label": "Bareilly",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Moradabad",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Raipur",
  //     "value": "CG"
  //   },
  //   {
  //     "label": "Shimla",
  //     "value": "HP"
  //   },
  //   {
  //     "label": "Gulbarga",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Tiruppur",
  //     "value": "TN"
  //   },
  //   {
  //     "label": "Gaya",
  //     "value": "BR"
  //   },
  //   {
  //     "label": "Jhansi",
  //     "value": "UP"
  //   },
  //   {
  //     "label": "Rohtak",
  //     "value": "HR"
  //   },
  //   {
  //     "label": "Korba",
  //     "value": "CG"
  //   },
  //   {
  //     "label": "Davanagere",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Ajmer",
  //     "value": "RJ"
  //   },
  //   {
  //     "label": "Kollam",
  //     "value": "KL"
  //   },
  //   {
  //     "label": "Kozhikode",
  //     "value": "KL"
  //   },
  //   {
  //     "label": "Akola",
  //     "value": "MH"
  //   },
  //   {
  //     "label": "Rajahmundry",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Bhilai",
  //     "value": "CG"
  //   },
  //   {
  //     "label": "Kakinada",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Nellore",
  //     "value": "AP"
  //   },
  //   {
  //     "label": "Bhavnagar",
  //     "value": "GJ"
  //   },
  //   {
  //     "label": "Tumkur",
  //     "value": "KA"
  //   },
  //   {
  //     "label": "Bhatinda",
  //     "value": "PB"
  //   },
  //   {
  //     "label": "Raurkela",
  //     "value": "OD"
  //   }]);

  useEffect(() => {
    const array = [];
    // // if ('France') {
      // getStates('in').map((item) => {
      //   array.push(
      //     {
      //       label: item,
      //       value: item
      //     }
      //   );
      // });
      // // setStates(array);
      // setItems(array)


      City.getCitiesOfCountry('IQ').map((item) => {
        array.push(
          {
            label: item?.name,
            value: item?.name
          }
        );
      });
      setItems(array);

      // console.log('cities : ', getCity)

      // console.log('cgecxh state arry : ', array)
      // console.log('cgecxh state arry : ',Country.getCountryByCode())
      // console.log('state  : ',State.getStatesOfCountry('IN'))
    // }
  }, []);

  console.log('this is value to show : ', value, setValue)

  return (
    <>
      <View style={[styles.container, { marginBottom: props.error ? '5%' : 0 }]}>
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
          items={items}
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
            console.log('value : ', value)
            const country = items.find(item => item.value == value);
            console.log('vacountrylue : ', country)
            if (country) {
              // props.onSetCountry && props.onSetCountry({
              //   // code: value,
              //   name: country.label
              // });
              props.onSetCountry && props.onSetCountry(country.label);
            }
          }}
          style={[styles.pickerStyle, { borderRadius: open ? 0 : 100 }]}
          dropDownContainerStyle={styles.dropDownContainer}
        // textStyle={styles.title}
        // labelStyle={styles.label}
        // listItemLabelStyle={styles.itemLabel}
        // searchContainerStyle={styles.searchContainer}
        // searchTextInputStyle={styles.searchInput}
        // ArrowUpIconComponent={({style}) => arrow}
        // ArrowDownIconComponent={({style}) => arrow}
        />
        {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
      </View>

    </>
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
    marginTop: '5%',
    // backgroundColor: 'red',

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
  errorMessage: {
    fontSize: 14,
    color: Colors.RED1,
    marginTop: 5,
    fontFamily: fonts.VisbyCF_Medium,
    fontWeight: 500,
    // marginBottom: '2%'
    // paddingBottom: '2%'
  },
})