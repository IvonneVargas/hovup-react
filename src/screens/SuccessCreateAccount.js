import React, { Component } from "react";
import Header from "../symbols/Header";
import { Center } from "@builderx/utils";
import GenericButtonBorder from "../symbols/GenericButtonBorder";
import ButtonTransparent from "../symbols/ButtonTransparent";
import GenericButton from "../symbols/GenericButton";

import { View, StyleSheet, StatusBar, Text } from "react-native";

export default class SuccessCreateAccount extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.rect2} />
        <Header style={styles.header} tittle="Verificacion" />
        <View style={styles.rect} />
        <Center horizontal>
          <Text style={styles.text}>
            Se te ha enviado un correo electronico a tu cuenta:
          </Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>ejemplo@yopmail.com</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text3}>
            Sigue las instrucciones y activa tu cuenta {"ä"}ndern
          </Text>
        </Center>
        <View style={styles.rect3}>
          <ButtonTransparent
            style={styles.buttonTransparent}
            text="Cambiar de usuario"
          />
          <GenericButtonBorder
            style={styles.genericButtonBorder}
            text4="Cambiar de usuario"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Continuar"
          />
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
  header: {
    top: 34,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  statusBar: {},
  rect: {
    height: 34,

    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1,
    right: 0
  },
  rect2: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)"
  },
  text: {
    top: 130.37,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
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
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  rect3: {
    height: 145.3,
    top: 304,
    left: 0,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column-reverse"
  },
  genericButtonBorder: {
    width: 262,
    height: 41
  },
  buttonTransparent: {
    width: 262,
    height: 42
  },
  genericButton: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  }
});
