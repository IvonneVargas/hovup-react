import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderIcon from "../symbols/HeaderIcon";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Texts from "../assets/texts";

export default class OptionsProfile extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderIcon
          style={styles.headerIcon}
          navigation={
            Platform.OS === "ios" ? "this.props.navigation" : undefined
          }
        />
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <Text style={styles.text}>{Texts.OptionsTitle}</Text>
          <Text style={styles.text2}>
            Para actualizar tu informacion, da clic en el renglon que desees
            editar.
          </Text>
        </View>
        <View style={styles.rect3}>
          <View style={styles.rect6}>
            <TextInput style={styles.textInput3} placeholder="Genero*" />
            <TextInput
              style={styles.textInput2}
              placeholder="Apellido paterno*"
            />
            <TextInput style={styles.textInput} placeholder="Nombre*" />
          </View>
          <View style={styles.rect5}>
            <TextInput
              style={styles.textInput6}
              placeholder="Ciudad*"
              onKeyPress={keyPress => console.log(keyPress)}
            />
            <TextInput style={styles.textInput5} placeholder="Estado*" />
            <TextInput style={styles.textInput9} placeholder="Pais*" />
          </View>
          <View style={styles.rect4}>
            <TextInput style={styles.textInput8} placeholder="Telefono*" />
            <TextInput style={styles.textInput7} placeholder="Correo*" />
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
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 33,
    right: 0
  },
  headerIcon: {
    position: "absolute",
    top: 28,
    left: 0,
    right: 0,
    height: 53
  },
  rect: {
    top: 79.89,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  rect2: {
    height: 81.4,
    top: 83,
    left: 0,
    position: "absolute",
    right: 0,
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
    top: 159.97,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: -2,
    opacity: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  rect4: {
    height: 100,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 0,
    marginBottom: 0
  },
  textInput8: {
    width: 262,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput7: {
    width: 262,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  rect5: {
    width: 374,
    height: 156.8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput6: {
    width: 262,
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
  textInput9: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  rect6: {
    width: 374,
    height: 157,
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput3: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 7,
    textAlign: "center"
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
    textAlign: "center"
  }
});
