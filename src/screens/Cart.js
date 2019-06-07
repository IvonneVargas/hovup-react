import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>cart</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    top: 277.54,
    left: 132.3,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
