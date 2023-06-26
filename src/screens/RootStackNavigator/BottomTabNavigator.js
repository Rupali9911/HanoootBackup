import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import Checkout from '../Checkout';

const Tab = createBottomTabNavigator();


export default function TabComponent() {
    const B = () => {
        return (
            <Text>BBBBB</Text>
        );
    }
    const D = () => {
        return (
            <Text>DDDDD</Text>
        );
    }
    return (
        <Tab.Navigator
            initialRouteName="Home"
            // tabBarOptions={{
            //     labelStyle: {
            //         fontSize: 12,
            //         // fontFamily: fonts.SegoeUIRegular,
            //         // paddingTop: 2,
            //     },
            //     tabStyle: {
            //         // paddingVertical: 5,
            //     },
            //     activeTintColor: Colors.themeColor,
            // }}
            detachInactiveScreens={true}
            //lazy={true}


            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                lazy: true,
                tabBarVisible: true,
                tabBarLabelStyle: {
                    fontSize: 12,
                    // fontFamily: fonts.SegoeUIRegular,
                    // paddingTop: 2,
                },
                tabBarStyle: {
                    // paddingVertical: 5,
                },
                tabBarActiveTintColor: Colors.themeColor,
                tabBarIcon: ({ focused, color }) => {
                    // console.log('Route Name : ', route.name)
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? Images.homeSelected : Images.home;
                    }
                     else if (route.name === 'Categories') {
                        iconName = focused ? Images.homeSelected : Images.categories;
                    }
                    else if (route.name === 'Cart') {
                        iconName = focused ? Images.cartSelected : Images.cart;
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? Images.homeSelected : Images.profile;
                    }
                    return (
                        <Image
                            source={iconName}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, }}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Categories" component={B} />
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Profile" component={Checkout} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})