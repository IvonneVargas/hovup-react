import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class TabB extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 100,
    height: 32,
    defaultHeight: "auto"
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect2} />
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "Text"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect2: {
    top: 0,
    left: 0,
    width: 100,
    height: 32,
    position: "absolute"
  },
  text: {
    top: 9,
    left: 0,
    width: 100,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
