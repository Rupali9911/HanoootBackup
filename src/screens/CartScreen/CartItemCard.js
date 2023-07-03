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
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Images from '../../constant/Images'




const CartItemCard = (props) => {
    const { CART } = props;
    const dispatch = useDispatch();

    const keyExtractor = (item, index) => {
        return index;
    };



    const toastConfig = {
        /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
        success: (props) => (
            <BaseToast
                {...props}
                style={{ borderLeftColor: 'pink' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 15,
                    fontWeight: '400'
                }}
            />
        ),
        /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
        error: (props) => (
            <ErrorToast
                {...props}
                text1Style={{
                    fontSize: 17
                }}
                text2Style={{
                    fontSize: 15
                }}
            />
        ),
        /*
          Or create a completely new type - `tomatoToast`,
          building the layout from scratch.
      
          I can consume any custom `props` I want.
          They will be passed when calling the `show` method (see below)
        */
        info: ({ text1, props }) => (
            //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            //     <Text>{text1}</Text>
            //     <Text>{props.uuid}</Text>
            //   </View>

            <View style={styles.toastMsgContainer}>
                <Image source={props.image} style={{ height: 20, width: 20 }} />
                <View>
                    <Text
                        style={styles.toastMsgText}
                    >{props.msg1}</Text>
                    {
                        props.msg2 && <Text style={styles.toastMsgText}>{props.msg2}</Text>
                    }
                    
                </View>
            </View>
        )
    };

    const showToast = () => {
        // Toast.show({
        //     type: 'info',
        //     text1: message,
        //     text2: message2

        // });
        Toast.show({
            type: 'info',

            // And I can pass any custom props I want
            props: {
                image: Images.ToastSuccess,
                msg1: "Product Removed Successfully!"
            }
        });
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <View>
                        <Image source={item.image} style={{ height: 60, width: 60, resizeMode: 'contain', margin: '2%' }} />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                        <Text style={styles.itemDetail}>Memory : <Text style={{ color: Colors.PRICEGRAY }}>{'128 GB'}</Text></Text>
                        <Text>Color : <Text style={{ color: Colors.PRICEGRAY }}>{'Purple Black'}</Text></Text>
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
                        showToast();
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

            <Toast 
                config={toastConfig}
                position="bottom"
                visibilityTime={10000}
                autoHide={true}
            />

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