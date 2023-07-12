import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import Colors from '../../../constant/Colors';
import fonts from '../../../constant/fonts';

const countries = [
    {
        name: 'English',
        flag: require('../../../assets/images/USFlag.png'),
    },
    {
        name: '(Arabic) العربية',
        flag: require('../../../assets/images/IraqFlag.png'),
    },
];

const LanguageScreen = () => {
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(0)
    
    onCountryPress = (index) => {
        setSelectedCountryIndex(index);
    };

        return (
            <AppBackground>
                <AppHeader
                    showBackButton
                    title={'Language'}
                />
                {countries.map((country, index) => {
                    return (
                        <TouchableOpacity style={styles.container} key={index} onPress={() => onCountryPress(index)}>
                            <View style={styles.flagContainer}>
                                <Image
                                    style={styles.flagImage}
                                    source={country.flag}
                                />
                                <Text style={styles.countryName}>{country.name}</Text>
                            </View>
                            {selectedCountryIndex === index && (
                                <View style={styles.iconContainer}>
                                    <View style={styles.iconCircle}>
                                        <Image
                                            style={styles.iconImage}
                                            source={require('../../../assets/images/rightIcon.png')}
                                        />
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </AppBackground>

        );
}

export default LanguageScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
        backgroundColor: Colors.WHITE

    },
    flagContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImage: {
        width: 20,
        height: 15,
        resizeMode: 'contain'
    },
    countryName: {
        // color: '#000',
        // fontSize: 14,
        marginLeft: 10,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left'



        //         //styleName: English/Body Text Medium;
        // font-family: Visby CF;
        // font-size: 14px;
        // font-weight: 500;
        // line-height: 19px;
        // letter-spacing: 0.005em;
        // text-align: left;

    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    iconCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: 9,
        height: 6,
        resizeMode: 'contain'
        // backgroundColor: '#fff',
    },
});



