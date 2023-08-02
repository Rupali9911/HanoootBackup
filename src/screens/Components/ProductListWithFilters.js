import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import AppBackground from './AppBackground'
import AppHeader from './AppHeader'
import Images from '../../constant/Images'
import Colors from '../../constant/Colors'
import ListView from '../../Components/ListView'
import { ProductListData } from '../../constant/DemoArray'
import { wp, hp } from '../../constant/responsiveFunc'
// import { productListLoadingStart, productListPageChange } from '../Store/actions/ProductListAction'
// import { useSelector, useDispatch } from 'react-redux'
// import { productListLoadingStart, productListPageChange } from '../Store/actio'
import { productListLoadingStart, productListPageChange, getProductList, productListReset } from '../Store/actions/productListAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../constant/Loader'
import fonts from '../../constant/fonts'
import { capitalizeFirstLetter } from '../utils'
import { useNavigation } from '@react-navigation/native'

const ProductListWithFilters = (props) => {
    const DATA = props?.route?.params;

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { isListLoading, productList, productListPage, productTotalCount } = useSelector(state => state.productListReducer);


    useEffect(() => {
        console.log('useeffect called')
        dispatch(productListLoadingStart());
        dispatch(productListReset())
        getProductListData(1);
        dispatch(productListPageChange(1));
    }, []);

    const getProductListData = useCallback(page => {
        dispatch(getProductList(page, DATA?.category_id));
    }, []);




    const renderItem = ({ item, index }) => {
        return (
            <ListView
                item={item}
                centerImage={item?.product_image}
                productName={item?.title}
                price={item?.ManagementProductPricing.hanooot_price}
                // discount={item?.ManagementProductPricing.hanooot_discount}
                averageRating={item?.ManagementProductReview.average_rating}
                noOfReview={item?.ManagementProductReview.number_of_reviews}
                isExpress
                isLike
                ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderFooter = () => {
        if (!isListLoading) return null;
        return (
            <ActivityIndicator size='small' color={Colors.themeColor} />
        )
    }


    // console.log(productList.length, productTotalCount)

    const handleFlatListEndReached = () => {
        if (
            !isListLoading &&
            productList.length !== productTotalCount
        ) {
            let num = productListPage + 1;
            dispatch(productListLoadingStart());
            getProductListData(num);
            dispatch(productListPageChange(num));
        }
    }

    const refreshFunc = () => {
        dispatch(productListReset());
        getProductListData(1);
        dispatch(productListPageChange(1));
    }

    const handleFlatlistRefresh = () => {
        dispatch(productListLoadingStart());
        refreshFunc()
        console.log('Top Refresh Called')
    }


    const renderProductCollectionList = () => {
        return (
            <AppBackground>
                <AppHeader
                    showBackButton
                    title={capitalizeFirstLetter(DATA?.headerTitle)}
                    // showRightIcon
                    titleComponentStyle={{ alignItems: 'flex-start', marginStart: 10 }}
                    showLikeIcon
                    onLikePress={() => navigation.navigate('WishlistScreen')}
                    showSearchIcon
                    showCartIcon
                    onCartPress={() => navigation.navigate('CartScreen')}

                />
                <FlatList
                    numColumns={2}
                    data={productList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignSelf: 'center' }}
                    onEndReached={handleFlatListEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                    onRefresh={handleFlatlistRefresh}
                    refreshing={productListPage === 1 && isListLoading}
                />
            </AppBackground>
        );
    }


    const renderNoDataFound = () => {
        return (
            <View style={styles.sorryMessageCont}>
                <Text style={styles.sorryMessage}>{'No data found'}</Text>
            </View>
        );
    }


    // console.log('PRODUCT LIST DATA : ', productList)

    return (

        isListLoading && productListPage === 1 ?
            (<Loader />) :
            productList?.length !== 0 ?
                renderProductCollectionList()
                :
                renderNoDataFound()


    )
}

export default ProductListWithFilters;

const styles = StyleSheet.create({
    headerIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.BLACK
    },
    sorryMessageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sorryMessage: {
        fontSize: 15,
        fontFamily: fonts.VisbyCF_Demibold,
    },
})