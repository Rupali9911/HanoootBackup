
import { View, Image, TextInput, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import Fonts from '../../constant/fonts';
// import { , Text } from 'react-native-paper';


export default function AppSearch(props) {
  const [searchTxt, setSearchTxt] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  // const searchData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Arr = [
    {
      name: "aaron",
      position: "developer"
    },
    {
      name: "beth",
      position: "ui designer"
    },
    {
      name: "cara",
      position: "developer"
    },
    {
      name: "daniel",
      position: "content manager"
    },
    {
      name: "ella",
      position: "cto"
    },
    {
      name: "fin",
      position: "backend engineer"
    },
    {
      name: "george",
      position: "developer"
    },

  ]

  useEffect(() => {

    console.log('searchTxt', searchTxt)
    let developers = Arr.filter(member => member.name === searchTxt.toLowerCase())

    console.log('FilterData : ', developers);

    setSearchData(developers)

    // setTimeout(() => {
    //   setSearchData(developers);

    // }, 5000);
    // if (searchTxt !== '') {
    //   setLoading(true);
    //   if (developers.length > 0) {
    //     setLoading(false);
    //     setSearchData(developers);
    //   }
    //   else {
    //     setLoading(false);
    //     setSearchData([]);
    //   }
    // }
    // else {
    //   setLoading(false);
    //   setSearchData([]);
    // }


    // if (searchTxt !== '') {
    //   setLoading(true);
    //   // console.log('')
    //   // searchData.filter(({item, index}) => {
    //   //   console.log('data', item)
    //   //   // setLoading(false)
    //   //   // item.username === searchTxt ? setSearchData([]) : setSearchData([]);
    //   // })

    //   // let filterData = searchData.filter((item => item.username == "fred"));

    //   // let developers = searchData.filter(member => member.position == "developer")

    //   // console.log('FilterData : ', developers);
    //   // // searchData.filter((data) => {
    //   // //   console.log('Data : ', data);
    //   // })




    // } else {
    //   setLoading(false);
    //   setSearchData([]);
    // }
  }, [searchTxt]);


  const handleFlatListRenderItem = ({ item, index }) => {
    console.log('items  : ', item)
    return (
      // <View style={{ backgroundColor: 'green', padding: 5 }}>
      <Text style={{ fontSize: 20 }}>{item.username}</Text>

      // </View>
    );
  }


  const keyExtractor = (item, index) => {
    return `_${index}`;
  };


  return (
    <>
      <View style={styles.searchSection}>
        <Image source={Images.searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={props.placeholderText}
          placeholderTextColor={Colors.GRAYDARK}
          // onChangeText={props.onChangeText}
          onChangeText={(searchString) => {
            // setTimeout(() => {
            //   setLoading(true);
            // }, 2000);
            setSearchTxt(searchString);
            // setLoading(false);

          }}
          value={searchTxt}
          underlineColorAndroid="transparent"
        />
      </View>
      {/* <View style={styles.separator} /> */}
      {/* <View style={styles.FlatlistView}>
        {loading || searchData?.length ? (
          <View style={styles.listContainer}>
            {loading ? (
              <View style={styles.loaderContainer}>
                <ActivityIndicator color={Colors.themeColor} size={25} />
              </View>
            ) : searchData.length > 0 && searchTxt ? (
              <FlatList
                data={searchData}
                keyboardShouldPersistTaps={'handled'}
                style={styles.flatlistStyle}
                renderItem={handleFlatListRenderItem}
                keyExtractor={keyExtractor}
              />
            ) : null}
          </View>
        ) : searchTxt ? (
          <View style={[styles.listContainer, styles.noDataFoundStyle]}>
            <Text>{'No Data Found'}</Text>
          </View>
        ) : null}
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // backgroundColor: Colors.GRAYRGBA(0.3),
    backgroundColor: Colors.GRAYRGBA,
    paddingLeft: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY

    // marginHorizontal: 10

    // backgroundColor: 'blue',
    // maxWidth: '90%'
    // width: '90%'
    // marginHorizontal:10
  },
  searchIcon: {
    // padding: 10,
  },
  input: {
    flex: 1,
    padding: 5,
    // backgroundColor: Colors.GRAYRGBA(0.3),
    // color: 'red',
    height: 45,
    borderColor: Colors.GRAY,
    // fontFamily: Fonts.VISBY_CF,
    paddingStart: 10,
  },

  flatlistStyle: {
    height: '10%'
    // height: 10,
    // backgroundColor: 'red'
  },
  FlatlistView: {
    // padding: 20,
    flex: 1,
    position: 'absolute',
    // alignItems: 'center',
    width: '100%',
    top: 60,
    // backgroundColor: 'red'
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '0.5%',
    marginHorizontal: '2%',
    borderRadius: '1%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noDataFoundStyle: {
    width: '95%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})