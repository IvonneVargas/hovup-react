import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TitleFive extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 359,
    height: 16
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text2} numberOfLines={5}>
          {this.props.text2 ? this.props.text2 : "Text Added"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text2: {
    width: 359,
    height: 18,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(241,241,241,1)",
    fontSize: 18
  }
});
