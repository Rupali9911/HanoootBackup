import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'
import { useNavigation } from '@react-navigation/native'

const RecentlyViewProduct = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();


    const renderItem = ({ item, index }) => {
        return (
            <ListView
                centerImage={item?.ManagementProduct?.product_image}
                productName={item?.ManagementProduct?.title}
                price={item?.ManagementProduct?.ManagementProductPricing?.hanooot_price}
                isLeftImage
                showLike
                isItemLiked={item?.isLike}
                detailId={item?.product_id}
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
                            <ProductHeader title={Data?.tittle} rightButtonLabel={'See All'} onPress={() => { navigation.navigate('ProductListWithFilters', { headerTitle: Data?.tittle, isNavigationSection: 'RecentlyViewProduct' }) }} />
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