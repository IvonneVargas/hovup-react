import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class CatDown extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 180,
    height: 30
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={() => {
          this.props.navigation.navigate("CategoriesList", { id: "1" });
        }}
      >
        <Text style={styles.text}>Todas las categorias</Text>
        <Icon
          style={styles.icon}
          name="chevron-down"
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    top: 8,
    left: 2,
    width: 140,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(255,255,255,1)"
  },
  icon: {
    top: 7.5,
    left: 155.5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  root: {}
});
