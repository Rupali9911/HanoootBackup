import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'

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
        fontFamily: fonts.VisbyCF_Demibold,
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