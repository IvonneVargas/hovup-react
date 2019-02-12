import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class Header extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 374,
    height: 53
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.settingsbar} />
        <TextInput
          style={styles.tittle}
          placeholder={this.props.tittle ? this.props.tittle : "Crear cuenta"}
          placeholderTextColor="rgba(255,255,255,1)"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  settingsbar: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1
  },
  tittle: {
    top: 21,
    left: 13,
    width: 122,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(218,7,7,1)"
  }
});
