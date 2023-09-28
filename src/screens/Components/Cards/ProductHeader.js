import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { hp, wp } from '../../../constant/responsiveFunc'
import { getFonts } from '../../utils'

const ProductHeader = (props) => {
    return (
        <View style={[styles.container, props.ContainerStyle]}>
            <View style={styles.rowContainer}>
                <Text style={[styles.text, props.TitleStyle]}>{props.title}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={[styles.text, { color: Colors.themeColor }]}>{props.rightButtonLabel}</Text>
                </TouchableOpacity>
            </View>
            {props.isSale ? <Text style={styles.isSale}>{props.isSale}</Text> : null}

        </View>
    )
}

export default ProductHeader;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(6.67),
        marginVertical: hp(2)
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 0.5,
        fontFamily: getFonts.MEDIUM,
        textAlign: 'left'
    },
    isSale: {
        color: Colors.RED,
        fontFamily: getFonts.SEMI_BOLD,
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0.5,
        // fontWeight: 700
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'flex-start'
    }
})