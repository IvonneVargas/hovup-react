import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ButtonTransparent extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 261,
    height: 42
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect} />
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "Iniciar sesi\xF3n"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: 0,
    left: 0,
    width: 261,
    height: 42,
    position: "absolute"
  },
  text: {
    top: 14,
    left: "0%",
    width: 261,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "#65bc46"
  }
});
