import React from 'react';
import {Button, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";

export class HomeScreen extends React.Component<NavigationScreenProps> {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="Go to settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}