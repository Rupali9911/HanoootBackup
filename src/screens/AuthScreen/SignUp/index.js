import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground';
import Colors from '../../../constant/Colors';
import AppHeader from '../../Components/AppHeader';
import { hp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import AppInput from '../../../constant/AppInput';

const Signup = () => {
    return (
        <AppBackground
            safeAreaColor={Colors.themeColor}
        >
            <AppHeader Image titleComponentStyle={{ backgroundColor: Colors.themeColor }} mainContainerStyle={{ height: hp('10%') }} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create Your Account</Text>
            </View>

            <AppInput
                label={'Your Name'}
                placeholder={'Enter your Name'}
                required
            />

            <AppInput
                label={'Mobile Phone Number'}
                placeholder={'Enter your phone number'}
                required
            />

            <AppInput
                label={'Password'}
                placeholder={'at least 8 characters'}
                required
                isEyeIconShow
                passwordError
            />



        </AppBackground>
    )
}

export default Signup;

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    titleContainer: {
        paddingVertical: '5%',
        // backgroundColor: 'red',
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 1
    }

    //     //styleName: English/H1 Text Semi Bold;
    // font-family: Visby CF;
    // font-size: 22px;
    // font-weight: 600;
    // line-height: 27px;
    // letter-spacing: 0.005em;
    // text-align: center;

})