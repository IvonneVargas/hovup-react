import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Launcher from "./src/screens/Launcher";
import Login from "./src/screens/Login";
import CreateAccount from "./src/screens/CreateAccount";

import SuccessCreateAccount from "./src/screens/SuccessCreateAccount";

import Options from "./src/screens/Options";
import Main from "./src/screens/Main";

import ListadoMembresias from "./src/screens/Tabs/ListadoMembresias";
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
  },
  SuccessCreateAccount: {
    screen: SuccessCreateAccount
  },
  Main: {
    screen: Main
  },
  Options: {
    screen: Options
  },
  ListadoMembresias: {
    screen: ListadoMembresias
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
    },
    SuccessCreateAccount: {
      screen: SuccessCreateAccount
    },
    Main: {
      screen: Main
    },
    Options: {
      screen: Options
    },
    ListadoMembresias: {
      screen: ListadoMembresias
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
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "AbadiMT-CondensedLight": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });
    this.setState({ fontLoaded: true });
    //console.warn("Fallback font is being used. Please check App.js file.");
    //console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
