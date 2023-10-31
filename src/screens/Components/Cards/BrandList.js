import { StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import { useNavigation } from '@react-navigation/native'
import ImageRenderer from '../../../Components/universal/ImageRender';


const BrandList = (props) => {
    const Data = props.Data;


    const renderBrandList = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.brandContainer} key={index}
                // onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: item?.name })}
                onPress={() => { Linking.openURL('https://www.hanooot.com') }}
            >
                <ImageRenderer height={hp(9.85)} width={wp(21.33)} style={styles.brandImage} uri={item?.brand_image} />
            </TouchableOpacity>
        );
    }

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };


    return (
        Data?.brandsList?.map((data, index) => {
            return (
                <FlatList
                    data={data}
                    renderItem={renderBrandList}
                    keyExtractor={keyExtractor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: wp(6) }}
                    key={index}
                />
            )
        })

    );
}

export default BrandList

const styles = StyleSheet.create({
    brandContainer: {
        height: hp(12.32),
        width: wp(26.67),
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginHorizontal: 5,
        marginTop: hp(3)
    },
    brandImage: {
        height: hp(9.85),
        width: wp(21.33),
        resizeMode: 'contain'
    }
})