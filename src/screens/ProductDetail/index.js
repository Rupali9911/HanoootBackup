import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground';
import AppHeader from '../Components/AppHeader';
import AppButton from '../Components/AppButton';
import Colors from '../../constant/Colors';
import ProductDetailCard from './ProductDetailCard';
import UserReview from './UserReview';
import ProductwithTitle from '../Components/Cards/ProductWithTitle';
import ProductHeader from '../Components/Cards/ProductHeader';
import ProductList from '../Components/Cards/ProductList';
import { productCollection, productColorVariation, productMemoryVariation, productVersionVariation, Description } from '../../constant/DemoArray';
import ProductVariation from './ProductVariation';
import ProductQuantity from './ProductQty';
import ProductSpecification from './ProductSpecification';
import Banner from '../Components/Cards/Banner';
import Images from '../../constant/Images';
import { hp, wp } from '../../constant/responsiveFunc';
import Separator from '../../constant/Separator';
import ProductSpecCard from './ProductSpecCard';
import ProductDelivery from './ProductDeliveryOptn';
// import Svgs from '../../constant/Svgs';

// const { StarIcon } = Svgs;
const ProductDetail = () => {
    return (
        <AppBackground>


            <AppHeader placeholderText={'What are you looking for?'} showBackButton />
            {/* <AppButton
                label={'Add to Cart'}
            />
            <AppButton
                label={'Buy Now'}
                containerStyle={styles.outLineButton}
            /> */}
            <ScrollView>
                <ProductDetailCard />
                <ProductVariation Data={productVersionVariation} title={'Version'} />
                <ProductVariation Data={productMemoryVariation} title={'Memory'} />
                <ProductVariation Data={productColorVariation} title={'Color'} />
                <ProductDelivery />
                <ProductQuantity />
                <AppButton label={'Add to Cart'}/>
                <AppButton label={'Buy Now'} containerStyle={styles.outLineButton}/>
                <ProductSpecCard />
                <ProductSpecification Heading={'Specification & Highlight'}/>
                <Separator />
                <ProductSpecification Heading={'Description'} data={Description}/>
                
                <Banner Image={Images.iPad} imgStyle={{width: wp(100), height: hp(52.71)}}/>
                <Banner Image={Images.ProductPerformance} imgStyle={{width: wp(100), height: hp(65)}}/>
                <Banner Image={Images.iPad2} imgStyle={{width: wp(100), height: hp(67)}}/>
                <ProductHeader title={'Frequently Bought Together'} />
                <ProductList Data={productCollection} />
                <AppButton containerStyle={{ backgroundColor: Colors.LightGray }} label={'Add Items to Cart'} labelStyle={{ color: Colors.themeColor }} />
                <UserReview />
                <ProductwithTitle title={'More from Apple'} />
            </ScrollView>
        </AppBackground>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    outLineButton: {
        backgroundColor: Colors.YELLOW1,
        borderColor: Colors.YELLOW1,
        marginBottom: hp('2%')
    },
})