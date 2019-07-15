import React, { Component } from "react";
//import Background from "../symbols/Background";

import { Center } from "@builderx/utils";

import { Constants } from "expo";

import GenericButtonTransparent from "../symbols/GenericButtonTransparent";
import GenericButton from "../symbols/GenericButton";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import LogoR from "../symbols/LogoR";
import Icon from "@builderx/icons";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <ScrollView style={styles.scrollArea}>
            <Icon
              style={styles.icon}
              name="ios-arrow-back"
              onPress={() => {
                this.props.navigation.pop();
              }}
              type="Ionicons"
            />
            <LogoR style={styles.logoR} />
            <View style={styles.rectAll}>
              {this.displayContent()}
            </View>
          </ScrollView>
        </View>
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
            style={styles.textInput2}
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
              this.props.navigation.push("BottomViewBar");
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
                type: "code"
              });
            }}
          />
        </View>
      );
    } else if (type == "code") {
      return (
        <View style={styles.rect4} navigation={this.props.navigation}>
          <Text style={styles.text}>
            Para continuar por favor ingrese el código de seguridad que te hemos
            enviado a tu correo electronico registrado: ejemplo@yopmail.com, Por
            favor
          </Text>
          <TextInput
            style={styles.textInput2}
            placeholder="Codigo de seguridad*"
            returnKeyType="go"
            secureTextEntry={true}
            underlineColorAndroid="rgba(255,255,255,1)"
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Nueva contrasena*"
            returnKeyType="go"
            secureTextEntry={true}
            underlineColorAndroid="rgba(255,255,255,1)"
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Confirmar nueva contrasena*"
            returnKeyType="go"
            secureTextEntry={true}
            underlineColorAndroid="rgba(255,255,255,1)"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Continuar"
            root={() => {
              this.props.navigation.push("Login");
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
  background: {
    top: 0,
    left: 0,
    position: "absolute",

    right: 0,
    bottom: 0,
    flexDirection: "column",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  rect3: {
    height: 220,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: 0,
    paddingTop: 10
  },
  rect4: {
    height: 272.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: 0,
    paddingTop: 10
  },
  genericButton: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    marginTop: 0
  },
  textInput2: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    marginTop: 0
  },
  textInput: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    top: 135,
    left: 61,
    position: "absolute"
  },
  genericButtonTransparent: {
    width: 265,
    height: 42,
    marginTop: 0
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 13,
    width: 316,
    height: 72.46,
    textAlign: "center",
    color: "rgba(243,243,243,1)"
  },
  layoutStatusBar: {
    height: 34,
    alignSelf: "stretch"
  },
  scrollArea: {
    flex: 1
  },
  logoR: {
    width: 272.47,
    height: 164,
    margin: 0,
    marginTop: 60,
    alignSelf: "center"
  },
  icon: {
    top: 4,
    left: 18,
    width: 15,
    height: 39,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rectAll: {
    flex: 1
  },
  textInput3: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    marginTop: 0
  }
});
