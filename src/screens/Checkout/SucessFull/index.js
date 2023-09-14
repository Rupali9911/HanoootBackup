import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Images from '../../../constant/Images'
import AppButton from '../../Components/AppButton'
import fonts from '../../../constant/fonts'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../../constant/Colors'
import { wp } from '../../../constant/responsiveFunc'
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../../utility'


const OrderSuccessScreen = () => {
    const navigation = useNavigation();

    return (
        <AppBackground safeAreaColor={Colors.LightGray}>
            <View style={styles.container}>
                <Image source={Images.OrderSuccess} style={styles.image} />
                <Text
                    style={styles.orderSuccessHeading}
                >{translate('common.orderplacedsuccessfully')}</Text>
                <Text style={styles.orderSuccessDesc}>{translate('common.thankYouForOrder')}</Text>
                <View>
                    <AppButton
                        isEmptyBG
                        label={translate('common.vieworder')}
                        onPress={() => navigation.navigate('OrderList')}
                    />
                    <AppButton
                        label={translate('common.backtoshopping')}
                        onPress={() => navigation.navigate('HomeTab')}
                    />
                </View>
            </View>
        </AppBackground>
    )
}

export default OrderSuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    image: {
        height: 150, width: 150, resizeMode: 'contain'
    },
    orderSuccessHeading: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 27,
        letterSpacing: 0.5
    },
    orderSuccessDesc: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.PRICEGRAY,
        maxWidth: wp(90),
        textAlign: 'center',
    }
})