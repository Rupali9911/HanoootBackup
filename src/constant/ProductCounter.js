import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import Colors from './Colors';
import { hp } from './responsiveFunc';
import fonts from './fonts';
import Images from './Images';
import { AddtoCartAPICall } from '../services/apis/CartAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsFromCart } from '../screens/Store/actions/cartAction';
import { getFonts } from '../screens/utils';

const ProductCounter = (props) => {
    console.log('propscalled : ', props)
    const { disabled } = props;
    const [counter, setCounter] = useState(1);
    const [incIndicatorLoading, setIncIndecatorLoading] = useState(false);
    const [decIndicatorLoading, setDecIndecatorLoading] = useState(false);
    const userData = useSelector((state) => state.userReducer.userData);

    const dispatch = useDispatch();

    const incrementCounter = async () => {
        setIncIndecatorLoading(true)
        try {
            const incVal = props.noOfQty ? (Number(props.noOfQty) + 1) : setCounter(counter + 1);
            const response = await AddtoCartAPICall(props.productId, incVal)
            // console.log(response)
            if (response?.success) {
                // setCounter(counter + 1);

                props.getCountValue(incVal)
                props.onIncPressed(response)
                setIncIndecatorLoading(false)

                // dispatch(getItemsFromCart())
                // props.onIncrementPress
                // props.onIncPressed(dispatch(getItemsFromCart()))
                // props.getCountClickData(response?.data)
                // dispatch(getItemsFromCart())

            }
        }
        catch (error) {
            setIncIndecatorLoading(false)

            // console.log('error  from add to cart api : ', error)
        }
    };

    const decrementCounter = async () => {


        try {
            const isCheck = props.noOfQty ? props.noOfQty : counter

            if (isCheck !== 1) {
                setDecIndecatorLoading(true)


                const decVal = props.noOfQty ? (Number(props.noOfQty) - 1) : setCounter(counter - 1);
                const response = await AddtoCartAPICall(props.productId, decVal)
                if (response?.success) {

                    // setCounter(counter - 1);
                    props.getCountValue(decVal)
                    // props.getCountClickData(response?.data)
                    props.onIncPressed(response)
                    setDecIndecatorLoading(false)
                }
            }
        }
        catch (error) {
            setDecIndecatorLoading(false)

            console.log('error  from add to cart api : ', error)
        }
        // props.onIncrement
        // props.onDecrementPress

        // setCounter(counter - 1);
        // props.getCountValue(Number(counter - 1) || Number(0))

    };

    const updateCounter = (isAdd) => {
        if (isAdd) {
            userData ? incrementCounter() : setCounter(counter + 1)
        } else {
            userData ? decrementCounter()
                :
                counter !== 1 && setCounter(counter - 1)
        }
    }

    const Quantity = useCallback((props) => {
        // console.log('indicatorLoading', indicatorLoading)
        return (

            props.isLoading
                ?
                <ActivityIndicator size="small" color={Colors.themeColor} />
                :
                <TouchableOpacity
                    style={[styles.buttonView, { backgroundColor: props.Image === Images.MinusIcon ? Colors.GRAYDARK : Colors.themeColor }, disabled && styles.inActive
                    ]}
                    onPress={
                        props.onPress
                    }

                    disabled={disabled}

                >
                    <Image source={props.Image} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                </TouchableOpacity >


        );
    }, [])



    return (
        <View style={styles.container}>
            <Quantity onPress={() => updateCounter(false)} Image={Images.MinusIcon} isLoading={props.noOfQty ? decIndicatorLoading : false} />

            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.counter}>{props.noOfQty ? props.noOfQty : counter}</Text>

                {/* <ActivityIndicator size="small" color={Colors.themeColor} /> */}
            </View>
            <Quantity onPress={() => updateCounter(true)} Image={Images.PlusWhiteIcon} isLoading={props.noOfQty ? incIndicatorLoading : false} />
        </View>
    )
}

export default ProductCounter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonView: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    qtyText: {
        fontWeight: 500,
        fontFamily: getFonts.MEDIUM
    },
    buttonWithCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    inActive: {
        opacity: 0.4,
    },
})