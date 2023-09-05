import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import { hp, wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import Images from '../../../constant/Images'
import { capitalizeFirstLetter } from '../../utils'

const CategoryList = (props) => {
    const Data = props.Data;

    const electronicsArr = [
        Images.Android,
        Images.Android1,
        Images.Android2,
        Images.Android2,
        Images.Android,
    ];


    const renderChildren = ({ item, index }) => {
        return (
            <View style={styles.Container}>
                <Image source={{ uri: item?.thumbnail_image }} style={styles.image} />
                <Text style={styles.name} numberOfLines={2}>{item?.name}</Text>
            </View>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <ProductHeader title={capitalizeFirstLetter(item?.name)} rightButtonLabel={'See All'} />
                <FlatList
                    data={item?.children}
                    renderItem={renderChildren}
                    keyExtractor={keyExtractor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: wp(6) }}
                />
            </>
        );

    }

    return (
        <>
            <View >
                <FlatList
                    data={Data?.categoryList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        </>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    Container: {
        width: wp(26.67),
        height: hp(16.26),
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    name: {
        fontSize: 11,
        letterSpacing: 0.5,
        fontWeight: 500,
        fontFamily: fonts.VISBY_CF_REGULAR
    },
    image: {
        height: hp(9.11),
        width: wp(17.60),
        resizeMode: 'contain'
    },
})