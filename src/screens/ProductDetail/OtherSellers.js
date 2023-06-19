import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader'
import AppBackground from '../Components/AppBackground'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import { ExpressView } from '../../constant/ListConstant'
import { hp, wp } from '../../constant/responsiveFunc'
import Images from '../../constant/Images'


const OtherSellers = (props) => {
    const { route } = props;

    const ProductDetail = () => {
        return (
            <View style={styles.ProductView}>
                <Image source={route.params.Product.image} style={{ height: 65, width: 65 }} />
                <View style={{}} >
                    {/* <View style={{flexDirection :'row', justifyContent: 'space-between', backgroundColor: 'red', }}> */}
                    <Text
                        style={[styles.productName, {
                            color: Colors.PRICEGRAY,
                            fontSize: 12
                        }]}
                    >{'Apple'}</Text>

                    {/* <View  style={{flexDirection :'row'}}>
                        <Text>3</Text>
                        <Image source={Images.star} style={{height: 10, width: 10}}/>
                        <Text>(79 Rating)</Text>
                        </View>
                    </View> */}
                    
                    <Text style={styles.productName} numberOfLines={2} >{route.params.Product.name}</Text>
                </View>
            </View>
        );
    }

    const DeliveryDetail = () => {
        return (
            <View style={styles.deliveryView}>
                <Text style={styles.deliveryDetal}>Estimated Delivery on <Text style={{ color: Colors.BLACK }}>{'Sunday, 5 February.'}</Text></Text>
                <Text style={styles.deliveryDetal}>Order Within  <Text style={{ color: Colors.BLACK }}>{'8hr 40 mins.'}</Text></Text>
            </View>
        );
    }

    const SoldByDetail = () => {
        return (
            <View style={{ flexDirection: "row", gap: 50, marginBottom: 20 }}>
                <Text style={styles.soldDetail}>Sold by</Text>
                <Text style={[styles.soldDetail, { color: Colors.themeColor }]}>Smart Gad</Text>
            </View>
        );
    }

    const OfferCartButton = () => {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.ButtonTouchable}>
                    <Text style={styles.buttonText}>View Offer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonTouchable}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const OfferCard = () => {
        return (
            <View style={{ marginBottom: 10 }}>
                <View style={styles.cardView}>
                    <View style={styles.pricePercentDiscountView}>
                        <Text style={styles.pricePercentDiscount}>10% Off</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.price}>$ 5,00.00</Text>
                            <Text style={styles.discountPrice}>$ 5,00.00</Text>
                        </View>
                        <ExpressView />
                    </View>

                    {DeliveryDetail()}
                    {SoldByDetail()}

                </View>
                <View style={{ backgroundColor: Colors.WHITE }} >
                    {OfferCartButton()}
                </View>

            </View>

        );
    }

    const renderItem = ({ item, index }) => {
        return <OfferCard />
    }

    const keyExtractor = (item, index) => {
        return `_${index}`;
    };

    return (
        <AppBackground>
            <AppHeader placeholderText={'What are you looking for?'} showBackButton Search/>
            <Text style={styles.offerAvail}>2 offers available</Text>
            {ProductDetail()}
            <FlatList
                data={[1, 2]}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />


        </AppBackground>
    )
}

export default OtherSellers;

const styles = StyleSheet.create({
    offerAvail: {
        fontWeight: 600,
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5,
        backgroundColor: Colors.YELLOWLIGHT,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    ProductView: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center', gap: 10,
        padding: 20,
        borderBottomColor: Colors.GRAY,
        borderTopColor: Colors.GRAY,
        borderWidth: 1,
        // width: wp(100)
        // backgroundColor: 'green'
    },
    productName: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
    },
    pricePercentDiscountView: {
        backgroundColor: 'rgba(24, 186, 29, 0.1)',
        padding: '1%',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    pricePercentDiscount: {
        color: Colors.GREEN,
        fontFamily: fonts.VisbyCF_Demibold
    },
    price: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 18
    },
    discountPrice: {
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        fontSize: 18,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    rowItem: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    deliveryView: {
        borderWidth: 1, borderColor: Colors.GRAY, width: '100%', borderRadius: 8, marginVertical: hp('1%'), alignSelf: 'center', padding: 10
    },
    deliveryDetal: {
        color: Colors.PRICEGRAY, fontFamily: fonts.VISBY_CF_REGULAR, fontSize: 12, fontWeight: 600
    },
    soldDetail: {
        fontFamily: fonts.VisbyCF_Bold,
        fontWeight: 700
    },
    buttonText: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        color: Colors.themeColor
    },
    buttonView: {
        flexDirection: 'row', borderTopColor: Colors.GRAY, borderTopWidth: 1,

    },
    ButtonTouchable: {
        width: '50%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRightColor: Colors.GRAY, borderRightWidth: 1
    },
    cardView: {
        backgroundColor: Colors.WHITE, paddingTop: 20, paddingHorizontal: 20
    }
})