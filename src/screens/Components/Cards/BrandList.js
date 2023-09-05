import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Images from '../../../constant/Images';
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';

const BrandList = (props) => {
    const Data = props.Data;

    const renderBrandList = ({ item, index }) => {
        console.log('renderBrandList : ', item)
        return (
            <View style={styles.brandContainer} key={item?.id}>
                <Image
                    source={{ uri: item?.thumbnail_image ? item?.thumbnail_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }}
                    style={styles.brandImage}
                />
            </View>
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