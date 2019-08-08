import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class EmptyLayout extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 359,
    height: 741
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>
          Lo sentimos, no tienes marcas disponibles para ti en esta sección
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    width: 284,
    height: 48,
    backgroundColor: "transparent",
    marginRight: 38,
    marginLeft: 38,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    fontSize: 16,
    textAlign: "center",
    color: "rgba(251,251,251,1)"
  },
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29,41,53,1)",
    opacity: 1
  }
});
