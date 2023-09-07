import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../../../constant/Images';
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import { useNavigation } from '@react-navigation/native'


const BrandList = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();


    const renderBrandList = ({ item, index }) => {
        console.log('renderBrandList : ', item)
        return (
            <TouchableOpacity
                style={styles.brandContainer} key={item?.id}
                onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: item?.name })}
            >
                <Image
                    source={{ uri: item?.thumbnail_image ? item?.thumbnail_image : 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' }}
                    style={styles.brandImage}
                />
            </TouchableOpacity>
        );
    }

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };


    return (
        <FlatList
            data={Data?.brandsList}
            renderItem={renderBrandList}
            keyExtractor={keyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: wp(6) }}
        />
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