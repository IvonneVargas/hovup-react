import React, { Component } from "react";
import Colors from "../assets/colors";

import Icon from "@builderx/icons";
import TabB from "../symbols/TabB";
import CatDown from "../symbols/CatDown";
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
        {this.displayContent()}
      </View>
    );
  }
  displayContent() {
    const level = this.props.navigation.getParam("level", "2"); //1 = List brands, 2 = Select brand(Items, facebook, phone, web...), 3 = Content brand, 4 = Final content.
    console.log("level: ", level);
    if (level == 1) {
      return (
        <View style={styles.all}>
          <View style={styles.rect2} navigation={this.props.navigation}>
            <View style={styles.rect}>
              <TabB style={styles.tabB} text="Publico" />
              <TabB style={styles.tabB3} text="VIP" />
              <TabB style={styles.tabB2} text="Privado" />
            </View>
            <View style={styles.rect3}>
              <CatDown
                style={styles.catDown}
                navigation={this.props.navigation}
              />
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list2}
            data={[
              {
                key: "Titulo",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo2",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo3",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo4",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo5",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo6",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo7",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo8",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo9",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo10",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo11",
                sub: "Descripcion",
                level: 2
              },
              {
                key: "Titulo12",
                sub: "Descripcion",
                level: 2
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
      );
    } else if (level == 2) {
      return (
        <View style={styles.rect4}>
          <View style={styles.brandPrincipal}>
            <View style={styles.contentItems}>
              <View style={styles.otherItems}>
                <Icon
                  style={styles.email}
                  name="email-outline"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.phone}
                  name="phone"
                  type="SimpleLineIcons"
                />
                <Icon
                  style={styles.web}
                  name="earth"
                  type="MaterialCommunityIcons"
                />
                <Icon
                  style={styles.facebook}
                  name="social-facebook"
                  type="SimpleLineIcons"
                />
                <Icon
                  style={styles.twitter}
                  name="social-twitter"
                  type="SimpleLineIcons"
                />
                <Icon
                  style={styles.youtube}
                  name="social-youtube"
                  type="SimpleLineIcons"
                />
                <Icon
                  style={styles.instagram}
                  name="social-instagram"
                  type="SimpleLineIcons"
                />
              </View>
              <View style={styles.fav}>
                <Icon
                  style={styles.heart}
                  name="heart-outline"
                  type="MaterialCommunityIcons"
                />
              </View>
            </View>
            <Image
              style={styles.imageBig}
              source={require("../assets/ic_200x200.png")}
            />
            <View style={styles.memberships}>
              <Text style={styles.whatismembership}>Que es la membresia?</Text>
              <Text style={styles.requestmembership}>
                ¡Solicita tu membresia para recibir beneficios!
              </Text>
              <Icon
                style={styles.iconmembership}
                name="bookmark-remove"
                type="MaterialCommunityIcons"
              />
            </View>
          </View>
          <View style={styles.listContentBrand}>
            <FlatList
              style={styles.listSecond}
              data={[
              {
                key: "Titulo",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo2",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo3",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo4",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo5",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo6",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo7",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo8",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo9",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo10",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo11",
                sub: "Descripcion",
                level: 3
              },
              {
                key: "Titulo12",
                sub: "Descripcion",
                level: 3
              }
            ]}
              renderItem={({ item, separators }) => {
                return (
                  <View style={styles.rect10}>
                    <Image
                      source={require("../assets/ic_60x60.png")}
                      style={styles.image2}
                    />
                    <Icon
                      name="ios-arrow-forward"
                      style={styles.icon}
                      type="Ionicons"
                    />
                    <View style={styles.rect11}>
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

  rect4: {
    top: 0,
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
  list2: {
    left: 0,
    right: 0,
    top: 84,
    bottom: 0,
    height: 728,
    alignSelf: "stretch"
  },
  fav: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    width: "40%",
    alignSelf: "stretch",
    justifyContent: "flex-end"
  },

  rect8: {
    left: 15,
    height: 2,
    backgroundColor: "#999999",
    margin: 0
  },

  icon: {
    top: Platform.OS === "android" ? 13.33 : 32.6,
    left: Platform.OS === "android" ? 330.67 : 352.42,
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
  image2: {
    width: 60,
    height: 60,
    borderRadius: 6,
    margin: 5
  },
  imageBig: {
    height: "65%",
    borderRadius: 6,
    margin: 5,
    alignSelf: "stretch",
    marginLeft: 20,
    marginRight: 20
  },
  rect9: {
    height: 40,
    width: 230,
    top: 21,
    left: 117,
    position: "absolute",
    justifyContent: "space-around"
  },
  rect11: {
    height: 39,
    width: 238,
    top: 22.45,
    left: 85.1,
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
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)"
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

    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  email: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  phone: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  web: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  facebook: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  twitter: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  youtube: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  instagram: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  heart: {
    width: 25,
    height: 23,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  memberships: {
    alignSelf: "stretch",
    marginLeft: 19,
    marginRight: 19,
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listSecond: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect5: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  rect10: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1,
    height: 84
  },
  whatismembership: {
    width: "22%",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    fontSize: 12,
    color: "rgba(243,243,243,1)"
  },
  requestmembership: {
    width: "50%",

    backgroundColor: "transparent",
    color: "rgba(101,188,70,1)",
    fontSize: 12,
    alignSelf: "stretch"
  },
  iconmembership: {
    width: 40,
    height: 40,
    backgroundColor: "transparent",
    color: "rgba(253,0,0,1)",
    fontSize: 40,
    alignSelf: "flex-start"
  },
  all: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect2: {
    top: 2,
    left: 0,
    width: 376,
    height: 80,
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
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
  }
});
