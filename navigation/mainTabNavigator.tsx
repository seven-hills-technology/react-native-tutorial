import React from 'react';
import {Text, View} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { HomeScreen } from "../screens/homeScreen";
import {SettingsScreen} from "../screens/settingsScreen";

export const MainTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
// });
//
// HomeStack.navigationOptions = {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ focused }: any) => (
//         <Text>Home</Text>
//     ),
// };
//
// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ focused }: any) => (
//         <Text>Settings</Text>
//     ),
// };
//
// export const MainTabNavigator = createBottomTabNavigator({
//     Home: HomeStack,
//     Settings: SettingsStack,
// });