import { StyleSheet, Image} from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'

const Banner = (props) => {
  return (
       <Image
            source={props.Image}
            style={[styles.image, props.imgStyle]}
         />
  )
}

export default Banner;

const styles = StyleSheet.create({
  image: {
    width: wp(100), 
    height: hp(19), 
    resizeMode: 'contain'
  }
})