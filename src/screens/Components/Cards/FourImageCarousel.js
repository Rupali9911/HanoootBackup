import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react';
import Colors from '../../../constant/Colors';
import Carousels from '../Carousel';
import fonts from '../../../constant/fonts';
import { wp, hp } from '../../../constant/responsiveFunc';
import { FourImgData } from '../../../constant/DemoArray';

const FourImageCarousel = (props) => {

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderFourImgView = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <View style={[styles.imageContainer, props.imgContStyle]}>
                    <Image
                        source={item.imgUrl}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                </View>
            </View>
        );
    }

    const renderCarousalView = ({ item, index }) => {
        return (
            <View style={styles.rowContainer}>
                <FlatList
                    data={item}
                    renderItem={renderFourImgView}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    scrollEnabled={false}
                />
             </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {
                props.priceOff && <Text style={styles.priceOff}>{props.priceOff}</Text>
            }
            
            <Carousels
                Data={sliceIntoChunks(FourImgData, 4)}
                renderItem={renderCarousalView}
                dotsLength={4}
                
            />
        </View>
    )
}

export default FourImageCarousel;

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 25,
        paddingTop: 25,
        backgroundColor: Colors.WHITE,
        borderRadius: 4,
        alignItems: 'center'

    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: fonts.VISBY_CF_REGULAR,
        letterSpacing: 0.5,
        lineHeight: 22,
        alignSelf: 'flex-start'
    },
    priceOff: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: fonts.VISBY_CF_REGULAR,
        letterSpacing: 0.5,
        lineHeight: 22,
        alignSelf: 'flex-start',
        color: Colors.themeColor,
    },
    container: {
        margin: '2%',
        width: '44%',
    },
    imageContainer: {
        borderRadius: 10,
        backgroundColor: Colors.lightBlue,
        padding: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 55,
        width: 70,
        resizeMode: 'contain'
    },
    name: {
        fontWeight: 500,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontFamily: fonts.VISBY_CF_REGULAR,
        top: 5
    },
    rowContainer: {
        justifyContent: 'center', alignItems: 'center'
    }
})