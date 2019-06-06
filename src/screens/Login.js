import React, { Component } from "react";
//import Background from "../symbols/Background";
import LogoR from "../symbols/LogoR";
import { Center } from "@builderx/utils";

import Icon from "@builderx/icons";
import { Constants } from "expo";

import GenericButtonTransparent from "../symbols/GenericButtonTransparent";
import GenericButton from "../symbols/GenericButton";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  Platform,
  Text
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <ScrollView style={styles.scrollArea} />
        <LogoR style={styles.logoR} />
        {this.displayContent()}
        <Icon
          name="ios-arrow-back"
          style={styles.icon}
          type="Ionicons"
          onPress={() => {
            this.props.navigation.pop();
          }}
        />
        <View style={styles.rect2} />
      </View>
    );
  }
  displayContent() {
    const type = this.props.navigation.getParam("type", "login");
    console.log("types: ", type);
    if (type == "login") {
      return (
        <View style={styles.rect3} navigation={this.props.navigation}>
          <TextInput
            style={styles.textInput}
            placeholder="Correo electronico"
            onChangeText={this.handleEmail}
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="rgba(189,25,25,1)"
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Contrasena"
            onChangeText={this.handlePassword}
            returnKeyType="go"
            secureTextEntry={true}
            underlineColorAndroid="rgba(255,255,255,1)"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Iniciar sesion"
            root={() => {
              this.props.navigation.push("Main");
            }}
          />
          <GenericButtonTransparent
            style={styles.genericButtonTransparent}
            navigation={this.props.navigation}
            root={() => {
              this.props.navigation.push("Login", {
                type: "forgot"
              });
            }}
            text="Olvidaste tu contrasena?"
          />
        </View>
      );
    } else if (type == "forgot") {
      return (
        <View style={styles.rect3} navigation={this.props.navigation}>
          <Text style={styles.text}>
            Si olvidaste tu contraseña, ingresa el correo electrónico que
            registraste ent u cuenta y enviaremos un código de seguridad para
            asignarte una nueva contrasena.
          </Text>
          <TextInput
            style={styles.textInput2}
            placeholder="Correo electronico*"
            underlineColorAndroid="transparent"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Enviar codigo de seguridad"
            root={() => {
              this.props.navigation.push("Login", {
                type: "forgot"
              });
            }}
          />
        </View>
      );
    }
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

  icon: {
    left: 18,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    top: "4.68%"
  },

  statusBar: {},
  rect2: {
    height: Platform.OS === "android" ? 25 : 32,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    right: 0,
    opacity: 1
  },
  rect3: {
    height: 202,

    top: 281,
    left: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    right: 0
  },

  genericButton: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  textInput2: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  genericButtonTransparent: {
    width: 265,
    height: 42
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 14,
    width: 262,
    height: 70,
    fontSize: 13,
    textAlign: "center",
    color: "rgba(243,243,243,1)"
  }
});
