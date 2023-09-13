
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
  const [loading, setloading] = useState(false);

  const [searchTxt, setSearchTxt] = useState('');

  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();

  const navigation = useNavigation();


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




  const handleFlatListRenderItem = ({ item, index }) => {
    console.log('handleFlatListRenderItem : ', item?.id)
    return (
      <TouchableOpacity style={{
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1,
        flex: 1
      }}
        onPress={() => navigation.push('ProductDetail', { id: item?.id })}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          onPress={() => { }}
        >
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
            <Text style={{ textAlign: 'center' }}>{translate('common.oopsNoProduct')}</Text>
          </View>
        </View>
      ) : null
      }
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
