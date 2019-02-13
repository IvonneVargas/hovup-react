import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { Center } from "@builderx/utils";

import { createBottomTabNavigator } from "react-navigation";
import HeaderSettings from "../symbols/HeaderSettings";
import { TabView, TabContent } from "@builderx/tab-view";
import Colors from "../assets/colors";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <HeaderSettings
          style={styles.headerSettings}
          navigation={this.props.navigation}
        />
        <View style={styles.rect3} />
        <TabView
          style={styles.tab}
          tabBarStyle={styles.tab_tabBarStyle}
          tabIndicatorStyle={styles.tab_tabIndicatorStyle}
          activeTabIndex={0}
        >
          <TabContent title="Membresias">
            <View style={styles.rect4} />
          </TabContent>
          <TabContent title="Opciones">
            <View style={styles.rect5} />
          </TabContent>
        </TabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    top: 280,
    left: "38.61%",
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  statusBar: {},
  headerSettings: {
    top: 32,
    position: "absolute",
    height: 53,
    width: 376,
    left: "0%"
  },
  Yom4s8: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  up2UjM: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  rect3: {
    height: 32.87,
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    opacity: 1,
    backgroundColor: "rgba(25,39,52,1)"
  },
  text: {
    top: 253.08,
    left: 151.25,
    position: "absolute",
    backgroundColor: "transparent"
  },
  tab: {
    height: 726,
    top: 86,
    left: 0,
    position: "absolute",
    right: 0
  },
  tab_tabBarStyle: {
    backgroundColor: "#3F51B5"
  },
  tab_tabIndicatorStyle: {
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect4: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  rect5: {
    flex: 1,
    backgroundColor: "#eeeeee"
  }
});
