import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppHeader from '../Components/AppHeader';
import AppBackground from '../Components/AppBackground';
import MiniSlider from '../Components/Cards/MiniSlider';
import Colors from '../../constant/Colors';
import { hp, wp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';
import FeaturedCategory from '../Components/Cards/FeaturedCategory';
import NewArrivals from '../Components/Cards/NewArrivals';
import RecentlyViewProduct from '../Components/Cards/RecentlyViewProduct';
import SuggestedProducts from '../Components/Cards/SuggestedProducts';
import TopPicks from '../Components/Cards/TopPicks';
import BannerCollage from '../Components/Cards/BannerCollage';
import LargeBanner from '../Components/Cards/LargeBanner';
import BrandList from '../Components/Cards/BrandList';
import CategoryList from '../Components/Cards/CategoryList';
import { getHomeCollection, homeDataLoadingStart, updateFeaturedCart, homeDataReset } from '../Store/actions/HomeAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../constant/Loader';
import { useIsFocused } from '@react-navigation/native';
import { translate } from '../../utility';
import Images from '../../constant/Images';
import AppModal from '../../Components/universal/Modal';
import ModalContentWithoutLogin from '../../Components/universal/Modal/ModalContentWithoutLogin';
import { formattedPrice, getFonts } from '../utils';

export default function HomeScreen() {
   const isFocused = useIsFocused();
   const dispatch = useDispatch();
   const [modalVisible, setModalVisible] = useState(false);


   const { isLoading, HomeCollection } = useSelector(state => state.HomeReducer);
   const userData = useSelector((state) => state.userReducer.userData);

   useEffect(() => {
      dispatch(homeDataReset())
      dispatch(homeDataLoadingStart(true))
      dispatch(getHomeCollection(userData))
   }, [isFocused]);

   const renderNoDataFound = () => {
      return (
         <View style={styles.sorryMessageCont}>
            <Text style={styles.sorryMessage}>{translate('common.nodatafound')}</Text>
         </View>
      );
   }

   const renderHomeData = (key, value) => {
      console.log('render Data : ', key, value)
      switch (key) {
         case 'miniSliderJson':
            return <MiniSlider Data={value} />
         case 'featuredCategoryByProductJson':
            return <FeaturedCategory Data={value} onFeatureCartPress={() => setModalVisible(true)} />
         case 'brandsListJson':
            return <BrandList Data={value} />
         case 'newArrivalProductListJson':
            return <NewArrivals Data={value} onWishlistPress={() => setModalVisible(true)} />
         case 'bannerCollageJson':
            return <BannerCollage Data={value} />
         case 'topPicksJson':
            return <TopPicks Data={value} onTopPicksCartPress={() => setModalVisible(true)} />
         case 'largeBannerJson':
            return <LargeBanner Data={value} />
         case 'listOfRecentViewProductJson':
            return <RecentlyViewProduct Data={value} onWishlistPress={() => setModalVisible(true)} />
         case 'suggestedProductsJson':
            return <SuggestedProducts Data={value} onWishlistPress={() => setModalVisible(true)} />
         case 'categoryList':
            return <CategoryList Data={value} />
         default:
            return null;
      }
   }

   return (
      <AppBackground >
         <AppHeader placeholderText={translate('common.search')} />
         {
            isLoading && Object.keys(HomeCollection).length === 0 ?
               <Loader />
               :
               Object.keys(HomeCollection).length > 0
                  ?
                  <ScrollView
                     nestedScrollEnabled={false}
                     scrollEnabled={true}
                  >

                     {
                        Object.keys(HomeCollection).map((key, value) => {
                           return (
                              <>
                                 <View key={key}>
                                    {renderHomeData(key, HomeCollection[key])}
                                 </View>
                              </>
                           )

                        })}
                  </ScrollView>
                  :
                  renderNoDataFound()

         }

         <AppModal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <ModalContentWithoutLogin
               onCancelPress={() => {
                  setModalVisible(false);
               }}
               onOkPress={() => {
                  navigation.navigate('Login');
                  setModalVisible(false);
               }}
            />
         </AppModal>
      </AppBackground>
   )
}

const styles = StyleSheet.create({
   circleImgView: {
      backgroundColor: Colors.YELLOWRGBA,
      height: hp(13),
      width: wp(28),
      borderRadius: 100,
      left: 10
   },
   offerAvail: {
      fontWeight: 600,
      fontFamily: getFonts.SEMI_BOLD,
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
      fontFamily: getFonts.SEMI_BOLD,
   },
   loaderImage: {
      alignSelf: 'center',
   },
   indicatorContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: '#1a75bb',
      alignItems: 'center',
      justifyContent: 'center',
   },
})
