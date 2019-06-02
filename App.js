import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image, AsyncStorage } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Welcome from "./components/welcome";
import SignIn from "./components/signIn";
import Dashboard from "./views/dashboard";
import Profile from "./views/profile";
import EditPassword from "./views/editPassword";

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: `Profile`,
      headerTruncatedBackTitle: `to A`
    })
  },
  Edit: {
    screen: EditPassword,
    navigationOptions: () => ({
      title: `Edit Password`,
      headerBackTitle: `Profile`
    })
  }
});

const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image source={require("./assets/dashboard.png")} />;
      }
    }
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image source={require("./assets/user.png")} />;
      }
    }
  }
});

const AuthNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    SignIn: SignIn
  },
  {
    headerMode: "none"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {
        login: "MSM",
        password: "test"
      }
    };
  }

  componentDidMount() {
    AsyncStorage.setItem("data", JSON.stringify(this.state.currentData));
  }

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
    flex: 1
  }
});
