
// import { View, Image, TextInput, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import Images from '../../constant/Images';
// import Colors from '../../constant/Colors';
// import Fonts from '../../constant/fonts';

// export default function AppSearch(props) {
//   const [searchTxt, setSearchTxt] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchData, setSearchData] = useState([]);

//   const Arr = [
//     {
//       name: "aaron",
//       position: "developer"
//     },
//     {
//       name: "beth",
//       position: "ui designer"
//     },
//     {
//       name: "cara",
//       position: "developer"
//     },
//     {
//       name: "daniel",
//       position: "content manager"
//     },
//     {
//       name: "ella",
//       position: "cto"
//     },
//     {
//       name: "fin",
//       position: "backend engineer"
//     },
//     {
//       name: "george",
//       position: "developer"
//     },

//   ]

//   useEffect(() => {
//     let developers = Arr.filter(member => member.name === searchTxt.toLowerCase())
//     setSearchData(developers)
//   }, [searchTxt]);


//   const handleFlatListRenderItem = ({ item, index }) => {
//     console.log('items  : ', item)
//     return (
//       // <View style={{ backgroundColor: 'green', padding: 5 }}>
//       <Text style={{ fontSize: 20 }}>{item.username}</Text>

//       // </View>
//     );
//   }


//   const keyExtractor = (item, index) => {
//     return `_${index}`;
//   };

//   const handleSearchList = (text) => {
//       let developers = Arr.filter(member => member.name.toLowerCase() === text.toLowerCase())
//     console.log(developers)
//   }

//   return (
//     <>
//       <View style={styles.searchSection}>
//         <Image source={Images.searchIcon} style={styles.searchIcon} />
//         <TextInput
//           style={styles.input}
//           placeholder={props.placeholderText}
//           placeholderTextColor={Colors.GRAYDARK}
//           // onChangeText={props.onChangeText}
//           onChangeText={(searchString) => {
//             // setTimeout(() => {
//             //   setLoading(true);
//             // }, 2000);
//             handleSearchList(searchString);
//             // setLoading(false);

