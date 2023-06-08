import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { wp } from '../../../constant/responsiveFunc'

const ProductHeader = (props) => {
    return (
        <View style={[styles.container, props.ContainerStyle]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.title, props.TitleStyle]}>{props.title}</Text>
                <Text style={styles.seeAllTxt}>{props.RightText}</Text>
            </View>
            {props.isSale ? <Text style={styles.isSale}>{props.isSale}</Text> : null}

        </View>
    )
}

export default ProductHeader;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20, 
        marginVertical: 10
    },

    title: {
        fontSize: 16, 
        fontWeight: 600, 
        letterSpacing: 0.5,
        fontFamily: fonts.VisbyCF_Demibold,
        lineHeight: 21,
        maxWidth: wp(61)
    },
    seeAllTxt: {
        fontSize: 16, 
        fontWeight: 600, 
        letterSpacing: 0.5, 
        color: Colors.themeColor,
        fontFamily: fonts.VisbyCF_Demibold,
        letterSpacing: 0.5
    },
    isSale: {
        color: Colors.RED, 
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0.5,
        fontWeight: 700
    }
})