import React from 'react';
import {Button, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";

export class SettingsScreen extends React.Component<NavigationScreenProps> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings</Text>
                <Button
                    title="Go to home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}