import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import ImageRenderer from '../../../Components/universal/ImageRender';
import Carousels from '../Carousel'

const SliderBanner = (props) => {
    const slideWidth = wp(86.93);

    const renderItem = ({ item, index }) => {
        return (
            // <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(56.99), alignSelf: 'center', borderRadius: 10, resizeMode: 'contain' }} />
            <ImageRenderer height={hp(56.99)} width={wp(86.93)} style={{ alignSelf: 'center', borderRadius: 10, marginTop: hp(2) }} uri={item?.image_url} resizeMode={'contain'} key={index} />
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            {
                props?.Data?.map((data, index) => {
                    console.log('datadatadatadata: ', data)
                    return < Carousels
                        Data={data}
                        renderItem={renderItem}
                        dotsLength={data?.length
                        }
                        loop={true}
                        autoplay={true}
                        sliderWidth={slideWidth}
                        itemWidth={slideWidth}
                        dotStyle={{ bottom: 30 }}
                        containerStyle={{ paddingVertical: '1%' }}
                        enablePagination
                    />
                })
            }
        </View>

    )
}

export default SliderBanner

const styles = StyleSheet.create({})