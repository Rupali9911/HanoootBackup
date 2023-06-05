import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react';
import Carousels from '../Carousel';
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import { BannerData } from '../../../constant/DemoArray';

const BannerCarousel = () => {

    const rendeBannerImages = ({ item, index }) => {
        return (
            <View style={styles.container} key={index}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                />
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: Colors.LightGray }}>
            <Carousels Data={BannerData} 
            renderItem={rendeBannerImages}
            dotsLength={4} 
            loop={true}
            autoplay={true}
            />
        </View>
    )
}

export default BannerCarousel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    image: {
        height: hp(22),
        width: wp(100),
    },
})