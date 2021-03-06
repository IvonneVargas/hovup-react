import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Launcher from "./src/screens/Launcher";
import Login from "./src/screens/Login";
import CreateAccount from "./src/screens/CreateAccount";

import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Launcher: {
    screen: Launcher
  },
  Login: {
    screen: Login
  },
  CreateAccount: {
    screen: CreateAccount
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Launcher: {
      screen: Launcher
    },
    Login: {
      screen: Login
    },
    CreateAccount: {
      screen: CreateAccount
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      GoodDogPlain: require("./src/assets/fonts/GOODDP__.ttf") /*Fallback Font*/,
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
