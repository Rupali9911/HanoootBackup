import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabComponent from './BottomTabNavigator';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();



export default function RootStackScreen() {

    // const A = () => {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Screen A</Text>
    //         </View>
    //     );
    // }
    // const B = () => {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Screen B</Text>
    //         </View>
    //     );
    // }


    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabComponent} options={{headerMode: 'none'}}/>

            {/* <Stack.Screen name="Home" component={A} /> */}
            {/* <Stack.Screen name="Notifications" component={B} /> */}

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
