import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class LogoR extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 265,
    height: 164
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.logo}>hovup</Text>
        <Text style={styles.text}>®</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    top: 0,
    left: "0%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 150,
    fontFamily: "GoodDogPlain",
    color: "rgba(101,188,70,1)"
  },
  text: {
    top: 134,
    left: 247,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    color: "rgba(101,188,70,1)"
  }
});
