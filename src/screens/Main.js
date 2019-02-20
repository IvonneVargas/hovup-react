import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Platform, Text } from "react-native";
import { Center } from "@builderx/utils";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSettings from "../symbols/HeaderSettings";
import { TabView, TabContent } from "@builderx/tab-view";

import Colors from "../assets/colors";
import Zones from "./ZonesTab";

import Brands from "./BrandsTab";

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
          activeTabIndex={1}
          tabLabelStyle={styles.tab_tabLabelStyle}
        >
          <TabContent title="Membresias">
            <View style={styles.rect}>
              <Text style={styles.text}>card stack membresias</Text>
            </View>
          </TabContent>
          <TabContent title="Marcas">
            <View style={styles.rect2}>
              <Brands style={styles.text2} navigation={this.props.navigation} />
            </View>
          </TabContent>
          <TabContent title="Tiendas">
            <View style={styles.B5Rgjj}>
              <Brands style={styles.text2} navigation={this.props.navigation} />
            </View>
          </TabContent>
          <TabContent title="Zonas">
            <View style={styles.R4vQBS}>
              <Zones style={styles.text2} />
            </View>
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
    top: 0,
    left: 0,
    position: "absolute",
    height: 36,
    right: 0
  },
  headerSettings: {
    top: Platform.OS === "android" ? 18 : 34,
    left: 0,
    position: "absolute",
    height: 54,
    right: 0
  },
  tab: {
    height: Platform.OS === "android" ? 670 : undefined,
    top: Platform.OS === "android" ? 72 : 88,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: -2,
    backgroundColor: "#E6E6E6"
  },
  tab_tabBarStyle: {
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  tab_tabIndicatorStyle: {
    backgroundColor: "rgba(101,188,70,1)",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    opacity: 1
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
  B5Rgjj: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  R4vQBS: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  tab_tabLabelStyle: {
    fontSize: 11,
    color: "rgba(255,255,255,1)",
    letterSpacing: 0
  },
  text: {
    top: 277.76,
    left: 140.63,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text2: {
    top: 440.84,
    left: 266.74,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text2: {},
  text3: {
    top: 135.13,
    left: 126.2,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text3: {
    top: 267.09,
    left: 168.81,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
