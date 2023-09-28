import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../../utility'

const NewArrivals = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => {
        return (
            <ListView
                item={item}
                centerImage={item?.product_image}
                productName={item?.title}
                price={item?.ManagementProductPricing?.price_iqd}
                isLeftImage={item?.ManagementBrand?.name}
                showLike
                isItemLiked={item?.isLike}
                // isDiscountTag
                TotalPriceStyle={{ color: Colors.PRICEGREEN }}
                detailId={item?.id}
                onWishlistPress={props.onWishlistPress}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <>
            <ProductHeader title={Data?.tittle} rightButtonLabel={translate('common.seeall')} onPress={() => { navigation.navigate('ProductListWithFilters', { headerTitle: Data?.tittle, isNavigationSection: 'NewArrivals' }) }} />
            <FlatList
                data={Data?.newArrivalProductList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                style={{ marginHorizontal: wp(6) }}
                showsHorizontalScrollIndicator={false}
            />

        </>
    )
}

export default NewArrivals

const styles = StyleSheet.create({}) 