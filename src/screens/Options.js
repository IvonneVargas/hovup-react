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
import Header from "../symbols/Header";
import iconPerfil from "../assets/OptionsImages/ic_perfil.png";

export default class Options extends Component {
  render() {
    return (
      <View style={styles.root}>
        <LayoutStatusBar style={styles.layoutStatusBar} />
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
                  <Image
                    source={require("../assets/ic_acerca_nosotros.png")}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{item.key}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          ItemSeparatorComponent={({}) => {
            return <View style={styles.rect3} />;
          }}
        />
        <Header
          style={styles.header}
          navigation={this.props.navigation}
          text="Opciones"
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
    padding: 5,

    opacity: 1,
    height: 42
  },
  text2: {
    color: "rgba(255,255,255,1)",
    margin: 0
  },

  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0
  },
  header: {
    top: 23.91,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  image: {
    width: 34,
    height: 33,
    borderRadius: 6,
    margin: 0
  },
  rect3: {
    backgroundColor: "rgba(148,148,148,1)",
    left: 0,
    height: 3,
    opacity: 1
  }
});
