import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground';
import AppHeader from '../Components/AppHeader';
import AppButton from '../Components/AppButton';
import Colors from '../../constant/Colors';
import ProductDetailCard from './ProductDetailCard';
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
            <ProductDetailCard />
        </AppBackground>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    outLineButton: {
        backgroundColor: Colors.YELLOW1,
        borderColor: Colors.YELLOW1
    }
})