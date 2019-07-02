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
    width: "33.5%",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  text: {
    width: 97.55,
    height: 20,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  button2: {
    width: "33.5%",
    flexDirection: "column",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)"
  },
  text2: {
    width: 98,
    height: 15.24,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    fontSize: 15,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  button3: {
    width: "33.5%",
    flexDirection: "column",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  text3: {
    width: 99,
    height: 16.36,
    backgroundColor: "transparent",
    margin: 9,
    padding: 0,
    fontSize: 15,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  root: {
    flexDirection: "row",
    padding: 15
  }
});
