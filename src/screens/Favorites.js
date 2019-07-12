import React, { Component } from "react";

import _ from "lodash";
import Others from "../symbols/Others";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSettings from "../symbols/HeaderSettings";
import Icon from "@builderx/icons";
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";

export default class Favorites extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <HeaderSettings
            style={styles.headerSettings}
            navigation={this.props.navigation}
          />
          <FlatList
            style={styles.list}
            data={[
              {
                key: "Titulo",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo2",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo3",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo4",
                sub: "Descripcion",
                type: "content"
              },
              {
                key: "Titulo5",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo6",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo7",
                sub: "Descripcion",
                type: "content"
              },
              {
                key: "Titulo8",
                sub: "Descripcion",
                type: "content"
              },
              {
                key: "Titulo9",
                sub: "Descripcion",
                type: "content"
              },
              {
                key: "Titulo10",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo11",
                sub: "Descripcion",
                type: "main"
              },
              {
                key: "Titulo12",
                sub: "Descripcion",
                type: "content"
              }
            ]}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect}>
                  <TouchableOpacity
                    style={styles.buttonsStyle}
                    onPress={() => {
                      console.log("1Click,", item.level);
                      this.props.navigation.push("BrandsTab");
                    }}
                  >
                    {this.showImage(item.type)}
                    <View style={styles.rect9}>
                      <Text style={styles.text2}>{item.key}</Text>
                      <Text style={styles.text}>{item.sub}</Text>
                    </View>
                    <Icon
                      style={styles.icon}
                      name="ios-arrow-forward"
                      type="Ionicons"
                    />
                  </TouchableOpacity>
                  <View style={styles.separators} />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }

  showImage(type) {
    console.log("typesssssssl: ", type == "content");
    if (type == "content") {
      return (
        <Image
          source={require("../assets/ic_60x60.png")}
          style={styles.imageS}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/ic_200x200.png")}
          style={styles.image}
        />
      );
    }
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
    backgroundColor: "rgba(29,41,53,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    flexDirection: "column"
  },

  statusBar: {},

  others: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  layoutStatusBar: {
    height: 33,
    alignSelf: "stretch"
  },
  headerSettings: {
    height: 54,
    alignSelf: "stretch"
  },
  list: {
    flex: 1,
    backgroundColor: "rgba(29,41,53,1)",
    opacity: 1,
    alignSelf: "stretch"
  },
  rect: {
    backgroundColor: "rgba(29,41,53,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  rect9: {
    flex: 1
  },
  text: {
    color: "rgba(255,255,255,1)"
  },

  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    justifyContent: "flex-start"
  },
  icon: {
    top: Platform.OS === "android" ? 18 : undefined,
    left: Platform.OS === "android" ? 329 : undefined,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 15,
    width: 10
  },
  image: {
    width: 95,
    height: 54,
    borderRadius: 6,
    margin: 5
  },
  imageS: {
    width: 60,
    height: 60,
    borderRadius: 6,
    margin: 5
  },
  text: {
    width: 237,
    height: 17,
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  text2: {
    width: 237,
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)"
  },
  separators: {
    height: 1,
    top: 53,
    left: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    right: 0
  }
});
