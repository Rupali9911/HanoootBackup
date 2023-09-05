import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import React, { useEffect } from 'react';
import AppHeader from '../Components/AppHeader';
import AppBackground from '../Components/AppBackground';
import MiniSlider from '../Components/Cards/MiniSlider';
import MultiProductList from '../Components/Cards/MultiProductList';
import Colors from '../../constant/Colors';
import ProductList from '../Components/Cards/ProductList';
import FourImageCarousel from '../Components/Cards/FourImageCarousel';
import Images from '../../constant/Images';
import ProductwithTitle from '../Components/Cards/ProductWithTitle';
import { ProductListData } from '../../constant/DemoArray';
import ProductCollection from '../Components/Cards/ProductCollection';
import HanoootProducts from '../Components/Cards/HanoootProducts';
import DiscountCard from '../Components/Cards/DiscountProduct';
import ProductCategoryWithBG from '../Components/Cards/ProductCategoryWithBG';
import BrandProductCarousal from '../Components/Cards/BrandProductCarousal';
import ProductCategory from '../Components/Cards/ProductCategory';
import ProductHeader from '../Components/Cards/ProductHeader';
import Banner from '../Components/Cards/Banner';
import { hp, wp } from '../../constant/responsiveFunc';
import ListView from '../../Components/ListView';
import fonts from '../../constant/fonts';
import { useNavigation } from '@react-navigation/native';
import FeaturedCategory from '../Components/Cards/FeaturedCategory';
import NewArrivals from '../Components/Cards/NewArrivals';
import RecentlyViewProduct from '../Components/Cards/RecentlyViewProduct';
import SuggestedProducts from '../Components/Cards/SuggestedProducts';
import TopPicks from '../Components/Cards/TopPicks';
import BannerCollage from '../Components/Cards/BannerCollage';
import LargeBanner from '../Components/Cards/LargeBanner';
import BrandList from '../Components/Cards/BrandList';
import CategoryList from '../Components/Cards/CategoryList';
import { getHomeCollection, homeDataLoadingStart } from '../Store/actions/HomeAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../constant/Loader';

