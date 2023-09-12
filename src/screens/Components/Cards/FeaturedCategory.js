import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Images from '../../../constant/Images'
import { hp, wp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import Carousels from '../Carousel'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoCartAPICall } from '../../../services/apis/CartAPI'
import { showInfoToast, showErrorToast } from '../../../Components/universal/Toast'
import { updateFeaturedCart } from '../../Store/actions/HomeAction'

const FeaturedCategory = (props) => {
    const Data = props.Data;
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [isAddToCart, setAddToCart] = useState('')

    const userData = useSelector((state) => state.userReducer.userData);

    const onAddtoCartPress = async (isCartedItem, productId) => {
        try {
            if (!isCartedItem) {

                const response = await AddtoCartAPICall(productId, 1)
                if (response?.success) {
                    setTimeout(() => {
                        setAddToCart(true)
                        showInfoToast('SUCCESS', response?.message)
                        dispatch(updateFeaturedCart(productId))
                    }, 1000);
                }
                else {
                    showErrorToast()
                }
            }
            else if (isCartedItem) {
                navigation.navigate('CartScreen', { screen: true })
            }


        }
        catch (error) {
            console.log('Error from onAddtoCartPress api ', error)
        }
    }

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        if (arr.length > 3) {
            for (let i = 0; i < arr.length; i += chunkSize) {
                const chunk = arr.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
        else {
            res.push(arr)
            return res;
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listContainer}
                onPress={() => navigation.push('ProductDetail', { id: item?.id })}
            >
                <View style={styles.itemImgContainer}>
                    <Image source={{ uri: item?.product_image }} style={styles.itemImg} />
                </View>
                <View style={{ gap: 18 }}>
                    <Text numberOfLines={2} style={styles.itemName}>{item?.title}</Text>
                    <Text style={styles.itemPrice}>$ {item?.ManagementProductPricing?.hanooot_price}</Text>
                </View>
                <TouchableOpacity style={styles.cartBtn}
                    onPress={() => userData ? onAddtoCartPress(item?.isCart, item?.id) : showErrorToast('For all your shopping needs', 'Please Login First')}
                >
                    <Text style={styles.cartBtnTxt}>{item?.isCart ? 'View Cart' : 'Add to Cart'}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
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
                    contentContainerStyle={{ alignItems: item?.length > 3 ? 'center' : 'flex-start' }}
                />
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Image
                source={{ uri: Data?.featuredCategoryByProduct?.thumbnail_image }}
                style={styles.bannerImg}
            />
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.title} numberOfLines={2}>{Data?.tittle}</Text>
                    <TouchableOpacity
                        style={styles.seeAllBtn}
                        onPress={() => navigation.navigate('ProductListWithFilters', { category_id: Data?.featuredCategoryByProduct?.id, headerTitle: Data?.featuredCategoryByProduct?.name })}
                    >
                        <Text style={styles.seeAllBtnText}>See All</Text>
                    </TouchableOpacity>
                </View>
                {
                    Data?.featuredCategoryByProduct?.ManagementProducts.length > 0 &&

                    <Carousels
                        Data={sliceIntoChunks(Data?.featuredCategoryByProduct?.ManagementProducts, 3)}
                        renderItem={renderCarousal}
                        dotsLength={sliceIntoChunks(Data?.featuredCategoryByProduct?.ManagementProducts, 3).length}
                        loop={true}
                        autoplay={true}
                        sliderWidth={wp(86.93)}
                        itemWidth={wp(86.93)}
                        containerStyle={{ paddingVertical: '5%' }}
                        enablePagination
                    />
                }
            </View>
        </View>
    )
}

export default FeaturedCategory

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(3)
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
        marginHorizontal: '1%',
        marginVertical: '2%',
        alignContent: 'center'
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
        borderTopRightRadius: 10,
        resizeMode: 'cover'
    },

})