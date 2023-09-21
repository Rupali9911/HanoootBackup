import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import Images from '../../../constant/Images'
import { hp, wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import { electronicsArr } from '../../../constant/DemoArray';
import Banner from './Banner'
import fonts from '../../../constant/fonts'

const BrandProductCarousal = () => {

    const _renderItem = ({ item, index }) => (
        <View style={styles.listContainer}>
            <Image source={Images.homeAppliances3} style={styles.centerItemImg} />

            <ImageBackground
                source={Images.priceArrow}
                style={styles.priceArrowImg}
            >
                <Text style={styles.priceArrowText}>20% Off</Text>
            </ImageBackground>
            <View style={styles.bottomViewContainer}>
                <Text style={styles.bottomViewText}>Refrigerator</Text>
            </View>
        </View>
    )

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <View>
            <Banner
                Image={Images.samsung}
                imgStyle={styles.BGImage}
            />
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.title}>Best in "Samsung"</Text>
                    <TouchableOpacity style={styles.shopNowBtn}>
                        <Text style={styles.shopNowText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={electronicsArr}
                    renderItem={_renderItem}
                    keyExtractor={keyExtractor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginVertical: 20 }}
                />
            </View>
        </View>
    )
}

export default BrandProductCarousal;

const styles = StyleSheet.create({
    BGImage: {
        height: hp(38),
        width: wp(100),
        marginVertical: 0
    },
    container: {
        width: wp(100),
        backgroundColor: Colors.WHITE,
        padding: 20
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 16,
        fontWeight: 600,
        color: Colors.themeColor,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    shopNowBtn: {
        borderWidth: 1,
        padding: 8,
        borderColor: Colors.themeColor,
        borderRadius: 24
    },
    shopNowText: {
        fontSize: 16,
        fontWeight: 600,
        color: Colors.themeColor,
        lineHeight: 21,
        letterSpacing: 0.5,
        fontFamily: fonts.VisbyCF_Demibold
    },
    centerItemImg: {
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    listContainer: {
        height: hp(19),
        width: wp(41),
        borderWidth: 1,
        borderColor: Colors.themeColor,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceArrowImg: {
        width: 30,
        height: 40,
        position: 'absolute',
        right: 20,
        top: 0
    },
    priceArrowText: {

        fontFamily: fonts.VisbyCF_Bold,
        // fontWeight: 700,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.WHITE,
        fontSize: 10,
    },
    bottomViewContainer: {
        width: wp(41),
        height: 35,
        backgroundColor: Colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    bottomViewText: {
        fontFamily: fonts.VisbyCF_Bold,
        // fontWeight: 700,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.WHITE
    }

})