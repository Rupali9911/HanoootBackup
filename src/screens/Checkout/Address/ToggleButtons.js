import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Colors from '../../../constant/Colors';
import Images from '../../../constant/Images';
import fonts from '../../../constant/fonts';

const ToggleButtons = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    changeColor = () => {
        setIsClicked(!isClicked);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.clickedButton, { backgroundColor: isClicked ? Colors.themeColor : Colors.WHITE }]}
                onPress={() => {
                    setIsClicked(!isClicked),
                    props.onPress
                }
                    // setIsClicked(!isClicked);
                    // props.onPress ||
                    
                }>
                <Image
                    style={[styles.image, { tintColor: isClicked ? Colors.WHITE : Colors.themeColor }]}
                    source={props.Image}
                />
                <Text style={[styles.text, { color: isClicked ? Colors.WHITE : Colors.themeColor }]}>{props.Title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToggleButtons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10
    },
    clickedButton: {
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
})