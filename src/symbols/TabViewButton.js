import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class TabViewButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 370,
    height: 70
  };
  render() {
    console.log("tab view button: ", this.props.active);
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                this.props.active == 1 ? "rgba(101,188,70,1)" : "transparent"
            }
          ]}
          onPress={this.props.button ? this.props.button : null}
        >
          <Text style={styles.text}>
            {this.props.text ? this.props.text : "Text Added"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            {
              backgroundColor:
                this.props.active == 2 ? "rgba(101,188,70,1)" : "transparent"
            }
          ]}
          onPress={this.props.button2 ? this.props.button2 : null}
        >
          <Text style={styles.text2}>
            {this.props.text2 ? this.props.text2 : "Text Added"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button3,
            {
              backgroundColor:
                this.props.active == 3 ? "rgba(101,188,70,1)" : "transparent"
            }
          ]}
          onPress={this.props.button3 ? this.props.button3 : null}
        >
          <Text style={styles.text3}>
            {this.props.text3 ? this.props.text3 : "Text Added"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flex: 1
  },
  text: {
    height: 20,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button2: {
    flexDirection: "column",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    flex: 1
  },
  text2: {
    height: 15.24,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    fontSize: 15,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button3: {
    flexDirection: "column",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1
  },
  text3: {
    height: 16.36,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    fontSize: 15,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  root: {
    flexDirection: "row",
    padding: 15
  }
});
