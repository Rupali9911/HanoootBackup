import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import Images from '../../../constant/Images';
import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { orderDetailLoadingStart, orderDetailReset, getOrderDetail } from '../../Store/actions/orderAction';
import { capitalizeFirstLetter, formattedPrice, getFonts } from '../../utils';
import Loader from '../../../constant/Loader';
import { translate } from '../../../utility';
import { getMonths } from '../../../constant/SwitchRenders';

const OrderDetails = (props) => {
    const { orderId, productId } = props?.route?.params;
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const { isOrderDetailLoading, orderDetail } = useSelector(state => state.orderReducer);
    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    console.log('check orderDetail : ', orderDetail)

    useEffect(() => {
        console.log('useeffect called')
        dispatch(orderDetailReset())
        dispatch(orderDetailLoadingStart())
        dispatch(getOrderDetail(orderId, productId))
    }, [isFocused])

    const renderOrderPlacedDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const formattedDate = `${day} ${getMonths(month)} ${year}`;

        return formattedDate;
    }

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.productDetailCont}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: item?.ManagementProduct?.images[0] }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productName}>{selectedLanguageItem?.language_id === 0 ? item?.ManagementProduct?.ManagementProductSeo?.product_name : item?.ManagementProduct?.ManagementProductSeo?.product_name_arabic}</Text>
                    <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{`${translate('common.quantity')} `}<Text style={{ color: Colors.BLACK }}>{item?.quantity}</Text></Text>
                    <Text style={[styles.orderDetail, { fontWeight: 600, fontSize: 18 }]}>{`${formattedPrice(item?.ManagementProduct?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                </View>
            </View>
        );
    }

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={translate('common.orderdetails')}
            />
            {
                isOrderDetailLoading && Object.keys(orderDetail).length === 0
                    ?
                    <Loader />
                    :

                    <View style={styles.container}>

                        {/* ================ORDER ID============== */}
                        <View style={styles.row}>
                            <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{translate('common.orderid')}<Text style={{ color: Colors.BLACK }}>{orderDetail?.id}</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.column}>
                                <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{translate('common.orderplaced')}</Text>
                                <Text style={styles.orderDetail}>{renderOrderPlacedDate(orderDetail?.createdAt)}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{translate('common.patmentmethod')}</Text>
                                <Text style={styles.orderDetail}>{orderDetail?.payment_method}</Text>
                            </View>
                        </View>

                        {/* ================ORDER PLACED & PAYMENT METHOD============== */}

                        <FlatList
                            data={orderDetail?.OrderProducts}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                        />

                        {/* <View style={styles.productDetailCont}>
                    <View>
                        <Image
                            style={styles.image}
                            source={Images.mobile5}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.productName}>Apple iPad  10.2 - inch Bionic chip
                            rose (4th Generation)</Text>
                        <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>QUANTITY  : <Text style={{ color: Colors.BLACK }}> 1 </Text></Text>
                        <Text style={[styles.orderDetail, { fontWeight: 600, fontSize: 18 }]}>$ 5,000.00</Text>
                    </View>
                </View> */}

                        {/* ================PRODUCT DETAIL============== */}

                        {/* <View style={styles.row}>
                            <View style={styles.invoiceView}>
                                <Image
                                    source={Images.Invoice}
                                    style={styles.icon}
                                />
                                <Text style={[styles.orderDetail, { color: Colors.themeColor }]}>Download Invoice</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => console.log('Download Invoice')}
                            >
                                <Image
                                    source={Images.ForwardIcon}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View> */}


                        {/* ================SHIPPING ADDRESS============== */}

                        <View style={[styles.row, { flexDirection: 'column', gap: 8 }]}>
                            <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{translate('common.shippingaddress')}</Text>
                            <View>
                                <Text style={[styles.orderDetail, styles.otherStyle]}>{`${(orderDetail?.UserAddress?.name)}, ${orderDetail?.UserAddress?.house}, ${orderDetail?.UserAddress?.building} \n${orderDetail?.UserAddress?.street}, ${orderDetail?.UserAddress?.city}`}</Text>
                                <Text style={[styles.orderDetail, styles.otherStyle]}>{orderDetail?.UserAddress?.phone_number}</Text>
                            </View>
                        </View>

                        {/* ================PRICE TOTAL============== */}


                        <View style={[styles.row, { flexDirection: 'column', gap: 8 }]}>
                            <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>{translate('common.orderdetails')}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.orderDetail}>{`${translate('common.total')}`}</Text>
                                <Text style={[styles.orderDetail, styles.fontIncrease]}>{`${formattedPrice(orderDetail?.total_amount)} ${translate('common.currency_iqd')}`}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.orderDetail}>{translate('common.shippingcost')}</Text>
                                <Text style={[styles.orderDetail, styles.fontIncrease]}>{`${formattedPrice(orderDetail?.shipping_cost)} ${translate('common.currency_iqd')}`}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.orderDetail}>{translate('common.coupondiscount')}</Text>
                                <Text style={[styles.orderDetail, styles.fontIncrease, { color: Colors.GREEN }]}>{`- ${orderDetail?.promocode_id === null ? 0 : formattedPrice(orderDetail?.shipping_cost)} ${translate('common.currency_iqd')}`}</Text>
                            </View>

                            <View style={styles.separator} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Text style={[styles.orderDetail, styles.otherStyle, styles.fontIncrease]}>{translate('common.ordertotal')}</Text>

                                <Text style={[styles.orderDetail, styles.otherStyle, styles.fontIncrease]}>{`${formattedPrice(orderDetail?.total_payable_amount)} ${translate('common.currency_iqd')}`}</Text>
                            </View>
                        </View>


                    </View>

            }
        </AppBackground>
    )
}

export default OrderDetails;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.WHITE,

    },
    row: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        paddingVertical: '3%'
    },
    orderDetail: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        letterSpacing: 0.5,
        // color: Colors.PRICEGRAY
        color: Colors.BLACK
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        gap: 8
    },
    productName: {
        fontSize: 16,
        fontFamily: getFonts.BOLD,
        // fontWeight: 700,
        letterSpacing: 0.5,
        lineHeight: 21
    },
    productDetailCont: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.GRAY,
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    invoiceView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },
    otherStyle: {
        color: Colors.BLACK,
        fontSize: 16
    },
    fontIncrease: {
        fontWeight: 'bold'
    },
    separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        marginVertical: '3%'

    }
})