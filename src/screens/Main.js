import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Platform, Text } from "react-native";
import { Center } from "@builderx/utils";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSettings from "../symbols/HeaderSettings";
import { TabView, TabContent } from "@builderx/tab-view";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

import Colors from "../assets/colors";
import Zones from "./ZonesTab";
import Membership from "./MembershipTab";
import Brands from "./BrandsTab";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "Membresias" },
        { key: "second", title: "Marcas" },
        { key: "third", title: "Tiendas" },
        { key: "fourth", title: "Zonas" }
      ]
    };
  }
  render() {
    const BrandTab = () => (
      <Brands
        style={styles.text2}
        navigation={this.props.navigation}
        type={"Brand"}
      />
    );
    const StoreTab = () => (
      <Brands
        style={styles.text2}
        navigation={this.props.navigation}
        type={"Store"}
      />
    );
    const MembershipTab = () => (
      <Membership style={styles.text2} navigation={this.props.navigation} />
    );
    const ZonesTab = () => <Zones style={styles.text2} />;
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderSettings
          style={styles.headerSettings}
          navigation={this.props.navigation}
        />
        <TabViewAnimated
          style={styles.tab}
          navigationState={this.state}
          renderScene={SceneMap({
            first: MembershipTab,
            second: BrandTab,
            third: StoreTab,
            fourth: ZonesTab
          })}
          onIndexChange={index => this.setState({ index })}
          renderHeader={(props: any) => (
            <TabBar
              {...props}
              style={styles.tab_tabBarStyle}
              indicatorStyle={styles.tab_tabIndicatorStyle}
              labelStyle={styles.tab_tabLabelStyle}
            />
          )}
        />
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
    height: Platform.OS === "android" ? 25 : 32,
    right: 0
  },
  headerSettings: {
    top: Platform.OS === "android" ? 18 : 31,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  tab: {
    height: Platform.OS === "android" ? 670 : undefined,
    top: Platform.OS === "android" ? 72 : 82.14,
    left: 0,
    position: "absolute",
    right: 0,

    backgroundColor: "#E6E6E6",
    bottom: 0
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
