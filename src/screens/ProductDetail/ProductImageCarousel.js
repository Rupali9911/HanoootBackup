import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Carousels from '../Components/Carousel'
import { ProductImages } from '../../constant/DemoArray'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import WishList from './WishList'

const ProductImageCarousel = () => {

    const renderProductImages = () => {
        return (
            <>

                <View style={{ padding: 10 }}>
                    <Image
                        source={Images.ProductImage}
                        style={{ height: hp(25), width: wp(55), resizeMode: 'contain' , alignSelf: 'center'}}
                    />


                </View>

            </>
        );
    }



    return (
        <View style={{alignItems: 'center'}}>
        <Carousels
            Data={ProductImages}
            renderItem={renderProductImages}
            dotsLength={7}
            loop={true}
            autoplay={true}
            sliderWidth={wp(55)}
            itemWidth={wp(55)}
        />
        </View>
    )
}

export default ProductImageCarousel

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.RED,
        height: 1,
        width: wp(100)
    }
})