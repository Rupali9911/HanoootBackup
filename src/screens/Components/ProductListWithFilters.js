import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback, useState } from 'react'
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
import { capitalizeFirstLetter, getFonts } from '../utils'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { showErrorToast } from '../../Components/universal/Toast'
import { translate } from '../../utility'
import AppModal from '../../Components/universal/Modal'
import ModalContentWithoutLogin from '../../Components/universal/Modal/ModalContentWithoutLogin'

const ProductListWithFilters = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState(false);

    const DATA = props?.route?.params;

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFocused = useIsFocused();




    // console.log('searchsearchsearch : ', DATA.searchText)



    useEffect(() => {
        dispatch(productListReset())
        dispatch(productListLoadingStart());
        getProductListData(1);
        dispatch(productListPageChange(1));
    }, [isFocused]);

    const getProductListData = useCallback(page => {
        dispatch(getProductList(page, DATA?.category_id, DATA?.isNavigationSection, DATA?.searchText));
    }, []);

    const { isListLoading, productList, productListPage, productTotalCount } = useSelector(state => state.productListReducer);
    const userData = useSelector((state) => state.userReducer.userData);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    console.log('productList: ', productList)

    const renderItem = ({ item, index }) => {
        return (

            DATA?.isNavigationSection === 'NewArrivals'
                ?
                <ListView
                    item={item}
                    centerImage={item?.product_image}
                    productName={item?.title}
                    price={item?.ManagementProductPricing?.price_iqd}
                    // isLeftImage={item?.ManagementBrand?.name}
                    isExpress={item?.ManagementBrand?.name}
                    showLike
                    isItemLiked={item?.isLike}
                    // isDiscountTag
                    TotalPriceStyle={{ color: Colors.PRICEGREEN }}
                    detailId={item?.id}
                    ViewContStyle={{ width: wp('100%') / 2 - wp('5%') }}
                    onWishlistPress={() => setModalVisible(true)}
                />
                :
                DATA?.isNavigationSection === 'SuggestedProducts'
                    ?
                    <ListView
                        item={item}

                        centerImage={item?.product_image}
                        productName={item?.title}
                        price={item?.ManagementProductPricing?.price_iqd}
                        // isLeftImage={item?.ManagementBrand?.name}
                        isExpress={item?.ManagementBrand?.name}
                        showLike
                        isItemLiked={item?.isLike}
                        detailId={item?.id}
                        ViewContStyle={{ width: wp('100%') / 2 - wp('5%') }}
                        onWishlistPress={() => setModalVisible(true)}
                    />
                    :
                    DATA?.isNavigationSection === 'RecentlyViewProduct'
                        ?
                        <ListView
                            item={item}

                            centerImage={item?.ManagementProduct?.product_image}
                            productName={item?.ManagementProduct?.title}
                            price={item?.ManagementProduct?.ManagementProductPricing?.price_iqd}
                            isExpress={item?.ManagementProduct?.ManagementBrand?.name}
                            showLike
                            isItemLiked={item?.isLike}
                            detailId={item?.product_id}
                            ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
                            onWishlistPress={() => setModalVisible(true)}
                        />
                        :
                        DATA?.isNavigationSection === 'Search'
                            ?
                            <ListView
                                item={item}

                                centerImage={item?.product_image}
                                productName={selectedLanguageItem?.language_id === 0 ? item?.ManagementProductSeo?.product_name : item?.ManagementProductSeo?.product_name_arabic}
                                price={item?.ManagementProductPricing?.price_iqd}
                                isExpress={item?.ManagementBrand?.name}
                                detailId={item?.id}
                                ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
                            />
                            :
                            <ListView
                                item={item}
                                centerImage={item?.product_image}
                                productName={selectedLanguageItem?.language_id === 0 ? capitalizeFirstLetter(item?.ManagementProductSeo?.product_name) : item?.ManagementProductSeo?.product_name_arabic}
                                price={item?.ManagementProductPricing?.price_iqd}
                                // discount={item?.ManagementProductPricing.hanooot_discount}
                                averageRating={item?.ManagementProductReview?.average_rating}
                                noOfReview={item?.ManagementProductReview?.number_of_reviews}
                                detailId={item?.id}
                                // categoryId={item?.category_id}
                                isExpress={item?.ManagementBrand?.name}
                                showLike
                                isItemLiked={item?.isLike}
                                ViewContStyle={{
                                    width: wp('100%') / 2 - wp('5%'), height: hp(33.62)
                                }}
                                onWishlistPress={() => setModalVisible(true)}
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
        showErrorToast(translate('common.shoppingNeedsText'), translate('common.pleaseloginfirst'))
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

    return (

        <AppBackground>
            <AppHeader
                showBackButton
                title={capitalizeFirstLetter(DATA?.headerTitle)}
                titleComponentStyle={{ alignItems: 'flex-start', marginStart: 10 }}
                showLikeIcon
                showSearchIcon
                showCartIcon
                placeholderText={search ? translate('common.search') : null}
                onSearchPress={() => setSearch(true)}
                onCrossPress={setSearch}
                onCartPress={() => userData ? navigation.navigate('CartScreen', { screen: true }) : setModalVisible(true)}
                onWishlistPress={() => userData ? navigation.navigate('WishlistScreen') : setModalVisible(true)}
            />
            {
                isListLoading && productListPage === 1 ?
                    (<Loader />) :
                    productList?.length !== 0 ?
                        renderProductCollectionList()
                        :
                        renderNoDataFound()
            }

            <AppModal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <ModalContentWithoutLogin
                    onCancelPress={() => {
                        setModalVisible(false);
                    }}
                    onOkPress={() => {
                        navigation.navigate('Login');
                        setModalVisible(false);
                    }}
                />
            </AppModal>
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
        fontFamily: getFonts.SEMI_BOLD,
    },
})