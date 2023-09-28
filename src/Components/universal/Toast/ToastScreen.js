import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'
import AppButton from '../../../screens/Components/AppButton'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import { hp, wp } from '../../../constant/responsiveFunc'
import Images from '../../../constant/Images'
import { translate } from '../../../utility'
import { getFonts } from '../../../screens/utils'
const ToastScreen = (props) => {
    const navigation = useNavigation();
    const popAction = StackActions.pop(2);

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={Images.ToastSuccessBanner}
                    style={[styles.img, props.imageStyle]}
                />
                <Text
                    style={styles.title}
                >{props.route.params.title}</Text>
            </View>
            <AppButton
                label={translate('common.goback')}
                containerStyle={styles.btn}
                onPress={() => navigation.dispatch(popAction)}
            />
        </>
    )
}

export default ToastScreen

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