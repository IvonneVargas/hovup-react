import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LogoSigle extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 94,
    height: 50
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text}>hovup</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    width: 94,
    height: 50,
    backgroundColor: "transparent",
    fontSize: 50,
    fontFamily: "GoodDogPlain",
    color: "rgba(101,188,70,1)"
  }
});
