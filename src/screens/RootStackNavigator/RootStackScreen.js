<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
=======
import { StyleSheet } from 'react-native';
import React from 'react';
>>>>>>> 5d8f6fd5604fbfa2226ae5fb6603e61ecc7a3d95
import { createStackNavigator } from '@react-navigation/stack';
import TabComponent from './BottomTabNavigator';

import ProductDetail from '../ProductDetail';
import CartScreen from '../CartScreen';
import ReviewMainPage from '../ProductDetail/UserReview/ReviewMainPage';
import SellerReview from '../ProductDetail/SellerReview';
import OtherSellers from '../ProductDetail/OtherSellers';
import Address from '../Checkout/Address/Address';
import AddAddress from '../Checkout/Address/AddAddress';
import LoactionPin from '../Checkout/Address/LoactionPin';
// import Payment from '../Checkout/Payment';
import ReviewOrder from '../Checkout/Review/ReviewOrder';
import OrderSuccessScreen from '../Checkout/SucessFull';
import Checkout from '../Checkout';
import ProfileScreen from '../ProfileScreen';
import MyOrderList from '../ProfileScreen/MyOrders';
import OrderDetails from '../ProfileScreen/MyOrders/OrderDetails';
import Notification from '../ProfileScreen/Notifications';
import Wishlist from '../ProfileScreen/Wishlist';
import Payment from '../ProfileScreen/Payment';
import MyAddress from '../ProfileScreen/MyAddress';
// import AddNewAddress from '../ProfileScreen/MyAddress/AddNewAddress';
import Location from '../../Components/MyAddress/Location';
import NewAddress from '../../Components/MyAddress/NewAddress';
import ToastPages from '../../Components/MyAddress/ToastPages';
import ChangePassword from '../ProfileScreen/ChangePassword';
import ChangePasswordSuccess from '../ProfileScreen/ChangePassword/ChangePasswordSuccess';
import LanguageScreen from '../ProfileScreen/Language';
import SupportScreen from '../ProfileScreen/Help&Support';
import LegalPolicies from '../ProfileScreen/Legal&Policies';
import PrivacyPolicies from '../ProfileScreen/Legal&Policies/privacyPolicies';
import ReturnPolicy from '../ProfileScreen/Legal&Policies/returnPolicy';
import PolicyView from '../ProfileScreen/Legal&Policies/PolicyView';
import EditProfile from '../ProfileScreen/EditProfile';
<<<<<<< HEAD
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

export default function RootStackScreen() {
    const [userData, setUserData] = useState(false)



    return (
        <>
            {
                userData ? (
                    <Stack.Navigator
                        initialRouteName={'Home'}
                        screenOptions={{
                            animationEnabled: true,
                            headerShown: false,
                            animationTypeForReplace: 'pop',
                            transitionSpec: {
                                open: {
                                    animation: 'timing',
                                    duration: 1000,
                                },
                                close: {
                                    animation: 'timing',
                                    duration: 1000,
                                },
                            },
                        }}
                    >
                        <Stack.Screen name="Home" component={TabComponent} />
                        <Stack.Screen name="ProductDetail" component={ProductDetail} />
                        <Stack.Screen name="CartScreen" component={CartScreen} />
                        <Stack.Screen name="UserReview" component={ReviewMainPage} />
                        <Stack.Screen name="SellerReview" component={SellerReview} />
                        <Stack.Screen name="OtherSellers" component={OtherSellers} />
                        <Stack.Screen name="AddressDetail" component={Address} />
                        <Stack.Screen name="AddAddressDetail" component={AddAddress} />
                        <Stack.Screen name="PinLocation" component={LoactionPin} />
                        {/* <Stack.Screen name="Payment" component={Payment} options={{ headerMode: 'none' }} /> */}
                        <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
                        <Stack.Screen name="SuccessScreen" component={OrderSuccessScreen} />
                        <Stack.Screen name="CheckoutScreen" component={Checkout} />
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                        <Stack.Screen name="OrderList" component={MyOrderList} />
                        <Stack.Screen name="OrderDetail" component={OrderDetails} />
                        <Stack.Screen name="NotificationScreen" component={Notification} />
                        <Stack.Screen name="WishlistScreen" component={Wishlist} />
                        <Stack.Screen name="PaymentMethods" component={Payment} />
                        <Stack.Screen name="MyAddress" component={MyAddress} />
                        {/* <Stack.Screen name="AddNewAddress" component={AddNewAddress} options={{ headerMode: 'none' }} /> */}
                        <Stack.Screen name="Location" component={Location} />
                        <Stack.Screen name="NewAddress" component={NewAddress} />
                        <Stack.Screen name="ToastMessageScreen" component={ToastPages} />
                        <Stack.Screen name="ChangePassword" component={ChangePassword} />
                        <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccess} />
                        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
                        <Stack.Screen name="SupportScreen" component={SupportScreen} />
                        <Stack.Screen name="LegalPolicies" component={LegalPolicies} />
                        <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} />
                        <Stack.Screen name="ReturnPolicies" component={ReturnPolicy} />
                        <Stack.Screen name="PolicyWebViewScreen" component={PolicyView} />
                        <Stack.Screen name="EditProfileScreen" component={EditProfile} />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Authentication" component={AuthStack} />
                    </Stack.Navigator>
                )}
        </>

    );
=======
import Signup from '../AuthScreen/SignUp';
import OtpVerification from '../AuthScreen/SignUp/OtpVerification';
import OtpVerifySuccess from '../AuthScreen/SignUp/OtpVerifySuccess';
const Stack = createStackNavigator();

export default function RootStackScreen() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={TabComponent} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="UserReview" component={ReviewMainPage} />
            <Stack.Screen name="SellerReview" component={SellerReview} />
            <Stack.Screen name="OtherSellers" component={OtherSellers} />
            <Stack.Screen name="AddressDetail" component={Address} />
            <Stack.Screen name="AddAddressDetail" component={AddAddress} />
            <Stack.Screen name="PinLocation" component={LoactionPin} />
            {/* <Stack.Screen name="Payment" component={Payment} /> */}
            <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
            <Stack.Screen name="SuccessScreen" component={OrderSuccessScreen} />
            <Stack.Screen name="CheckoutScreen" component={Checkout} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="OrderList" component={MyOrderList} />
            <Stack.Screen name="OrderDetail" component={OrderDetails} />
            <Stack.Screen name="NotificationScreen" component={Notification} />
            <Stack.Screen name="WishlistScreen" component={Wishlist} />
            <Stack.Screen name="PaymentMethods" component={Payment} />
            <Stack.Screen name="MyAddress" component={MyAddress} />
            {/* <Stack.Screen name="AddNewAddress" component={AddNewAddress} /> */}
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="NewAddress" component={NewAddress} />
            <Stack.Screen name="ToastMessageScreen" component={ToastPages} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccess} />
            <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
            <Stack.Screen name="SupportScreen" component={SupportScreen} />
            <Stack.Screen name="LegalPolicies" component={LegalPolicies} />
            <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} />
            <Stack.Screen name="ReturnPolicies" component={ReturnPolicy} />
            <Stack.Screen name="PolicyWebViewScreen" component={PolicyView} />
            <Stack.Screen name="EditProfileScreen" component={EditProfile} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="OtpVerifySuccess" component={OtpVerifySuccess} />
        </Stack.Navigator>
    )
>>>>>>> 5d8f6fd5604fbfa2226ae5fb6603e61ecc7a3d95
}

const styles = StyleSheet.create({})
