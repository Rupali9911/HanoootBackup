import { ImageBackground, Modal, StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import React from 'react'
import { BlurView } from "@react-native-community/blur";
import Colors from '../../../constant/Colors';


const AppModal = (props) => {
    const { visible, onRequestClose } = props;

    // return (
    //     <Modal
    //         visible={visible}
    //         transparent
    //         onRequestClose={onRequestClose}
    //         // statusBarTranslucent={true}
    //         // activeOpacity={0.9}
    //         animationType="slide"
    //     >
    //         <BlurView
    //               blurType="dark"
    //               blurAmount={0.5}
    //             style={styles.absolute}
    //         //   reducedTransparencyFallbackColor={"white"}
    //         >
    //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //                 {props.children}
    //             </View>
    //         </BlurView>
    //     </Modal>
    // )

    if (Platform.OS === 'android') {
        if (visible) {
            return (
                <View activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                    <BlurView
                        blurType="dark"
                        style={styles.absolute}
                        blurAmount={1} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {props.children}
                    </View>
                    {/* </BlurView> */}
                </View>
            )
        } else {
            return (
                null
            )
        }
    } else {
        return (
            <Modal visible={visible} transparent onRequestClose={onRequestClose} animationType="slide">
                <BlurView
                    blurType="dark"
                    blurAmount={0.5}
                    style={styles.absolute}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {props.children}
                    </View>
                </BlurView>
            </Modal>
        );
    }








}

export default AppModal;

const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // backgroundColor: Colors.BLACK,
        // opacity: 0.5,
        // zIndex: -1
    },
    container: {
        flex: 1,
        // backgroundColor: Colors.whi,
        // paddingHorizontal: wp('5%'),
        justifyContent: 'center',
    },
})

