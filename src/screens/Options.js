import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  Platform
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
              link: "OptionsProfile",
              id: 1,
              desc:
                "Para actualizar tu información, da clicl en el renglón que desees editar."
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cambiar código Hovup",
              link: "OptionsProfile",
              id: 2,
              desc:
                "Este código es su identificador en el ambiente Hovup. Elija uno original y que lo identifique"
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cambiar contraseña",
              link: "OptionsProfile",
              id: 3,
              desc:
                "En esta sección podrás cambiar tu contraseña siempre que desees. Tu contraseña debe contener: al mens una mayúscula, un número y tener entre 4 y 10 caracteres; recuerda mantener tu contraseña en un lugar seguro."
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Acerca de nosotros",
              link: "About",
              id: 4
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Aviso de privacidad",
              link: "Privacy",
              id: 5
            },
            {
              icon: require("../assets/OptionsImages/ic_perfil.png"),
              key: "Cerrar sesion",
              link: "",
              id: 6
            }
          ]}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect2}>
                <TouchableOpacity
                  style={styles.buttonsStyle}
                  onPress={() => {
                    if (item.link == "") {
                      this._showAlert(
                        "Cerrar sesión",
                        "¿Estás seguro que deseas cerrar sesión?"
                      );
                    } else {
                      console.log("holas2,", item.link);
                      if (item.id > 3) {
                        console.log("son los ultimos");
                        this.props.navigation.push(item.link);
                      } else {
                        this.props.navigation.push(item.link, {
                          id: item.id,
                          title: item.key,
                          desc: item.desc
                        });
                      }
                    }
                  }}
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
        />
        <Header
          style={styles.header}
          navigation={this.props.navigation}
          text="Opciones"
        />
      </View>
    );
  }
  _showAlert(title, msg) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(25,39,52,1)",
    flex: 1
  },
  layoutStatusBar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: Platform.OS === "android" ? 25 : 32,
    right: 0
  },

  list: {
    top: 102,
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
    height: 46
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
    top: Platform.OS === "android" ? 25 : 28,
    left: 0,
    position: "absolute",
    height: 53,
    right: 0
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 6,
    margin: 0,
    marginRight: 8
  }
});
