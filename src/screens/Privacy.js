import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import { View, StyleSheet, ScrollView, Text } from "react-native";
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
            {"\n"}\n HOVUP, comprometida con la legalidad y transparencia,
            mediante el presente aviso comunica a las\n personas que contraten
            un servicio o que sean usuarias de esta aplicación, la forma en que
            tratará\n sus datos personales. {"\n"}
            {"\n"} HOVUP, tiene su domicilio ubicado en Guillermo González
            Camarena\n 1,600-2E, Santa Fe, México CDMX 01210 {"\n"}
            {"\n"} Los Datos Personales en posesión de HOVUP serán\n utilizados
            para: {"\n"}
            {"\n"} 1. Prestación de los servicios contratados. {"\n"}
            {"\n"} 2. Facturación y cobranza por\n servicios. {"\n"}
            {"\n"} 3. Análisis estadísticos de los datos en forma disasociada.{" "}
            {"\n"}
            {"\n"} 4. Compartir con\n terceros los datos personales que se
            encuentren asociados para llevar a cabo un proyecto o\n actividad
            relacionada con los objetivos de generación de negocio de HOVUP.{" "}
            {"\n"}
            {"\n"} Los datos\n personales sensibles serán mantenidos y tratados
            con estricta seguridad y confidencialidad para\n fines relacionados
            con la prestación de servicios, conforme a este aviso de privacidad
            y contrato de\n prestación de servicios respectivo.\n{" "}
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
    height: 33,
    right: 0
  },
  headerBack: {
    top: 31.1,
    left: 0,
    position: "absolute",
    height: 54,
    right: 0
  },
  scrollArea: {
    top: 82.95,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1
  },
  text: {
    top: -5,
    left: 0,
    width: 374,
    height: 733,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  }
});
