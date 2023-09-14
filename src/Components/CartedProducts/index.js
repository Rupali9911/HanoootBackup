import { StyleSheet, Text, View, Image } from 'react-native'
import React, { } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { ExpressView } from '../../constant/ListConstant'
import { wp, hp } from '../../constant/responsiveFunc'
import { useSelector } from 'react-redux'
import { getEnglishTitle, getArabicTitle } from '../../constant/SwitchRenders'
import { getVariantsData } from '../../screens/utils'
import { estimatedDelivery } from '../../screens/utils'
import CartItemQuantity from './CartItemQty'


const CartProductCards = (props) => {
    const { item } = props;

    const { cartData } = useSelector(state => state.cartReducer);
    const { ProductData } = useSelector(state => state.orderReducer);
    const { isBuyNowButton } = useSelector(state => state.productListReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);

    const data = isBuyNowButton ? ProductData : cartData;


    const getVariations = (data) => {
        if (Object.keys(data).length > 0) {
            return (
                Object.keys(data).map(key => {
                    if ((key.includes('arabic') && selectedLanguageItem?.language_id == 0)) { return null }
                    if ((!key.includes('arabic') && selectedLanguageItem?.language_id == 1)) { return null }
                    if (data[key] && key !== 'updatedAt' && key !== 'createdAt' && key !== 'id' && key !== 'variants' && key !== 'variant_item_package_quantity') {
                        return <Text key={key} style={styles.itemDetail}>{`${selectedLanguageItem?.language_id === 0 ? getEnglishTitle(key) : getArabicTitle(key)} : `}<Text style={{ color: Colors.PRICEGRAY }}>{getVariantsData(data[key], key, selectedLanguageItem?.language_id)}</Text></Text>
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
                <Text style={[styles.itemDetail, { color: Colors.PRICEGRAY }]}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{estimatedDelivery(cartData?.deliveryDays?.delivery)}</Text></Text>
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


    return (
        <View style={styles.mainContainer}>
            <View style={styles.cardCont}>
                <View style={styles.imgCont}>
                    <Image source={{ uri: item?.ManagementProduct?.images[0] }} style={styles.image} />
                </View>
                <View style={styles.rightViewCont}>
                    <Text style={styles.itemName} >{selectedLanguageItem?.language_id === 0 ? item?.ManagementProduct?.ManagementProductSeo?.product_name : item?.ManagementProduct?.ManagementProductSeo?.product_name_arabic}</Text>
                    {getVariations(item?.ManagementProduct?.ManagementProductVariantStyle)}
                    {getDeliveryInfo()}
                    {getExpressView()}
                    {/* <Text style={styles.itemDetail} >Sold by <Text style={{ color: Colors.themeColor }}>Ecom Nation</Text></Text> */}
                    <Text style={styles.itemName} >{item?.price ? item?.price : 0}</Text>
                </View>
            </View>
            <CartItemQuantity
                onRemovePress={props.onRemovePress}
                productId={item?.product_id}
                onIncrement={props.onIncrement}
                getCount={(val) => { console.log(val) }}
                quantity={item?.quantity}
                isRemoveShow={props.isRemoveShow}
            />
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
    cardCont: {
        flexDirection: 'row', padding: '5%',
    },
    imgCont: {
        width: '20%', alignContent: 'center'
    },
    image: {
        height: hp(8), width: wp(16), resizeMode: 'contain', margin: '2%'
    },
    rightViewCont: {
        gap: 5, width: '80%'
    }

})
