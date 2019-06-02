import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("test")}
        >
          <Image source={require("../assets/history.png")} />
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("test")}
        >
          <Image source={require("../assets/dashboard.png")} />
          <Text style={styles.buttonText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.buttonPress("SignIn")}
        >
          <Image source={require("../assets/user.png")} />
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(248, 248, 248, 0.82)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    width: "100%",
    padding: 2
  },
  button: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
