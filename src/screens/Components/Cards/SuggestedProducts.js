import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import ListView from '../../../Components/ListView'
import { wp } from '../../../constant/responsiveFunc'

const SuggestedProducts = () => {

    const renderItem = ({ item, index }) => {
        return (
            <ListView
                centerImage={'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Free-Download.png'}
                productName={'Apple iPad  10.2 - inch Bionic chip ...'}
                price={'$ 5,000'}
                isLeftImage
                showLike
                isItemLiked={false}
            // isDiscountTag
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <>
            <ProductHeader title={'Suggested Products'} rightButtonLabel={'See All'} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                style={{ marginHorizontal: wp(6) }}
                showsHorizontalScrollIndicator={false}

            />

        </>
    )
}

export default SuggestedProducts

const styles = StyleSheet.create({})