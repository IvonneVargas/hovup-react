import React, { Component } from "react";
import { Center } from "@builderx/utils";

import GenericButton from "../symbols/GenericButton";

import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class CreateAccount extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        {}
        <ScrollView style={styles.scrollArea} />
        <View style={styles.settingsbar} />
        <View style={styles.statusbar} />
        <TextInput
          style={styles.tittle}
          placeholder="Crear cuenta"
          placeholderTextColor="rgba(255,255,255,1)"
        />
        <View style={styles.rect}>
          <TextInput
            style={styles.textInput2}
            placeholder="Nombre*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput3}
            placeholder="Apellido paterno*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput4}
            placeholder="Genero*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput5}
            placeholder="Codigo Hovup (opcional)"
            underlineColorAndroid="transparent"
          />
          <Text style={styles.text6}>
            \n Con este código podrás dirigir a tus seguidores y amigos a tu
            marca\n y/o tienda. Comprobar disponibilidad.\n{" "}
          </Text>
          <TextInput
            style={styles.textInput6}
            placeholder="Correo electronico*"
            underlineColorAndroid="transparent"
          />
          <TextInput style={styles.textInput7} placeholder="contrasena*" />
          <TextInput
            style={styles.textInput8}
            placeholder="Confirmar contrasena*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput9}
            placeholder="Pais*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput10}
            placeholder="Estado*"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput11}
            placeholder="Ciudad*"
            underlineColorAndroid="transparent"
          />
          <Text style={styles.text12}>* Campos obligatorios</Text>
          <GenericButton
            style={styles.nextButton}
            navigation={this.props.navigation}
            root={() => {
              this.props.navigation.push("SuccessCreateAcount");
            }}
            text="Siguiente"
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
  scrollArea: {
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    top: 0,
    bottom: 0,
    right: 0
  },
  text: {
    top: 454.56,
    left: 141.18,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect: {
    top: 86,
    left: 0,
    position: "absolute",
    justifyContent: "space-between",
    height: 725,
    alignItems: "center",
    right: 0
  },
  settingsbar: {
    height: 54,
    top: 28,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    right: 0,
    opacity: 1
  },
  statusbar: {
    height: 28,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    opacity: 1,
    right: -1.9
  },
  tittle: {
    top: 49,
    left: 13,
    position: "absolute",
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "rgba(218,7,7,1)",
    fontSize: 20,
    height: 19,
    width: 121.1
  },
  textInput2: {
    width: 264,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    fontSize: 14,
    textAlign: "center"
  },
  textInput3: {
    width: 261,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput4: {
    width: 261,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput5: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  text6: {
    width: 262,
    height: 49,
    backgroundColor: "transparent",
    fontSize: 13,
    textAlign: "center",
    color: "rgba(243,243,243,1)"
  },
  textInput6: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput7: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput8: {
    width: 261,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput9: {
    width: 261,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput10: {
    width: 261,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput11: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  text12: {
    width: 147,
    height: 13,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  nextButton: {
    width: 264,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  }
});
