import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import fonts from '../../constant/fonts'
import { hp } from '../../constant/responsiveFunc'
import RadioButton from 'react-native-radio-button'
import { useSelector } from 'react-redux'
import { translate } from '../../utility'
import { getFonts } from '../utils'


const Coupon = () => {
    const [couponCode, setCouponCode] = useState('');
    const [btnText, setBtnText] = useState('Apply');
    const [couponClr, setCouponClr] = useState(Colors.WHITE);
    const [infoMsg, setInfoMsg] = useState(Colors.themeColor);
    const [placeholder, setPlaceholder] = useState('Enter Coupon Code');
    const [msg, setMsg] = useState('');

    const { couponSucess } = useSelector(state => state.cartReducer);


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
                setCouponCode(`${translate('common.hanoootSmall')} 15% ${translate('common.offisapplied')}`)

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
                setMsg(translate('common.coupanInvalid'));
            }
        }
        // else {
        //     setInfoMsg(Colors.themeColor)
        //     setMsg('Please Enter Coupon Code...');
        // }
    };



    return (
        <View style={styles.mainCont}>
            {/* <View style={styles.container}>
                <TextInput
                    value={couponCode}
                    onChangeText={handleChange}
                    style={[styles.Text, { color: couponCode === 'hanoot 15% off is Applied' ? Colors.GREEN : Colors.PRICEGRAY }]}
                    placeholder={'Enter Coupon Code'}
                    editable={false}
                />
                <TouchableOpacity style={styles.TouchableOpacity} onPress={handleSubmit}>

                    <View style={btnText === 'Change' ? styles.ChangeBtnView : styles.ApplyBtnView}>
                        <ButtonText color={couponClr} >{btnText}</ButtonText>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ color: infoMsg }}>{msg}</Text> */}
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <RadioButton
                    innerColor={Colors.themeColor}
                    outerColor={Colors.GRAY}
                    animation={'bounceIn'}
                    isSelected={true}
                    // onPress={() => { onPress(1) }}
                    size={10}
                />
                <Text style={styles.btnText}>{couponSucess[0]?.code}</Text>
            </View>
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
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center'




    },
    ChangeBtnView: {
        // backgroundColor: Colors.themeColor,
        borderRadius: 25,


        width: 100,
        // padding: 10,
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center'

    },
    TouchableOpacity: {
        position: 'absolute',
        right: 0,


    },
    btnText: {
        // fontWeight: 700,
        fontFamily: getFonts.BOLD,
        letterSpacing: 0.5,
        color: Colors.themeColor
    },
    Text: {
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
        fontFamily: getFonts.SEMI_BOLD,
        fontWeight: '500',
        letterSpacing: 0.5,
        height: hp('5%')
    },
    infoMsg: {
        // color : infoMsg
    }
})