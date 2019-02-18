import React, { Component } from "react";
import { TabView, TabContent } from "@builderx/tab-view";

import { View, StyleSheet } from "react-native";

export default class BrandsTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect3}>
          <TabView
            style={styles.tab}
            tabStyle={styles.tab_tabStyle}
            tabIndicatorStyle={styles.tab_tabIndicatorStyle}
            tabLabelStyle={styles.tab_tabLabelStyle}
            tabBarStyle={styles.tab_tabBarStyle}
            activeTabIndex={2}
          >
            <TabContent title="Publico">
              <View style={styles.rect} />
            </TabContent>
            <TabContent title="VIP">
              <View style={styles.rect2} />
            </TabContent>
            <TabContent title="Privado">
              <View style={styles.mUJ55w} />
            </TabContent>
          </TabView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect3: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    alignItems: "center"
  },
  tab: {
    height: "100%",
    width: "93.75%",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  tab_tabStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(101,188,70,1)",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  tab_tabIndicatorStyle: {
    elevation: 3,
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    backgroundColor: "transparent",
    opacity: 1
  },
  tab_tabLabelStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 10
  },
  tab_tabBarStyle: {
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  rect: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  rect2: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  mUJ55w: {
    flex: 1,
    backgroundColor: "#eeeeee"
  }
});
