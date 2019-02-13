import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Center } from "@builderx/utils";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSettings from "../symbols/HeaderSettings";
import { TabView, TabContent } from "@builderx/tab-view";

import Colors from "../assets/colors";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderSettings
          style={styles.headerSettings}
          navigation={this.props.navigation}
        />
        <TabView
          style={styles.tab}
          tabBarStyle={styles.tab_tabBarStyle}
          tabIndicatorStyle={styles.tab_tabIndicatorStyle}
          activeTabIndex={0}
        >
          <TabContent title="Tab">
            <View style={styles.rect} />
          </TabContent>
          <TabContent title="Tab1">
            <View style={styles.rect2} />
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
  statusBar: {
    top: 0.6,
    left: -0.5,
    position: "absolute",
    height: 34,
    width: 376
  },
  layoutStatusBar: {
    top: 0.8,
    left: 0,
    position: "absolute",
    height: 34,
    right: 0
  },
  headerSettings: {
    top: 34,
    left: 0,
    position: "absolute",
    height: 54,
    right: 0
  },
  tab: {
    height: 724,
    top: 88,
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
  rect: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  rect2: {
    flex: 1,
    backgroundColor: "#eeeeee"
  }
});
