import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSingleLogo from "../symbols/HeaderSingleLogo";

import TabViewButton from "../symbols/TabViewButton";
import Icon from "@builderx/icons";

import Subtitle from "../symbols/Subtitle";
import HeaderBack from "../symbols/HeaderBack";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Platform,
  ActionSheetIOS,
  Image,
  Text
} from "react-native";

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      active: 1,
      datalist: [
        {
          key: "Bonificacion",
          sub: "Descripcion",
          icon: require("../assets/Wallet/ic_ventas.png"),
          type: "coupon"
        }
      ],
      clicked: "none"
    };
  }
  render() {
    //const active = this.props.navigation.getParam("active", 1);
    console.log("active; ", this.state.active);
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          animated={true}
          showHideTransition="fade"
        />
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          {this.displayContent()}
        </View>
      </View>
    );
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Remove"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        tintColor: "green"
      },
      buttonIndex => {
        if (buttonIndex === 1) {
        }
      }
    );
  }

  dataShow() {
    if (this.state.active == 1) {
    }
  }

  displayContent() {
    const typeT = this.props.navigation.getParam("type", "main");
    console.log("type wallet: " + typeT);
    if (typeT == "main") {
      return (
        <View style={styles.rect5}>
          <HeaderSingleLogo style={styles.headerSingleLogo} />
          <View style={styles.content}>
            <FlatList
              style={styles.list}
              data={[
                {
                  key: "Cupones/Promociones",
                  sub: "Descripcion",
                  icon: require("../assets/Wallet/ic_ventas.png"),
                  type: "coupon"
                },
                {
                  key: "Compras hechas",
                  sub: "Descripcion",
                  icon: require("../assets/Wallet/ic_ventas.png"),
                  type: "buy"
                },
                {
                  key: "Ventas Realizadas",
                  icon: require("../assets/Wallet/ic_ventas.png"),
                  sub: "Descripcion",
                  type: "sales"
                }
              ]}
              renderItem={({ item, separators }) => {
                return (
                  <View style={styles.rect}>
                    <TouchableOpacity
                      style={styles.buttonsStyle}
                      onPress={() => {
                        this.props.navigation.push("Wallet", {
                          type: item.type
                        });
                      }}
                    >
                      <Image
                        style={styles.imagelist}
                        source={require("../assets/Wallet/ic_ventas.png")}
                      />
                      <Text style={styles.textlist}>{item.key}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              ItemSeparatorComponent={({}) => {
                return <View style={styles.rect4} />;
              }}
            />
          </View>
        </View>
      );
    } else if (typeT == "coupon") {
      return (
        <View style={styles.viewCoupon}>
          <HeaderBack
            style={styles.headerBack}
            navigation={this.props.navigation}
          />
          <Text style={styles.textCoupons}>Cupones</Text>
          <TabViewButton
            style={styles.tabViewButton}
            text="Bonificacion"
            text2="Beneficio"
            text3="Descuento"
            active={this.state.active}
            button={() => {
              this.setState({
                active: 1,
                datalist: [
                  {
                    key: "Bonificacion",
                    sub: "Descripcion",
                    icon: require("../assets/Wallet/ic_ventas.png"),
                    type: "coupon"
                  }
                ]
              });
            }}
            button2={() => {
              this.setState({
                active: 2,
                datalist: [
                  {
                    key: "Beneficio",
                    sub: "Descripcion",
                    icon: require("../assets/Wallet/ic_ventas.png"),
                    type: "coupon"
                  }
                ]
              });
            }}
            button3={() => {
              this.setState({
                active: 3,
                datalist: [
                  {
                    key: "Descuento",
                    sub: "Descripcion",
                    icon: require("../assets/Wallet/ic_ventas.png"),
                    type: "coupon"
                  }
                ]
              });
            }}
          />
          <View style={styles.content}>
            <Text style={styles.text2}>{this.state.active}</Text>
            <FlatList
              style={styles.list}
              data={this.state.datalist}
              renderItem={({ item, separators }) => {
                return (
                  <View style={styles.rect}>
                    <TouchableOpacity
                      style={styles.buttonsStyle}
                      onPress={() => {
                        console.log("1Click,", item.level);
                        this.props.navigation.push("BrandsTab", {
                          level: item.level,
                          type: this.props.type
                        });
                      }}
                    >
                      <Image
                        source={require("../assets/ic_60x60.png")}
                        style={styles.imageS}
                      />
                      <Icon
                        name="ios-arrow-forward"
                        style={styles.icon}
                        type="Ionicons"
                      />
                      <View style={styles.rect9}>
                        <Text style={styles.text6}>{item.key}</Text>
                        <Text style={styles.text7}>{item.sub}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
              ItemSeparatorComponent={({}) => {
                return <View style={styles.rect4} />;
              }}
            />
          </View>
        </View>
      );
    } else if (typeT == "buy") {
      return (
        <View style={styles.content}>
          <HeaderBack
            style={styles.headerBack}
            navigation={this.props.navigation}
          />
          <Text style={styles.text2}>Compras</Text>
          <View style={styles.viewProd}>
            <Subtitle style={styles.subtitle2} />
            <Subtitle
              style={styles.subtitle}
              text="Total de articulos comprados"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.showActionSheet}
          >
            <Text style={styles.month}>Junio</Text>
            <Text style={styles.year}>2019</Text>
          </TouchableOpacity>
          <View style={styles.contentBuy}>
            <View style={styles.contentNotBuy}>
              <Image
                style={styles.image}
                source={require("../assets/ic_gracias_compra.png")}
              />
              <Text style={styles.text}>
                Por el momento no tienes ninguna compra, cuando realices alguna
                en esta seccion podras ver el resumen de cada una de ellas.
              </Text>
            </View>
          </View>
        </View>
      );
    } else if ("sales") {
      return (
        <View style={styles.contentSales}>
          <HeaderBack
            style={styles.headerBackSales}
            navigation={this.props.navigation}
          />
          <View style={styles.contentSalesInto}>
            <Image
              style={styles.imageSales}
              source={require("../assets/ic_gracias_compra.png")}
            />
            <Text style={styles.textSales}>
              Esta seccion te mostrara las ventas que realices utilizando Hovup.
              Contrata el Plan Platino para disfrutar de esta y mas funciones.
            </Text>
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
    backgroundColor: "rgba(29,41,53,1)",
    right: 0,
    bottom: 0,
    opacity: 1,
    flexDirection: "column"
  },
  layoutStatusBar: {
    height: 34,
    alignSelf: "stretch"
  },
  statusBar: {},
  rect5: {
    alignSelf: "stretch",
    flex: 1
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  list: {
    alignSelf: "stretch",
    flex: 1,
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  viewCoupon: {
    padding: 0,

    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  text3: {
    width: 257.91,
    height: 20,
    backgroundColor: "transparent",
    fontSize: 20,
    color: "rgba(253,253,253,1)",
    padding: 0,
    textAlign: "left",
    margin: 0,
    alignSelf: "center"
  },
  buttonsStyle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0
  },
  image: {
    width: 100,
    height: 100,
    margin: 0,
    marginRight: 8,
    borderRadius: 6,
    marginTop: 80
  },
  imagelist: {
    width: 35,
    height: 35,
    borderRadius: 6,
    margin: 0,
    marginRight: 8
  },
  rect4: {
    left: 15,
    height: 2,
    backgroundColor: "#999999"
  },
  headerSingleLogo: {
    height: 52,
    alignSelf: "stretch"
  },
  headerBack: {
    height: 55,
    alignSelf: "stretch"
  },

  tabViewButton: {
    height: 70,
    alignSelf: "stretch"
  },
  text2: {
    width: 77,
    height: 23,
    backgroundColor: "transparent",

    fontSize: 20,
    color: "rgba(255,252,252,1)",
    alignSelf: "center",
    padding: 0,
    margin: 13
  },
  textlist: {
    color: "rgba(255,255,255,1)",
    margin: 0
  },
  rect: {
    backgroundColor: "rgba(29,41,53,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  text3: {
    color: "rgba(255,255,255,1)"
  },
  imageS: {
    width: 60,
    height: 60,
    borderRadius: 6,
    margin: 5
  },
  icon: {
    top: Platform.OS === "android" ? 18 : 21.67,
    left: Platform.OS === "android" ? 329 : 344,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0
  },
  text4: {
    width: 253.41,
    height: 31,
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(253,253,253,1)",
    padding: 0,
    textAlign: "left",
    margin: 18,
    alignSelf: "center"
  },
  text6: {
    width: 237,
    height: 17,
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  text7: {
    width: 237,
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)"
  },
  viewProd: {
    width: 333.27,
    height: 78,
    margin: 0,
    flexDirection: "column",
    backgroundColor: "rgba(75,86,92,1)",
    opacity: 1,
    justifyContent: "space-around",
    alignSelf: "center"
  },

  bVuzlZ: {
    top: 110.02,
    left: 217.32,
    position: "absolute",
    height: 17,
    width: 13
  },
  subtitle2: {
    height: 17,
    alignSelf: "center"
  },
  subtitle: {
    height: 17,
    alignSelf: "center"
  },
  contentBuy: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  contentNotBuy: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    width: 321,
    height: 70.9,
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    textAlign: "center",
    fontSize: 16,
    color: "rgba(255,255,255,1)"
  },
  textCoupons: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  icon: {
    top: 263.44,
    left: 78.76,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  },
  button: {
    height: 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    padding: 0,
    margin: 0,
    marginBottom: 13,
    marginTop: 10,
    alignSelf: "stretch",
    borderWidth: 0,
    borderColor: "green",
    borderBottomColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1,
    borderTopColor: "rgba(155,155,155,1)",
    borderTopWidth: 1
  },
  month: {
    width: 75,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    margin: 0
  },
  year: {
    width: 45,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(228,228,228,1)",
    textAlign: "center",
    margin: 0
  },
  contentSales: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerBackSales: {
    width: 376,
    height: 55
  },
  contentSalesInto: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  imageSales: {
    width: 70,
    height: 69
  },
  textSales: {
    width: 352,
    height: 70.9,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    padding: 0,
    margin: 25
  }
});
