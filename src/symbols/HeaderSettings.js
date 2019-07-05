import React, { Component } from "react";

import { Center } from "@builderx/utils";
import LogoSigle from "./LogoSigle";
import Icon from "@builderx/icons";

import { View, StyleSheet } from "react-native";

export default class HeaderSettings extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 373,
    height: 54
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect3}>
          <View style={styles.rect4} />
          <View style={styles.rect5}>
            <LogoSigle style={styles.logoSigle} />
            <LogoSigle style={styles.logoSigle2} />
          </View>
          <View style={styles.rect6}>
            <Icon
              style={styles.icon}
              name="settings"
              onPress={() => {
                this.props.navigation.push("Options");
              }}
              type="MaterialCommunityIcons"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect3: {
    top: 0,
    left: 0,
    right: 0,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  rect4: {
    width: "33%",
    alignSelf: "stretch"
  },
  rect5: {
    width: "33%",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  rect6: {
    width: "33%",
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  logoSigle: {
    width: 0,
    height: 0,
    display: "none"
  },
  logoSigle2: {
    width: 94,
    alignSelf: "center",
    flex: 1
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "flex-end",
    marginRight: 5
  }
});
