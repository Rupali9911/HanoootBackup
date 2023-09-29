import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousels from '../Carousel'
import { hp, wp } from '../../../constant/responsiveFunc'
import ImageRenderer from '../../../Components/universal/ImageRender'

const LargeBanner = (props) => {
    const Data = props.Data;

    const renderItem = ({ item, index }) => {
        return (
            // <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(11.26), alignSelf: 'center', borderRadius: 10 }} key={item?.id} />
            <ImageRenderer height={hp(11.26)} width={wp(86.93)} style={{ alignSelf: 'center', borderRadius: 10 }} uri={item?.image_url} resizeMode={'cover'} key={item?.id} />
        );
    }

    return (
        <View style={{ alignItems: 'center', marginTop: hp(3) }}>
            <Carousels
                Data={Data?.extraLargeBanner}
                renderItem={renderItem}
                dotsLength={Data?.extraLargeBanner.length}
                loop={true}
                autoplay={true}
                sliderWidth={wp(86.93)}
                itemWidth={wp(86.93)}
                containerStyle={{ paddingVertical: '5%' }}
                enablePagination
            />
        </View>
    )
}

export default LargeBanner

const styles = StyleSheet.create({})