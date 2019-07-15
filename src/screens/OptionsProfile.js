import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  ScrollView
} from "react-native";
import GenericButton from "../symbols/GenericButton";

import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderIcon from "../symbols/HeaderIcon";
import Texts from "../assets/texts";

export default class OptionsProfile extends Component {
  render() {
    const itemId = this.props.navigation.getParam("id", "");
    const title = this.props.navigation.getParam("title", "");
    const desc = this.props.navigation.getParam("desc", "");
    console.log("itemId options profile", itemId);
    return (
      <View style={styles.root}>
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <HeaderIcon
            style={styles.headerIcon}
            navigation={this.props.navigation}
          />
          <View style={styles.rect4}>
            <View style={styles.rect2}>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.text2}>{desc}</Text>
            </View>
            <ScrollView style={styles.scrollArea}>
              {this.displayContent()}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

  displayContent() {
    const itemId = this.props.navigation.getParam("id", "");
    if (itemId == 1) {
      return (
        <View style={styles.rect6}>
          <TextInput style={styles.textInput} placeholder="Nombre*" />
          <TextInput
            style={styles.textInput8}
            placeholder="Apellido paterno*"
          />
          <TextInput style={styles.textInput7} placeholder="Genero*" />
          <TextInput
            style={styles.textInput6}
            placeholder="Pais*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput5}
            placeholder="Estado*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput4}
            placeholder="Ciudad*"
            onFocus={() => {
              this.props.navigation.push("CountryStateCityLists");
            }}
          />
          <TextInput
            style={styles.textInput3}
            placeholder="Correo electronico*"
          />
          <TextInput style={styles.textInput2} placeholder="Telefono*" />
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
        <View style={styles.rect9}>
          <TextInput
            style={styles.textInput2}
            placeholder="Contrasena actual"
          />
          <TextInput style={styles.textInput3} placeholder="Nueva contrasena" />
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

  rect4: {
    top: 71,
    left: 0,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 366,
    width: 375,
    height: 740,
    flexDirection: "column"
  },
  rect5: {
    width: 374,
    height: 156.8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  rect6: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 13,
    height: 450
  },
  rect7: {
    height: 184,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  text3: {
    width: 200,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  },
  textInput: {
    width: 265,
    height: 41,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  genericButton: {
    width: 265,
    height: 42,
    marginBottom: 45,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    alignSelf: "center"
  },
  rect4: {
    alignItems: "center",

    alignSelf: "stretch",
    flex: 1
  },

  rect: {
    top: Platform.OS === "android" ? 77 : undefined,

    bottom: Platform.OS === "android" ? 3 : undefined,

    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    flex: 1,
    alignSelf: "stretch"
  },
  background: {
    top: Platform.OS === "android" ? 0 : 0,
    left: Platform.OS === "android" ? 0 : 0,
    position: "absolute",
    right: Platform.OS === "android" ? 0 : 0,
    bottom: Platform.OS === "android" ? 0 : 0,
    flexDirection: "column",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  layoutStatusBar: {
    height: Platform.OS === "android" ? 25 : 33,
    alignSelf: "stretch"
  },
  headerIcon: {
    height: 54,
    alignSelf: "stretch"
  },
  rect2: {
    height: Platform.OS === "android" ? 81 : 98,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    alignSelf: "stretch",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  text: {
    height: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    margin: 10,
    padding: 0,
    fontWeight: "bold",
    color: "rgba(255,255,255,1)",
    marginLeft: 13,
    marginTop: 13
  },
  text2: {
    height: 66.13,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    margin: 10,
    padding: 0,
    color: "rgba(255,255,255,1)",
    marginLeft: 13,
    marginTop: 13
  },
  scrollArea: {
    flex: 1
  },
  textInput2: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput3: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput4: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput5: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput6: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput7: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput8: {
    width: 264,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput2: {
    width: 265,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  textInput3: {
    width: 265,
    height: 42,
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    alignSelf: "center"
  },
  rect9: {
    alignItems: "center",

    alignSelf: "stretch",
    height: 254.86,
    flexDirection: "column",
    justifyContent: "space-around"
  }
});
