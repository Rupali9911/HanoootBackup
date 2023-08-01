import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
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
import { productListLoadingStart, productListPageChange, getProductList } from '../Store/actions/productListAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../constant/Loader'
import fonts from '../../constant/fonts'

const ProductListWithFilters = (props) => {
    const categoryId = props?.route?.params?.category_id;

    const dispatch = useDispatch();

    const { isListLoading, productList, productListPage } = useSelector(state => state.productListReducer);


    useEffect(() => {
        console.log('useeffect called')
        dispatch(productListLoadingStart());
        getProductListData(1);
        dispatch(productListPageChange(1));
    }, []);

    const getProductListData = useCallback(page => {
        dispatch(getProductList(page, categoryId));
    }, []);


    const renderItem = ({ item, index }) => {
        return (
            <ListView
                item={item}
                centerImage={item?.product_image}
                productName={item?.title}
                price={item?.ManagementProductPricing.hanooot_price}
                discount={item?.ManagementProductPricing.hanooot_discount}
                averageRating={item?.ManagementProductReview.average_rating}
                noOfReview={item?.ManagementProductReview.number_of_reviews}
                isExpress
                isLike
                isDiscountPercent
                // TotalPrice
                // DisCountPrice
                // isDiscountPercent
                // isRating
                ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };


    const renderProductCollectionList = () => {
        return (
            <AppBackground>
                <AppHeader
                    showBackButton
                    title={'Android'}
                    // showRightIcon
                    titleComponentStyle={{ alignItems: 'flex-start', marginStart: 10 }}
                    showLikeIcon
                    showSearchIcon
                    showCartIcon

                />
                <FlatList
                    numColumns={2}
                    data={productList?.data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignSelf: 'center' }}
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

    console.log('this is final product list data : ', productList)
    return (

        isListLoading && productListPage === 1 ?
            (<Loader />) :
            productList?.data?.length !== 0 ?
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