import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignUp from '../AuthScreen/SignUp';
import OtpVerification from '../AuthScreen/SignUp/OtpVerification';
import OtpVerifySuccess from '../AuthScreen/SignUp/OtpVerifySuccess';
const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="OtpVerification" component={OtpVerification} />
      <Auth.Screen name="OtpVerifySuccess" component={OtpVerifySuccess} />
    </Auth.Navigator>
  );
};

export default AuthStack;
