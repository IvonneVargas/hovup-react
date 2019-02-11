import React, { Component } from "react";
import Icon from "@builderx/icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class GenericButtonIcon extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 264,
    height: 42
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.button} />
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "Text Added"}
        </Text>
        <Icon
          style={styles.icon}
          name="facebook"
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    top: 0,
    left: "0%",
    width: 262,
    height: 42,
    position: "absolute",
    borderRadius: 7
  },
  text: {
    top: 12,
    left: 71,
    width: 188,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  icon: {
    top: 0,
    left: 19.91,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  root: {
    borderRadius: 7
  }
});
