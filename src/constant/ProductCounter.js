import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import Colors from './Colors';
import { hp } from './responsiveFunc';
import fonts from './fonts';
import Images from './Images';
import { AddtoCartAPICall } from '../services/apis/CartAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsFromCart } from '../screens/Store/actions/cartAction';

const ProductCounter = (props) => {
    console.log('propscalled : ', props)
    const [counter, setCounter] = useState(1);
    const userData = useSelector((state) => state.userReducer.userData);


    const dispatch = useDispatch();

    const incrementCounter = async () => {
        try {
            const incVal = props.noOfQty ? (Number(props.noOfQty) + 1) : (Number(counter + 1) || Number(1));
            const response = await AddtoCartAPICall(props.productId, incVal)
            // console.log(response)
            if (response?.success) {
                setCounter(counter + 1);
                props.getCountValue(incVal)
                props.onIncPressed(response)
                // dispatch(getItemsFromCart())
                // props.onIncrementPress
                // props.onIncPressed(dispatch(getItemsFromCart()))
                // props.getCountClickData(response?.data)
                // dispatch(getItemsFromCart())

            }
        }
        catch (error) {
            // console.log('error  from add to cart api : ', error)
        }
    };

    const decrementCounter = async () => {

        try {
            if (counter !== 1) {
                
                const decVal = props.noOfQty ? (Number(props.noOfQty) - 1) : (Number(counter - 1) || Number(1));
                const response = await AddtoCartAPICall(props.productId, decVal)
                if (response?.success) {
                    setCounter(counter - 1);
                    props.getCountValue(decVal)
                    // props.getCountClickData(response?.data)
                    props.onIncPressed(response)

                }
            }
        }
        catch (error) {
            // console.log('error  from add to cart api : ', error)
        }
        // props.onIncrement
        // props.onDecrementPress

        // setCounter(counter - 1);
        // props.getCountValue(Number(counter - 1) || Number(0))

    };

    const updateCounter = (isAdd) => {
        // props.onIncrementPress
        if (isAdd) {
            userData ? incrementCounter() : setCounter(counter + 1)
            // props.onIncrementPress
        } else {
            // decrementCounter()
            userData ? decrementCounter() 
            : 
            counter !== 1 && setCounter(counter - 1)
            // if (counter !== 1) {
            //     setCounter(counter - 1)
            // }
        }
    }

    const Quantity = useCallback((props) => {
        return (
            <TouchableOpacity
                style={[styles.buttonView, { backgroundColor: props.Image === Images.MinusIcon ? Colors.GRAYDARK : Colors.themeColor }]}
                onPress={
                    props.onPress
                }
            >
                <Image source={props.Image} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
            </TouchableOpacity>
        );
    }, [])



    return (
        <View style={styles.container}>
            <Quantity onPress={() => updateCounter(false)} Image={Images.MinusIcon} />

            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.counter}>{props.noOfQty ? props.noOfQty : counter}</Text>
            </View>
            <Quantity onPress={() => updateCounter(true)} Image={Images.PlusWhiteIcon} />
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
        fontFamily: fonts.VisbyCF_Medium
    },
    buttonWithCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    }
})