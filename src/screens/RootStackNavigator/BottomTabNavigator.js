import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../../res/images';
import Colors from '../../constant/Colors';
import HomeScreen from '../HomeScreen';



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
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12,
                    // fontFamily: fonts.SegoeUIRegular,
                    // paddingTop: 2,
                },
                tabStyle: {
                    // paddingVertical: 5,
                },
                activeTintColor: Colors.themeColor,
            }}
            detachInactiveScreens={true}
            lazy={true}


            screenOptions={({ route }) => ({
                // tabBarVisible: true,
                tabBarIcon: ({ focused, color }) => {
                    console.log('Route Name : ', route.name)
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? images.icons.homeA : images.icons.homeD;
                    }
                     else if (route.name === 'Categories') {
                        iconName = focused ? images.icons.homeA : images.icons.categoriesD;
                    }
                    else if (route.name === 'Cart') {
                        iconName = focused ? images.icons.cartA : images.icons.cartD;
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? images.icons.homeA : images.icons.profileD;
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
            <Tab.Screen name="Cart" component={C} />
            <Tab.Screen name="Profile" component={D} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})