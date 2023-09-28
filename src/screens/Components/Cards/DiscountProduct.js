import { StyleSheet, Text, View, FlatList, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import Colors from '../../../constant/Colors'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Images from '../../../constant/Images';
import Carousels from '../Carousel';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import { getFonts } from '../../utils';

const DiscountProduct = (props) => {

    const renderCards = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', }}>
                    <View>
                        <ImageBackground
                            source={Images.discountImg}
                            style={styles.discountArrowImg}
                        >
                            <Text style={styles.discountArrowTxt}>Up to 50% off</Text>
                        </ImageBackground>
                        <Text style={styles.itemName}>{'Mouse'}</Text>
                        <Text style={styles.itemDesc}>{'Electronic Device'}</Text>

                        <View style={styles.buttonView}>
                            <Text style={styles.btnTxt}>{'EXPRESS'}</Text>
                        </View>
                    </View>
                    <View style={styles.rightImgContainer}>
                        <Image source={Images.mice} style={styles.rightSideImg} />

                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>{'HANOOOT DISCOUNTS'}</Text>
            <Carousels
                Data={[1, 2, 3, 4]}
                renderItem={renderCards}
                dotsLength={4}
            />
        </View>
    )
}

export default DiscountProduct;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        backgroundColor: Colors.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Colors.WHITE,
        // fontWeight: 700
    },
    container: {
        justifyContent: 'center',
        width: wp(80),
        paddingVertical: 10,
        backgroundColor: Colors.WHITE,
        alignSelf: 'center',
        margin: 20,
        borderRadius: 10,
        shadowColor: "#C4D0DD",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 0.25,
        elevation: 7,
    },
    discountArrowTxt: {
        alignSelf: 'center',
        justifyContent: 'center',
        // fontWeight: 700,
        fontSize: 18,
        color: Colors.WHITE,
        fontFamily: getFonts.BOLD,
        lineHeight: 25,
        letterSpacing: 0.5
    },
    itemName: {
        fontSize: 22,
        // fontWeight: 700,
        fontFamily: getFonts.BOLD,
        lineHeight: 25,
        letterSpacing: 0.5,
        left: 10
    },
    itemDesc: {
        color: Colors.GRAYDARK,
        fontFamily: getFonts.MEDIUM,
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 25,
        left: 10
    },
    buttonView: {
        width: 65,
        backgroundColor: Colors.YELLOW,
        left: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    btnTxt: {
        fontSize: 12,
        color: Colors.themeColor,
        fontWeight: '500',
        fontStyle: 'italic',
        fontFamily: getFonts.REGULAR
    },
    rightSideImg: {
        width: 130, height: 140
    },
    rightImgContainer: {
        position: 'absolute', right: 0
    },
    discountArrowImg: {
        height: 30,
        width: 150,
        marginVertical: 10
    }
})