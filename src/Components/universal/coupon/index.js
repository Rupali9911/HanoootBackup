import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../constant/Colors'
import fonts from '../../../constant/fonts'
import { hp } from '../../../constant/responsiveFunc'
import { useSelector } from 'react-redux'
import { translate } from '../../../utility'
import { getFonts } from '../../../screens/utils'
import { useDispatch } from 'react-redux'
import { getCoupon } from '../../../screens/Store/actions/cartAction'


const CouponDetail = (props) => {
    const [couponCode, setCouponCode] = useState('');
    const [btnText, setBtnText] = useState(translate('common.apply'));
    const [couponClr, setCouponClr] = useState(Colors.WHITE);
    const [infoMsg, setInfoMsg] = useState(Colors.themeColor);
    const [placeholder, setPlaceholder] = useState('Enter Coupon Code');
    const [msg, setMsg] = useState('');
    // const [couponEnable, setCouponEnable] = useState(false);

    const dispatch = useDispatch();

    const { couponSucess } = useSelector(state => state.cartReducer);


    console.log('couponSucess :', couponSucess)


    const handleChange = (val) => {
        if (val === '') {
            setMsg('');
            setBtnText(translate('common.apply'));
            setCouponClr(Colors.WHITE)
        }
        else if (val === couponSucess[0]?.discountType) {
            setCouponCode('');
        }
        setCouponCode(val);
    };

    const ButtonText = props => {
        const { color } = props;
        return <Text style={[styles.btnText, { color: color }]}>{props.children}</Text>
    }

    function areCharactersSameIgnoreCase(str1, str2) {
        // Convert both strings to lowercase and compare
        return str1.toLowerCase() === str2.toLowerCase();
    }



    const handleSubmit = () => {
        var color;
        if (couponCode != '') {
            if (areCharactersSameIgnoreCase(couponCode, couponSucess[0]?.discountType) && btnText != translate('common.change')) {
                dispatch(getCoupon());

                props.couponEnable(true)
                // setCouponEnable(true)
                setCouponClr(Colors.themeColor);
                // setInfoMsg(Colors.GREEN)
                setBtnText(translate('common.change'));
                setMsg(translate('common.couponAppliedSuccess'));
                // setCouponCode(`${translate('common.hanoootSmall')} 15% ${translate('common.offisapplied')}`)
                setCouponCode(couponSucess[0]?.discountType)

                // setMsg('hanoot 15% off is Applied');

            }
            else if (btnText === translate('common.change')) {
                // setCouponEnable(false)
                props.couponEnable(false)


                setCouponClr(Colors.WHITE)
                setBtnText(translate('common.apply'))
                setCouponCode('')
                setMsg('');
            }
            else {
                // setCouponEnable(false)
                props.couponEnable(false)


                setCouponClr(Colors.WHITE)
                setInfoMsg(Colors.RED)
                setBtnText(translate('common.apply'))
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
            <View style={styles.container}>
                <TextInput
                    value={couponCode}
                    onChangeText={handleChange}
                    // style={[styles.Text, { color: couponCode === 'hanoot 15% off is Applied' ? Colors.GREEN : Colors.PRICEGRAY }]}
                    style={[styles.Text]}
                    placeholder={translate('common.entercouponcode')}
                // editable={false}
                />
                <TouchableOpacity style={styles.TouchableOpacity} onPress={handleSubmit}>

                    <View style={btnText === translate('common.change') ? styles.ChangeBtnView : styles.ApplyBtnView}>
                        <ButtonText color={couponClr} >{btnText}</ButtonText>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ color: couponCode === couponSucess[0]?.discountType ? Colors.GREEN : Colors.RED }}>{msg}</Text>
            {/* <View style={{ flexDirection: 'row', gap: 10 }}>
                <RadioButton
                    innerColor={Colors.themeColor}
                    outerColor={Colors.GRAY}
                    animation={'bounceIn'}
                    isSelected={true}
                    // onPress={() => { onPress(1) }}
                    size={10}
                />
                <Text style={styles.btnText}>{couponSucess[0]?.code}</Text>
            </View> */}
        </View>
    )
}

export default CouponDetail

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