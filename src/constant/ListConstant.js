import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from './Colors'
import fonts from './fonts'
import Images from './Images'
import { hp, wp } from './responsiveFunc'

export const ExpressView = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={styles.name}>{'EXPRESS'}</Text>
        </View>
    )
}

export const LikeImage = () => {
    return (
        <Image source={Images.Wishlist} style={styles.like} />

    )
}


const styles = StyleSheet.create({
    container: {
        // width: 65,
        backgroundColor: Colors.YELLOW,
        // left: 10,
        // marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        // paddingVertical: 2,
        paddingHorizontal: wp('1%'),
        height: hp('2%')
        

    },
    name: {
        fontSize: 10,
        color: Colors.themeColor,
        fontWeight: '500',
        fontStyle: 'italic',
        fontFamily: fonts.VISBY_CF_REGULAR
    },
    like: {
        height: 16, width: 16, resizeMode: 'contain' 
    }
})