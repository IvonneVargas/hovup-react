import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import Header from "../symbols/Header";
import GenericButton from "../symbols/GenericButton";

import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
  ScrollView,
  TextInput,
  Text
} from "react-native";

export default class CreateAccount extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        {}
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <Header
            style={styles.header}
            navigation={this.props.navigation}
            text="Crear cuentas"
          />
          <ScrollView style={styles.scrollArea}>
            <View style={styles.rect} navigation={this.props.navigation}>
              <TextInput style={styles.textInput2} placeholder="Nombre*" />
              <TextInput
                style={styles.textInput3}
                placeholder="Apellido paterno*"
              />
              <TextInput style={styles.textInput4} placeholder="Genero*" />
              <TextInput
                style={styles.textInput5}
                placeholder="Codigo Hovup (opcional)"
              />
              <Text style={styles.text6}>
                \n \n Con este código podrás dirigir a tus seguidores y amigos a
                tu\n marca\n y/o tienda. Comprobar disponibilidad.\n{" "}
              </Text>
              <TextInput
                style={styles.textInput6}
                placeholder="Correo electronico*"
              />
              <TextInput style={styles.textInput7} placeholder="contrasena*" />
              <TextInput
                style={styles.textInput8}
                placeholder="Confirmar contrasena*"
              />
              <TextInput style={styles.textInput9} placeholder="Pais*" />
              <TextInput style={styles.textInput10} placeholder="Estado*" />
              <TextInput style={styles.textInput11} placeholder="Ciudad*" />
              <Text style={styles.text12}>* Campos obligatorios</Text>
              <GenericButton
                style={styles.nextButton}
                navigation={this.props.navigation}
                root={() => {
                  this.props.navigation.push("SuccessCreateAccount");
                }}
                text="Siguiente"
              />
              <Text style={styles.text13}>
                \n \n Al registrarte aceptas los terminos y condiciones\n{" "}
              </Text>
            </View>
          </ScrollView>
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

  text: {
    top: 454.56,
    left: 141.18,
    position: "absolute",
    backgroundColor: "transparent"
  },
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    flexDirection: "column"
  },
  layoutStatusBar: {
    width: 376,
    height: 32
  },
  header: {
    height: 54,
    alignSelf: "stretch"
  },
  scrollArea: {
    alignSelf: "stretch",
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    justifyContent: "space-between",
    margin: 0,
    marginTop: 13,
    padding: 0,
    height: 713,
    right: 0
  },
  textInput2: {
    width: 264,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    fontSize: 14,
    textAlign: "center"
  },
  textInput3: {
    width: 261,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput4: {
    width: 261,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput5: {
    width: 262,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  text6: {
    width: 262,
    height: 49,
    alignSelf: "center",
    backgroundColor: "transparent",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    fontSize: 13,
    textAlign: "center",
    color: "rgba(243,243,243,1)"
  },
  textInput6: {
    width: 262,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput7: {
    width: 262,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput8: {
    width: 261,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput9: {
    width: 261,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput10: {
    width: 261,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInput11: {
    width: 262,
    height: 42,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  text12: {
    width: 147,
    height: 16,
    alignSelf: "center",
    backgroundColor: "transparent",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    color: "rgba(255,255,255,1)"
  },
  nextButton: {
    width: 264,
    height: 42,
    alignSelf: "center",
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  },
  text13: {
    width: 321,
    height: 14,
    alignSelf: "center",
    backgroundColor: "transparent",
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingTop: 0,
    textAlign: "center",
    color: "rgba(249,249,249,1)"
  }
});
