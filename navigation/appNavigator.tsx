import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {HomeScreen} from "../screens/homeScreen";
import {SettingsScreen} from "../screens/settingsScreen";

export const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Settings: {
            screen: SettingsScreen
        }
    }, {
        initialRouteName: "Home"
    });