import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Texts from "../assets/texts";

export default class Privacy extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderBack
          style={styles.headerBack}
          navigation={this.props.navigation}
        />
        <ScrollView style={styles.scrollArea} />
        <Text style={styles.text}>{Texts.OptionsDescription}</Text>
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
    top: 31.1,
    left: 0,
    position: "absolute",
    height: 54,
    right: 0
  },
  scrollArea: {
    top: 82.95,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  text: {
    top: 78.8,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    right: 199,
    bottom: 0,
    color: "rgba(255,255,255,1)"
  }
});
