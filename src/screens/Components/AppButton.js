import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, RF } from '../../constant/responsiveFunc'
import ButtonInputContainer from './ButtonInputContainer'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'

const AppButton = (props) => {
    return (
        <ButtonInputContainer
            onPress={props.onPress}
            containerStyle={[
                styles.container,
                props.containerStyle,
                props.view && styles.inActive,
            ]}
            view={props.view}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
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
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        color: Colors.WHITE,
        fontSize: RF(1.8),
        letterSpacing: 0.5,
        lineHeight: 21
    },
    inActive: {
        opacity: 0.4,
    },
})