export default function HomeScreen() {
   const navigation = useNavigation();

   const dispatch = useDispatch();

   const { isLoading, HomeCollection } = useSelector(state => state.HomeReducer);

   useEffect(() => {
      dispatch(homeDataLoadingStart())
      dispatch(getHomeCollection())
   }, []);

   console.log('check home page data : ', isLoading, HomeCollection);


   // const onShare = async () => {
   //    let productName = 'iPhone'
   //    let productUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
   //    try {
   //       const result = await Share.share({
   //          title: 'Product Detail',
   //          url: productUrl,
   //          message: productName + ' ' + productUrl,
   //       });
   //       if (result.action === Share.sharedAction) {
   //          if (result.activityType) {
   //             // shared with activity type of result.activityType
   //          } else {
   //             // shared
   //          }
   //       } else if (result.action === Share.dismissedAction) {
   //          // dismissed
   //       }
   //    } catch (error) {
   //       console.log('Share error', error)
   //    }
   // };

   // // const onShare = async () => {
   // //    console.log('Share called')
   // //    try {
   // //       const result = await Share.share(options);
   // //       if (result.action === Share.sharedAction) {
   // //          if (result.activityType) {
   // //             // shared with activity type of result.activityType
   // //          } else {
   // //             // shared
   // //          }
   // //       } else if (result.action === Share.dismissedAction) {
   // //          // dismissed
   // //       }
   // //    } catch (error) {
   // //       Alert.alert(error.message);
   // //    }
   // // };

   // const shareTheProductDetails = () => {

   //    // var imageUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
   //    // let shareImage = {
   //    //    title: 'Title', //string
   //    //    message:
   //    //       'Description ',
   //    //    url: imageUrl,
   //    //    // urls: [imageUrl, imageUrl], // eg.'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',
   //    // };
   //    // Share.open(shareImage)
   //    //    .then((res) => {
   //    //       console.log(res);
   //    //    })
   //    //    .catch((err) => {
   //    //       err && console.log(err);
   //    //    });


   //    let imagePath = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
   //    RNFetchBlob.config({
   //       fileCache: true,
   //    })
   //       .fetch('GET', imagePath)
   //       // the image is now dowloaded to device's storage
   //       .then((resp) => {
   //          // the image path you can use it directly with Image component
   //          imagePath = resp.path();
   //          return resp.readFile('base64');
   //       })
   //       .then((base64Data) => {
   //          // here's base64 encoded image
   //          var imageUrl = 'data:image/png;base64,' + base64Data;
   //          // let shareImage = {
   //          //    title: 'Title', //string
   //          //    message:
   //          //       'Description ',
   //          //    url: imageUrl,
   //          //    // urls: [imageUrl, imageUrl], // eg.'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',
   //          // };

   //          Share.open(
   //             {
   //                message: "This is the testing. Please check",
   //                title: 'Share',
   //                url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
   //                type: 'image/jpg',
   //                activityItemSources: [
   //                   {
   //                      linkMetadata: { image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' },
   //                   },
   //                ],
   //             },
   //             {
   //                // Android only:
   //                dialogTitle: 'Share',
   //                // iOS only:
   //                excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
   //             },
   //          );


   //          // Share.open(shareImage)
   //          //    .then((res) => {
   //          //       console.log(res);
   //          //    })
   //          //    .catch((err) => {
   //          //       err && console.log(err);
   //          //    });
   //          // remove the file from storage
   //          return fs.unlink(imagePath);
   //       });
   // }

   const renderProductList = ({ item, index }) => {
      return (
         //    <ListView
         //       item={item}
         //       isExpress
         //       isLike
         //       TotalPrice
         //       DisCountPrice
         //       isDiscountPercent
         //       isRating
         //    />



         <ListView
            // item={item}
            centerImage={'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80'}
            productName={'Apple iPhone 11 Pro Max'}
            price={'5,000.0'}
            // discount={item?.ManagementProductPricing.hanooot_discount}
            averageRating={'4.3'}
            noOfReview={'12'}
            detailId={1}
            // categoryId={item?.category_id}
            isExpress

         />
      );
   }

   const renderWeekDealList = ({ item, index }) => {
      return (
         <ListView
            // item={item}
            centerImage={'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80'}
            productName={'Apple iPhone 11 Pro Max'}
            price={'5,000.0'}
            // discount={item?.ManagementProductPricing.hanooot_discount}
            averageRating={'4.3'}
            noOfReview={'12'}
            detailId={1}
            // categoryId={item?.category_id}
            isExpress

         />
      );
   }



   const keyExtractor = (item, index) => {
      return `_${index}`;
   };

   const renderNoDataFound = () => {
      return (
         <View style={styles.sorryMessageCont}>
            <Text style={styles.sorryMessage}>{'No data found'}</Text>
         </View>
      );
   }

   const renderHomeData = (key, value) => {
      console.log('render Data : ', key, value)
      switch (key) {
         case 'miniSliderJson':
            return <View key={key}><MiniSlider Data={value} /></View>
         case 'featuredCategoryByProductJson':
            return <FeaturedCategory Data={value} />
         case 'brandsListJson':
            return <BrandList Data={value} />
         case 'newArrivalProductListJson':
            return <NewArrivals Data={value} />
         case 'bannerCollageJson':
            return <BannerCollage Data={value} />
         case 'topPicksJson':
            return <TopPicks Data={value} />
         case 'categoryList':
            return <CategoryList Data={value} />
         // case 'variant_style':
         //    return 'Style'
         // case 'variant_model':
         //    return 'Modal'
         // case 'variant_material':
         //    return 'Material'
         // case 'platform':
         //    return 'Platform'
         // case 'edition':
         //    return 'Edition'
         // case 'configuration':
         //    return 'Configuration'
         // case 'variant_book':
         //    return 'Book'
         default:
            return null;
      }
   }


   return (
      <AppBackground >
         <AppHeader placeholderText={'Search'} />
         {
            isLoading && Object.keys(HomeCollection).length === 0 ?
               <Loader />
               :
               Object.keys(HomeCollection).length > 0
                  ?
                  <ScrollView
                     // style={{ flex: 1 }}
                     // showsVerticalScrollIndicator={false}
                     // contentContainerStyle={{ flexGrow: 1 }}
                     nestedScrollEnabled={false}
                     scrollEnabled={true}
                  // overScrollMode={'never'}
                  // removeClippedSubviews={true}
                  >
                     {
                        Object.keys(HomeCollection).map((key, value) => {
                           return (
                              <View key={key}>

                                 {renderHomeData(key, HomeCollection[key])}


                              </View>
                           )

                        })}
                  </ScrollView>



                  // <ScrollView
                  //    showsVerticalScrollIndicator={false}
                  //    nestedScrollEnabled={true}
                  // >
                  //    {/* <MiniSlider />
                  //    <FeaturedCategory />
                  //    <BrandList />
                  //    <NewArrivals />
                  //    <BannerCollage />
                  //    <LargeBanner />
                  //    <TopPicks
                  //       Title={'Perfect gaming Setup'}
                  //       bannerImage={'https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?q=10&h=200'}
                  //    />
                  //    <TopPicks
                  //       Title={'Decore your room'}
                  //       bannerImage={'https://img.freepik.com/free-vector/gradient-sales-banner-with-photo_23-2149020413.jpg'}
                  //    />
                  //    <RecentlyViewProduct />
                  //    <SuggestedProducts />
                  //    <CategoryList title={'Electronic'} />
                  //    <CategoryList title={'Home Appliances '} />
                  //    <CategoryList title={'Gaming'} />
                  //    <CategoryList title={'Computer & Office'} />
                  //    <CategoryList title={'Phone & Tablet'} /> */}

                  //    renderHomeData(HomeCollection)

                  // </ScrollView>
                  :
                  renderNoDataFound()

         }












      </AppBackground>
   )
}

