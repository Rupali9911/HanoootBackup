import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../../utility'
import { useSelector } from 'react-redux'


const RecentlyViewProduct = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    const renderItem = ({ item, index }) => {
        return (
            <ListView
                centerImage={item?.ManagementProduct?.product_image}
                productName={selectedLanguageItem?.language_id === 0 ? item?.ManagementProductSeo?.product_name : item?.ManagementProductSeo?.product_name_arabic}
                price={item?.ManagementProduct?.ManagementProductPricing?.price_iqd}
                // isLeftImage={item?.ManagementBrand?.name}
                isExpress={item?.ManagementBrand?.name}
                showLike
                isItemLiked={item?.isLike}
                detailId={item?.product_id}
                onWishlistPress={props.onWishlistPress}
                // TextViewStyle={{ height: 80 }}
                ViewContStyle={{ height: 273 }}

                discount={item?.ManagementProductPricing?.discount_price_iqd}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <>
            {
                Data?.listOfRecentViewProduct?.UserRecentProductVisits.length > 0
                    ?
                    (
                        <>
                            <ProductHeader title={selectedLanguageItem?.language_id === 0 ? Data?.tittle : translate('common.recentlyviewedproducts')} rightButtonLabel={translate('common.seeall')} onPress={() => { navigation.navigate('ProductListWithFilters', { headerTitle: selectedLanguageItem?.language_id === 0 ? Data?.tittle : translate('common.recentlyviewedproducts'), isNavigationSection: 'RecentlyViewProduct' }) }} />
                            <FlatList
                                data={Data?.listOfRecentViewProduct?.UserRecentProductVisits}
                                renderItem={renderItem}
                                keyExtractor={keyExtractor}
                                horizontal
                                style={{ marginHorizontal: wp(6) }}
                                showsHorizontalScrollIndicator={false}

                            />
                        </>
                    )
                    :
                    null
            }
        </>
    )
}

export default RecentlyViewProduct

const styles = StyleSheet.create({})