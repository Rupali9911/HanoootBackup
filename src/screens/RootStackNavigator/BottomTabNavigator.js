import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import HomeScreen from '../HomeScreen';
import ProductDetail from '../ProductDetail';



const Tab = createBottomTabNavigator();


export default function TabComponent() {
    const A = () => {
        return (
            <Text>AAAAA</Text>
        );
    }
    const B = () => {
        return (
            <Text>BBBBB</Text>
        );
    }
    const C = () => {
        return (
            <Text>CCCCC</Text>
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
                // tabBarVisible: true,
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
                    console.log('Route Name : ', route.name)
                    let iconName;

                    if (route.name === 'H') {
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
            <Tab.Screen name="H" component={HomeScreen} />
            <Tab.Screen name="Categories" component={ProductDetail} />
            <Tab.Screen name="Cart" component={C} />
            <Tab.Screen name="Profile" component={D} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})