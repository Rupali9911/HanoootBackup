import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './Colors'
import fonts from './fonts'

const ExpressView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{'EXPRESS'}</Text>
        </View>
    )
}

export default ExpressView

const styles = StyleSheet.create({
    container: {
        width: 65,
        backgroundColor: Colors.YELLOW,
        left: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    name: {
        fontSize: 12,
        color: Colors.themeColor,
        fontWeight: '500',
        fontStyle: 'italic',
        fontFamily: fonts.VISBY_CF_REGULAR
    },
})