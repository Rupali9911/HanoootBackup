import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Colors from './Colors'

const ProductCounter = (props) => {
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

    return (
        <View style={styles.container}>
            {Decrement()}
            <Text style={styles.counter}>{counter}</Text>
            {Increment()}
        </View>
    )
}

export default ProductCounter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', gap: 12
    },
    buttonView: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
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
        fontSize: 16, fontWeight: 'bold'
    },

})