import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import Header from "../symbols/Header";

import { View, StyleSheet, Platform, FlatList, Text } from "react-native";

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
        <View style={styles.backgroundView}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <Header
            style={styles.header}
            navigation={this.props.navigation}
            text="title"
          />
          <FlatList
            style={styles.list}
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
    top: Platform.OS === "android" ? 24 : undefined,
    height: 53,
    alignSelf: "stretch"
  },
  list: {
    top: Platform.OS === "android" ? 75.67 : undefined,
    bottom: Platform.OS === "android" ? "" : undefined,
    right: Platform.OS === "android" ? 0 : undefined,
    height: Platform.OS === "android" ? 745 : undefined,
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
  rect2: {
    left: 15,
    height: 2,
    backgroundColor: "#999999"
  }
});
