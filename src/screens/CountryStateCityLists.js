import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSingleLogo from "../symbols/HeaderSingleLogo";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default class CountryStateCityLists extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <HeaderSingleLogo style={styles.headerSingleLogo} />
        <FlatList
          style={styles.list}
          data={[
            {
              key: "Perfil",
              link: ""
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cambiar codigo Hovup",
              link: ""
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cambiar contrasena",
              link: ""
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Acerca de nosotros",
              link: ""
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Aviso de privacidad",
              link: ""
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cerrar sesion",
              link: ""
            }
          ]}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <Text style={styles.text}>List Item</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={({}) => {
            return <View style={styles.rect4} />;
          }}
        />
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
    top: 0.26,
    left: 0,
    position: "absolute",
    height: 33,
    right: 0
  },
  headerSingleLogo: {
    position: "absolute",
    top: 30,
    left: 0,
    height: 53,
    right: 0
  },
  list: {
    top: 83.03,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  text: {
    color: "rgba(255,255,255,1)"
  },
  rect4: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  }
});
