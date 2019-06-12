import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Subtitle extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 13,
    height: 17
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text}>
          {this.props.text ? this.props.text : "0"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(255,255,255,1)"
  }
});
