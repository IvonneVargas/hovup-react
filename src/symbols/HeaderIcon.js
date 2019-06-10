import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, Platform } from "react-native";

export default class HeaderIcon extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 374,
    height: 53
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          style={styles.icon}
          name="content-save"
          type="MaterialCommunityIcons"
        />
        {Platform.OS === "ios" ? (
          <Icon
            name={Platform.OS === "ios" ? "ios-arrow-back" : "home"}
            style={styles.icon2}
            type={Platform.OS === "ios" ? "Ionicons" : "MaterialCommunityIcons"}
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    margin: 10
  },
  root: {
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1,
    alignItems: "flex-end",
    flexDirection: "column"
  },
  icon2: {
    top: Platform.OS === "ios" ? 5.28 : 21.55,
    left: Platform.OS === "ios" ? 14 : 21.06,
    position: "absolute",
    backgroundColor: "transparent",
    color: Platform.OS === "ios" ? "rgba(255,255,255,1)" : "grey",
    fontSize: Platform.OS === "ios" ? 40 : 40,
    width: Platform.OS === "ios" ? 16 : undefined,
    height: Platform.OS === "ios" ? 40 : undefined
  }
});
