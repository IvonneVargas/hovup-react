import React, { Component } from "react";
import GenericButton from "./GenericButton";
import { View, Text, StyleSheet, Image } from "react-native";

export default class NotRegister extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 360,
    height: 740
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.titleNotRegister}>¡Espera!</Text>
        <Text style={styles.descriptionNotRegister}>
          Estas a solo unos pases de disfrutar de todos los beneficios de
          nuestra plataforma.
        </Text>
        <Image
          style={styles.imageNotRegister}
          source={require("../assets/ic_register_not_draw.png")}
        />
        <GenericButton
          style={styles.genericButtonNotRegister}
          navigation={this.props.navigation}
          text="Registrarme"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleNotRegister: {
    width: 50,
    height: 13,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  descriptionNotRegister: {
    width: 360,
    height: 27,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  imageNotRegister: {
    width: 240,
    height: 268.74
  },
  genericButtonNotRegister: {
    width: 264,
    height: 41,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  root: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  }
});
