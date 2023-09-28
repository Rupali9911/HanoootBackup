import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { hp, RF } from '../../constant/responsiveFunc'
import ButtonInputContainer from './ButtonInputContainer'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import Images from '../../constant/Images'
import { getFonts } from '../utils'
// impo

const AppButton = (props) => {
    return (

        <ButtonInputContainer
            onPress={props.onPress}
            containerStyle={[
                styles.container,
                props.containerStyle,
                props.disabled && styles.inActive,
                props.isEmptyBG && styles.isEmptyBG,
                // props.bottomAlignButton && styles.bottomAlignButton
            ]}
            disabled={props.disabled}
        >
            <View style={styles.labelContainer}>
                {props.leftSideImg ? <Image source={props.ImgURI} style={{ height: 16, width: 16, resizeMode: 'contain', right: 10 }} /> : null}
                {props.isIndicatorLoading ? <ActivityIndicator style={styles.indicator} size="small" color={Colors.WHITE} /> : null}
                <Text style={[styles.label, props.labelStyle, props.isEmptyBG && styles.isEmptyBtnText]}>
                    {props.label}
                </Text>
            </View>

        </ButtonInputContainer>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: 600,
        color: Colors.WHITE,
        fontSize: RF(1.8),
        letterSpacing: 0.5,
        lineHeight: 21,

    },
    inActive: {
        opacity: 0.4,
    },
    isEmptyBG: {
        backgroundColor: Colors.LightGray
    },
    isEmptyBtnText: {
        color: Colors.themeColor
    },
    bottomAlignButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        paddingVertical: '2%'
    },
    indicator: {
        position: 'absolute',
        right: 100,
        // backgroundColor: 'green'


        // left: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-between'
        // width: '100%'
    },
})