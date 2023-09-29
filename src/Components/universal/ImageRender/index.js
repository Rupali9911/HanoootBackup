import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import FastImage from 'react-native-fast-image';
import { SvgUri } from 'react-native-svg';
import Images from '../../../constant/Images';



const ImageRenderer = (props) => {
    const uri = props.uri ? props.uri : Images.skeleton;
    // console.log('check uri : ', props.uri, uri)
    // const uri = "https://svgur.com/i/y3i.svg";
    // const uri = "https://w7.pngwing.com/pngs/245/945/png-transparent-shopee-indonesia-online-shopping-android-receive-link-free-android-text-rectangle-orange-thumbnail.png"

    const isSvg = uri?.endsWith('.svg');
    const isPng = uri?.endsWith('.png');
    const isJpeg = uri?.endsWith('.jpg') || uri.endsWith('.jpeg');

    // const extension = imageUrl.split('.').pop().toLowerCase();


    if (isSvg) {
        return <SvgUri uri={uri} height={props.height} width={props.width} style={props.style} />;
    } else if (isPng || isJpeg) {
        return <Image
            source={{ uri: uri }}
            height={props.height}
            width={props.width}
            style={props.style}
            resizeMode={props.resizeMode} />;
    } else {
        return <View />;
    }
}

export default ImageRenderer

const styles = StyleSheet.create({})