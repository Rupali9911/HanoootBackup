import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../constant/responsiveFunc'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import { translate } from '../../../utility'

const ModalContentWithoutLogin = (props) => {
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.removeHeading}>{translate('common.loginFirstMessage')}</Text>
            <Text style={styles.removeDesc}>{translate('common.wantContinue')}</Text>
            <View style={styles.modalBtnCont}>
                <TouchableOpacity
                    onPress={props.onCancelPress}
                    style={styles.btnViewCont}
                >
                    <Text style={styles.modalBtnText}>{translate('common.no')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.onOkPress}
                    style={[styles.btnViewCont, { backgroundColor: Colors.themeColor }]}
                >
                    <Text style={[styles.modalBtnText, { color: Colors.WHITE }]}>{translate('common.yes')}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ModalContentWithoutLogin

const styles = StyleSheet.create({
    modalMainCont: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    modalContainer: {
        backgroundColor: Colors.WHITE1,
        padding: 20,
        height: hp(20),
        // marginHorizontal: 20, 
        borderRadius: 4,
        width: wp(85),
        gap: 10
    },
    removeHeading: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5



    },
    removeDesc: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 19,
        color: Colors.PRICEGRAY
    },
    modalBtnCont: {
        flexDirection: 'row',
        //  marginVertical: '5%', 
        justifyContent: 'space-between'
    },
    btnViewCont: {
        borderRadius: 24,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.themeColor,
        height: hp(4.06),
        width: wp(35.73)
    },
    modalBtnText: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: Colors.themeColor
    },
})