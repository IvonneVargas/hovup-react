import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Favorites extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>favoritos</Text>
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
    top: 379.24,
    left: 140.12,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
