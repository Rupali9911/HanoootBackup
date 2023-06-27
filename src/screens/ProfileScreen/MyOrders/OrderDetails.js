import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';
import Images from '../../../constant/Images';

const OrderDetails = (props) => {
    const { route } = props;

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Order Details'}
            />
            <View style={styles.container}>

                {/* ================ORDER ID============== */}
                <View style={styles.row}>
                    <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>ORDER ID  :  <Text style={{ color: Colors.BLACK }}>407-1327557-9683528</Text></Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.column}>
                        <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>ORDER PLACED</Text>
                        <Text style={styles.orderDetail}>9 January 2023</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}>PATMENT METHOD</Text>
                        <Text style={styles.orderDetail}>Zain Cash</Text>
                    </View>
                </View>

                {/* ================ORDER PLACED & PAYMENT METHOD============== */}

                <View style={styles.productDetailCont}>
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
                </View>

                {/* ================PRODUCT DETAIL============== */}

                <View style={styles.row}>
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
                </View>


                {/* ================SHIPPING ADDRESS============== */}

                <View style={[styles.row, { flexDirection: 'column', gap: 8 }]}>
                    <Text style={[styles.orderDetail, { color: Colors.PRICEGRAY }]}> SHIPPING ADDRESS </Text>
                    <View>
                        <Text style={[styles.orderDetail, styles.otherStyle]}>{`Gregory R. Butler , 717 Mills \nGardens, Anbar-iraq ,`}</Text>
                        <Text style={[styles.orderDetail, styles.otherStyle]}>+964 713 380 5901</Text>
                    </View>
                </View>

                {/* ================PRICE TOTAL============== */}


                <View style={[styles.row, { flexDirection: 'column', gap: 8 }]}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderDetail}>Subtotal (1 item)</Text>
                        <Text style={[styles.orderDetail, styles.fontIncrease]}>$ 5,00.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderDetail}>Coupon Discount</Text>
                        <Text style={[styles.orderDetail, styles.fontIncrease, { color: Colors.GREEN }]}>- $ 5.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderDetail}>Shipping Cost</Text>
                        <Text style={[styles.orderDetail, styles.fontIncrease]}>$10</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={[styles.orderDetail, styles.otherStyle, styles.fontIncrease]}>Total  <Text style={{ color: Colors.PRICEGRAY, fontWeight: 500 }}>(Inclusive of VAT)</Text></Text>

                        <Text style={[styles.orderDetail, styles.otherStyle, styles.fontIncrease]}>$ 5,00.00</Text>
                    </View>
                </View>


            </View>


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
        fontFamily: fonts.VisbyCF_Medium,
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
        fontFamily: fonts.VisbyCF_Bold,
        fontWeight: 700,
        letterSpacing: 0.5,
        lineHeight: 21
    },
    productDetailCont: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.GRAY,
        paddingHorizontal: '10%',
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