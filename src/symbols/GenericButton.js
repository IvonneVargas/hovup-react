import React, { Component } from "react";

import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class GenericButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 264,
    height: 42
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={
          this.props.root ? (
            this.props.root
          ) : (
            () => {
              this.props.navigation.push("Launcher");
            }
          )
        }
      >
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "Text Added"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    top: 15,
    left: "0%",
    width: 264,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },

  root: {
    borderRadius: 7
  }
});
