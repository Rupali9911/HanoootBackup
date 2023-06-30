import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../constant/responsiveFunc';
import Colors from '../../constant/Colors';
import { DataTable } from 'react-native-paper';
import fonts from '../../constant/fonts';
import Separator from '../../constant/Separator';
import Images from '../../constant/Images';
import { useNavigation } from '@react-navigation/native';


const ProductSpecCard = (props) => {
    const navigation = useNavigation();

    const rows = [
        ['Brand', 'Apple'],
        ['Modal Name', 'm344tkdf'],
        ['Wireless Career', 'Unlock for all career'],
        ['Operating System', 'IOS 16'],
        ['Cellular Technology', '5G'],
    ];

    const ProductInfo = () => {
        return (
            <>
                <View style={styles.BorderView}>
                    <View style={styles.tableHeaderCont}>
                        <Text style={styles.tableItemName}>Apple iPhone 14 Pro</Text>
                        <Text style={styles.tableItemName}>$ 5,000.00</Text>
                        <Text style={[styles.tableItemName, { color: Colors.GRAYDARK, fontSize: 12 }]}>Essential information</Text>
                    </View>
                    <View style={styles.Separator} />
                    <DataTable>
                        {
                            rows.map((items, index) => {
                                return (
                                    <DataTable.Row key={`_${index}`}>
                                        <DataTable.Cell style={{ justifyContent: 'flex-start', }}><Text style={[styles.tableRowData, { color: Colors.GRAYDARK }]}>{items[0]}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric style={{ justifyContent: 'flex-start' }}><Text style={styles.tableRowData}>{items[1]}</Text></DataTable.Cell>
                                    </DataTable.Row>
                                );
                            })
                        }

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
                        <Text style={styles.offerContent}>2 other offers from other sellers</Text>
                        <Text style={[styles.offerContent, { color: Colors.GREEN }]}>$ 4,82.00</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OtherSellers', {Product: props.Item})}
                        style={{position: 'absolute', right: 15}}
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
                        <Text style={styles.cardDetails}>Fulfilled by</Text>
                        <Text style={styles.cardDetails}>Sort by</Text>
                    </View>
                    <View style={{ width: '60%', gap: 10 }}>
                        <Text style={styles.cardDetails}>Hanooot</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SellerReview')}>
                            <Text style={[styles.cardDetails, { color: Colors.themeColor }]}>Ecom Nation</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Separator />
                {BestOffers()}
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
        justifyContent: 'flex-start', fontFamily: fonts.VisbyCF_Medium, fontSize: 12, fontWeight: 500
    },
    tableItemName: {
        fontFamily: fonts.VisbyCF_Demibold,
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
        fontFamily: fonts.VisbyCF_Demibold, fontSize: 12, lineHeight: 17, letterSpacing: 0.5, marginVertical: 1
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
        fontFamily: fonts.VisbyCF_Medium, letterSpacing: 0.5
    }
})