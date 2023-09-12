// import { StyleSheet, Text, View, TouchableOpacity, Image, Button, pressed, Pressable } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../../constant/Colors';
// import Images from '../../../constant/Images';
// import fonts from '../../../constant/fonts';

// const ToggleButtons = (props) => {
//     const [isClicked, setIsClicked] = useState(false);
//     const [selected, setSelected] = useState(false);

//     changeColor = () => {
//         setIsClicked(!isClicked);
//     }


//     function ToggleButton({ name, onClick, selected }) {
//         return <Button title={name}
//             // onPress={ }
//         />

//         // onPress={() => name===selected ? backgroundColor: 'red' : backgroundColor: 'green'}
//         // onClick={()=>onClick(name)} className={`settings ${name===selected ? "change-color" : ""}`} />
//     }

//     const handleClick = (name) => {
//         setSelected(name)
//     }


//     return (
//         // <View style={styles.container}>
//         //     <TouchableOpacity
//         //         style={[styles.clickedButton, { backgroundColor: isClicked ? Colors.themeColor : Colors.WHITE }]}
//         //         onPress={() => {
//         //             setIsClicked(!isClicked),
//         //             props.onPress
//         //         }
//         //             // setIsClicked(!isClicked);
//         //             // props.onPress ||

//         //         }>
//         //         <Image
//         //             style={[styles.image, { tintColor: isClicked ? Colors.WHITE : Colors.themeColor }]}
//         //             source={props.Image}
//         //         />
//         //         <Text style={[styles.text, { color: isClicked ? Colors.WHITE : Colors.themeColor }]}>{props.Title}</Text>
//         //     </TouchableOpacity>
//         // </View>

//         //     <View>
//         //           <ToggleButton name="one" selected={selected} onClick={handleClick}/>
//         //   <ToggleButton name="two" selected={selected} onClick={handleClick}/>
//         //   <ToggleButton name="three" selected={selected} onClick={handleClick}/>
//         //   <ToggleButton name="four" selected={selected} onClick={handleClick}/>
//         //     </View>

//         // <Pressable
//         //     style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.btn]}>
//         //     {({ pressed }) => (
//         //         <Text style={[{ color: pressed ? 'white' : 'black' }, styles.btnText]}>
//         //             {'text'}
//         //         </Text>
//         //     )}
//         // </Pressable>

//         <View style={styles.container}>

//         <Button title={'Home'} onPress={() => setSelected(!selected)}/>
//         <Button title={'Office'}/>

//         </View>

//     )
// }

// export default ToggleButtons

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     button: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#2196F3',
//         borderRadius: 5,
//         padding: 10
//     },
//     clickedButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: Colors.themeColor,
//         borderRadius: 24,
//         padding: 10,
//         gap: 5
//     },
//     image: {
//         width: 15,
//         height: 15,
//         resizeMode: 'contain'
//     },
//     text: {
//         fontFamily: fonts.VisbyCF_Medium,
//         fontWeight: 500,
//         fontSize: 12,
//         letterSpacing: 0.5
//     }
// })


import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colors from "../../../constant/Colors";
import Images from "../../../constant/Images";
import fonts from "../../../constant/fonts";

export default ToggleButtons = (props) => {
    const [toggle1, settoggle1] = useState(false);
    const [toggle2, settoggle2] = useState(false);
    //   constructor() {
    //     super();
    //     this.state = {
    //       toggle1: false,
    //       toggle2: false,
    //     };
    //   }


    toggleButton1 = () => {
        // this.setState({ toggle1: !this.state.toggle1, toggle2: false });
        settoggle1(true);
        settoggle2(false);
    };

    toggleButton2 = () => {
        // this.setState({ toggle2: !this.state.toggle2, toggle1: false });
        settoggle2(true);
        settoggle1(false);
    };

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={
                    toggle1 ? styles.pressedButton : styles.unpressedButton
                }
                onPress={this.toggleButton1}
            >
                <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    toggle2 ? styles.pressedButton : styles.unpressedButton
                }
                onPress={this.toggleButton2}
            >
                <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={
                    toggle1 ? styles.pressedButton : styles.unpressedButton
                }
                onPress={() => {
                    toggleButton1();
                    props.onPress('Home')
                }}
            >
                <Image
                    style={[styles.image, { tintColor: toggle1 ? Colors.WHITE : Colors.themeColor }]}
                    source={Images.HomeButton}
                />
                <Text style={[styles.text, { color: toggle1 ? Colors.WHITE : Colors.themeColor }]}>{translate('common.home')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={
                    toggle2 ? styles.pressedButton : styles.unpressedButton
                }
                onPress={() => {
                    toggleButton2();
                    props.onPress('Office')
                }}
            >
                <Image
                    style={[styles.image, { tintColor: toggle2 ? Colors.WHITE : Colors.themeColor }]}
                    source={Images.HomeButton}
                />
                <Text style={[styles.text, { color: toggle2 ? Colors.WHITE : Colors.themeColor }]}>{translate('common.office')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: 'row',
        gap: 20,
        left: '5%'
    },
    // pressedButton: {
    //     backgroundColor: "#5C6BC0",
    //     padding: 10,
    //     borderRadius: 10,
    // },
    // unpressedButton: {
    //     backgroundColor: "#ECEFF1",
    //     padding: 10,
    //     borderRadius: 10,
    // },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    unpressedButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 24,
        padding: 10,
        gap: 5
    },
    pressedButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.themeColor,
        borderRadius: 24,
        padding: 10,
        gap: 5
    },
    image: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    text: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 0.5
    }
});