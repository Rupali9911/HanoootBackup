import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import Coupon from './Coupon';
import CartTotal from './CartTotal'
import { useDispatch, useSelector } from 'react-redux';
import { getItemsFromCart } from '../Store/actions/cartAction'
import { removeItemsFromCart } from '../Store/actions/cartAction'
import { wp, hp } from '../../constant/responsiveFunc'
import { AddtoCartAPICall } from '../../services/apis/CartAPI'
import { translate } from '../../utility'
import CartProductCards from '../../Components/CartedProducts'

const CartItemCard = () => {
    const dispatch = useDispatch();

    const { cartItems, cartData } = useSelector(state => state.cartReducer);
    const userData = useSelector((state) => state.userReducer.userData);

    const keyExtractor = (item, index) => {
        return index;
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <CartProductCards
                    item={item}
                    onIncrement={(data) => {
                        if (data?.success === true) {
                            dispatch(getItemsFromCart(1))
                        }
                    }}
                    onRemovePress={() => {
                        dispatch(removeItemsFromCart(item?.product_id))
                    }}
                    isRemoveShow />
            </>
        );
    }

    return (
        <ScrollView style={{ marginBottom: hp(7) }}
        >
            <View style={styles.yellowLineView}>
                <Text style={styles.deliveryLine}>{`${translate('common.deliverto')} ${userData?.displayName ? userData?.displayName : 'UserName'}-Iraq`}</Text>
            </View>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                scrollEnabled={false}
            />
            <Coupon />
            <CartTotal totalCost={cartData?.total_cost} couponAmt={0.00} />
        </ScrollView>

    )
}

export default CartItemCard;

const styles = StyleSheet.create({
    yellowLineView: {
        height: hp(4.93), backgroundColor: Colors.YELLOWLIGHT, justifyContent: 'center', paddingHorizontal: '5%'
    },
})