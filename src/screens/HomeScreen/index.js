import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import React from 'react';
import AppHeader from '../Components/AppHeader';
import AppBackground from '../Components/AppBackground';
import BannerCarousel from '../Components/Cards/BannerCarousel';
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


export default function HomeScreen() {
   const navigation = useNavigation();
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


   return (
      <AppBackground >
         <AppHeader placeholderText={'Search'} />
         {/* <TouchableOpacity onPress={() => { onShare() }}>
            <Text>{'Share'}</Text>
         </TouchableOpacity> */}
         <ScrollView showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ flex: 1, zIndex: -1 }}>
            <View style={{
               backgroundColor: Colors.lightBlue,
               paddingHorizontal: 20,
               flexDirection: 'row',
               alignItems: 'center',
               gap: 5
            }}>
               <Image source={Images.LocationIcon} style={{ height: 10, width: 10, resizeMode: 'contain', tintColor: Colors.themeColor }} />
               <Text style={styles.offerAvail}>Deliver to Mohammed - Basra</Text>
            </View>


            <BannerCarousel />
            <FourImageCarousel title={'Smart Phones'} priceOff={'Up to 30% off'} />

            <ProductHeader title={'New Arrivals'} RightText={'See All'} />

            {/* <ProductList
                     Data={ProductListData}
                     isExpress
                     isLike
                     TotalPrice
                     DisCountPrice
                     isDiscountPercent
                     isRating
                     isBrand
                     numColumns={2}
                  /> */}

            <FlatList
               data={ProductListData}
               renderItem={renderProductList}
               keyExtractor={keyExtractor}
               horizontal
               showsHorizontalScrollIndicator={false}
               style={{ marginHorizontal: '5%', marginVertical: '2%' }}
            />

            <ProductList
               isBrand
            />

            <Banner Image={Images.urdu} />

            <ProductHeader title={'This weeks deals'} isSale={'End in 04: 10:24'} RightText={'See All'} />

            {/* <ProductList
                     Data={ProductListData}
                     isLike
                     isPriceButton
                     DisCountPrice
                     PriceInGreen
                  /> */}
            <FlatList
               data={ProductListData}
               renderItem={renderWeekDealList}
               keyExtractor={keyExtractor}
               horizontal
               showsHorizontalScrollIndicator={false}
               style={{ marginHorizontal: '5%', marginVertical: '2%' }}

            />

            <ProductCollection />

            <MultiProductList title={'Pick up where you left off'} />

            <MultiProductList title={'Best Picks for you'} />

            <ProductCategory />


            <FourImageCarousel title={'Popular in Home'} imgContStyle={styles.circleImgView} />

            <Banner Image={Images.appleProduct} />

            <ProductCategoryWithBG image={Images.BlueBGImg} title={'Best Home Appliences'} />
            <ProductCategoryWithBG image={Images.YellowBGImg} title={'Best Products'} ImgViewStyle={{ borderColor: Colors.RED, borderWidth: 1 }} />

            <BrandProductCarousal />

            <ProductwithTitle title={'Electronics'} />
            <ProductwithTitle title={'Home Appliances'} />
            <ProductwithTitle title={'Gaming'} />
            <ProductwithTitle title={'Computer & Office'} />
            <ProductwithTitle title={'Phone & Tablet'} />

            <DiscountCard />

            <HanoootProducts title={'Only at Hanooot'} />
            <HanoootProducts title={'Only at Hanooot'} mainContStyle={{ backgroundColor: '#F8E6C4' }} />

         </ScrollView>



      </AppBackground>
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //    <TouchableOpacity
      //       onPress={() => navigation.navigate('CheckoutScreen')}
      //    >
      //       <Text>Show Checkout Screen</Text>
      //    </TouchableOpacity>

      // </View>
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