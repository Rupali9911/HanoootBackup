import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
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
import Signup from '../AuthScreen/SignUp';

const Stack = createStackNavigator();

export default function RootStackScreen() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={TabComponent} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerMode: 'none' }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerMode: 'none' }} />
            <Stack.Screen name="UserReview" component={ReviewMainPage} options={{ headerMode: 'none' }} />
            <Stack.Screen name="SellerReview" component={SellerReview} options={{ headerMode: 'none' }} />
            <Stack.Screen name="OtherSellers" component={OtherSellers} options={{ headerMode: 'none' }} />
            <Stack.Screen name="AddressDetail" component={Address} options={{ headerMode: 'none' }} />
            <Stack.Screen name="AddAddressDetail" component={AddAddress} options={{ headerMode: 'none' }} />
            <Stack.Screen name="PinLocation" component={LoactionPin} options={{ headerMode: 'none' }} />
            {/* <Stack.Screen name="Payment" component={Payment} options={{ headerMode: 'none' }} /> */}
            <Stack.Screen name="ReviewOrder" component={ReviewOrder} options={{ headerMode: 'none' }} />
            <Stack.Screen name="SuccessScreen" component={OrderSuccessScreen} options={{ headerMode: 'none' }} />
            <Stack.Screen name="CheckoutScreen" component={Checkout} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerMode: 'none' }} />
            <Stack.Screen name="OrderList" component={MyOrderList} options={{ headerMode: 'none' }} />
            <Stack.Screen name="OrderDetail" component={OrderDetails} options={{ headerMode: 'none' }} />
            <Stack.Screen name="NotificationScreen" component={Notification} options={{ headerMode: 'none' }} />
            <Stack.Screen name="WishlistScreen" component={Wishlist} options={{ headerMode: 'none' }} />
            <Stack.Screen name="PaymentMethods" component={Payment} options={{ headerMode: 'none' }} />
            <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerMode: 'none' }} />
            {/* <Stack.Screen name="AddNewAddress" component={AddNewAddress} options={{ headerMode: 'none' }} /> */}
            <Stack.Screen name="Location" component={Location} options={{ headerMode: 'none' }} />
            <Stack.Screen name="NewAddress" component={NewAddress} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ToastMessageScreen" component={ToastPages} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccess} options={{ headerMode: 'none' }} />
            <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerMode: 'none' }} />
            <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ headerMode: 'none' }} />
            <Stack.Screen name="LegalPolicies" component={LegalPolicies} options={{ headerMode: 'none' }} />
            <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ReturnPolicies" component={ReturnPolicy} options={{ headerMode: 'none' }} />
            <Stack.Screen name="PolicyWebViewScreen" component={PolicyView} options={{ headerMode: 'none' }} />
            <Stack.Screen name="EditProfileScreen" component={EditProfile} options={{ headerMode: 'none' }} />
            <Stack.Screen name="SignUpScreen" component={Signup} options={{ headerMode: 'none' }} />


        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
 