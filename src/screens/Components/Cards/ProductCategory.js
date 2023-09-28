import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import Images from '../../../constant/Images'
import { hp, wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carousels from '../Carousel'
import fonts from '../../../constant/fonts'
import { getFonts } from '../../utils'


const ProductCategory = () => {

    const _renderListView = () => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.itemImgContainer}>
                    <Image source={Images.Android2} style={styles.itemImg} />
                </View>
                <Text numberOfLines={2} style={styles.itemName}>Msi 31.5 Curved 1920 x 1080 </Text>
                <Text style={styles.itemPrice}>$ 249.00</Text>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartBtnTxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderCarouselView = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>Perfect Gaming Setup</Text>
                <Image
                    source={Images.shoping}
                    style={styles.bannerImg}
                />
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <View style={{ width: '65%' }}>
                            <Text style={styles.productTitle} numberOfLines={2}>PC Gaming Top Picks</Text>
                            <Text style={styles.productDesc} numberOfLines={2}>Score everything you need get in the zone</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.shopBtnView}>
                                <Text style={styles.shopBtnTxt}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {_renderListView()}
                        {_renderListView()}
                        {_renderListView()}
                    </View>
                </View>
            </View>
        );
    }

    return (
        <Carousels
            Data={[1, 2]}
            renderItem={renderCarouselView}
            dotsLength={2}
        />
    )
}

export default ProductCategory;

const styles = StyleSheet.create({
    title: {
        fontFamily: getFonts.BOLD,
        fontSize: 20,
        // fontWeight: 700, 
        lineHeight: 42,
        letterSpacing: 0.5
    },
    bannerImg: {
        height: hp(17),
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    container: {
        backgroundColor: Colors.WHITE,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    productTitle: {
        fontSize: 16,
        // fontWeight: 700,
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5,
        lineHeight: 42
    },
    productDesc: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        lineHeight: 19,
        letterSpacing: 0.5,
        color: Colors.PRICEGRAY
    },
    shopBtnView: {
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderColor: Colors.themeColor,
        borderRadius: 24
    },
    shopBtnTxt: {
        fontSize: 16,
        fontWeight: 600,
        color: Colors.themeColor,
        fontFamily: getFonts.SEMI_BOLD,
        lineHeight: 17,
        letterSpacing: 0.5
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },
    listContainer: {
        width: wp(25),
        marginHorizontal: 10,
        marginVertical: 20,
        top: 10
    },
    itemImgContainer: {
        height: hp(12),
        width: wp(25),
        backgroundColor: Colors.WHITE,
        borderColor: Colors.GRAYRGBA,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    itemImg: {
        height: 60,
        width: 60,
        resizeMode: 'contain'
    },
    itemName: {
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0.5,
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500
    },
    itemPrice: {
        // fontWeight: 700,
        lineHeight: 23,
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5
    },
    cartBtn: {
        backgroundColor: Colors.themeColor,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        marginVertical: 5
    },
    cartBtnTxt: {
        color: Colors.WHITE,
        fontWeight: 600,
        fontFamily: getFonts.MEDIUM,
        lineHeight: 17,
        letterSpacing: 0.5,
        fontSize: 12
    }
})