import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Launcher from "./src/screens/Launcher";
import Login from "./src/screens/Login";
import CreateAccount from "./src/screens/CreateAccount";

import SuccessCreateAccount from "./src/screens/SuccessCreateAccount";

import Options from "./src/screens/Options";
import Main from "./src/screens/Main";

import ZonesTab from "./src/screens/ZonesTab";
import BrandsTab from "./src/screens/BrandsTab";
import CategoriesList from "./src/screens/CategoriesList";
import OptionsProfile from "./src/screens/OptionsProfile";
import CountryStateCityLists from "./src/screens/CountryStateCityLists";
import About from "./src/screens/About";
import Privacy from "./src/screens/Privacy";

import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

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
  ZonesTab: {
    screen: ZonesTab
  },
  BrandsTab: {
    screen: BrandsTab
  },
  CategoriesList: {
    screen: CategoriesList
  },
  OptionsProfile: {
    screen: OptionsProfile
  },
  CountryStateCityLists: {
    screen: CountryStateCityLists
  },
  About: {
    screen: About
  },
  Privacy: {
    screen: Privacy
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
    ZonesTab: {
      screen: ZonesTab
    },
    BrandsTab: {
      screen: BrandsTab
    },
    CategoriesList: {
      screen: CategoriesList
    },
    OptionsProfile: {
      screen: OptionsProfile
    },
    CountryStateCityLists: {
      screen: CountryStateCityLists
    },
    About: {
      screen: About
    },
    Privacy: {
      screen: Privacy
    }
  },
  {
    headerMode: "none"
  }
);

const TabNavigation = TabNavigator(
  {
    ZonesTab: {
      screen: ZonesTab
    },
    BrandsTab: {
      screen: BrandsTab
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
      "AbadiMT-CondensedLight": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Material Icons": require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      MaterialIcons: require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      MaterialCommunityIcons: require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      "Material Design Icons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      SimpleLineIcons: require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      "simple-line-icons": require("@expo/vector-icons/fonts/SimpleLineIcons.ttf")
    });
    this.setState({ fontLoaded: true });
    //console.warn("Fallback font is being used. Please check App.js file.");
    //console.warn("Fallback font is being used. Please check App.js file.");
    //console.warn("Fallback font is being used. Please check App.js file.");
    //console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
