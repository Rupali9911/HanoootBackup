import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from './Colors'
import fonts from './fonts'
import Images from './Images'
import { hp, wp } from './responsiveFunc'
import { translate } from '../utility'
import { getFonts } from '../screens/utils'



export const ExpressView = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={styles.name}>{translate('common.express')}</Text>
        </View>
    )
}




export const LikeImage = (props) => {
    // const [isLiked, setLiked] = useState(false);

    const handleLike = () => {
        props.onPress;
        // setLiked(!isLiked)
    }

    return (
        <TouchableOpacity
            onPress={props.onPress}

            style={{ alignItems: 'flex-end', flex: 1, }}

        // style={{backgroundColor: 'red'}}
        >
            <Image source={props.image} style={[styles.like, props.imgStyle]} />
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        // width: 65,
        // flex: 1,
        backgroundColor: Colors.YELLOW,
        // left: 10,
        // marginVertical: 10,
        justifyContent: 'center',
        // alignItems: 'center',
        // width: 0,
        borderRadius: 8,
        // paddingVertical: 2,
        paddingHorizontal: wp('1%'),
        height: hp('2%'),
        // width: wp('1%')


    },
    name: {
        fontSize: 10,
        color: Colors.themeColor,
        fontWeight: '500',
        fontStyle: 'italic',
        fontFamily: getFonts.REGULAR
    },
    like: {
        height: 16, width: 16, resizeMode: 'contain',
        // tintColor: 'red',

    }
})