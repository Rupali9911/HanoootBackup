// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, {useState} from 'react'
// import Colors from './Colors'

// const ProductCounter = (props) => {
//     const [counter, setCounter] = useState(0);

//     const incrementCounter = () => {
//         setCounter(counter + 1);
//     };

//     const decrementCounter = () => {
//         if (counter !== 0) {
//             setCounter(counter - 1);
//         }
//     };


//     const Increment = () => {
//         return (
//             <TouchableOpacity
//                 style={styles.buttonView}
//                 onPress={incrementCounter}
//             >
//                 <Text style={styles.buttonContent}>+</Text>
//             </TouchableOpacity>
//         );
//     }


//     const Decrement = () => {
//         return (
//             <TouchableOpacity
//                 style={styles.buttonView}
//                 onPress={decrementCounter}
//             >
//                 <Text style={styles.buttonContent}>-</Text>
//             </TouchableOpacity>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             {Decrement()}
//             <Text style={styles.counter}>{counter}</Text>
//             {Increment()}
//         </View>
//     )
// }

// export default ProductCounter

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row', alignItems: 'center', gap: 12
//     },
//     buttonView: {
//         height: 25,
//         width: 25,
//         borderRadius: 25 / 2,
//         backgroundColor: Colors.themeColor,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     buttonContent: {
//         fontSize: 20,
//         color: Colors.WHITE,
//         fontWeight: 'bold'
//     },
//     counter: {
//         fontSize: 16, fontWeight: 'bold'
//     },

// })




import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from './Colors';
import { hp } from './responsiveFunc';
import fonts from './fonts';
import Images from './Images';

// export default function ButtonView() {

//     return(<TouchableOpacity
//                 style={styles.buttonView}
//                 onPress={decrementCounter}
//             >
//                 <Text style={styles.buttonContent}>-</Text>
//             </TouchableOpacity>)
//   }

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

    const Quantity = (props) => {
        return (
            <TouchableOpacity
                style={[styles.buttonView, { backgroundColor: props.Image === Images.MinusIcon ?  Colors.GRAYDARK : Colors.themeColor }]}
                // onPress={decrementCounter}
                onPress={
                    props.onPress
                }
            >
                {/* <Text style={styles.buttonContent}>{props.label}</Text> */}
                <Image source={props.Image} style={{height: 12, width: 12, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        );
    }



    return (
        <View style={styles.container}>
            <Quantity onPress={() => decrementCounter()} Image={Images.MinusIcon} />
            {/* <Text style={styles.counter}>{counter}</Text> */}

            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.counter}>{counter}</Text>
            </View>
            <Quantity onPress={() => incrementCounter()} Image={Images.PlusWhiteIcon} />
        </View>
        // <View style={styles.container}>
        //     {/* <Text style={styles.qtyText}>Qty : </Text> */}
        //     <View style={styles.buttonWithCounter}>
        //         {/* {Decrement()}
        //          */}
        //         <Quantity onPress={() => decrementCounter()} label={'-'} />
        //         <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
        //             <Text style={styles.counter}>{counter}</Text>
        //         </View>
        //         {/* {Increment()} */}
        //         <Quantity onPress={() => incrementCounter()} label={'+'} />

        //     </View>
        // </View>
    )
}

export default ProductCounter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        // backgroundColor: 'red'
    },
    // container: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderColor: Colors.GRAY,
    //     padding: 11,
    //     marginHorizontal: 20,
    //     borderRadius: 10,
    //     marginVertical: hp('1%')
    // },
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