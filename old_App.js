import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from "./compoments/welcome";
import SignIn from "./compoments/signIn";

const AppNivagot = createStackNavigator(
  {
    Welcome: Welcome,
    SignIn: SignIn
  },
  {
    initialRouteName: "Welcome",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(AppNivagot);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});
