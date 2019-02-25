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
                key: "Titulo",
                sub: "Descripcion"
              },
              {
                key: "Titulo2",
                sub: "Descripcion"
              },
              {
                key: "Titulo3",
                sub: "Descripcion"
              },
              {
                key: "Titulo4",
                sub: "Descripcion"
              },
              {
                key: "Titulo5",
                sub: "Descripcion"
              },
              {
                key: "Titulo6",
                sub: "Descripcion"
              },
              {
                key: "Titulo7",
                sub: "Descripcion"
              },
              {
                key: "Titulo8",
                sub: "Descripcion"
              },
              {
                key: "Titulo9",
                sub: "Descripcion"
              },
              {
                key: "Titulo10",
                sub: "Descripcion"
              }
            ]}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect5}>
                  <Image
                    source={require("../assets/ic_200x200.png")}
                    style={styles.image}
                  />
                  <Icon
                    name="ios-arrow-forward"
                    style={styles.icon}
                    type="Ionicons"
                  />
                  <View style={styles.rect9}>
                    <Text style={styles.text2}>{item.key}</Text>
                    <Text style={styles.text}>{item.sub}</Text>
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

    height: 730,
    position: "absolute",
    paddingLeft: 0,
    paddingRight: 0,
    right: 0
  },
  rect5: {
    backgroundColor: "rgba(25,39,52,1)",
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    width: Platform.OS === "android" ? 350 : undefined
  },

  rect8: {
    left: 0,
    height: 2,
    backgroundColor: "#999999",
    margin: 0
  },

  icon: {
    top: Platform.OS === "android" ? 13.33 : 20.19,
    left: Platform.OS === "android" ? 330.67 : 354.52,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  image: {
    width: 95,
    height: 54,
    borderRadius: 6,
    margin: 5
  },
  rect9: {
    height: 40,
    width: 238,
    top: 12,
    left: 104,
    position: "absolute",
    justifyContent: "space-around"
  },
  text: {
    width: 237,
    height: 17,
    fontSize: 12,
    color: "rgba(255,255,255,1)"
  },
  text2: {
    width: 237,
    height: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(255,255,255,1)"
  }
});
