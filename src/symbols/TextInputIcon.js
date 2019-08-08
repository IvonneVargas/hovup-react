import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TextInput, StyleSheet } from "react-native";

export default class TextInputIcon extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 261,
    height: 42
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <TextInput
          style={styles.textInput9}
          placeholder="Pais*"
          inlineImageLeft=""
        />
        <Icon
          style={styles.icon}
          name="calendar"
          type="EvilIcons"
          onPress={() => {
            this.props.navigation.push("Login");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput9: {
    width: 261,
    height: 42,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  icon: {
    top: 3,
    left: 218,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 35
  }
});
