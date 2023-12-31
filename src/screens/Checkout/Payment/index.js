import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import ProductHeader from '../../Components/Cards/ProductHeader';
import Images from '../../../constant/Images';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import Separator from '../../../constant/Separator';
import RadioButton from 'react-native-radio-button'
import AppButton from '../../Components/AppButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { translate } from '../../../utility';
import { hp } from '../../../constant/responsiveFunc';
import { getFonts } from '../../utils';


const Payment = (props) => {
    const [checked, setChecked] = useState(0);
    const navigation = useNavigation();



    const onPress = (index) => {
        setChecked(index);
    }

    return (
        // <AppBackground>
        //     <AppHeader />
        <>
            <ProductHeader title={translate('common.selectPayment')} />
            <View style={{ marginTop: 20 }}>
                <View style={styles.payCard}>
                    <RadioButton
                        innerColor={Colors.themeColor}
                        outerColor={Colors.GRAY}
                        animation={'bounceIn'}
                        isSelected={checked === 0}
                        onPress={() => { onPress(0) }}
                        size={10}
                    />
                    <Image source={Images.cashOnDelivery} style={{ height: 40, width: 45 }} />
                    <View>
                        <Text
                            style={styles.payMode}
                        >{translate('common.cashondelivery')}</Text>
                        <Text style={styles.payModeDesc} numberOfLines={2}>{translate('common.paywhenyougetorder')}</Text>
                    </View>
                </View>
                {/* <Separator separatorStyle={{ marginVertical: 0 }} /> */}
                {/* <View style={styles.payCard}>
                    <RadioButton
                        innerColor={Colors.themeColor}
                        outerColor={Colors.GRAY}
                        animation={'bounceIn'}
                        isSelected={checked === 1}
                        onPress={() => { onPress(1) }}
                        size={10}
                    />
                    <Image source={Images.ZainCash} style={{ height: 40, width: 45 }} />
                    <View>
                        <Text
                            style={styles.payMode}
                        >{'ZainCash'}</Text>
                        <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay online via Zaincash'}</Text>
                    </View>
                </View> */}
            </View>
            <Text
                style={styles.privacyText}
            >{translate('common.paymentWarning')}</Text>


            <View style={styles.bottomButtonCont}>
                <AppButton label={translate('common.continue')}
                    onPress={() => {
                        // const storeUser = async () => {
                        //     try {
                        //         let name = "PLACEORDER";
                        //         await AsyncStorage.setItem("BUTTON", name);
                        //     } catch (error) {
                        //         console.log(error);
                        //     }
                        // };
                        // storeUser();

                        props.setScreenType('PLACEORDER')

                    }}

                />
            </View>
        </>
        // </AppBackground>
    )
}

export default Payment;

const styles = StyleSheet.create({
    payCard: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 20,
    },
    payMode: {
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontSize: 16
    },
    payModeDesc: {
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.PRICEGRAY
    },
    privacyText: {
        fontFamily: getFonts.MEDIUM,
        padding: 20,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: Colors.PRICEGRAY
    },
    bottomButtonCont: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        // paddingVertical: '2%'
        height: hp(9.85)

    },

})