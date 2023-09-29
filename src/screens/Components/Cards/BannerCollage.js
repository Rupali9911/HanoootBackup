import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import Carousels from '../Carousel'
import ImageRenderer from '../../../Components/universal/ImageRender'

const BannerCollage = (props) => {
    const Data = props.Data;

    const slideWidth = wp(86.93);

    const renderItem = ({ item, index }) => {
        return (
            // <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(56.99), alignSelf: 'center', borderRadius: 10, resizeMode: 'contain' }} />
            <ImageRenderer height={hp(56.99)} width={wp(86.93)} style={{ alignSelf: 'center', borderRadius: 10 }} uri={item?.image_url} resizeMode={'contain'} key={index} />
        );
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(3) }}>
            {/* <Image source={{ uri: Data?.largeBanner[0]?.image_url }} style={{ width: wp(86.93), height: hp(24.94), resizeMode: 'cover', marginBottom: '2%', borderRadius: 10 }} /> */}
            <ImageRenderer height={hp(24.94)} width={wp(86.93)} style={{ marginBottom: '2%', borderRadius: 10 }} uri={Data?.largeBanner[0]?.image_url} resizeMode={'cover'} />

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
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={Data?.smallBanner[0]?.image_url} resizeMode={'cover'} />

                <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={Data?.smallBanner[1]?.image_url} resizeMode={'cover'} />

                {/* <Image source={{ uri: Data?.smallBanner[0]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} />
                <Image source={{ uri: Data?.smallBanner[1]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} /> */}
            </View>
        </View>
    )
}

export default BannerCollage

const styles = StyleSheet.create({})