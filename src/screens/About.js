import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import LogoR from "../symbols/LogoR";

import { View, StyleSheet, Text } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderBack style={styles.headerBack} />
        <View style={styles.rect}>
          <View style={styles.rect3}>
            <LogoR style={styles.logoR} />
            <Text style={styles.text2} selectionColor="rgba(255,255,255,1)">
              V.3.1.4.
            </Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text}>
              Hovup SAPI de CV © 2019. Hovup, Inc. © 2019. Todoso los derechos
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
    height: 33,
    right: 0
  },
  headerBack: {
    position: "absolute",
    top: 30,
    left: 0,
    height: 54,
    width: 375
  },
  rect: {
    top: 83,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: -31,
    opacity: 1,
    justifyContent: "space-between"
  },
  rect2: {
    height: 58,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 45,
    alignSelf: "stretch"
  },
  text: {
    top: 0,
    left: 0,
    width: 375,
    height: 49,
    position: "absolute",
    backgroundColor: "transparent",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 13,
    color: "rgba(255,255,255,1)"
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
    width: 263,
    height: 164,
    margin: 0
  },
  text2: {
    width: 50,
    height: 10,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 0
  }
});
