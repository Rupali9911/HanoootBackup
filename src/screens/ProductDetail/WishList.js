import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import Colors from '../../constant/Colors'

const WishList = (props) => {
  return (
    <View style={[styles.container, props.contStyle]}>

    <Image 
    source={Images.like}
    style={{height: 20, width: 20, tintColor: Colors.GRAY, resizeMode: 'center'}}
    />
        </View>

  )
}

export default WishList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE, 

        width: 30, 
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.10,
        // shadowRadius: 3.84,
        elevation: 7,
    }
})