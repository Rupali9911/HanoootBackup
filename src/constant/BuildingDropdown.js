import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from './Colors';
import fonts from './fonts';
import { wp, hp } from './responsiveFunc';
import { translate } from '../utility';
import { getFonts } from '../screens/utils';

const BuildingDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Apartment', value: 'apartment' },
        { label: 'House', value: 'house' },
    ]);
    return (
        <>
            <View style={[styles.container, { marginBottom: props.error ? '5%' : 0 }]}>
                <Text style={[styles.label, props.labelStyle]}>{translate('common.buildingtype')}<Text style={{ color: Colors.RED }}>*</Text></Text>
                <DropDownPicker
                    open={open}
                    value={props.value}
                    items={items}
                    setOpen={setOpen}
                    setValue={props.setValue}
                    setItems={setItems}
                    placeholder={'Choose Building Type.'}
                    placeholderStyle={{
                        fontFamily: getFonts.MEDIUM,
                        fontWeight: '500',
                        letterSpacing: 0.5,
                        color: Colors.GRAYDARK
                    }}
                    style={[styles.pickerStyle, { borderRadius: open ? 0 : 100, borderColor: open ? Colors.themeColor : Colors.GRAY }]}
                    dropDownContainerStyle={{
                        borderColor: Colors.themeColor,
                        position: 'relative', // to fix scroll issue ... it is by default 'absolute'
                        top: 0, //to fix gap between label box and container,
                        height: hp(12),
                    }}
                    onChangeValue={(value) => {
                        console.log('value : ', value)
                        props.onSetBuilding && props.onSetBuilding(value)
                    }}
                />
                {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
            </View>

        </>
    )
}

export default BuildingDropdown

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginTop: '5%',
        zIndex: 1,
    },
    pickerStyle: {
        borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
        minHeight: hp('6%')
    },
    label: {
        fontFamily: getFonts.REGULAR,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginBottom: 5,
        fontWeight: '500',
        color: Colors.PRICEGRAY,
        fontSize: 14
    },
    errorMessage: {
        fontSize: 14,
        color: Colors.RED1,
        marginTop: 5,
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
    },
})