import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class BottomBarButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 67
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        /*onPress={
    this.props.root ? (
    this.props.root
    ) : (
    () => {
      this.props.navigation.push("Launcher");
    }
    )
    }*/
        onPress={this.props.root ? this.props.root : null}
      >
        <Icon
          style={styles.home}
          name={this.props.homeName ? this.props.homeName : "home-outline"}
          /*onPress={() => {
      this.props.navigation.push("Launcher");
      }}*/
          type={
            this.props.homeType ? this.props.homeType : "MaterialCommunityIcons"
          }
        />
        <Text style={styles.homeText}>
          {this.props.homeText ? this.props.homeText : "Home"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 33
  },
  homeText: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    width: 229,
    textAlign: "center"
  },
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
