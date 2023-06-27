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
import Payment from '../Checkout/Payment';
import ReviewOrder from '../Checkout/Review/ReviewOrder';
import OrderSuccessScreen from '../Checkout/SucessFull';
import Checkout from '../Checkout';
import ProfileScreen from '../ProfileScreen';
import MyOrderList from '../ProfileScreen/MyOrders';
import OrderDetails from '../ProfileScreen/MyOrders/OrderDetails';
import Notification from '../ProfileScreen/Notifications';

const Stack = createStackNavigator();



export default function RootStackScreen() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={TabComponent} options={{ headerMode: 'none' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="CartScreen" component={CartScreen}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="UserReview" component={ReviewMainPage}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="SellerReview" component={SellerReview}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="OtherSellers" component={OtherSellers}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="AddressDetail" component={Address}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="AddAddressDetail" component={AddAddress}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="PinLocation" component={LoactionPin}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="Payment" component={Payment}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="ReviewOrder" component={ReviewOrder}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="SuccessScreen" component={OrderSuccessScreen}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="CheckoutScreen" component={Checkout}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="OrderList" component={MyOrderList}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="OrderDetail" component={OrderDetails}  options={{ headerMode: 'none' }}/>
            <Stack.Screen name="NotificationScreen" component={Notification}  options={{ headerMode: 'none' }}/>
            
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
