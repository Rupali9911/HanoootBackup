import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rating from './rating'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import Images from '../../constant/Images'
import ProductHeader from '../Components/Cards/ProductHeader'
import ProductList from '../Components/Cards/ProductList'
import { ProductListData } from '../../constant/DemoArray'

const SellerReview = () => {
  return (
    <AppBackground>
                    <AppHeader placeholderText={'What are you looking for?'} showBackButton Search/>
                  <View style={{padding: 20, backgroundColor: Colors.WHITE, borderBottomColor: Colors.GRAY, borderBottomWidth: 1}}>
                  <Text style={{
                    fontFamily: fonts.VisbyCF_Demibold,
                    fontWeight: 600,
                    fontSize: 18
                  }}>Ecom Nation</Text>

                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={Images.LocationIcon}  style={{height: 12, width: 9}}/>
                    <Text style={{fontFamily: fonts.VisbyCF_Medium, fontWeight: 500}}>Dhi Qar Governorate, Al-Rifa'i District , baghdad</Text>
                  </View>
                    <Rating
                    RatingReview
                    isBottomLine
                    ImageStyle={{ height: 15, width: 15 }}
                />
                  </View>

                  <ProductHeader title={'Products by Ecom Nation'}/>

                 <ProductList 
                   Data={ProductListData}
                   isExpress
                   isLike
                   TotalPrice
                   DisCountPrice
                   isDiscountPercent
                   isRating

                //    numColumns={2}
                //    horizontal={false}

                   
                 />
    </AppBackground>
   
  )
}

export default SellerReview

const styles = StyleSheet.create({})