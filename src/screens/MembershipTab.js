import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class MembershipTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>card stack membresias</Text>
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
    top: 277.76,
    left: 140.63,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