//           }}
//           value={searchTxt}
//           underlineColorAndroid="transparent"
//         />
//       </View>
//       {/* <View style={styles.separator} /> */}
//       {/* <View style={styles.FlatlistView}>
//         {loading || searchData?.length ? (
//           <View style={styles.listContainer}>
//             {loading ? (
//               <View style={styles.loaderContainer}>
//                 <ActivityIndicator color={Colors.themeColor} size={25} />
//               </View>
//             ) : searchData.length > 0 && searchTxt ? (
//               <FlatList
//                 data={searchData}
//                 keyboardShouldPersistTaps={'handled'}
//                 style={styles.flatlistStyle}
//                 renderItem={handleFlatListRenderItem}
//                 keyExtractor={keyExtractor}
//               />
//             ) : null}
//           </View>
//         ) : searchTxt ? (
//           <View style={[styles.listContainer, styles.noDataFoundStyle]}>
//             <Text>{'No Data Found'}</Text>
//           </View>
//         ) : null}
//       </View> */}
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   searchSection: {
//     // flex: 1,
//     // width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     // backgroundColor: Colors.GRAYRGBA(0.3),
//     backgroundColor: Colors.GRAYRGBA,
//     paddingLeft: 15,
//     margin: 10,
//     borderWidth: 1,
//     borderColor: Colors.GRAY,

//     // width: '100%'

//     // marginHorizontal: 10

//     // backgroundColor: 'blue',
//     // maxWidth: '90%'
//     // width: '90%'
//     // marginHorizontal:10
//   },
//   searchIcon: {
//     // padding: 10,
//   },
//   input: {
//     flex: 1,
//     padding: 5,
//     // backgroundColor: Colors.GRAYRGBA(0.3),
//     // color: 'red',
//     height: 40,
//     borderColor: Colors.GRAY,
//     // fontFamily: Fonts.VISBY_CF,
//     paddingStart: 10,
//   },

//   flatlistStyle: {
//     height: '10%'
//     // height: 10,
//     // backgroundColor: 'red'
//   },
//   FlatlistView: {
//     // padding: 20,
//     flex: 1,
//     position: 'absolute',
//     // alignItems: 'center',
//     width: '100%',
//     top: 60,
//     // backgroundColor: 'red'
//   },
//   listContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: '0.5%',
//     marginHorizontal: '2%',
//     borderRadius: '1%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   noDataFoundStyle: {
//     width: '95%',
//     paddingVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })


import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import Fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';


const AppSearch = (props) => {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const [results, setResults] = useState(
    [
      {
        "id": 1,
        "title": "Apple iPhone 11 Pro Max",
        "price": "1,249.99",
        "image": "https://www.apple.com/iphone-11-pro/images/overview/og.jpg"
      },
      {
        "id": 2,
        "title": "Samsung Galaxy S20 Ultra",
        "price": "1,399.99",
        "image": "https://www.samsung.com/us/smartphones/galaxy-s20-ultra/images/galaxy-s20-ultra_front_black_s1.jpg"
      },
      {
        "id": 3,
        "title": "Google Pixel 4 XL",
        "price": "899.99",
        "image": "https://storage.googleapis.com/madebygoog/v1/Pixel/Pixel4_Black_Zoom.png"
      },
      {
        "id": 4,
        "title": "OnePlus 8 Pro",
        "price": "999.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61aV6J6yCXL._AC_SL1500_.jpg"
      }
    ]
  )

  useEffect(() => {
    setTimeout(() => {
      searchText();
    }, 1000);
  }, [search]);

  const searchText = () => {
    let filteredName = results.filter((item) => {
      return item.title.toLowerCase().match(search.toLowerCase());
    })
    if (!results || results != '') {
      setSearchData(filteredName);
    }
    // else{
    //   props.onChangeText(false)
    // }
  }


  const handleFlatListRenderItem = ({ item, index }) => {
    return (
      <View style={{
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1,

      }}>
        <TouchableOpacity
          // onPress={item.title}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}
        >
          <Image source={Images.searchIcon} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: Colors.BLACK5 }} />

          <Text style={{
            fontFamily: fonts.VisbyCF_Medium,
            fontWeight: 600,
            letterSpacing: 0.5,
            lineHeight: 21
          }}>{item.title}</Text>
        </TouchableOpacity>
      </View>

    );
  };


  const keyExtractor = (item, index) => {
    return index;
};
  return (
    // <View>
    //   {/* <View style={styles.searchSection}> */}
    //   {/* <Image source={Images.searchIcon} style={styles.searchIcon} />
    //     <TextInput
    //       style={styles.input}
    //       placeholder={props.placeholderText}
    //       placeholderTextColor={Colors.GRAYDARK}
    //       // onChangeText={props.onChangeText}
    //       onChangeText={(searchString) => {
    //         // setTimeout(() => {
    //         //   setLoading(true);
    //         // }, 2000);
    //         setSearch(searchString);
    //         // setLoading(false);
    //       }}
    //       value={search}
    //       underlineColorAndroid="transparent"
    //     />
    //   </View> */}
    //   <TextInput
    //     placeholder='Enter'
    //     onChangeText={(text) => setSearch(text)}
    //     value={search}
    //   />
    //   {
    //     searchData.length && search ?
    //       (<FlatList
    //         data={searchData}
    //         keyboardShouldPersistTaps={'handled'}
    //         style={styles.flatlistStyle}
    //         renderItem={handleFlatListRenderItem}
    //         keyExtractor={keyExtractor}
    //       />)
    //       : null
    //   }
    // </View>
    <View>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: Colors.GRAY,
          backgroundColor: Colors.GRAYRGBA,
          flexDirection: 'row',
          marginHorizontal: '5%'
        }}>
        <Image source={Images.searchIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
        <TextInput
          placeholder={props.placeholderText}
          onChangeText={(text) => 
            { setSearch(text);
            // props.onChangeText(true);
            text ? props.onChangeText(true) :  props.onChangeText(false) 
            // props.onChangeText(false);
           }}
          value={search}
          placeholderTextColor={Colors.GRAYDARK}
          style={{ left: 10 }}
        />


      </View>
      {
        searchData.length && search ?
          (
            <View style={{
              listContainer: {

              },
            }}>
              <FlatList
                data={searchData}
                keyboardShouldPersistTaps={'handled'}
                // style={{ position: 'absolute', flex: 1, height: hp(40), width: '100%', top: 35, backgroundColor: Colors.WHITE, borderRadius: 10 }}
                style={{
                  height: hp(20),
                  flex: 1,
                  zIndex: 2,
                  width: wp('95%'),
                  // height: hp(100),
                  position: 'absolute',
                  // top: 100,
                  backgroundColor: Colors.WHITE,
                  marginTop: hp('0.5%'),
                  marginHorizontal: wp('2%'),
                  borderRadius: wp('1%'),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                renderItem={handleFlatListRenderItem}
                keyExtractor={keyExtractor}
              />
            </View>
          )
          : null
      }
    </View>
  )
}

export default AppSearch;

const styles = StyleSheet.create({

})
