import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { ExpressView } from '../../constant/ListConstant'
import CartItemQuantity from './CartItemQty'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Coupon from './Coupon';
import CartTotal from './CartTotal'
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../Store/actions/cartAction'
import { setCartLabel } from '../Store/actions/cartAction'



const CartItemCard = (props) => {
    const { CART } = props;
    const dispatch = useDispatch();

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View>
                        <Image source={item.image} style={{ height: 60, width: 60, resizeMode: 'contain', margin: '2%' }} />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                        <Text style={styles.itemDetail}>Memory : <Text style={{ color: Colors.PRICEGRAY }}>{item.specifications.memory}</Text></Text>
                        <Text>Color : <Text style={{ color: Colors.PRICEGRAY }}>{item.specifications.color}</Text></Text>
                        <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{'Sunday, 5 February.'}</Text></Text>
                        <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Order Within  <Text style={{ color: Colors.BLACK }}>{'8hr 40 mins.'}</Text></Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.itemDetail}>Fullfilled by <Text>Hanooot </Text></Text>
                            <ExpressView />
                        </View>
                        <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text>
                        <Text style={styles.itemName} >{item.price}</Text>
                    </View>
                </View>
                <CartItemQuantity
                    onRemove={() => {
                        dispatch(removeCartItem(item));
                        dispatch(setCartLabel('Add to Cart'));
                    }}
                />
            </View>
        );
    }

    return (
        <ScrollView style={{}}>
            <Text style={styles.deliveryLine}>Deliver to Japan-Iraq</Text>
            <FlatList
                data={CART}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                scrollEnabled={false}
            />
            <Coupon />
            <CartTotal />
        </ScrollView>

    )
}

export default CartItemCard;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.WHITE,
    },
    itemName: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    itemDetail: {
        fontFamily: fonts.VISBY_CF_REGULAR, fontSize: 12, fontWeight: 600
    },
    deliveryLine: {
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5,
        backgroundColor: Colors.YELLOWLIGHT,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: Colors.BLACK
    },
})