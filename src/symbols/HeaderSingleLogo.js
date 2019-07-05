import React, { Component } from "react";
import LogoSigle from "./LogoSigle";

import { View, StyleSheet } from "react-native";

export default class HeaderSingleLogo extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 53
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect}>
          <LogoSigle style={styles.logoSigle} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  logoSigle: {
    width: 94,
    height: 50
  }
});
