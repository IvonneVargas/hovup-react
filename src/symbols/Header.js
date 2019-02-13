import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";

export default class Header extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 374,
    height: 53
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.settingsbar} />
        {Platform.OS === "ios" ? (
          <Icon
            name={Platform.OS === "ios" ? "ios-arrow-back-outline" : "home"}
            style={styles.icon}
            type={Platform.OS === "ios" ? "Ionicons" : "MaterialCommunityIcons"}
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
        ) : null}
        <Center>
          <Text style={styles.text}>
            {this.props.text ? this.props.text : "Creat cuenta"}
          </Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  settingsbar: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1
  },
  tittle: {
    left: Platform.OS === "ios" ? 30 : 18,
    width: Platform.OS === "ios" ? 345 : 337,
    height: Platform.OS === "ios" ? 19 : 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(255,255,255,1)",
    top: Platform.OS === "ios" ? "32.08%" : "32.08%",
    textAlign: Platform.OS === "ios" ? "center" : "left"
  },
  icon: {
    top: Platform.OS === "ios" ? 6.5 : 21.55,
    left: Platform.OS === "ios" ? 14.85 : 26.01,
    position: "absolute",
    backgroundColor: "transparent",
    color: Platform.OS === "ios" ? "rgba(255,255,255,1)" : "grey",
    fontSize: 40
  },
  text: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(255,255,255,1)"
  }
});
