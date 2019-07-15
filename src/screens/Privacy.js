import React, { Component } from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
  Text
} from "react-native";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import Texts from "../assets/texts";

export default class Privacy extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.back}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <HeaderBack
            style={styles.headerBack}
            navigation={this.props.navigation}
          />
          <ScrollView style={styles.scrollArea}>
            <Text style={styles.text}>
              HOVUP, comprometida con la legalidad y transparencia, mediante el
              presente aviso comunica a las personas que contraten un servicio o
              que sean usuarias de esta aplicación, la forma en que tratará sus
              datos personales. HOVUP, tiene su domicilio ubicado en Guillermo
              González Camarena 1,600-2E, Santa Fe, México CDMX 01210 Los Datos
              Personales en posesión de HOVUP serán utilizados para: 1.
              Prestación de los servicios contratados. 2. Facturación y cobranza
              por servicios. 3. Análisis estadísticos de los datos en forma
              disasociada. 4. Compartir con terceros los datos personales que se
              encuentren asociados para llevar a cabo un proyecto o actividad
              relacionada con los objetivos de generación de negocio de HOVUP.
              Los datos personales sensibles serán mantenidos y tratados con
              estricta seguridad y confidencialidad para fines relacionados con
              la prestación de servicios, conforme a este aviso de privacidad y
              contrato de prestación de serviciosrespectivo.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(25,39,52,1)",
    flex: 1
  },
  back: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "column"
  },
  layoutStatusBar: {
    width: 360,
    height: Platform.OS === "android" ? 25 : 33
  },
  headerBack: {
    width: 360,
    height: 52
  },
  scrollArea: {
    flex: 1
  },
  text: {
    flex: 1,
    color: "rgba(249,249,249,1)"
  }
});
