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
import { getStates } from 'country-state-picker';
import { Country, State, City } from 'country-state-city';
import { translate } from '../utility';




const DropdownPicker = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState();

  const IqaqCities = [

    {
      "countryCode": "IQ",
      "latitude": "33.340582",
      "longitude": "44.400878",
      "name": "Baghdad",
      "stateCode": "BG"
    },
    {
      "countryCode": "IQ",
      "latitude": "30.495649",
      "longitude": "47.817352",
      "name": "Basra",
      "stateCode": "BS"
    },
    {
      "countryCode": "IQ",
      "latitude": "35.564069",
      "longitude": "45.432029",
      "name": "Erbil",
      "stateCode": "EB"
    },
    {
      "countryCode": "IQ",
      "latitude": "32.082167",
      "longitude": "46.223617",
      "name": "Najaf",
      "stateCode": "NJ"
    },
    {
      "countryCode": "IQ",
      "latitude": "32.477392",
      "longitude": "44.420829",
      "name": "Karbala",
      "stateCode": "KA"
    },
    {
      "countryCode": "IQ",
      "latitude": "33.308584",
      "longitude": "44.346979",
      "name": "Kirkuk",
      "stateCode": "KI"
    },
    {
      "countryCode": "IQ",
      "latitude": "36.340000",
      "longitude": "43.130001",
      "name": "Duhok",
      "stateCode": "DU"
    },
    {
      "countryCode": "IQ",
      "name": "AI-Anbar",
      "stateCode": "AN"
    },
    {
      "countryCode": "IQ",
      "name": "Babil",
      "stateCode": "BB"
    },
    {
      "countryCode": "IQ",
      "name": "Dhi Qar",
      "stateCode": "DQ"
    },
    {
      "countryCode": "IQ",
      "name": "Diyala",
      "stateCode": "DI"
    },
    {
      "countryCode": "IQ",
      "name": "Maysan",
      "stateCode": "MA"
    },
    {
      "countryCode": "IQ",
      "name": "Muthanna",
      "stateCode": "MU"
    },
    {
      "countryCode": "IQ",
      "name": "Ninawa",
      "stateCode": "NI"
    },
    {
      "countryCode": "IQ",
      "name": "Salah Al-Din",
      "stateCode": "SD"
    },
    {
      "countryCode": "IQ",
      "name": "Sulaymaniyah",
      "stateCode": "SU"
    },
    {
      "countryCode": "IQ",
      "name": "Wasit",
      "stateCode": "WA"
    },
    {
      "countryCode": "IQ",
      "name": "Al-Qādisiyyah",
      "stateCode": "QA"
    },
  ]

  useEffect(() => {
    const array = [];
    //============================================================

    const sortedArr = [...IqaqCities].sort((a, b) =>
      a.name > b.name ? 1 : -1,
    );

    // City.getCitiesOfCountry('IQ').map((item) => {
    sortedArr.map((item) => {
      console.log('getCitiesOfCountry : ', item)
      array.push(
        {
          label: item?.name,
          value: item?.name
        }
      );
    });
    setItems(array);

  }, []);

  // console.log('this is value to show : ', value, setValue)

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

        <Text style={[styles.label, props.labelStyle]}>{translate('common.townCity')}<Text style={{ color: Colors.RED }}>*</Text></Text>


        <DropDownPicker
          open={open}
          value={props.Value}
          // value={value}
          items={items}
          // maxHeight={open ? 500 : 0}
          // minHeight={100}
          // closeAfterSelecting={true}
          // searchable={true}
          // listMode={'MODAL'}
          // defaultValue={props.Value}

          placeholder={translate('common.selectcity')}
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
            // console.log('vacountrylue : ', country)
            if (country) {
              // props.onSetCountry && props.onSetCountry({
              //   // code: value,
              //   name: country.label
              // });
              props.onSetCountry && props.onSetCountry(country.label);
            }
          }}
          style={[styles.pickerStyle, { borderRadius: open ? 0 : 100, borderColor: open ? Colors.themeColor : Colors.GRAY }]}
          // dropDownContainerStyle={styles.dropDownContainer}
          dropDownContainerStyle={{
            borderColor: Colors.themeColor,
            position: 'relative', // to fix scroll issue ... it is by default 'absolute'
            top: 0, //to fix gap between label box and container,
            height: '100%'
          }}
          flatListProps={{
            scrollEnabled: true,
            nestedScrollEnabled: true
          }}
          autoScroll
        // textStyle={styles.title}
        // labelStyle={styles.label}
        // listItemLabelStyle={styles.itemLabel}
        // searchContainerStyle={styles.searchContainer}
        // searchTextInputStyle={styles.searchInput}
        // ArrowUpIconComponent={({ style }) => arrow}
        // ArrowDownIconComponent={({ style }) => arrow}
        />
        {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
      </View>

    </>
  );
}

export default DropdownPicker

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: '5%',
    maxHeight: hp(33.62),
    // marginTop: '5%',
    zIndex: 1,
    marginBottom: 50,
    // backgroundColor: 'green'
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
    // borderColor: Colors.themeColor,
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
    fontFamily: fonts.VISBY_CF_REGULAR,
    lineHeight: 19,
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: '500',
    color: Colors.PRICEGRAY,
    fontSize: 14
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
  // label: {
  //   fontFamily: fonts.VisbyCF_Medium,
  //   lineHeight: 19,
  //   letterSpacing: 0.5,
  //   marginBottom: 5,
  //   fontWeight: '500',
  //   color: Colors.BLACK
  // },
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