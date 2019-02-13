import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ListadoMembresias extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Membresias!!</Text>
      </View>
    );
  }
}
module.exports = ListadoMembresias;
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    top: 261,
    left: 92,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
