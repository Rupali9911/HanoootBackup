import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import Carousels from '../Carousel'

const BannerCollage = () => {
    const array = [
        Images.BannerCollage,
        Images.BannerCollage,
        Images.BannerCollage,
    ]

    const renderItem = () => {
        return (
            <Image source={Images.BannerCollage} style={{ width: wp(87.20), height: hp(56.99), alignSelf: 'center' }} />
        );
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={Images.BannerCollage} style={{ width: wp(86.93), height: hp(24.94), resizeMode: 'contain' }} />
            {/* <Image source={Images.BannerCollage} style={{ width: wp(87.20), height: hp(56.99) }} /> */}
            <Carousels
                Data={array}
                renderItem={renderItem}
                dotsLength={array.length}
                loop={true}
                autoplay={true}
                
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <Image source={Images.BannerCollage} style={{ width: wp(40), height: hp(14.53), resizeMode: 'contain' }} />
                <Image source={Images.BannerCollage} style={{ width: wp(40), height: hp(14.53), resizeMode: 'contain' }} />
            </View>
        </View>
    )
}

export default BannerCollage

const styles = StyleSheet.create({})