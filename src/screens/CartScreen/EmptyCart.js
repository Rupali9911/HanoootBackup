import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import AppButton from '../Components/AppButton'
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../utility'


const EmptyCart = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Images.CartImage} style={styles.cartImg} />
            <Text style={styles.emptyText}>{translate('common.cartEmpty')}</Text>
            <Text style={styles.addItemText}>{translate('common.startAddingItems')}</Text>
            <AppButton containerStyle={{ width: '100%' }} label={translate('common.startshopping')} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default EmptyCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: '10%'
    },
    cartImg: {
        height: hp(20),
        width: wp(42),
        resizeMode: 'contain',
        marginBottom: 20
    },
    emptyText: {
        // fontWeight: 700,
        fontSize: 20,
        fontFamily: fonts.VisbyCF_Bold,
        lineHeight: 25,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    addItemText: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 21,
        letterSpacing: 0.5,
        // maxWidth: '70%',
        color: Colors.PRICEGRAY,
        textAlign: 'center'
    }
})