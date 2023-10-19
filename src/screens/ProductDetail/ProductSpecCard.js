import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import { DataTable } from 'react-native-paper';
import fonts from '../../constant/fonts';
import Separator from '../../constant/Separator';
import Images from '../../constant/Images';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { translate } from '../../utility';
import { formattedPrice, getFonts } from '../utils';

const ProductSpecCard = (props) => {
    const { data } = props;
    const navigation = useNavigation();

    const { selectedLanguageItem } = useSelector((state) => state.languageReducer);


    const renderdata = () => {
        let tableData;

        // console.log('sdfsdf: ', data?.ManagementOtherField?.others_arabic)

        try {
            const str = selectedLanguageItem?.language_id === 0 ? data?.ManagementOtherField?.others : data?.ManagementOtherField?.others_arabic;
            let formatedString = str.replace(/"/g, "'").replace(/'/g, '"');
            tableData = JSON.parse(formatedString);
        } catch (error) {
            // tableData = data?.ManagementOtherField?.others_arabic; 
            console.log('error from renderData: ', error)
        }




        return (
            tableData ?
                Object.keys(tableData).map((key) => {
                    return (
                        <DataTable.Row key={key}>
                            <DataTable.Cell style={{ justifyContent: 'flex-start', }}><Text style={[styles.tableRowData, { color: Colors.GRAYDARK }]}>{[key]}</Text></DataTable.Cell>
                            <DataTable.Cell numeric style={{ justifyContent: 'flex-start' }}><Text style={styles.tableRowData} numberOfLines={2}>{tableData[key]}</Text></DataTable.Cell>
                        </DataTable.Row>
                    );
                })
                :
                null
            // <Text>{data?.ManagementOtherField?.others_arabic}</Text>
        )
    }

    const ProductInfo = () => {
        return (
            <>
                <View style={styles.BorderView}>
                    <View style={styles.tableHeaderCont}>
                        <Text style={styles.tableItemName}>{selectedLanguageItem?.language_id === 0 ? data?.ManagementProductSeo?.product_name : data?.ManagementProductSeo?.product_name_arabic}</Text>
                        {/* <Text style={styles.tableItemName}>{`${formattedPrice(data?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                        <Text style={styles.tableItemName}>{`${formattedPrice(data?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text> */}

                        {
                            data?.ManagementProductPricing?.discount_price_iqd ?
                                <>
                                    <Text style={styles.tableItemName} >{`${formattedPrice(data?.ManagementProductPricing?.discount_price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                                    <Text style={styles.productDiscountPrice} >{`${formattedPrice(data?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                                </>
                                :
                                <Text style={styles.tableItemName} >{`${formattedPrice(data?.ManagementProductPricing?.price_iqd)} ${translate('common.currency_iqd')}`}</Text>
                        }
                        <Text style={[styles.tableItemName, { color: Colors.GRAYDARK, fontSize: 12 }]}>{translate('common.essentialinformation')}</Text>
                    </View>
                    <View style={styles.Separator} />
                    <DataTable>
                        {renderdata()}
                    </DataTable>
                </View>
            </>

        );
    }


    const BestOffers = () => {
        return (
            <View style={styles.BorderView}>
                <View style={styles.offerViewContainer}>
                    <Image source={Images.OfferKey} style={styles.offerKeyImg} />
                    <View>
                        <Text style={styles.offerContent}>2 {translate('common.otherOffers')}</Text>
                        <Text style={[styles.offerContent, { color: Colors.GREEN }]}>$ 4,82.00</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OtherSellers', { Product: props.Item })}
                        style={{ position: 'absolute', right: 15 }}
                    >
                        <Image source={Images.ForwardIcon} style={styles.offerFwdIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }




    return (
        <>

            <View style={styles.mainCont}>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: '30%', gap: 10 }}>
                        <Text style={styles.cardDetails}>{translate('common.fulfilledby')}</Text>
                        {/* <Text style={styles.cardDetails}>Sort by</Text> */}
                    </View>
                    <View style={{ width: '60%', gap: 10 }}>
                        <Text style={styles.cardDetails}>{translate('common.hanooot')}</Text>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('SellerReview')}>
                            <Text style={[styles.cardDetails, { color: Colors.themeColor }]}>Ecom Nation</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <Separator />
                {/* {BestOffers()} */}
                {ProductInfo()}

            </View>

        </>
    )
}

export default ProductSpecCard;

const styles = StyleSheet.create({
    mainCont: {
        // width: wp(100),
        // height: hp(50),
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        paddingVertical: hp('2%'),
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: '2%'
    },
    tableRowData: {
        justifyContent: 'flex-start', fontFamily: getFonts.MEDIUM, fontSize: 12, fontWeight: 500
    },
    tableItemName: {
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5
    },
    Separator: {
        backgroundColor: Colors.GRAY,
        height: 1,
        marginVertical: hp('1%')
    },
    tableHeaderCont: {
        paddingHorizontal: 20, rowGap: 8, paddingTop: hp('1%')
    },
    BorderView: {
        borderWidth: 1, borderColor: Colors.GRAY, width: '90%', borderRadius: 8, marginVertical: hp('1%')
    },
    offerContent: {
        fontFamily: getFonts.SEMI_BOLD, fontSize: 12, lineHeight: 17, letterSpacing: 0.5, marginVertical: 1
    },
    offerViewContainer: {
        flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20
    },
    offerKeyImg: {
        height: 30, width: 30, resizeMode: 'contain'
    },
    offerFwdIcon: {
        width: 12, height: 12, resizeMode: 'contain', position: 'absolute', right: 15
    },
    cardDetails: {
        fontWeight: 500,
        fontFamily: getFonts.MEDIUM, letterSpacing: 0.5
    },
    productDiscountPrice: {
        fontFamily: getFonts.BOLD,
        lineHeight: 19,
        letterSpacing: 0.5,
        // fontWeight: 700,
        color: Colors.PRICEGRAY,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
})