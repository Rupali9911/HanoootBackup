import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import Checkout from '../Checkout';
import ProfileScreen from '../ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import EmptyDetailScreen from '../../Components/EmptyDetailScreen';


const Tab = createBottomTabNavigator();


export default function TabComponent() {
    const navigation = useNavigation();

    const B = () => {
        return (
            <Text>BBBBB</Text>
        );
    }
    const D = () => {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen', {LoggedIn: true})}
            >
                <Text>Show Logged in Profile</Text>
            </TouchableOpacity>
            
            </View>
            // <EmptyDetailScreen />
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
                        iconName = focused ? Images.profileIcon : Images.profile;
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
            <Tab.Screen name="Categories" component={D} />
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})