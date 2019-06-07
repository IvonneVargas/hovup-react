import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Wallet extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>wallet</Text>
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
    top: 380.93,
    left: 38.03,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
