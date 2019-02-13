import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
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
        <View style={styles.rect3} />
        <Text style={styles.text}>hovup</Text>
        <Center vertical>
          <Icon
            style={styles.icon}
            name="settings"
            type="MaterialCommunityIcons"
            onPress={() => {
              this.props.navigation.push("Options");
            }}
          />
        </Center>
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
    left: "38.61%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 50,
    fontFamily: "GoodDogPlain",
    color: "rgba(101,188,70,1)"
  },
  icon: {
    left: 325.17,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 35
  }
});
