import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen';
import Images from '../../../constant/Images';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import Separator from '../../../constant/Separator';
import { wp, hp, SIZE } from '../../../constant/responsiveFunc';
import { useDispatch } from 'react-redux';
import { removeWishlistItem } from '../../Store/actions/wishlistActions';
import { addToCart } from '../../Store/actions/cartAction';
import Toast from 'react-native-toast-message';
import { translate } from '../../../utility';
import { productCollection } from '../../../constant/DemoArray';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { wishlistLoading, wishlistReset, wishlistPageChange, getWishlistCollection } from '../../Store/actions/wishlistActions';
import { formattedPrice, getFonts } from '../../utils';
import Loader from '../../../constant/Loader';
import { SVGS } from '../../../constant';
import ImageRenderer from '../../../Components/universal/ImageRender';
import { showErrorToast, showInfoToast } from '../../../Components/universal/Toast';
import { AddtoCartAPICall } from '../../../services/apis/CartAPI';
import { addToWishlistAPICall } from '../../../services/apis/WishlistAPI';
// import useNavigation from '@react-navigation/native';

const { CrossIcon } = SVGS;


const Wishlist = () => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const navigation = useNavigation();


    useEffect(() => {
        dispatch(wishlistReset())
        dispatch(wishlistLoading(true));
        getWislistItem(1)
        dispatch(wishlistPageChange(1));
    }, [isFocused]);

    const getWislistItem = useCallback(page => {
        dispatch(getWishlistCollection(page))
    }, []);

    // const { cartItems } = useSelector(state => state.cartReducer);
    const { wishlistItems, isWishlistLoading, wishlistPage } = useSelector(state => state.wishlistReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    // console.log('Check wishlist data : ', wishlistItems)

    console.log('isWishlistLoading: ', isWishlistLoading)

    const RemoveButton = (props) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, alignSelf: 'flex-end', backgroundColor: Colors.LightGray, padding: '5%', borderRadius: 100, right: 10 }}
                onPress={props.onPress}
            >
                <CrossIcon />
            </TouchableOpacity>
        );
    }

    const onAddtoCartPress = async (id, qty) => {
        console.log('onAddtoCartPress')
        try {

            const response = await AddtoCartAPICall(id, qty)
            console.log('response from onAddtoCartPress: ', response)
            if (response?.success) {

                addToWishlistProduct(id)
                showInfoToast('SUCCESS', selectedLanguageItem?.language_id === 0 ? response?.message : response?.message_arabic)

            }
            else {
                showErrorToast()
            }

        }
        catch (error) {
            console.log('Error from onAddtoCartPress api ', error)
        }
    }

    const addToWishlistProduct = async (id) => {
        console.log('addToWishlistProduct', id)
        try {
            const response = await addToWishlistAPICall(id);
            console.log('response from addToWishlistProduct: ', response)


            if (response?.success) {
                // dispatch(wishlistReset())
                // dispatch(wishlistLoading(true));

                dispatch(getWishlistCollection(1))

            }
            else {
            }
        }
        catch (error) {
            console.log('Error from add to wishlist API api ', error)
        }


    }


    const renderItem = ({ item, index }) => {
        console.log('item : ', item)
        return (
            <TouchableOpacity
                style={styles.collectionListItem}>
                <View style={styles.listItemContainer}>
                    <RemoveButton
                        onPress={() => {
                            // dispatch(removeWishlistItem(item));
                            // showToast('DELETE', item?.name);
                            addToWishlistProduct(item?.product_id)
                        }}
                    />
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <ImageRenderer height={SIZE(100)} width={SIZE(100)} style={{ height: 100, width: 100, resizeMode: 'contain' }} uri={item?.ManagementProduct?.product_image} />
                    </View>

                    <View style={{
                        paddingVertical: hp('2%'),
                        paddingHorizontal: '5%',
                        gap: 10
                    }}>
                        <Text style={styles.name} numberOfLines={2}>{selectedLanguageItem?.language_id === 0 ? item?.ManagementProduct?.ManagementProductSeo?.product_name : item?.ManagementProductSeo?.ManagementProduct?.product_name_arabic}</Text>
                        <Text style={styles.price}>{`${formattedPrice(item?.ManagementProduct?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Image source={Images.star} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                            <Text style={[styles.price, { fontSize: 10 }]}>{item?.ManagementProduct?.ManagementProductReview?.average_rating}</Text>
                            <Text style={[styles.name, { fontSize: 10, color: Colors.PRICEGRAY }]}>{`${item?.ManagementProduct?.ManagementProductReview?.number_of_reviews} ${translate('common.reviews')}`}</Text>
                        </View>
                    </View>


                    <TouchableOpacity
                        style={{ paddingTop: 10, borderTopColor: Colors.GRAY, borderTopWidth: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            onAddtoCartPress(item?.product_id, 1)

                            // dispatch(getWishlistCollection(1))

                        }}
                    >
                        {/* {
                            isWishlistLoading ?
                                <ActivityIndicator SIZE={'small'} color={Colors.themeColor} />
                                : */}
                        <Text
                            style={{
                                fontFamily: getFonts.SEMI_BOLD,
                                fontWeight: 600,
                                fontSize: 12,
                                letterSpacing: 0.5,
                                color: Colors.themeColor
                            }}
                        >{translate('common.movetocart')}</Text>
                        {/* } */}

                    </TouchableOpacity>
                </View>
            </TouchableOpacity>




        );
    }

    const renderWishlistItems = () => {
        return (
            <FlatList
                numColumns={2}
                data={wishlistItems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            // numColumns={2}
            // data={productList}
            // renderItem={renderItem}
            // keyExtractor={keyExtractor}
            // showsVerticalScrollIndicator={false}
            // contentContainerStyle={{ alignSelf: productList?.length > 1 ? 'center' : 'flex-start' }}
            // onEndReached={handleFlatListEndReached}
            // onEndReachedThreshold={0.5}
            // ListFooterComponent={renderFooter}
            // onRefresh={handleFlatlistRefresh}
            // refreshing={productListPage === 1 && isListLoading}
            />
        )
    }

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderNoDataFound = () => {
        return (
            <EmptyDetailScreen
                image={Images.WishlistBanner}
                title={translate('common.movetocart')}
                description={translate('common.startAdding')}
                buttonLabel={translate('common.findItem')}
            // onpress={() => navigation.navigate('HomeTab')}
            />
        )
    }

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={translate('common.wishlist')}
            />

            {
                isWishlistLoading && wishlistPage === 1 ?
                    <Loader />
                    :
                    wishlistItems?.length !== 0 ?
                        renderWishlistItems()
                        :
                        renderNoDataFound()
            }


        </AppBackground>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     // margin: '2%',
    //     // marginHorizontal: '5%',
    //     // marginVertical: '5%',
    //     // marginRight: '2%',
    //     // margin: '2%',

    //     backgroundColor: Colors.WHITE,
    //     // margin: '5%',
    //     // paddingHorizontal: 10,
    //     // paddingTop: 10,
    //     // marginLeft: '5%',
    //     marginVertical: '5%',
    //     marginLeft: '5%',
    //     paddingVertical: 10,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     width: wp(40)
    // },
    name: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5
    },
    price: {
        fontFamily: getFonts.BOLD,
        // fontWeight: 700,
        letterSpacing: 0.5
    },
    collectionListItem: {
        marginVertical: wp("3"),
        marginHorizontal: wp("3"),
        width: (wp('100%') / 2) - wp('6%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 2

    },
    listItemContainer: {
        width: "100%",
        // borderRadius: 20,
        paddingVertical: '5%',
        overflow: 'hidden',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    toastMsgContainer: {
        // height: 60,
        flex: 1,
        width: wp(90),
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        // marginHorizontal: 20,
        alignItems: 'center',
        // flexWrap: 'wrap',
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        zIndex: 1,
        overflow: 'hidden'
    },
    toastMsgText: {
        fontFamily: getFonts.MEDIUM,
        fontSize: 16,
        letterSpacing: 0.5
    },
})




