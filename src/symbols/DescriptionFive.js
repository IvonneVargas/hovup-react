import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DescriptionFive extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 359,
    height: 6
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

    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    flex: 1
  }
});
