import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import Images from '../../../constant/Images'
import { hp, wp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import Carousels from '../Carousel'

const FeaturedCategory = () => {
    const products = [
        {
            "id": 1,
            "image": "https://example.com/image1.jpg",
            "title": "Product 1",
            "price": 19.99
        },
        {
            "id": 2,
            "image": "https://example.com/image2.jpg",
            "title": "Product 2",
            "price": 29.99
        },
        {
            "id": 3,
            "image": "https://example.com/image3.jpg",
            "title": "Product 3",
            "price": 39.99
        },
        {
            "id": 4,
            "image": "https://example.com/image1.jpg",
            "title": "Product 4",
            "price": 19.99
        },
        {
            "id": 5,
            "image": "https://example.com/image2.jpg",
            "title": "Product 5",
            "price": 29.99
        },
        {
            "id": 6,
            "image": "https://example.com/image3.jpg",
            "title": "Product 6",
            "price": 39.99
        },
        {
            "id": 7,
            "image": "https://example.com/image1.jpg",
            "title": "Product 7",
            "price": 19.99
        },
        {
            "id": 8,
            "image": "https://example.com/image2.jpg",
            "title": "Product 8",
            "price": 29.99
        },
        {
            "id": 9,
            "image": "https://example.com/image3.jpg",
            "title": "Product 9",
            "price": 39.99
        }
    ]

    const _renderListView = () => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.itemImgContainer}>
                    <Image source={Images.Android2} style={styles.itemImg} />
                </View>
                <View style={{ gap: 18 }}>
                    <Text numberOfLines={2} style={styles.itemName}>{item?.title}</Text>
                    <Text style={styles.itemPrice}>$ 249.00</Text>
                </View>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartBtnTxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        console.log('sliceIntoChunks', res)
        return res;
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.itemImgContainer}>
                    <Image source={Images.Android2} style={styles.itemImg} />
                </View>
                <View style={{ gap: 18 }}>
                    <Text numberOfLines={2} style={styles.itemName}>{item?.title}</Text>
                    <Text style={styles.itemPrice}>$ 249.00</Text>
                </View>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartBtnTxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderCarousal = ({ item, index }) => {
        return (
            <View style={styles.productContainer}>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    scrollEnabled={false}
                />
            </View>

        )
    }

    return (
        <View style={styles.mainContainer}>
            <Image
                source={Images.Tiktok}
                style={styles.bannerImg}
            />
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.title} numberOfLines={2}>Found on TikTok</Text>
                    <TouchableOpacity style={styles.seeAllBtn}>
                        <Text style={styles.seeAllBtnText}>See All</Text>
                    </TouchableOpacity>
                </View>

                <Carousels
                    Data={sliceIntoChunks(products, 3)}
                    renderItem={renderCarousal}
                    dotsLength={sliceIntoChunks(products, 3).length}
                    loop={true}
                    autoplay={true}
                />
            </View>
        </View>
    )
}

export default FeaturedCategory

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    container: {
        backgroundColor: Colors.WHITE,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: wp(86.67),
        paddingVertical: '5%'
    },
    headingContainer: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingBottom: '2%'
    },
    productContainer: {
        // alignItems: 'center'
        // alignItems: 'center', justifyContent: 'center'
        // justifyContent: 'center',
        paddingHorizontal: '2%'
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5,
        textAlign: 'left'
    },
    seeAllBtn: {
        width: 88,
        height: 31,
        borderColor: Colors.themeColor,
        borderWidth: 1,
        padding: 6,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seeAllBtnText: {
        fontSize: 16,
        fontWeight: 600,
        color: Colors.themeColor,
        fontFamily: fonts.VisbyCF_Demibold,
        lineHeight: 17,
        letterSpacing: 0.5
    },
    listContainer: {
        width: wp(25.33),
        gap: 8,
        margin: '1%',
    },
    itemImgContainer: {
        height: hp(11.70),
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
        letterSpacing: 0.5,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500
    },
    itemPrice: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5
    },
    cartBtn: {
        backgroundColor: Colors.themeColor,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        height: hp(3.57),
        width: wp(25.33)
    },
    cartBtnTxt: {
        color: Colors.WHITE,
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 17,
        letterSpacing: 0.5,
        fontSize: 12
    },
    bannerImg: {
        height: hp(37.56),
        width: wp(86.67),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

})