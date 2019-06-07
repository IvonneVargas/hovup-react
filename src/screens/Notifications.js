import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Notificaciones</Text>
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
    top: 315.14,
    left: 111.8,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
