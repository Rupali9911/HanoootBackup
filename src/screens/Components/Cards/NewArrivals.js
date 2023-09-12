import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import { useNavigation } from '@react-navigation/native'

const NewArrivals = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => {
        return (
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
                detailId={item?.id}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <>
            <ProductHeader title={Data?.tittle} rightButtonLabel={'See All'} onPress={() => { navigation.navigate('ProductListWithFilters', { headerTitle: Data?.tittle, isNavigationSection: 'NewArrivals' }) }} />
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