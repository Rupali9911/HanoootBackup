import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, RF } from '../../constant/responsiveFunc'
import ButtonInputContainer from './ButtonInputContainer'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import Images from '../../constant/Images'

const AppButton = (props) => {
    return (
    
        <ButtonInputContainer
            onPress={props.onPress}
            containerStyle={[
                styles.container,
                props.containerStyle,
                props.view && styles.inActive,
                props.isEmptyBG && styles.isEmptyBG,
                // props.bottomAlignButton && styles.bottomAlignButton
            ]}
            view={props.view}
            >
                {
                    props.leftSideImg ? <Image source={props.ImgURI} style={{height: 15, width: 15, resizeMode: 'contain' , right: 10}}/> : null
                }
            <Text style={[styles.label, props.labelStyle, props.isEmptyBG && styles.isEmptyBtnText]}>{props.label}</Text>
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
    }
})