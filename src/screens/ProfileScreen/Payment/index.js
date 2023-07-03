import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import Images from '../../../constant/Images'

const Payment = () => {
    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Payment Method'}
            />

            <View>
                <View style={styles.payCard}>
                    <Image source={Images.cashOnDelivery} style={styles.image} />
                    <View>
                        <Text
                            style={styles.payMode}
                        >{'Cash On Delivery'}</Text>
                        <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay when you get order'}</Text>
                    </View>
                </View>
                <View style={styles.payCard}>
                    <Image source={Images.ZainCash} style={styles.image} />
                    <View>
                        <Text
                            style={styles.payMode}
                        >{'ZainCash'}</Text>
                        <Text style={styles.payModeDesc} numberOfLines={2}>{'Pay online via Zaincash'}</Text>
                    </View>
                </View>
            </View>
            <Text
                style={styles.privacyText}
            >
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in
                our privacy policy.
                <Text style={{ color: Colors.themeColor }}
                > privacy policy. </Text>
            </Text>
        </AppBackground>
    )
}

export default Payment

const styles = StyleSheet.create({
    payCard: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 20,
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1
    },
    payMode: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: 21,
        fontSize: 16
    },
    payModeDesc: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.PRICEGRAY
    },
    privacyText: {
        fontFamily: fonts.VisbyCF_Medium,
        padding: 20,
        fontWeight: 500,
        letterSpacing: 0.5,
        // textAlign: 'center',
        color: Colors.PRICEGRAY
    },
    image: {
        height: 40,
        width: 45,
        resizeMode: 'contain'
    }
});

