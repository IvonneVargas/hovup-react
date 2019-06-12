import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Title extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 77,
    height: 17
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>Compras</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    width: 77,
    height: 17,
    alignSelf: "center",
    backgroundColor: "transparent",
    margin: 0,
    fontSize: 20,
    color: "rgba(255,255,255,1)"
  },
  root: {
    flexDirection: "column",
    margin: 0
  }
});
