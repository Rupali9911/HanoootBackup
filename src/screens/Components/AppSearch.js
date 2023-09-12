
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import Fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
import SVGS from '../../constant/Svgs';
import { useDispatch } from 'react-redux';
import { globalSearchAPICall } from '../Store/actions/productListAction';
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../utility';
const { SearchGrayIcon, SearchArrow, CrossIcon } = SVGS;


const AppSearch = (props) => {
  // const [searchTxt, setSearchTxt] = useState('');
  const [loading, setloading] = useState(false);

  const [searchTxt, setSearchTxt] = useState('');

  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();

  const navigation = useNavigation();

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     searchText();
  //   }, 1000);
  // }, [searchTxt]);

  useEffect(() => {
    if (searchTxt !== '') {
      setloading(true);
      const delayDebounceFn = setTimeout(() => {
        dispatch(globalSearchAPICall(searchTxt))
          .then(response => {
            console.log('search result  :', response)
            setloading(false);
            if (
              response?.data?.product.length > 0
            ) {
              console.log('if')
              setSearchData(response?.data?.product);
            } else {
              console.log('else')
              setSearchData([]);
            }
          })
          .catch(err => {
            setloading(false);
            setSearchData([]);
          });
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      setloading(false);
      setSearchData([]);
    }
  }, [searchTxt]);


  console.log('here is an search Data : ', searchData)








  // const searchText = () => {
  //   let filteredName = results.filter((item) => {
  //     return item.title.toLowerCase().match(searchTxt.toLowerCase());
  //   })
  //   if (!results || results != '') {
  //     setSearchData(filteredName);
  //   }
  // }


  const handleFlatListRenderItem = ({ item, index }) => {
    console.log('handleFlatListRenderItem : ', item?.id)
    return (
      <TouchableOpacity style={{
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1,
        flex: 1
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between'
      }}
        onPress={() => navigation.push('ProductDetail', { id: item?.id })}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
            // alignItems: 'center',
            // gap: 10,
            // backgroundColor: 'red'
          }}
          onPress={() => { }}
        >
          {/* <Image source={Images.searchIcon} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: Colors.BLACK5 }} /> */}
          <Text style={{
            fontFamily: fonts.VisbyCF_Medium,
            fontWeight: 600,
            letterSpacing: 0.5,
            lineHeight: 21,
            maxWidth: wp(82.13)
          }} numberOfLines={1}>{item?.title}</Text>
          <View style={{ alignSelf: 'flex-end' }}>
            <SearchArrow />
          </View>
        </View>

      </TouchableOpacity>
      // <Text>{'item?.title'}</Text>
    );
  };




  const keyExtractor = (item, index) => {
    return index;
  };
  return (

    <View >
      <View
        style={styles.searchContainer}>
        <View style={{ justifyContent: 'flex-start', width: wp(5) }}>
          <SearchGrayIcon />
        </View>
        <TextInput
          placeholder={props.placeholderText}
          onChangeText={(text) => {
            setSearchTxt(text);
            text ? props.onChangeText(true) : props.onChangeText(false)
          }}
          value={searchTxt}
          placeholderTextColor={Colors.GRAYDARK}
          style={{ left: 10, alignSelf: 'center', height: '100%', color: Colors.BLACK, width: wp(75) }}
        />
        {
          searchTxt &&
          <TouchableOpacity style={{ justifyContent: 'flex-end', width: wp(5) }} onPress={() => setSearchTxt('')}>
            <CrossIcon />
          </TouchableOpacity>
        }


      </View>
      {/* {loading || searchData?.length ? (
        <View style={styles.listContainer}>
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator color={Colors.themeColor} size={25} />
            </View>
          ) : searchData.length > 0 && searchTxt ? (
            <FlatList
              data={searchData}
              keyboardShouldPersistTaps={'handled'}
              style={{ height: hp(50), backgroundColor: 'green' }}
              renderItem={handleFlatListRenderItem}
              keyExtractor={keyExtractor}
            />
          ) : null}
        </View>
      ) : searchTxt ? (
        <View style={[styles.listContainer, styles.noDataFoundStyle]}>
          <Text>{translate('common.nodatafound')}</Text>
        </View>
      ) : null} */}
      {loading || searchData?.length ? (
        <View >
          {loading ? (
            <View style={styles.listContainer}>
              <ActivityIndicator color={Colors.themeColor} size={25} />
            </View>
          ) : searchData.length > 0 && searchTxt ? (
            <FlatList
              data={searchData}
              keyboardShouldPersistTaps={'handled'}
              style={styles.listContainer}
              renderItem={handleFlatListRenderItem}
              keyExtractor={keyExtractor}
              scrollEnabled={true}
            />
          ) : null}
        </View>
      ) : searchTxt ? (
        <View >
          <View style={styles.listContainer}>
            <Text style={{ textAlign: 'center' }}>{'Oops!! No Products Found'}</Text>
          </View>
        </View>
        // <View >
        //   <Text>{translate('common.nodatafound')}</Text>
        // </View>
      ) : null
      }







      {/* {
        searchData.length && searchTxt ?
          (
            <View >
              <FlatList
                data={searchData}
                keyboardShouldPersistTaps={'handled'}
                style={styles.listContainer}
                renderItem={handleFlatListRenderItem}
                keyExtractor={keyExtractor}
              />
            </View>
          )
          : null
      } */}
    </View>
  )
}

export default AppSearch;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    // zIndex: 1,
    width: Dimensions.get('window').width,
    // position: 'absolute',
    backgroundColor: Colors.WHITE,
    marginTop: hp('1%'),
    borderRadius: wp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
    // minHeight: hp(20),
    minHeight: Dimensions.get('window').height / 2,

    height: hp(50),
  },
  searchContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.GRAYRGBA,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('3%'),
    paddingHorizontal: wp('3%'),
    height: hp(4.93),
    // position: 'absolute',
    // width: wp(100)
  },
  // listContainer: {
  //   flex: 1,
  //   backgroundColor: 'red',
  //   marginTop: hp('0.5%'),
  //   marginHorizontal: wp('2%'),
  //   borderRadius: wp('1%'),
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // loaderContainer: {
  //   padding: wp('2%'),
  // },
  // noDataFoundStyle: {
  //   width: '95%',
  //   paddingVertical: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})
