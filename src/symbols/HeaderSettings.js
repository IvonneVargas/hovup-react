import React, { Component } from "react";

import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text } from "react-native";

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
          <Text style={styles.text}>hovup</Text>
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
    opacity: 1
  },
  text: {
    top: 2,
    left: 142.76,
    width: 94.24,
    height: 50,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 50,
    fontFamily: "GoodDogPlain",
    color: "rgba(101,188,70,1)"
  },
  icon: {
    top: 13.72,
    left: 327.72,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  }
});
