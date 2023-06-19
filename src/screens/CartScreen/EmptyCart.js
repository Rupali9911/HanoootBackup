import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import AppButton from '../Components/AppButton'
import { useNavigation } from '@react-navigation/native';


const EmptyCart = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Images.CartImage} style={styles.cartImg} />
            <Text style={styles.emptyText}>Your Hanooot Cart is empty</Text>
            <Text style={styles.addItemText}>Start adding items you love to your wishlist by tapping on the heart icon</Text>
            <AppButton containerStyle={{ width: '70%' }} label={'Start Shopping'} onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

export default EmptyCart;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 15
    },
    cartImg: {
        height: hp(20), 
        width: wp(42), 
        resizeMode: 'contain', 
        marginBottom: 20
    },
    emptyText: {
        fontWeight: 700,
        fontSize: 20,
        fontFamily: fonts.VisbyCF_Bold,
        lineHeight: 25,
        letterSpacing: 0.5
    },
    addItemText: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 21,
        letterSpacing: 0.5,
        maxWidth: '70%',
        color: Colors.PRICEGRAY
    }
})