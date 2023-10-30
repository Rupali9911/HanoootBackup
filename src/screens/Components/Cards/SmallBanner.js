import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import ImageRenderer from '../../../Components/universal/ImageRender'

const SmallBanner = (props) => {
    return (
        props?.Data?.map((data, index) => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(3), flexDirection: 'row' }}>
                    <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={data[0]?.image_url} resizeMode={'cover'} />

                    <ImageRenderer height={hp(14.53)} width={wp(42.40)} style={{ marginHorizontal: '1%', borderRadius: 10 }} uri={data[1]?.image_url} resizeMode={'cover'} />

                    {/* <Image source={{ uri: Data?.smallBanner[0]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} />
                                 <Image source={{ uri: Data?.smallBanner[1]?.image_url }} style={{ width: wp(42.40), height: hp(14.53), resizeMode: 'cover', marginHorizontal: '1%', borderRadius: 10 }} /> */}
                </View>
            )
        })
    )
}

export default SmallBanner

const styles = StyleSheet.create({})