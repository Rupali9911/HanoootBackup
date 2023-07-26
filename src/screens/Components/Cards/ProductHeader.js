import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { wp } from '../../../constant/responsiveFunc'

const ProductHeader = (props) => {
    return (
        <View style={[styles.container, props.ContainerStyle]}>
            <View style={styles.rowContainer}>
                <Text style={[styles.text, props.TitleStyle]}>{props.title}</Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {color: Colors.themeColor}]}>{props.RightText}</Text>
                </TouchableOpacity>
            </View>
            {props.isSale ? <Text style={styles.isSale}>{props.isSale}</Text> : null}

        </View>
    )
}

export default ProductHeader;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginVertical: '2%'
    },

    // title: {
    //     fontSize: 16,
    //     fontWeight: 600,
    //     letterSpacing: 0.5,
    //     fontFamily: fonts.VisbyCF_Demibold,
    //     maxWidth: wp(61),
    //     color: Colors.BLACK
    // },
    // RightText: {
    //     fontSize: 16,
    //     fontWeight: 600,
    //     letterSpacing: 0.5,
    //     color: Colors.themeColor,
    //     fontFamily: fonts.VisbyCF_Demibold,
    //     letterSpacing: 0.5
    // },
    text: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 0.5,
        fontFamily: fonts.VisbyCF_Demibold,
    },
    isSale: {
        color: Colors.RED,
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0.5,
        fontWeight: 700
    },
    rowContainer: {
        flexDirection: 'row', justifyContent: 'space-between' 
    }
})