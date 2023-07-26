import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import AppBackground from './AppBackground'
import AppHeader from './AppHeader'
import Images from '../../constant/Images'
import Colors from '../../constant/Colors'
import ListView from '../../Components/ListView'
import { ProductListData } from '../../constant/DemoArray'
import { wp, hp } from '../../constant/responsiveFunc'



const ProductListWithFilters = () => {

    const renderItem = ({ item, index }) => {
        return (
            <ListView
                item={item}
                isExpress
                isLike
                TotalPrice
                DisCountPrice
                isDiscountPercent
                isRating
                ViewContStyle={{ width: wp('100%') / 2 - wp('5%'), }}
            />
        );
    }

    const keyExtractor = (item, index) => {
        return index;
    };

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Android'}
                showRightIcon
                titleComponentStyle={{ alignItems: 'flex-start', marginStart: 10 }}
                rightIcon={
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Image
                            source={Images.searchIcon}
                            style={styles.headerIcon}
                        />
                        <Image
                            source={Images.Wishlist}
                            style={styles.headerIcon}
                        />
                        <Image
                            source={Images.cart}
                            style={styles.headerIcon}
                        />
                    </View>} 
                />


                <FlatList
                    numColumns={2}
                    data={ProductListData}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{alignSelf: 'center'}}
                />

        </AppBackground>
    )
}

export default ProductListWithFilters;

const styles = StyleSheet.create({
    headerIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.BLACK
    },
})