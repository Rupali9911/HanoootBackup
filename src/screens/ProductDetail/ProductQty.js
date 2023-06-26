import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors';
import { hp } from '../../constant/responsiveFunc';
import fonts from '../../constant/fonts';

// export default function ButtonView() {

//     return(<TouchableOpacity
//                 style={styles.buttonView}
//                 onPress={decrementCounter}
//             >
//                 <Text style={styles.buttonContent}>-</Text>
//             </TouchableOpacity>)
//   }

const ProductQuantity = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    const Increment = () => {
        return (
            <TouchableOpacity
                style={styles.buttonView}
                onPress={incrementCounter}
            >
                <Text style={styles.buttonContent}>+</Text>
            </TouchableOpacity>
        );
    }


    const Decrement = () => {
        return (
            <TouchableOpacity
                style={styles.buttonView}
                onPress={decrementCounter}
            >
                <Text style={styles.buttonContent}>-</Text>
            </TouchableOpacity>
        );
    }

    const Quantity = (props) => {
        return (
            <TouchableOpacity
                style={styles.buttonView}
                // onPress={decrementCounter}
                onPress={
                    props.onPress
                }
            >
                <Text style={styles.buttonContent}>{props.label}</Text>
            </TouchableOpacity>
        );
    }



    return (
        <View style={styles.container}>
            <Text style={styles.qtyText}>Qty : </Text>
            <View style={styles.buttonWithCounter}>
                {/* {Decrement()}
                 */}
                <Quantity onPress={() => decrementCounter()} label={'-'} />
                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.counter}>{counter}</Text>
                </View>
                {/* {Increment()} */}
                <Quantity onPress={() => incrementCounter()} label={'+'} />

            </View>
        </View>
    )
}

export default ProductQuantity;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 11,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: hp('1%')
    },
    buttonView: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        backgroundColor: Colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContent: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
        // width: '20%',
        // alignSelf: 'center',
        // justifyContent: 'center',
        // flex: 1,
        // backgroundColor: 'red'
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
        //  backgroundColor: 'green',

        //  right: 0
    }
})