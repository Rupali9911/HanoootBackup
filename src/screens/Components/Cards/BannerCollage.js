import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import Carousels from '../Carousel'

const BannerCollage = (props) => {
    const Data = props.Data;

    const slideWidth = wp(86.93);

    console.log('BannerCollage : ', Data)


    const array = [
        Images.BannerCollage,
        Images.BannerCollage,
        Images.BannerCollage,
    ]

    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(56.99), alignSelf: 'center', borderRadius: 10 }} />
        );
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(3) }}>
            <Image source={{ uri: Data?.largeBanner?.image_url }} style={{ width: wp(86.93), height: hp(24.94), resizeMode: 'cover', marginBottom: '2%', borderRadius: 10 }} />
            <Carousels
                Data={Data?.sliderBanner}
                renderItem={renderItem}
                dotsLength={Data?.sliderBanner.length}
                loop={true}
                autoplay={true}
                sliderWidth={slideWidth}
                itemWidth={slideWidth}
                dotStyle={{ bottom: 30 }}
                containerStyle={{ paddingVertical: '1%' }}
                enablePagination
            // itemWidth={100}
            // sliderWidth={100}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <Image source={{ uri: Data?.smallBanner[0]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} />
                <Image source={{ uri: Data?.smallBanner[1]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} />
            </View>
        </View>
    )
}

export default BannerCollage

const styles = StyleSheet.create({})