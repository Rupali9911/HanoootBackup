import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageRenderer from '../../../Components/universal/ImageRender'
import { hp, wp } from '../../../constant/responsiveFunc'

const LargeBanner = (props) => {
    return (
        <View>
            {
                props?.Data?.map((data, index) => {
                    return data?.map((item, idx) => {
                        console.log('inside array', item?.image_url)
                        return (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(3) }} key={idx}>
                                <ImageRenderer height={hp(24.94)} width={wp(86.93)} style={{ marginBottom: '2%', borderRadius: 10 }} uri={item?.image_url} resizeMode={'cover'} />
                            </View>
                        )
                    })
                })
            }
        </View>

    )
}

export default LargeBanner

const styles = StyleSheet.create({})