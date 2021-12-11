import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Fb from "./screens/fb";
import In from "./screens/in";

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen : Fb},
  Instagram : {screen : In}
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
