import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
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
import { electronicsArr, homeAppliances, productCollection } from '../../constant/DemoArray';
import ProductCollection from '../Components/Cards/ProductCollection';
import HanoootProducts from '../Components/Cards/HanoootProducts';
import DiscountCard from '../Components/Cards/DiscountProduct';
import ProductCategoryWithBG from '../Components/Cards/ProductCategoryWithBG';
import BrandProductCarousal from '../Components/Cards/BrandProductCarousal';
import ProductCategory from '../Components/Cards/ProductCategory';
import ProductHeader from '../Components/Cards/ProductHeader';
import Banner from '../Components/Cards/Banner';
import { hp, wp } from '../../constant/responsiveFunc';

export default function HomeScreen() {

   const renderImages = (image) => {
      return (<View style={{}}>
         <Image
            source={image}
            style={{ width: '100%', height: 200, resizeMode: 'contain' }}
         />
      </View>
      );
   }

   return (
      <AppBackground >
         <AppHeader placeholderText={'Search'} />

         <ScrollView style={{}}>
            <BannerCarousel />
            <FourImageCarousel title={'Smart Phones'} priceOff={'Up to 30% off'} />

            <ProductHeader title={'New Arrivals'} RightText={'See All'}/>

            <ProductList 
            Data={productCollection}
            isExpress
            isLike
            TotalPrice
            DisCountPrice
            isDiscountPercent
            isRating 
            isBrand 
            />

            {/* {renderImages(Images.urdu)} */}
            <Banner Image={Images.urdu}/>

            <ProductHeader title={'This weeks deals'} isSale={'End in 04: 10:24'} RightText={'See All'}/>

            <ProductList isPriceOff isLike  Data={productCollection}/>

            <ProductCollection />

            <MultiProductList title={'Pick up where you left off'} />

            <MultiProductList title={'Best Picks for you'} />

            <ProductCategory />


            <FourImageCarousel title={'Popular in Home'} imgContStyle={styles.circleImgView} />

            <Banner Image={Images.appleProduct}/>

            <ProductCategoryWithBG image={Images.BlueBGImg} title={'Best Home Appliences'} />
            <ProductCategoryWithBG image={Images.YellowBGImg} title={'Best Products'} ImgViewStyle={{borderColor: Colors.RED, borderWidth: 1}}/>

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
   )
}

const styles = StyleSheet.create({
   circleImgView: {
      backgroundColor: Colors.YELLOWRGBA,
      justifyContent: 'center',
      height: hp(13),
      width: wp(28),
      borderRadius: 100,
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 50,
   }
})