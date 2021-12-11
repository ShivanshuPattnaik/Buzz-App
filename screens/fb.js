import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../AppHeader'

export default class Fb extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <View>
                    <AppHeader />
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 40 }}>FACEBOOK</Text>
                </View>
            </View>
        );
    }
}