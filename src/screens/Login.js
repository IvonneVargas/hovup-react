import React, { Component } from "react";
//import Background from "../symbols/Background";
import LogoR from "../symbols/LogoR";
import { Center } from "@builderx/utils";

import ButtonTransparent from "../symbols/ButtonTransparent";

import Icon from "@builderx/icons";
import GenericButton from "../symbols/GenericButton";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <ScrollView style={styles.scrollArea} />
        <LogoR style={styles.logoR} />
        <Center vertical>
          <View style={styles.rect}>
            <TextInput
              style={styles.textInput}
              placeholder="Correo electronico"
              underlineColorAndroid="transparent"
              onChangeText={this.handleEmail}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
              style={styles.textInput2}
              placeholder="Contrase\\u00F1a"
              underlineColorAndroid="transparent"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              onChangeText={this.handlePassword}
            />
            <GenericButton
              style={styles.genericButton}
              navigation={this.props.navigation}
              button={() => {
                this.props.navigation.push("Main");
              }}
              text="Iniciar sesion"
              root={() => {
                this.props.navigation.push("Main");
              }}
            />
            <ButtonTransparent
              style={styles.buttonTransparent}
              text="Olvidaste tu contrsena?"
            />
          </View>
        </Center>
        <Icon
          name="keyboard-backspace"
          style={styles.icon}
          type="MaterialCommunityIcons"
          onPress={() => {
            this.props.navigation.pop();
          }}
        />
        <View style={styles.rect2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  scrollArea: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "#192734",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  logoR: {
    top: 107,
    position: "absolute",
    height: 163,
    width: 268.13,
    left: "14.71%"
  },
  rect: {
    left: 0,
    height: 202,
    position: "absolute",
    right: 2,
    justifyContent: "space-between",
    alignItems: "center"
  },

  buttonTransparent: {
    width: 261,
    height: 42
  },
  icon: {
    left: 35.5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40,
    top: "10.79%"
  },
  textInput: {
    width: 262,
    height: 42,
    color: "rgba(0,0,0,1)",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput2: {
    width: 262,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7
  },
  genericButton: {
    width: 265,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  statusBar: {},
  rect2: {
    height: 25,
    top: 0,
    left: 2,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    right: 0,
    opacity: 1
  }
});
