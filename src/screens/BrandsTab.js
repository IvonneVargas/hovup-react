import React, { Component } from "react";
import Colors from "../assets/colors";
import TabB from "../symbols/TabB";

import CatDown from "../symbols/CatDown";
import { View, StyleSheet, Platform } from "react-native";

export default class BrandsTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background} />
        <View style={styles.rect}>
          <TabB style={styles.tabB} text="Publico" />
          <TabB style={styles.tabB3} text="VIP" />
          <TabB style={styles.tabB2} text="Privado" />
        </View>
        <CatDown style={styles.catDown} navigation={this.props.navigation} />
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

  rect: {
    height: 32,
    top: 28,
    left: 0,
    position: "absolute",

    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  tabB: {
    width: 100,
    height: 32,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)"
  },
  tabB3: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)"
  },
  tabB2: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  PickerNaN: {
    color: "rgba(251,251,251,1)"
  },
  catDown: {
    position: "absolute",
    top: 62,
    left: 39,
    height: 30,
    width: 180
  }
});
