import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBackground from '../../Components/AppBackground';
import Colors from '../../../constant/Colors';
import AppHeader from '../../Components/AppHeader';
import { hp, wp } from '../../../constant/responsiveFunc';
import fonts from '../../../constant/fonts';
import AppInput from '../../../constant/AppInput';
import AppButton from '../../Components/AppButton';

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

            {/* <Text style={styles.termsPrivacy} >
                By Continuing, you agree to Hanooot
                <TouchableOpacity onPress={() => console.log('Terms & Condition')}>
                    <Text style={{ color: Colors.themeColor }} > Terms and Conditions </Text>
                </TouchableOpacity>
                and
                <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
                    <Text style={{ color: Colors.themeColor }} > Privacy Policy </Text>
                </TouchableOpacity>
            </Text> */}

            <AppButton
                label={'Continue'}
            />


            {/* <View style={{ backgroundColor: 'red' }}>
                <Text style={{ textAlign: 'center', width: '50%' }}>Or sign up with</Text>
            </View> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp(100) }}>
                <View style={{ borderBottomColor: Colors.GRAY, borderBottomWidth: 1, width: '35%' }}>

                </View>
                <Text style={{
                    fontFamily: fonts.VISBY_CF_REGULAR,
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: 0.5,
                }}>Or Sign Up with</Text>
                <View style={{ borderBottomColor: Colors.GRAY, borderBottomWidth: 1, width: '35%' }}>

                </View>
            </View>


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
    },
    termsPrivacy: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        textAlign: 'left',
        color: Colors.GRAY3,
        marginHorizontal: '5%',
        // backgroundColor: 'red'




        //         //styleName: English/Body Text Medium;
        // font-family: Visby CF;
        // font-size: 14px;
        // font-weight: 500;
        // line-height: 19px;
        // letter-spacing: 0.005em;
        // text-align: left;

    }

    //     //styleName: English/H1 Text Semi Bold;
    // font-family: Visby CF;
    // font-size: 22px;
    // font-weight: 600;
    // line-height: 27px;
    // letter-spacing: 0.005em;
    // text-align: center;

})