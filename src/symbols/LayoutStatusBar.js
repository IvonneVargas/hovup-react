import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class LayoutStatusBar extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 376,
    height: 33
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1
  }
});
