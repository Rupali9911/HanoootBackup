import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constant/Colors';
import { hp, wp } from '../../constant/responsiveFunc';


const ButtonInputContainer = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.view}
            style={[
                styles.container,
                {
                    backgroundColor: props.isEmptyBG
                        ? Colors.GRAY
                        : Colors.themeColor,
                },
                props.containerStyle,
            ]}>
            {props.children}
        </TouchableOpacity>
    )
}

export default ButtonInputContainer

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        height: hp('6'),
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp('1%'),
        flexDirection: 'row',
        borderColor: Colors.themeColor
    },
})