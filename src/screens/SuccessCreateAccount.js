import React, { Component } from "react";
import Header from "../symbols/Header";
import { Center } from "@builderx/utils";
import ButtonTransparent from "../symbols/ButtonTransparent";
import GenericButtonBorder from "../symbols/GenericButtonBorder";
import { Constants } from "expo";
import GenericButton from "../symbols/GenericButton";
import LayoutStatusBar from "../symbols/LayoutStatusBar";

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Platform
} from "react-native";

export default class SuccessCreateAccount extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.rect2} />
        <Header
          style={styles.header}
          tittle="Verificacion"
          navigation={Platform.OS === "ios" ? this.props.navigation : undefined}
          text="Verificacion"
        />
        <Center horizontal>
          <Text style={styles.text2}>ejemplo@yopmail.com≠</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text3}>
            Sigue las instrucciones y activa tu cuenta
          </Text>
        </Center>
        <Text style={styles.text}>
          \n Se te ha enviado un correo electronico a tu cuenta:\n{" "}
        </Text>
        <View style={styles.rect3}>
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Continuar"
          />
          <GenericButtonBorder
            style={styles.genericButtonBorder}
            text4="Reenviar correo de verificacion"
          />
          <ButtonTransparent
            style={styles.buttonTransparent}
            navigation={this.props.navigation}
            text="Cambiar de usuario"
            button={() => {
              this.props.navigation.push("Launcher");
            }}
          />
        </View>
        <LayoutStatusBar style={styles.layoutStatusBar} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    top: Platform.OS === "android" ? 24 : 28,
    left: 0,
    position: "absolute",
    height: Platform.OS === "android" ? 54 : 53,
    right: 0
  },
  statusBar: {},

  rect2: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)"
  },

  text2: {
    top: 186,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  text3: {
    top: 242,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  rect3: {
    height: 148.74,

    top: 269,
    left: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    right: 0
  },
  buttonTransparent: {
    width: 260,
    height: 42
  },
  genericButtonBorder: {
    width: 264,
    height: 42
  },
  genericButton: {
    width: 264,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  text: {
    top: 130,
    left: 20,
    width: 336,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 34
  },
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: Platform.OS === "android" ? 25 : 32,
    right: 0
  }
});
