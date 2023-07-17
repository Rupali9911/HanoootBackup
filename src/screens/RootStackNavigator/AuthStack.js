import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../AuthScreen/SignUp';
import OtpVerification from '../AuthScreen/SignUp/OtpVerification';
import OtpVerifySuccess from '../AuthScreen/SignUp/OtpVerifySuccess';


const Auth = createStackNavigator();


const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName={'SignUpScreen'} screenOptions={{ headerShown: false }}>
            <Auth.Screen name="SignUpScreen" component={Signup} />
            <Auth.Screen name="OtpVerification" component={OtpVerification} />
            <Auth.Screen name="OtpVerifySuccess" component={OtpVerifySuccess} />
        </Auth.Navigator>
    );

}

export default AuthStack;

const styles = StyleSheet.create({})