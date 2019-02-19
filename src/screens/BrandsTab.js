import React, { Component } from "react";
import Colors from "../assets/colors";
import TabB from "../symbols/TabB";
import CatDown from "../symbols/CatDown";

import Icon from "@builderx/icons";
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  Text,
  Image
} from "react-native";

export default class BrandsTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background} />
        <View style={styles.rect2}>
          <View style={styles.rect}>
            <TabB style={styles.tabB} text="Publico" />
            <TabB style={styles.tabB3} text="VIP" />
            <TabB style={styles.tabB2} text="Privado" />
          </View>
          <View style={styles.rect3} navigation={this.props.navigation}>
            <CatDown
              style={styles.catDown}
              navigation={this.props.navigation}
            />
          </View>
        </View>
        <View style={styles.rect4}>
          <FlatList
            style={styles.list}
            data={[
              {
                key: "Perfil",
                sub: "Descripcion"
              },
              {
                key: "Cambiar codigo Hovup",
                sub: "Descripcion"
              },
              {
                key: "Cambiar contrasena",
                sub: "Descripcion"
              },
              {
                key: "Acerca de nosotros",
                sub: "Descripcion"
              },
              {
                key: "Aviso de privacidad",
                sub: "Descripcion"
              },
              {
                key: "Cerrar sesion",
                sub: "Descripcion"
              }
            ]}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect5}>
                  <Image
                    source={require("../assets/icon_gps_on.png")}
                    style={styles.image}
                  />
                  <Icon
                    name="ios-arrow-forward"
                    style={styles.icon}
                    type="Ionicons"
                  />
                  <View style={styles.rect9}>
                    <Text style={styles.text}>{item.sub}</Text>
                    <Text style={styles.text2}>{item.key}</Text>
                  </View>
                </View>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect8} />;
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    alignItems: "center"
  },

  PickerNaN: {
    color: "rgba(251,251,251,1)"
  },
  rect2: {
    top: 1,
    left: 0,
    right: 0,
    height: 81,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  rect: {
    width: 375,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tabB: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  tabB3: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)"
  },
  tabB2: {
    width: 100,
    height: 32,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(101,188,70,1)",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },
  rect3: {
    width: 375,
    height: 32,
    alignItems: "flex-start",
    paddingLeft: 35
  },
  catDown: {
    width: 180,
    height: 30
  },
  rect4: {
    top: 82,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  list: {
    top: 0,
    left: 0,
    width: 375,
    height: 730,
    position: "absolute",
    paddingLeft: 5,
    paddingRight: 5
  },
  rect5: {
    backgroundColor: "rgba(25,39,52,1)",
    alignItems: "center",
    flexDirection: "row",
    margin: 0
  },

  rect8: {
    left: 15,
    height: 2,
    backgroundColor: "#999999",
    margin: 0
  },

  icon: {
    top: 13,
    left: 350,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  rect9: {
    height: 32,
    width: 111,
    top: 4,
    left: 49,
    position: "absolute",
    justifyContent: "space-between"
  },
  text: {
    width: 58,
    height: 11,
    fontSize: 12,
    color: "rgba(255,255,255,1)"
  },
  text2: {
    width: 67,
    height: 14,
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  }
});
