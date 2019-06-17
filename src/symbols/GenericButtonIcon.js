import React, { Component } from "react";
import Icon from "@builderx/icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Center } from "@builderx/utils";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class GenericButtonIcon extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 264,
    height: 42
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={
          this.props.root ? (
            this.props.root
          ) : (
            () => {
              this.props.navigation.push("Launcher");
            }
          )
        }
      >
        <Center vertical>
          <Text style={styles.text}>
            {this.props.text ? this.props.text : "Text Added"}
          </Text>
        </Center>
        <Icon
          style={styles.icon}
          name={this.props.iconName ? this.props.iconName : "facebook"}
          type={
            this.props.iconType ? this.props.iconType : "MaterialCommunityIcons"
          }
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
    left: 74,
    width: 188,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  icon: {
    top: 0,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  root: {
    borderRadius: 7
  }
});
