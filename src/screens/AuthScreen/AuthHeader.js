import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import { getFonts } from '../utils'

const AuthHeader = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default AuthHeader

const styles = StyleSheet.create({
    title: {
        fontFamily: getFonts.SEMI_BOLD,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    titleContainer: {
        paddingVertical: '5%',
        // backgroundColor: 'red',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1
    },
})