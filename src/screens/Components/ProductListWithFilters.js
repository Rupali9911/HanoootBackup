import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import AppBackground from './AppBackground'
import AppHeader from './AppHeader'
import Images from '../../constant/Images'
import Colors from '../../constant/Colors'
import ListView from '../../Components/ListView'
import { ProductListData } from '../../constant/DemoArray'
import { wp, hp } from '../../constant/responsiveFunc'
import { productListLoadingStart, productListPageChange, getProductList, productListReset } from '../Store/actions/productListAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../constant/Loader'
import fonts from '../../constant/fonts'
import { capitalizeFirstLetter } from '../utils'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { showErrorToast } from '../../Components/universal/Toast'
import { translate } from '../../utility'

const ProductListWithFilters = (props) => {
    const DATA = props?.route?.params;

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    const { isListLoading, productList, productListPage, productTotalCount } = useSelector(state => state.productListReducer);
    const userData = useSelector((state) => state.userReducer.userData);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);



    useEffect(() => {
        dispatch(productListReset())
        dispatch(productListLoadingStart());
        getProductListData(1);
        dispatch(productListPageChange(1));
    }, [isFocused]);

    const getProductListData = useCallback(page => {
        dispatch(getProductList(page, DATA?.category_id, DATA?.isNavigationSection));
    }, []);





    const renderItem = ({ item, index }) => {
        return (

            DATA?.isNavigationSection === 'NewArrivals'
                ?
                <ListView
                    item={item}
                    centerImage={item?.product_image}
                    productName={item?.title}
                    price={item?.ManagementProductPricing?.hanooot_price}
                    isLeftImage
                    showLike
                    isItemLiked={item?.isLike}
                    isDiscountTag
                    TotalPriceStyle={{ color: Colors.PRICEGREEN }}
                    detailId={item?.product_details_id}
                    ViewContStyle={{ width: wp('100%') / 2 - wp('5%') }}
                />
                :
                DATA?.isNavigationSection === 'SuggestedProducts'
                    ?
                    <ListView
                        centerImage={item?.product_image}
                        productName={item?.title}
                        price={item?.ManagementProductPricing?.hanooot_price}
                        isLeftImage
                        showLike
                        isItemLiked={item?.isLike}
                        detailId={item?.id}
                        ViewContStyle={{ width: wp('100%') / 2 - wp('5%') }}
                    />
                    :
                    DATA?.isNavigationSection === 'RecentlyViewProduct'
                        ?
                        <ListView
                            centerImage={item?.ManagementProduct?.product_image}
                            productName={item?.ManagementProduct?.title}
                            price={item?.ManagementProduct?.ManagementProductPricing?.hanooot_price}
                            isLeftImage
                            showLike
                            isItemLiked={item?.isLike}
                            detailId={item?.product_id}
                            ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
                        />
                        :
                        <ListView
                            item={item}
                            centerImage={item?.images[0]}
                            productName={selectedLanguageItem?.language_id === 0 ? capitalizeFirstLetter(item?.ManagementProductSeo?.product_name) : item?.ManagementProductSeo?.product_name_arabic}
                            price={item?.ManagementProductPricing?.hanooot_price}
                            // discount={item?.ManagementProductPricing.hanooot_discount}
                            averageRating={item?.ManagementProductReview?.average_rating}
                            noOfReview={item?.ManagementProductReview?.number_of_reviews}
                            detailId={item?.product_details_id}
                            // categoryId={item?.category_id}
                            isExpress
                            showLike
                            isItemLiked={item?.isLike}
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

    const renderToastMsg = () => {
        showErrorToast(translate('common.loginFirstText'))
    }


    const renderProductCollectionList = () => {
        return (

            <FlatList
                numColumns={2}
                data={productList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignSelf: productList?.length > 1 ? 'center' : 'flex-start' }}
                onEndReached={handleFlatListEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                onRefresh={handleFlatlistRefresh}
                refreshing={productListPage === 1 && isListLoading}
            />

        );
    }


    const renderNoDataFound = () => {
        return (
            <View style={styles.sorryMessageCont}>
                <Text style={styles.sorryMessage}>{translate('common.nodatafound')}</Text>
            </View>
        );
    }


    // console.log('PRODUCT LIST DATA : ', productList)

    return (

        <AppBackground>
            <AppHeader
                showBackButton
                title={capitalizeFirstLetter(DATA?.headerTitle)}
                titleComponentStyle={{ alignItems: 'flex-start', marginStart: 10 }}
                showLikeIcon
                showSearchIcon
                showCartIcon
            />
            {
                isListLoading && productListPage === 1 ?
                    (<Loader />) :
                    productList?.length !== 0 ?
                        renderProductCollectionList()
                        :
                        renderNoDataFound()
            }

        </AppBackground>

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