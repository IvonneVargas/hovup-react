import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderIcon from "../symbols/HeaderIcon";
import { View, StyleSheet, Text, Platform, TextInput } from "react-native";
import GenericButton from "../symbols/GenericButton";

import Texts from "../assets/texts";

export default class OptionsProfile extends Component {
  render() {
    const itemId = this.props.navigation.getParam("id", "");
    const title = this.props.navigation.getParam("title", "");
    const desc = this.props.navigation.getParam("desc", "");
    console.log("itemId options profile", itemId);
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderIcon
          style={styles.headerIcon}
          navigation={Platform.OS === "ios" ? this.props.navigation : undefined}
        />
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text2}>{desc}</Text>
        </View>
        <View style={styles.rect3}>{this.displayContent()}</View>
      </View>
    );
  }

  displayContent() {
    const itemId = this.props.navigation.getParam("id", "");
    if (itemId == 1) {
      return (
        <View style={styles.rect6}>
          <TextInput style={styles.textInput} placeholder="Nombre*" />
          <TextInput style={styles.textInput} placeholder="Apellido paterno*" />
          <TextInput style={styles.textInput} placeholder="Genero*" />
          <TextInput
            style={styles.textInput}
            placeholder="Pais*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Estado*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ciudad*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Correo electronico*"
          />
          <TextInput style={styles.textInput} placeholder="Telefono*" />
        </View>
      );
    } else if (itemId == 2) {
      return (
        <View style={styles.rect7}>
          <Text style={styles.text3}>Código Hovup actual: adasdYf</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nuevo codigo Hovup"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Cambiar codigo Hovup"
          />
        </View>
      );
    } else if (itemId == 3) {
      return (
        <View style={styles.rect4}>
          <TextInput style={styles.textInput} placeholder="Contrasena actual" />
          <TextInput style={styles.textInput} placeholder="Nueva contrasena" />
          <TextInput
            style={styles.textInput}
            placeholder="Confirma nueva contrasena"
          />
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Cambiar contrasena"
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
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: Platform.OS === "android" ? 25 : 32,
    right: 0
  },
  headerIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? 25 : 28,
    left: 0,
    right: 0,
    height: 53
  },
  rect: {
    top: Platform.OS === "android" ? 77 : 79.89,
    left: Platform.OS === "android" ? 0 : 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: Platform.OS === "android" ? 0 : 0,
    bottom: Platform.OS === "android" ? 3 : 0,
    opacity: 1
  },
  rect2: {
    height: Platform.OS === "android" ? 81 : 81.4,
    top: Platform.OS === "android" ? 83 : 83,
    left: Platform.OS === "android" ? 0 : 0,
    position: "absolute",
    right: Platform.OS === "android" ? 0 : 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    height: 16,
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    width: 354,
    margin: 10,
    padding: 0
  },
  text2: {
    height: 59.3,
    backgroundColor: "transparent",
    alignSelf: "stretch",
    width: 357,
    margin: 10,
    padding: 0,
    color: "rgba(255,255,255,1)"
  },
  rect3: {
    top: 160,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: -2,
    opacity: 1,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  rect4: {
    height: 100,
    alignSelf: "stretch",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 0,
    marginBottom: 0
  },
  rect5: {
    width: 374,
    height: 156.8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  rect6: {
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
    flex: 1
  },
  rect7: {
    width: 376,
    height: 184,
    alignItems: "center",
    justifyContent: "space-around"
  },
  text3: {
    width: 200,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  textInput: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7
  },
  genericButton: {
    width: 264,
    height: 42,
    marginBottom: 45,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  rect4: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 366
  }
});
