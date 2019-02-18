import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import iconPerfil from "../assets/OptionsImages/ic_perfil.png";

export default class Options extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
        <View style={styles.rect} />
        <FlatList
          style={styles.list}
          data={[
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
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
              <View style={styles.rect2}>
                <TouchableOpacity
                  style={styles.buttonsStyle}
                  onPress={() => this.props.navigation.navigate("${item.link}")}
                >
                  <Text style={styles.text2}>{item.key}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          ItemSeparatorComponent={({}) => {
            return <View style={styles.rect5} />;
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
    top: -1.8,
    left: 0,
    position: "absolute",
    height: 34,
    right: 0
  },
  rect: {
    height: 54,
    top: 31,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(48,61,73,1)",
    right: 0,
    opacity: 1
  },
  list: {
    top: 72,
    left: 0,
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    bottom: 0
  },
  rect2: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  text2: {
    color: "rgba(255,255,255,1)"
  },
  rect5: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  },
  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5
  }
});
