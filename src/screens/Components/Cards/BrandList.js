import { StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc';
import Colors from '../../../constant/Colors';
import { useNavigation } from '@react-navigation/native'
import ImageRenderer from '../../../Components/universal/ImageRender';


const BrandList = (props) => {
    const Data = props.Data;
    const navigation = useNavigation();


    const renderBrandList = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.brandContainer} key={item?.id}
                // onPress={() => navigation.navigate('ProductListWithFilters', { category_id: item?.id, headerTitle: item?.name })}
                onPress={() => { Linking.openURL('https://www.hanooot.com') }}
            // key={item?.id}

            >
                {/* <Image
                    source={{ uri: item?.thumbnail_image ? item?.thumbnail_image : 'https://digitalfactoryalliance.eu/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png' }}
                    style={styles.brandImage}
                /> */}
                <ImageRenderer height={hp(9.85)} width={wp(21.33)} style={styles.brandImage} uri={item?.brand_image} />
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