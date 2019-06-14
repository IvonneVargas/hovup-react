import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class LineView extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 374,
    height: 1
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(230,230,230)"
  }
});
