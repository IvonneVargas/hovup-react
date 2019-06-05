import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import LogoR from "../symbols/LogoR";

import { View, StyleSheet, Text, Platform } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderBack
          style={styles.headerBack}
          navigation={this.props.navigation}
        />
        <View style={styles.rect}>
          <View style={styles.rect3}>
            <LogoR style={styles.logoR} />
            <Text style={styles.text2} selectionColor="rgba(255,255,255,1)">
              V.3.1.4.
            </Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text}>
              Hovup SAPI de CV © 2019. Hovup, Inc. © 2019. Todo so los derechos
              reservados.
            </Text>
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
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: Platform.OS === "android" ? 25 : 32,
    right: 0
  },
  headerBack: {
    position: "absolute",
    top: Platform.OS === "android" ? 25 : 30,
    left: 0,
    height: 53,
    right: 0
  },
  rect: {
    top: Platform.OS === "android" ? 79 : 83,
    left: Platform.OS === "android" ? 0 : 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: Platform.OS === "android" ? 0 : 0,
    bottom: Platform.OS === "android" ? 4 : 0,
    opacity: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  rect2: {
    height: 58,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,

    alignSelf: "stretch",
    margin: 0
  },
  text: {
    top: -16.59,
    left: 0,

    position: "absolute",
    backgroundColor: "transparent",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 13,
    color: "rgba(255,255,255,1)",
    right: 0,
    bottom: 0
  },
  rect3: {
    height: 212,
    alignItems: "center",
    padding: 0,
    paddingTop: 0,
    marginTop: 100,
    alignSelf: "stretch"
  },
  logoR: {
    width: 287.89,
    height: 164,
    margin: 0,
    alignSelf: "center"
  },
  text2: {
    width: 50,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 0
  }
});
