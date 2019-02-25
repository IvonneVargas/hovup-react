import React, { Component } from "react";
import Colors from "../assets/colors";
import TabB from "../symbols/TabB";
import CatDown from "../symbols/CatDown";

import Icon from "@builderx/icons";
import {
  View,
  StyleSheet,
  Platform,
  Image,
  FlatList,
  Text
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
          <View style={styles.brandPrincipal}>
            <View style={styles.contentItems}>
              <View style={styles.otherItems}>
                <Icon
                  style={styles.email}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.phone}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.web}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.facebook}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.twitter}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.youtube}
                  name="home"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.instagram}
                  name="home"
                  type="MaterialCommunityIcons"
                />
              </View>
              <View style={styles.fav}>
                <Icon
                  style={styles.heart}
                  name="home"
                  type="MaterialCommunityIcons"
                />
              </View>
            </View>
            <Image
              style={styles.imageBig}
              source={require("../assets/ic_200x200.png")}
            />
            <View style={styles.memberships} />
          </View>
          <View style={styles.listContentBrand}>
            <FlatList
              style={styles.listSecond}
              renderItem={({ item, separators }) => {
                return (
                  <View style={styles.rect5}>
                    <Text style={styles.text}>List Item</Text>
                  </View>
                );
              }}
              ListHeaderComponent={({ highlighted }) => {
                return (
                  <View style={styles.rect6}>
                    <Text style={styles.text2}>List Header</Text>
                  </View>
                );
              }}
              ListFooterComponent={({ highlighted }) => {
                return (
                  <View style={styles.rect7}>
                    <Text style={styles.text3}>List Footer</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={({}) => {
                return <View style={styles.rect8} />;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  displayContent() {
    const level = this.props.navigation.getParam("level", "1"); //1 = List brands, 2 = Select brand(Items, facebook, phone, web...), 3 = Content brand, 4 = Final content.
    console.log("level: ", level);
    if (level == 1) {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
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
      );
    } else if (level == 2) {
    } else if (level == 3) {
    } else if (level == 4) {
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
    bottom: 0,
    justifyContent: "space-around"
  },
  list: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  fav: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    width: "40%",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },

  rect8: {
    left: 15,
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
  imageBig: {
    height: "70%",
    borderRadius: 6,
    margin: 5,
    alignSelf: "stretch",
    marginLeft: 20,
    marginRight: 20
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
    color: "#000000"
  },
  text2: {
    width: 237,
    height: 16,
    fontSize: 13,
    fontWeight: "bold",
    color: "#999999"
  },
  brandPrincipal: {
    height: "40%",

    alignSelf: "stretch",

    alignItems: "center",
    justifyContent: "center"
  },
  listContentBrand: {
    height: "60%",

    alignSelf: "stretch"
  },
  contentItems: {
    height: "15%",

    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 0,
    marginLeft: 19,
    marginRight: 19
  },
  otherItems: {
    width: "60%",

    alignSelf: "stretch",
    flexDirection: "row"
  },
  email: {
    width: 35,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  phone: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  web: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  facebook: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  twitter: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  youtube: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  instagram: {
    width: 39,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  heart: {
    width: 25,
    height: 23,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  memberships: {
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 19,
    marginRight: 19
  },
  listSecond: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect5: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  rect6: {
    backgroundColor: "#ffffff",
    padding: 15
  },
  rect7: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomColor: "#999999",
    borderBottomWidth: 1
  },
  text3: {
    fontSize: 14,
    color: "#999999"
  }
});
