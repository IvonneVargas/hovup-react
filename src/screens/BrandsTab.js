import React, { Component } from "react";
import Colors from "../assets/colors";

import TabB from "../symbols/TabB";
import CatDown from "../symbols/CatDown";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderBack from "../symbols/HeaderBack";
import Icon from "@builderx/icons";

import GenericButton from "../symbols/GenericButton";
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
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

  showMembership() {
    var typeT = this.props.navigation.getParam("type", this.props.type);
    if (typeT == "Brand") {
      return (
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
      );
    } else {
      return (
        <View style={styles.containerStars}>
          <Icon
            style={styles.starBig}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starBig}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starBig}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starBig}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starBig}
            name="star"
            type="MaterialCommunityIcons"
          />
        </View>
      );
    }
  }

  showBarIcon() {
    var typeT = this.props.navigation.getParam("type", this.props.type);
    console.log("2type: ", typeT);
    if (typeT == "Brand") {
      return (
        <View style={styles.otherItems}>
          <Icon
            style={styles.email}
            name="email-outline"
            type="MaterialCommunityIcons"
          />
          <Icon style={styles.phone} name="phone" type="SimpleLineIcons" />
          <Icon style={styles.web} name="earth" type="MaterialCommunityIcons" />
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
      );
    }
  }

  showStar() {
    console.log("1type: ", this.props.type);
    if (this.props.type == "Store") {
      return (
        <View style={styles.containerStars}>
          <Icon
            style={styles.starSmall}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starSmall}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starSmall}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starSmall}
            name="star"
            type="MaterialCommunityIcons"
          />
          <Icon
            style={styles.starSmall}
            name="star"
            type="MaterialCommunityIcons"
          />
        </View>
      );
    }
  }

  displayContent() {
    const level = this.props.navigation.getParam("level", "1"); //1 = List brands, 2 = Select brand(Items, facebook, phone, web...), 3 = Content brand, 4 = Final content.
    const type = this.props.type;
    console.log("ddtype: ", type);
    console.log("level: ", level);
    //main content
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
                  <TouchableOpacity
                    style={styles.buttonsStyle}
                    onPress={() => {
                      console.log("Click,", item.level);
                      this.props.navigation.push("BrandsTab", {
                        level: item.level,
                        type: this.props.type
                      });
                    }}
                  >
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
                      {this.showStar()}
                    </View>
                  </TouchableOpacity>
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
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <HeaderBack
            style={styles.headerBack}
            navigation={this.props.navigation}
          />
          <View style={styles.brandPrincipal}>
            <View style={styles.contentItems}>
              {this.showBarIcon()}
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
            {this.showMembership()}
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
                    <TouchableOpacity
                      style={styles.buttonsStyle}
                      onPress={() => {
                        console.log("Click,", item.level);
                        this.props.navigation.push("BrandsTab", {
                          level: item.level
                        });
                      }}
                    >
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
                    </TouchableOpacity>
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
      return (
        <View style={styles.rectTree}>
          <LayoutStatusBar style={styles.layoutStatusBarT} />
          <HeaderBack
            style={styles.headerBackT}
            navigation={this.props.navigation}
          />
          <View style={styles.toplayer}>
            <View style={styles.topfav}>
              <Icon
                style={styles.topfavlayers}
                name="heart-outline"
                type="MaterialCommunityIcons"
              />
            </View>
            <View style={styles.topleftlayer}>
              <Image
                style={styles.imagetop}
                source={require("../assets/ic_60x60.png")}
              />
            </View>
            <View style={styles.toprigthlayer}>
              <Text style={styles.titlelayertop}>Titulo</Text>
              <Text style={styles.subtitletoplayer}>Text Added</Text>
            </View>
          </View>
          <View style={styles.bottomlatyer}>
            <FlatList
              style={styles.listSecond}
              data={[
                {
                  key: "Titulo",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo2",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo3",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo4",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo5",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo6",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo7",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo8",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo9",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo10",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo11",
                  sub: "Descripcion",
                  level: 4
                },
                {
                  key: "Titulo12",
                  sub: "Descripcion",
                  level: 4
                }
              ]}
              renderItem={({ item, separators }) => {
                return (
                  <View style={styles.rect10}>
                    <TouchableOpacity
                      style={styles.buttonsStyle}
                      onPress={() => {
                        console.log("Click,", item.level);
                        this.props.navigation.push("BrandsTab", {
                          level: item.level
                        });
                      }}
                    >
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
                    </TouchableOpacity>
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
    } else if (level == 4) {
      //content final
      return (
        <View style={styles.layerfour}>
          <LayoutStatusBar style={styles.layoutStatusBarFour} />
          <HeaderBack
            style={styles.headerBackFour}
            navigation={this.props.navigation}
          />
          <View style={styles.layerfavsfour}>
            <Icon
              style={styles.favsfour}
              name="heart-outline"
              type="MaterialCommunityIcons"
            />
          </View>
          <View style={styles.fourlayerbottom}>
            <Image
              style={styles.imagefour}
              source={require("../assets/ic_60x60.png")}
            />
            <Text style={styles.texttittlefour}>Titulo</Text>
            <Text style={styles.lowPrice}>$100.00</Text>
            <Text style={styles.discountLayer}>-50%</Text>
            <Text style={styles.textItemPrice}>$200.00</Text>
            <Text style={styles.descriptionLayer}>
              Descripción del producto agregado desde la tienda la cual fue que
              se de hovup.
            </Text>
            <View style={styles.containerItems}>
              <View style={styles.viewItem}>
                <Image
                  style={styles.imageItem}
                  source={require("../assets/Stores/ic_no_instalacion.png")}
                />
                <Text style={styles.textItem}>
                  No requiere{"\n"}instalacion
                </Text>
              </View>
              <View style={styles.viewItem}>
                <Image
                  style={styles.imageItem}
                  source={require("../assets/Stores/ic_no_informacion.png")}
                />
                <Text style={styles.textItem}>Más{"\n"}información</Text>
              </View>
              <View style={styles.viewItem}>
                <Image
                  style={styles.imageItem}
                  source={require("../assets/Stores/ic_no_video.png")}
                />
                <Text style={styles.textItem}>Ver{"\n"}video</Text>
              </View>
              <View style={styles.viewItem}>
                <Image
                  style={styles.imageItem}
                  source={require("../assets/Stores/ic_entrega.png")}
                />
                <Text style={styles.textItem}>Incluye{"\n"}entrega</Text>
              </View>
            </View>
            <GenericButton
              style={styles.genericButton}
              navigation={this.props.navigation}
              text="Anadir a carrito"
            />
          </View>
        </View>
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
    margin: 0,
    alignSelf: "stretch",
    marginRight: 0
  },

  icon: {
    top: Platform.OS === "android" ? 18 : 21.67,
    left: Platform.OS === "android" ? 329 : 344,
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
    height: 41,
    width: 220,
    top: 10,
    left: 104,
    position: "absolute",
    justifyContent: "space-between"
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
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  text2: {
    width: 237,
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)"
  },
  brandPrincipal: {
    height: "30%",

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
  starSmall: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    color: "rgba(255,178,51,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  starBig: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    color: "rgba(255,178,51,1)",
    fontSize: 35,
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
    opacity: 1,
    width: Platform.OS === "android" ? 360 : undefined
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
    justifyContent: "flex-start"
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
  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0
  },
  headerBack: {
    height: "7%",
    alignSelf: "stretch"
  },
  layoutStatusBar: {
    height: "3%",
    alignSelf: "stretch"
  },
  rectTree: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  layoutStatusBarT: {
    height: 33,
    alignSelf: "stretch"
  },
  headerBackT: {
    height: 55,
    alignSelf: "stretch"
  },
  toplayer: {
    top: 88,
    left: 0,
    height: "24.98%",
    position: "absolute",
    right: 0
  },
  bottomlatyer: {
    top: 290,
    left: 0,
    position: "absolute",
    right: 0,
    height: "64.46%"
  },
  topfav: {
    height: "14.3%",

    justifyContent: "flex-end",
    flexDirection: "row"
  },
  topfavlayers: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginRight: 3,
    marginTop: 3
  },
  topleftlayer: {
    width: "50%",
    height: "84.80392156862744%",
    justifyContent: "center",
    alignItems: "center"
  },
  toprigthlayer: {
    top: 30,
    left: 189,
    width: "49.33%",
    height: "84.8%",
    position: "absolute",
    justifyContent: "center"
  },
  imagetop: {
    width: 140,
    height: 140,
    borderRadius: 7
  },
  titlelayertop: {
    height: 23,
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  subtitletoplayer: {
    height: 16,
    backgroundColor: "transparent",
    fontSize: 14,
    alignSelf: "stretch",
    color: "rgba(255,255,255,1)"
  },
  lalalal: {
    top: 33,
    left: 158,
    width: 74,
    height: 13,
    position: "absolute",
    backgroundColor: "transparent"
  },
  layerfour: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  layoutStatusBarFour: {
    height: "3.9408866995073892%",
    alignSelf: "stretch"
  },
  headerBackFour: {
    height: "6.65024630541872%",
    alignSelf: "stretch"
  },
  layerfavsfour: {
    height: "4.1871921182266005%",

    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  favsfour: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginRight: 5,
    marginTop: 5
  },
  fourlayerbottom: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    height: 612.11
  },
  imagefour: {
    width: 200,
    height: 200
  },

  texttittlefour: {
    height: 24,
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginTop: 15
  },

  subtitlefourlayer: {
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginTop: 13
  },
  lowPrice: {
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(153,153,153,1)",
    alignSelf: "center",
    textDecorationLine: "line-through",
    marginTop: 13
  },
  discountLayer: {
    height: 16,
    backgroundColor: "rgba(101,188,70,1)",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginTop: 13
  },
  descriptionLayer: {
    backgroundColor: "transparent",
    fontSize: 17,
    color: "rgba(255,255,255,1)",

    marginTop: 15,
    height: 79.5,
    width: 305
  },
  containerStars: {
    width: "60%",
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerItems: {
    alignSelf: "center",
    flexDirection: "row",
    height: 86.5,
    justifyContent: "space-between",
    width: "80%"
  },

  textItemPrice: {
    height: 24,
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginTop: 15
  },
  rect: { alignSelf: "flex-start", flexDirection: "column" },

  rect2: {
    alignSelf: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },

  rect: {
    alignSelf: "stretch",
    flexDirection: "column",
    flex: 1
  },
  viewItem: {
    backgroundColor: "transparent",
    flexDirection: "column",
    flex: 1
  },
  rect: {
    width: 99,
    height: 100,
    backgroundColor: "rgb(230,230,230)",
    display: "none"
  },
  rect2: {
    width: 99,
    height: 100,
    backgroundColor: "rgb(230,230,230)",
    display: "none"
  },
  rect3: {
    width: 99,
    height: 100,
    backgroundColor: "rgb(230,230,230)",
    display: "none"
  },
  imageItem: {
    height: 50,
    width: 50,
    alignSelf: "center"
  },
  textItem: {
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  genericButton: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    marginTop: 28
  }
});
