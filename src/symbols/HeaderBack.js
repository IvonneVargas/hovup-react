import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet } from "react-native";

export default class HeaderBack extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 54
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect} />
        <Icon style={styles.icon} name="ios-arrow-back" type="Ionicons" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: 0,
    left: 0,
    right: 0,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1
  },
  icon: {
    top: 14,
    left: 15,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  }
});
