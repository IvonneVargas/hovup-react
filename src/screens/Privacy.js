import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Platform
} from "react-native";
import Texts from "../assets/texts";

export default class Privacy extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderBack
          style={styles.headerBack}
          navigation={this.props.navigation}
        />
        <ScrollView style={styles.scrollArea}>
          <Text style={styles.text}>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}\n HOVUP, comprometida con la legalidad y transparencia,\n
            mediante el presente aviso comunica a las\n personas que contraten\n
            un servicio o que sean usuarias de esta aplicación, la forma en
            que\n tratará\n sus datos personales. {"\n"}
            {"\n"} HOVUP, tiene su domicilio ubicado en Guillermo González\n
            Camarena\n 1,600-2E, Santa Fe, México CDMX 01210 {"\n"}
            {"\n"} Los Datos Personales en posesión de HOVUP serán\n
            utilizados\n para: {"\n"}
            {"\n"} 1. Prestación de los servicios contratados. {"\n"}
            {"\n"} 2. Facturación y cobranza por\n servicios. {"\n"}
            {"\n"} 3. Análisis estadísticos de los datos en forma disasociada.{" "}
            {"\n"}
            {"\n"} 4. Compartir con\n terceros los datos personales que se\n
            encuentren asociados para llevar a cabo un proyecto o\n actividad\n
            relacionada con los objetivos de generación de negocio de HOVUP.{" "}
            {"\n"}
            {"\n"} Los datos\n personales sensibles serán mantenidos y
            tratados\n con estricta seguridad y confidencialidad para\n fines
            relacionados\n con la prestación de servicios, conforme a este aviso
            de privacidad\n y contrato de\n prestación de servicios
            respectivo.\n{" "}
          </Text>
        </ScrollView>
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
    height: Platform.OS === "android" ? 25 : 33,
    right: 0
  },
  headerBack: {
    top: Platform.OS === "android" ? 25 : 31,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  scrollArea: {
    top: Platform.OS === "android" ? 79 : 85,
    left: Platform.OS === "android" ? 0 : 0,
    position: "absolute",

    right: Platform.OS === "android" ? 0 : 0,
    bottom: Platform.OS === "android" ? 2 : -5,
    backgroundColor: "#E6E6E6"
  },
  text: {
    top: 4,
    left: 0,

    height: 482,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    right: -4
  }
});
