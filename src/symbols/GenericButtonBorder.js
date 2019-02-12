import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class GenericButtonBorder extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 263,
    height: 42
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect3} />
        <Text style={styles.text4}>
          {this.props.text4 ? this.props.text4 : "Text Added"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect3: {
    top: 0,
    left: 0,
    width: 263,
    height: 42,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(101,188,70,1)",
    borderRadius: 7
  },
  text4: {
    top: 12,
    left: "0.38%",
    width: 262,
    height: 17,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