const styles = StyleSheet.create({
   circleImgView: {
      backgroundColor: Colors.YELLOWRGBA,
      // justifyContent: 'center',
      height: hp(13),
      width: wp(28),
      borderRadius: 100,
      left: 10
      // alignItems: 'center',
      // paddingVertical: 15,
      // paddingHorizontal: 50,
   },
   offerAvail: {
      fontWeight: 600,
      fontFamily: fonts.VisbyCF_Demibold,
      letterSpacing: 0.5,

      color: Colors.themeColor,
      paddingVertical: 10,
      fontSize: 12
   },
   sorryMessageCont: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   sorryMessage: {
      fontSize: 15,
      fontFamily: fonts.VisbyCF_Demibold,
   },
})





// import React, { Component, useState } from 'react';
// import { StyleSheet, View, TextInput, Button, FlatList, TouchableOpacity, Text } from 'react-native';
// import { addPlace } from '../Store/actions/placeAction';
// import {useSelector, useDispatch} from 'react-redux';
// export default function HomeScreen() {
//    const {places} = useSelector(state => state.placeReducer)
//    console.log('array return from reducer : ', places)

//    const dispatch = useDispatch();

//    const[placeName, setPlaceName] = useState('')



//    state = {
//       placeName: '',
//       places: []
//    }

//    placeSubmitHandler = () => {
//       if (placeName.trim() === '') {
//          return;
//       }
//       // this.props.add(this.state.placeName);
//       dispatch(addPlace(placeName))
//    }

//    placeNameChangeHandler = (value) => {
//       // this.setState({
//       //    placeName: value
//       // });
//       setPlaceName(value)
//    }

//    placesOutput = () => {
//       return (
//          <FlatList style={styles.listContainer}
//             data={places}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={info => (
//                // <ListItem
//                //    placeName={info.item.value}
//                // />
//                <TouchableOpacity>
//                <View style = { styles.listItem }>
//                  <Text>{ info.item.value }</Text>
//                </View>
//              </TouchableOpacity>
//             )}
//          />
//       )
//    }

//    return (
//       <View style={styles.container}>
//          <View style={styles.inputContainer}>
//             <TextInput
//                placeholder="Seach Places"
//                style={styles.placeInput}
//                value={placeName}
//                onChangeText={this.placeNameChangeHandler}
//             ></TextInput>
//             <Button title='Add'
//                style={styles.placeButton}
//                onPress={this.placeSubmitHandler}
//             />
//          </View>
//          <View style={styles.listContainer}>
//             {this.placesOutput()}
//          </View>
//       </View>
//    );
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     paddingTop: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%'
//   },
//   placeInput: {
//     width: '70%'
//   },
//   placeButton: {
//     width: '30%'
//   },
//   listContainer: {
//     width: '100%'
//   }
// });