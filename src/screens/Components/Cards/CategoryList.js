import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductHeader from './ProductHeader'
import { hp, wp } from '../../../constant/responsiveFunc'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { capitalizeFirstLetter } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../../utility'

const CategoryList = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();

    const renderChildren = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.Container}
                onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: item?.name })}
            >
                <Image source={{ uri: item?.thumbnail_image }} style={styles.image} />
                <Text style={styles.name} numberOfLines={2}>{item?.name}</Text>
            </TouchableOpacity>
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <ProductHeader title={capitalizeFirstLetter(item?.name)} rightButtonLabel={translate('common.seeall')} onPress={() => { navigation.navigate('Category') }} />
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
            <View>
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