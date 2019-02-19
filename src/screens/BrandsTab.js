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
        <View style={styles.rect2}>
          <View style={styles.rect}>
            <TabB style={styles.tabB} text="Publico" />
            <TabB style={styles.tabB3} text="VIP" />
            <TabB style={styles.tabB2} text="Privado" />
          </View>
          <View style={styles.rect3} navigation={this.props.navigation}>
            <CatDown
              style={styles.catDown}
              navigation={this.props.navigation}
            />
          </View>
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

  PickerNaN: {
    color: "rgba(251,251,251,1)"
  },
  rect2: {
    top: 1,
    left: 0,
    right: 0,
    height: 91,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  rect: {
    width: 375,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tabB: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
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
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },
  rect3: {
    width: 375,
    height: 32,
    alignItems: "flex-start",
    paddingLeft: 35
  },
  catDown: {
    width: 180,
    height: 30
  }
});
