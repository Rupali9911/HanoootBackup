import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppBackground from '../Components/AppBackground'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../constant/responsiveFunc'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'


const ViewMoreCategories = (props) => {
    const ITEMS = props?.route?.params?.item;

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item?.image }}
                    style={styles.image}
                />
                {
                    item?.name &&
                    <Text numberOfLines={2}
                        style={styles.subCategoryText}
                    >{item?.name}</Text>
                }
            </View>
        );
    }


    return (
        <AppBackground>
            <AppHeader placeholderText={'What are you looking for?'} />
            <Text style={styles.title}>{ITEMS?.title}</Text>
            <View style={styles.centerView}>
                <FlatList
                    data={ITEMS?.products}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    renderItem={renderItem}
                />
            </View>
        </AppBackground>
    )
}

export default ViewMoreCategories

const styles = StyleSheet.create({
    itemContainer: {
        width: wp(21),
        backgroundColor: Colors.WHITE,
        margin: 5.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: '5%',
        paddingHorizontal: '2%',
        shadowColor: 'rgba(0, 0, 0, 0.03)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.9,
        shadowRadius: 0.30,
        elevation: 7,
        gap: 10
    },
    image: {
        height: hp(6),
        width: wp(13),
        resizeMode: 'contain'
    },
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'left',
        margin: '5%',
        fontSize: 16
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})