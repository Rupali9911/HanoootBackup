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
import { getItemsFromCart, removeCartItem } from '../Store/actions/cartAction'
import { setCartLabel } from '../Store/actions/cartAction'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Images from '../../constant/Images'
import { removeItemsFromCart } from '../Store/actions/cartAction'
import { wp, hp } from '../../constant/responsiveFunc'




const CartItemCard = (props) => {
    const dispatch = useDispatch();
    const [signleProductPrice, setSigleProductPrice] = useState()

    const { cartItems, cartData } = useSelector(state => state.cartReducer);

    const keyExtractor = (item, index) => {
        return index;
    };

    // console.log('signleProductPrice : ', signleProductPrice)

    const renderTitle = (key) => {
        switch (key) {
            case 'variant_size':
                return 'Size'
            case 'variant_color':
                return 'Color'
            case 'variant_style':
                return 'Style'
            case 'variant_model':
                return 'Modal'
            case 'variant_material':
                return 'Material'
            case 'platform':
                return 'Platform'
            case 'edition':
                return 'Edition'
            case 'configuration':
                return 'Configuration'
            case 'variant_book':
                return 'Book'
            default:
                return null;
        }
    }

    const renderDescription = (str) => {
        if (str.includes(':')) {
            return str.split(':')[1];
        }
        return str;
    }

    const getVariations = (data) => {
        if (Object.keys(data).length > 0) {
            return (
                Object.keys(data).map(key => {
                    if (data[key] && key !== 'updatedAt' && key !== 'createdAt' && key !== 'id' && key !== 'variants' && key !== 'variant_item_package_quantity') {
                        return <Text key={key} style={styles.itemDetail}>{`${renderTitle(key)} : `}<Text style={{ color: Colors.PRICEGRAY }}>{renderDescription(data[key])}</Text></Text>
                    }
                })
            )
        }
    }

    const getTime = (val) => {
        if (val.includes('-')) {
            let newStr = val.replace(/-/g, "").trim();
            const time = newStr.split(' ');

            return `${time[0]}hr ${time[1]}mins.`
        }

    }

    const getDeliveryInfo = () => {
        return (
            <>
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{cartData?.deliveryDays?.delivery}</Text></Text>
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Order Within  <Text style={{ color: Colors.BLACK }}>{getTime(cartData?.deliveryDays?.time)}</Text></Text>
            </>
        )
    }

    const getExpressView = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemDetail}>Fullfilled by <Text>Hanooot </Text></Text>
                <ExpressView />
            </View>
        )
    }


    console.log('cartItems : ', cartItems)

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', padding: '5%', }}>
                    <View style={{ width: '20%', alignContent: 'center' }}>
                        <Image source={item?.ManagementProduct?.images} style={{ height: hp(8), width: wp(16), resizeMode: 'contain', margin: '2%' }} />
                    </View>
                    <View style={{ gap: 5, width: '80%' }}>
                        <Text style={styles.itemName} >{item?.ManagementProduct?.title}</Text>
                        {getVariations(item?.ManagementProduct?.ManagementProductVariantStyle)}
                        {getDeliveryInfo()}
                        {getExpressView()}
                        {/* <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text> */}
                        <Text style={styles.itemName} >{item?.ManagementProduct?.ManagementProductPricing?.hanooot_price}</Text>
                    </View>
                </View>


                <CartItemQuantity
                    onRemovePress={() => {
                        dispatch(removeItemsFromCart(item?.product_id))
                        // dispatch(getItemsFromCart())
                    }}
                    productId={item?.product_id}
                    onIncrement={() => {console.log('helooo : ')}}
                // getData={(data) => {setSigleProductPrice(data?.total_cost)}}
                />
            </View>
        );
    }

    return (
        // <ScrollView style={{}}>
        //     <Text style={styles.deliveryLine}>Deliver to Japan-Iraq</Text>
        //     <FlatList
        //         data={CART}
        //         renderItem={renderItem}
        //         keyExtractor={keyExtractor}
        //         scrollEnabled={false}
        //     />
        //     <Coupon />
        //     <CartTotal />

        //     <Toast 
        //         config={toastConfig}
        //         position="bottom"
        //         visibilityTime={10000}
        //         autoHide={true}
        //     />

        // </ScrollView>
        <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        // scrollEnabled={false}
        />

    )
}

export default CartItemCard;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        width: wp(100),
        // padding: '5%',
        // flexDirection: 'row'
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
    toastMsgContainer: {
        height: 60, width: '90%', backgroundColor: Colors.WHITE, flexDirection: 'row', padding: 10, borderRadius: 8, marginHorizontal: 20, alignItems: 'center', gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        elevation: 7,
        zIndex: 1
    },
    toastMsgText: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5
    },
})