import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Images from '../constant/Images'
import { hp, wp } from '../constant/responsiveFunc'
import fonts from '../constant/fonts'
import Colors from '../constant/Colors'
import AppButton from '../screens/Components/AppButton'
import { useNavigation } from '@react-navigation/native'

const EmptyDetailScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={props.image} style={[styles.image, props.imgStyle]} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <AppButton containerStyle={{ width: wp(80) }} label={props.buttonLabel} onPress={props.onpress} />
        </View>
    )
}

export default EmptyDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: '5%'
    },
    image: {
        height: hp(20),
        width: wp(42),
        resizeMode: 'contain',
        marginBottom: 20
    },
    title: {
        fontWeight: 700,
        fontSize: 20,
        fontFamily: fonts.VisbyCF_Bold,
        lineHeight: 25,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    description: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        lineHeight: 21,
        letterSpacing: 0.5,
        // maxWidth: '70%',
        color: Colors.PRICEGRAY,
        textAlign: 'center'
    }
})
