import React, { Component } from "react";
import { View, Text, ActivityIndicator, AsyncStorage } from "react-native";

export default class Loader extends Component {
  componentDidMount = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken !== null) {
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("Auth");
      }
    } catch (error) {}
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
