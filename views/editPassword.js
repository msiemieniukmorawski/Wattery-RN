import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import BasicButton from "../components/button";
import { AsyncStorage } from "react-native";

class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordInput: "",
      isPasswordInvalid: false,
      canSubmit: false,
      PasswordChanged: false,
      data: null
    };
  }

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        // We have data!!
        this.setState({
          data: JSON.parse(value)
        });
      }
    } catch (error) {}
  };

  validateForm = () => {
    if (this.state.passwordInput.length > 0 && !this.state.isPasswordInvalid) {
      return true;
    }
    return false;
  };

  setAndValidatePassword = text => {
    let isPasswordInvalid = false;

    if (text.length < 2) {
      isPasswordInvalid = true;
    }
    const canSubmit = !isPasswordInvalid ? this.validateForm() : false;

    this.setState({
      passwordInput: text,
      isPasswordInvalid,
      canSubmit
    });
  };

  mockChange = async () => {
    const newData = {
      ...this.state.data,
      password: this.state.passwordInput
    };

    await AsyncStorage.setItem("data", JSON.stringify(newData));

    this.setState({
      PasswordChanged: true
    });
  };

  render() {
    const { PasswordChanged } = this.state;

    if (!PasswordChanged) {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled={Platform.OS === "ios"}
        >
          <Text style={styles.title}> Zmień hasło</Text>
          <TextInput
            style={[styles.inputContainer]}
            secureTextEntry
            placeholder="Hasło"
            value={this.state.password}
            onChangeText={this.setAndValidatePassword}
            returnKeyType="done"
            autoCapitalize="none"
          />
          {this.state.isPasswordInvalid && (
            <Text style={styles.invalidPassword}>Hasło jest za krótkie</Text>
          )}
          <BasicButton
            title="Zmień hasło"
            style={styles.loginButton}
            disabled={!this.state.canSubmit}
            onPress={this.mockChange}
          />
        </KeyboardAvoidingView>
      );
    } else {
      return <Text style={styles.title}> Hasło zmienione</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 32,
    justifyContent: "center"
  },
  loginButton: {
    marginTop: 16,
    backgroundColor: "#4E00B1"
  },
  inputContainer: {
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 20
  },
  invalidPassword: {
    color: "red"
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default EditPassword;
