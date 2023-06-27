import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { hp } from '../../constant/responsiveFunc'

const Coupon = () => {
    const [couponCode, setCouponCode] = useState('');
    const [btnText, setBtnText] = useState('Apply');
    const [couponClr, setCouponClr] = useState(Colors.WHITE);
    const [infoMsg, setInfoMsg] = useState(Colors.themeColor);
    const [placeholder, setPlaceholder] = useState('Enter Coupon Code');
    const [msg, setMsg] = useState('');

    const handleChange = (val) => {
        if (val === '') {
            setMsg('');
            setBtnText('Apply');
            setCouponClr(Colors.WHITE)
        }
        else if (val === '15%') {
            setCouponCode('');
        }
        setCouponCode(val);
    };

    const ButtonText = props => {
        const { color } = props;
        return <Text style={[styles.btnText, { color: color }]}>{props.children}</Text>
    }



    const handleSubmit = () => {
        var color;
        if (couponCode != '') {
            if (couponCode === '15%' && btnText != 'Change') {
                setCouponClr(Colors.themeColor);
                // setInfoMsg(Colors.GREEN)
                setBtnText('Change');
                setMsg('');
                setCouponCode('hanoot 15% off is Applied')

                // setMsg('hanoot 15% off is Applied');

            }
            else if (btnText === 'Change') {
                setCouponClr(Colors.WHITE)
                setBtnText('Apply')
                setCouponCode('')
                setMsg('');
            }
            else {
                setCouponClr(Colors.WHITE)
                setInfoMsg(Colors.RED)
                setBtnText('Apply')
                setMsg('Oops! Coupon code invalid');
            }
        }
        // else {
        //     setInfoMsg(Colors.themeColor)
        //     setMsg('Please Enter Coupon Code...');
        // }
    };



    return (
        <View style={styles.mainCont}>
            <View style={styles.container}>
                <TextInput
                    value={couponCode}
                    onChangeText={handleChange}
                    style={[styles.Text, { color: couponCode === 'hanoot 15% off is Applied' ? Colors.GREEN : Colors.PRICEGRAY }]}
                    placeholder={'Enter Coupon Code'}
                />
                <TouchableOpacity style={styles.TouchableOpacity} onPress={handleSubmit}>

                    <View style={btnText === 'Change' ? styles.ChangeBtnView : styles.ApplyBtnView}>
                        <ButtonText color={couponClr} >{btnText}</ButtonText>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ color: infoMsg }}>{msg}</Text>
        </View>
    )
}

export default Coupon

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderTopColor: Colors.GRAY,
        borderBottomColor: Colors.GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    container: {
        // borderWidth: 1,
        // borderColor: Colors.GRAY,
        // borderRadius: 25,
        // padding: 10,
        height: hp('6%')
    },
    ApplyBtnView: {
        backgroundColor: Colors.themeColor,
        borderRadius: 25,


        width: 100,
        // padding: 10,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center'




    },
    ChangeBtnView: {
        padding: 10,

    },
    TouchableOpacity: {
        position: 'absolute',
        right: 0,


    },
    btnText: {
        fontWeight: 700,
        fontFamily: fonts.VISBY_CF_REGULAR,
        letterSpacing: 0.5,
        color: Colors.themeColor
    },
    Text: {
        // fontFamily: fonts.VisbyCF_Demibold,
        // letterSpacing: 0.5,
        // color: Colors.PRICEGRAY,
        // left: 10,
        // height: hp('6%')

        borderWidth: 1,
        borderColor: Colors.GRAY,
        // paddingVertical: Platform.OS === 'ios' ? 15 : 8,
        // paddingHorizontal: 20,
        paddingHorizontal: 20,
        // fontSize: 16,
        borderRadius: 100,
        // backgroundColor: Colors.WHITE,
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: '500',
        letterSpacing: 0.5,
        height: hp('6%')
    },
    infoMsg: {
        // color : infoMsg
    }
})