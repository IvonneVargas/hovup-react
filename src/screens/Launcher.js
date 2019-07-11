import React, { Component } from "react";

import { Center } from "@builderx/utils";

import LayoutStatusBar from "../symbols/LayoutStatusBar";
import LogoR from "../symbols/LogoR";
import GenericButton from "../symbols/GenericButton";
import Others from "../symbols/Others";
import GenericButtonIcon from "../symbols/GenericButtonIcon";
import GenericButtonImage from "../symbols/GenericButtonImage";

import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  Button,
  Platform,
  Text
} from "react-native";

export default class Launcher extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <View style={styles.rect} navigation={this.props.navigation}>
            <LogoR style={styles.logoR} />
            <View style={styles.containerButtons}>
              <Text style={styles.text2}>Inicia sesion o crea una cuenta</Text>
              <GenericButton
                style={styles.genericButton4}
                navigation={this.props.navigation}
                text="Iniciar con correo electronico"
                root={() => {
                  this.props.navigation.push("Login");
                }}
              />
              <GenericButton
                style={styles.genericButton2}
                navigation={this.props.navigation}
                text="Crear cuenta"
                root={() => {
                  this.props.navigation.push("CreateAccount");
                }}
              />
              <Others style={styles.others} />
              <GenericButtonIcon
                style={styles.genericButtonIcon}
                text="Inicia con Facebook"
              />
              <GenericButtonImage
                style={styles.genericButtonImage}
                text="Iniciar con Google"
              />
              <GenericButton
                style={styles.genericButton3}
                navigation={this.props.navigation}
                text="Iniciar como invitado"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},

  button1: {
    top: 598.27,

    position: "absolute",
    height: 44
  },

  buttonGreen2: {
    top: 620.9,
    left: 57.13,
    position: "absolute",
    height: 41,
    width: 262
  },

  genericButton: {
    top: 52,
    position: "absolute",
    height: 42,
    width: 263,
    left: 56,
    backgroundColor: "rgba(190,190,190,1)",
    opacity: 1
  },
  genericButton: {
    width: 265,
    height: 44,
    backgroundColor: "rgba(190,190,190,1)",
    opacity: 1
  },

  background: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "column"
  },
  layoutStatusBar: {
    height: Platform.OS === "android" ? 26.25 : 34,
    alignSelf: "stretch"
  },
  rect: {
    backgroundColor: "#192734",
    opacity: 1,
    alignSelf: "stretch",
    flex: 1,
    flexGrow: undefined
  },
  logoR: {
    width: 265,
    height: 164,
    marginTop: 60,
    alignSelf: "center"
  },
  containerButtons: {
    height: 336,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  text2: {
    width: 262,
    height: 17,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "#65bc46"
  },
  genericButton4: {
    width: 263,
    height: 44,
    backgroundColor: "rgba(190,190,190,1)",
    opacity: 1
  },
  genericButton2: {
    width: 265,
    height: 44,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  others: {
    width: 262,
    height: 42
  },
  genericButtonIcon: {
    width: 265,
    height: 41,
    backgroundColor: "rgba(59,89,152,1)",
    opacity: 1
  },
  genericButtonImage: {
    width: 262,
    height: 42,
    backgroundColor: "rgba(129,129,129,1)",
    opacity: 1
  },
  genericButton3: {
    width: 263,
    height: 44,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  }
});
