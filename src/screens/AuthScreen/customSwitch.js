import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppBackground from '../Components/AppBackground';
import Colors from '../../constant/Colors';
import fonts from '../../constant/fonts';
import { hp, wp } from '../../constant/responsiveFunc';

const CustomSwitch = ({
    navigation,
    selectionMode,
    onSelectSwitch,
    selectionColor
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updatedSwitchData = (val, idx) => {
        setSelectionMode(idx);
        onSelectSwitch(val);
    };

    return (
        <View style={{alignItems: 'center', marginVertical: '5%'}}>
        <View
            style={{
                height: hp(5.5),
                width: wp(64),
                backgroundColor: Colors.LightGray,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: Colors.GRAY,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 2,
            }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updatedSwitchData('Mobile', 1)}
                style={{
                    flex: 1,

                    backgroundColor: getSelectionMode == 1 ? selectionColor : Colors.LightGray,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={[styles.text, {
                        color: getSelectionMode == 1 ? Colors.WHITE : Colors.GRAY3,
                    }]}>
                    {'Mobile'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                TouchableOpacity
                activeOpacity={1}
                onPress={() => updatedSwitchData('Email', 2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? selectionColor : Colors.LightGray,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={[styles.text,  {
                        color: getSelectionMode == 2 ? Colors.WHITE : Colors.GRAY3,
                    }]}>
                    {'Email'}
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};
export default CustomSwitch;


const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.VisbyCF_Medium,
        fontSize: 16,
        letterSpacing: 0.5,
        textAlign: 'center',
        fontWeight: 500



    }
})






