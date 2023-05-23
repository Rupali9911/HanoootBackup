import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabComponent from './BottomTabNavigator';


const Stack = createStackNavigator();



export default function RootStackScreen() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabComponent} options={{ headerMode: 'none' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
