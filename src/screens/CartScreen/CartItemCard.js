import { FlatList, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { ExpressView } from '../../constant/ListConstant'
import CartItemQuantity from './CartItemQty'
import Coupon from './Coupon';
import CartTotal from './CartTotal'
import { useDispatch, useSelector } from 'react-redux';
import { getItemsFromCart } from '../Store/actions/cartAction'
import Images from '../../constant/Images'
import { removeItemsFromCart } from '../Store/actions/cartAction'
import { wp, hp } from '../../constant/responsiveFunc'
import { AddtoCartAPICall } from '../../services/apis/CartAPI'
import { translate } from '../../utility'




const CartItemCard = () => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1);


    const { cartItems, cartData } = useSelector(state => state.cartReducer);
    const userData = useSelector((state) => state.userReducer.userData);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);



    const keyExtractor = (item, index) => {
        return index;
    };

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

    const renderEnglishTitle = (key) => {
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

    const renderArabicTitle = (key) => {
        switch (key) {
            case 'platform_arabic':
                return 'منصة'
            case 'variant_book_arabic':
                return 'كتاب'
            case 'variant_color_arabic':
                return 'لون'
            // case 'variant_item_package_quantity_arabic':
            //     return 'كمية حزمة السلعة'
            case 'variant_material_arabic':
                return 'مادة'
            case 'variant_model_arabic':
                return 'مشروط'
            case 'variant_size_arabic':
                return 'مقاس'
            case 'variant_style_arabic':
                return 'أسلوب'
            default:
                return null;
        }
    }

    const renderDescription = (str, key) => {
        // if (str.includes(':')) {
        //     return str.split(':')[1];
        // }
        // return str;

        if (selectedLanguageItem?.language_id == 1) {
            if (key.includes('arabic')) {
                return str;
            }
        }
        else {
            if (str.includes(':')) {
                return str.split(':')[1];
            }
            return str;
        }
    }

    const getVariations = (data) => {
        if (Object.keys(data).length > 0) {
            return (
                Object.keys(data).map(key => {
                    if (data[key] && key !== 'updatedAt' && key !== 'createdAt' && key !== 'id' && key !== 'variants' && key !== 'variant_item_package_quantity') {
                        return <Text key={key} style={styles.itemDetail}>{`${selectedLanguageItem?.language_id === 0 ? renderEnglishTitle(key) === null ? null : renderEnglishTitle(key) : renderArabicTitle(key)} : `}<Text style={{ color: Colors.PRICEGRAY }}>{renderDescription(data[key], key)}</Text></Text>
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
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>{translate('common.estimateddeliveryon')} <Text style={{ color: Colors.BLACK }}>{cartData?.deliveryDays?.delivery}</Text></Text>
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>{translate('common.orderwithin')}  <Text style={{ color: Colors.BLACK }}>{getTime(cartData?.deliveryDays?.time)}</Text></Text>
            </>
        )
    }

    const getExpressView = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemDetail}>{translate('common.fulfilledby')} <Text>{translate('common.hanooot')} </Text></Text>
                <ExpressView />
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <>

                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row', padding: '5%', }}>
                        <View style={{ width: '20%', alignContent: 'center' }}>
                            <Image source={{ uri: item?.ManagementProduct?.images[0] }} style={{ height: hp(8), width: wp(16), resizeMode: 'contain', margin: '2%' }} />
                        </View>
                        <View style={{ gap: 5, width: '80%' }}>
                            <Text style={styles.itemName} >{selectedLanguageItem?.language_id === 0 ? item?.ManagementProduct?.ManagementProductSeo?.product_name : item?.ManagementProduct?.ManagementProductSeo?.product_name_arabic}</Text>
                            {getVariations(item?.ManagementProduct?.ManagementProductVariantStyle)}
                            {getDeliveryInfo()}
                            {getExpressView()}
                            {/* <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text> */}
                            <Text style={styles.itemName} >{item?.price ? item?.price : 0}</Text>
                        </View>
                    </View>

                    <CartItemQuantity
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
                    />

                </View>
            </>
        );
    }

    return (
        <ScrollView style={{ marginBottom: hp(7) }}
        >
            <View style={{ height: hp(4.93), backgroundColor: Colors.YELLOWLIGHT, justifyContent: 'center', paddingHorizontal: '5%' }}>
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
    }
})