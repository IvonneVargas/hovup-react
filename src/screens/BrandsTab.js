import React, { Component } from "react";
import Tabsbutton from "../symbols/Tabsbutton";

import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";

export default class BrandsTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background} />
        <View style={styles.rect2}>
          <Tabsbutton style={styles.tabsbutton} text3="Publico" />
          <Tabsbutton style={styles.tabsbutton2} text3="VIP" />
          <Tabsbutton style={styles.tabsbutton3} text3="Privado" />
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
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    alignItems: "center"
  },
  rect2: {
    height: 50,
    top: 48,
    left: 0,
    position: "absolute",
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  tabsbutton: {
    width: 100,
    height: 28,
    borderTopLeftRadius: 10
  },
  tabsbutton2: {
    width: 100,
    height: 28
  },
  tabsbutton3: {
    width: 100,
    height: 28,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});
