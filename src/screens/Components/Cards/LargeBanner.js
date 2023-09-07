import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousels from '../Carousel'
import { hp, wp } from '../../../constant/responsiveFunc'

const LargeBanner = (props) => {
    const Data = props.Data;


    const arr = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Gl4aAcxcGLVPCuUuNA55iO0l0ovDHsfEy8OjYhmply6b2EhLqjVf2n6a_WitUsjS_AM&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyS8KhBI9SyNl3FUJc3RIgqNMEAUx5RaqJ-HVcbb6KB2HeaGJb2u3fhMVIKkLb-CYIg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRX7ZdBV6FxU3mWB3KvVBFBoUl64yOHAVHabeMH-IkfpR60jUNp5WE6pF4Rxqb4jnHw&usqp=CAU'
    ]

    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item?.image_url }} style={{ width: wp(86.93), height: hp(11.26), alignSelf: 'center', borderRadius: 10 }} key={item?.id} />
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