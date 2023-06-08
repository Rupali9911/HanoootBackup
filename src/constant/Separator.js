import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from './responsiveFunc'
import Colors from './Colors'

const Separator = (props) => {
  return (
    <View style={[styles.separator, props.separatorStyle]} />
  )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        width: wp(100),
        marginVertical: hp('1%'),
    }

})