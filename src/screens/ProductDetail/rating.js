import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'

const Rating = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Image source={Images.star} style={{height: 10, width: 10}}/>
            <Image source={Images.star} style={{height: 10, width: 10}}/>
            <Image source={Images.star} style={{height: 10, width: 10}}/>
            <Image source={Images.star} style={{height: 10, width: 10}}/>
            <Image source={Images.star} style={{height: 10, width: 10}}/>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({})