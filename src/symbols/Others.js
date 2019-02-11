import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text } from "react-native";

export default class Others extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 261,
    height: 42
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect} />
        <Text style={styles.text3}>O</Text>
        <View style={styles.rect2} />
        <View style={styles.rect3} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: 0,
    left: "0%",
    width: 261,
    height: 42,
    position: "absolute"
  },
  text3: {
    top: 14,
    left: "48.46%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)"
  },
  rect2: {
    left: 140,
    width: 115,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    opacity: 1,
    top: "52.38%"
  },
  rect3: {
    left: 8,
    width: 115,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)",
    opacity: 1,
    top: "50%"
  }
});
