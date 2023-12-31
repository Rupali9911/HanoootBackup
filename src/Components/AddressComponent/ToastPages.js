import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../../constant/Images'
import { hp, wp } from '../../constant/responsiveFunc'
import fonts from '../../constant/fonts'
import AppButton from '../../screens/Components/AppButton'
import { useNavigation, StackActions } from '@react-navigation/native'
import { translate } from '../../utility'
import SVGS from '../../constant/Svgs'
import { getFonts } from '../../screens/utils'

const { SuccessIcon } = SVGS

const ToastPages = (props) => {
    const navigation = useNavigation();
    const popAction = StackActions.pop(2);

    return (
        <>
            <View style={styles.container}>
                {/* <Image
                    source={Images.ToastSuccessBanner}
                    style={[styles.img, props.imageStyle]}
                /> */}
                <SuccessIcon />
                <Text
                    style={styles.title}
                >{props.route.params.title}</Text>
            </View>
            <AppButton
                label={translate('common.goback')}
                containerStyle={styles.btn}
                onPress={() => navigation.dispatch(popAction)}
            // onPress={() => navigation.navigate(props?.route?.params?.navigate)}
            // onPress={() => props.onPress ? props.onPress : navigation.navigate('MyAddress')}
            />
        </>
    )
}

export default ToastPages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    img: {
        height: hp(15),
        width: wp(34),
        resizeMode: 'contain'
    },
    title: {
        fontFamily: getFonts.BOLD,
        // fontWeight: 700,
        fontSize: 24,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    btn: {
        bottom: 50
    }
})