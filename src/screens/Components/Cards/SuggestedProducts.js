import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'
import { useNavigation } from '@react-navigation/native'


const SuggestedProducts = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => {
        console.log('suggestedProducts item id : ', item?.id)
        return (
            <ListView
                centerImage={item?.product_image}
                productName={item?.title}
                price={item?.ManagementProductPricing?.hanooot_price}
                isLeftImage
                showLike
                isItemLiked={item?.isLike}
                detailId={item?.id}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <>
            {
                Data?.suggestedProducts.length > 0
                    ?
                    (<>
                        <ProductHeader title={Data?.tittle} rightButtonLabel={'See All'} onPress={() => { navigation.navigate('ProductListWithFilters', { headerTitle: Data?.tittle, isNavigationSection: 'SuggestedProducts' }) }} />
                        <FlatList
                            data={Data?.suggestedProducts}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            horizontal
                            style={{ marginHorizontal: wp(6) }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>)
                    : null

            }

        </>
    )
}

export default SuggestedProducts

const styles = StyleSheet.create({})