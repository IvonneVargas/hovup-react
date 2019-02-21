import React, { Component } from "react";
import Header from "../symbols/Header";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default class CategoriesList extends Component {
  render() {
    const itemId = this.props.navigation.getParam("id", "NO-ID");
    var title = "";
    if (itemId === "1") {
      title = "Categorias";
    } else {
      title = "Title";
    }
    return (
      <View style={styles.root}>
        <Header
          style={styles.header}
          navigation={this.props.navigation}
          text={title}
        />
        <LayoutStatusBar style={styles.layoutStatusBar} />
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
            return <View style={styles.rect2} />;
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
  header: {
    top: 28,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 34,
    right: 0
  },
  list: {
    top: 81,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: -81,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
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
  rect2: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  }
});