import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default class GenericButtonImage extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 262,
    height: 42
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.button} />
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "Text Added"}
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/google-icon.png")}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    top: 0,
    left: 0,
    width: 262,
    height: 42,
    position: "absolute",
    borderRadius: 7
  },
  text: {
    top: 15,
    left: 72,
    width: 190,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  image: {
    top: 7,
    left: 42,
    width: 30,
    height: 30,
    position: "absolute"
  },
  root: {
    borderRadius: 7
  }
});
