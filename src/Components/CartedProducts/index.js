import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { ExpressView } from '../../constant/ListConstant'
import { wp, hp } from '../../constant/responsiveFunc'
import { useSelector } from 'react-redux'
import ProductCounter from '../../constant/ProductCounter'
import { getItemsFromCart } from '../../screens/Store/actions/cartAction'


const CartProductCards = (props) => {
    const { item } = props;

    const { isCartDataLoading, cartItems, cartData } = useSelector(state => state.cartReducer);
    const { isProductLoading, Product, ProductData } = useSelector(state => state.orderReducer);
    const { productQtyIdInfo, isBuyNowButton } = useSelector(state => state.productListReducer);

    const data = isBuyNowButton ? ProductData : cartData;


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
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{data?.deliveryDays?.delivery}</Text></Text>
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Order Within  <Text style={{ color: Colors.BLACK }}>{getTime(data?.deliveryDays?.time)}</Text></Text>
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
    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: 'row', padding: '5%', }}>
                <View style={{ width: '20%', alignContent: 'center' }}>
                    <Image source={{ uri: item?.ManagementProduct?.images[0] }} style={{ height: hp(8), width: wp(16), resizeMode: 'contain', margin: '2%' }} />
                </View>
                <View style={{ gap: 5, width: '80%' }}>
                    <Text style={styles.itemName} >{item?.ManagementProduct?.title}</Text>
                    {getVariations(item?.ManagementProduct?.ManagementProductVariantStyle)}
                    {getDeliveryInfo()}
                    {getExpressView()}
                    {/* <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text> */}
                    <Text style={styles.itemName} >{item?.price ? item?.price : 0}</Text>
                </View>
            </View>
            {/* <View style={styles.itemQuantityView}>
                <Text style={styles.quantityText}>Qty : </Text>
                <ProductCounter />
            </View> */}

            <View style={styles.container}>
                <Text style={styles.Text}>Qty : </Text>
                <ProductCounter
                    getCountValue={(val) => props.getCount(val)}
                    productId={item?.product_id}
                    noOfQty={item?.quantity}
                    onIncPressed={(val) => props.onIncrement(val)}

                />
                {/* <TouchableOpacity
                    onPress={props.onRemovePress}
                >
                    <Text style={[styles.Text, { color: Colors.themeColor }]}>REMOVE</Text>
                </TouchableOpacity> */}
            </View>


            {/* <CartItemQuantity
                onRemovePress={() => {
                    dispatch(removeItemsFromCart(item?.product_id))
                }}
                productId={item?.product_id}
                onIncrement={(data) => {
                    if (data?.success === true) {
                        dispatch(getItemsFromCart(1))
                    }
                }}
                getCount={(val) => { console.log(val) }}
                quantity={item?.quantity}

            /> */}




        </View>
    )
}

export default CartProductCards;

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



    mainQtyContainer: {
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: wp(100),
        flexDirection: 'row',
        // justifyContent: 'center'
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: '2%'

    },
    Text: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonView: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    qtyText: {
        fontWeight: 500,
        fontFamily: fonts.VisbyCF_Medium
    },
    buttonWithCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    itemQuantityView: {
        borderTopColor: Colors.GRAY,
        borderTopWidth: 1,
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '2%',
        backgroundColor: Colors.WHITE,
        gap: 8,

    },
    quantityText: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5
    },

    container: {
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: wp(100),
        flexDirection: 'row',
        // justifyContent: 'center'
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: '2%'

    },

})
