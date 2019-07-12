import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import Header from "../symbols/Header";

import { View, StyleSheet, Platform, FlatList, Text } from "react-native";

export default class CategoriesList extends Component {
  render() {
    const itemId = this.props.navigation.getParam("id", "NO-ID");
    console.log("itemId:", itemId);
    var title = "";
    if (itemId === "1") {
      title = "Categorias";
    } else {
      title = "Title";
    }
    return (
      <View style={styles.root}>
        <View style={styles.backgroundView}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <Header
            style={styles.header}
            navigation={this.props.navigation}
            text={title}
          />
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
              },
              {
                key: "Titulo11",
                sub: "Descripcion"
              },
              {
                key: "Titulo12",
                sub: "Descripcion"
              }
            ]}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect}>
                  <Text style={styles.text}>{item.sub}</Text>
                  <View style={styles.separators} />
                </View>
              );
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
  backgroundView: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "column"
  },
  layoutStatusBar: {
    height: Platform.OS === "android" ? 25 : 33,
    alignSelf: "stretch"
  },
  header: {
    height: 53,
    alignSelf: "stretch"
  },
  list: {
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    alignSelf: "stretch",
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: "rgba(255,255,255,1)"
  },
  separators: {
    height: 1,
    top: 33,
    left: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    right: 1
  }
});
