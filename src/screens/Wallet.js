import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSingleLogo from "../symbols/HeaderSingleLogo";

import HeaderBack from "../symbols/HeaderBack";
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

export default class Wallet extends Component {
  render() {
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
          <View style={styles.viewCoupon}>
            <HeaderBack
              style={styles.headerBack}
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </View>
    );
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
                        style={styles.image}
                        source={require("../assets/Wallet/ic_ventas.png")}
                      />
                      <Text style={styles.text2}>{item.key}</Text>
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
    width: 376,
    height: 726
  },
  list: {
    alignSelf: "stretch",
    flex: 1
  },
  viewCoupon: {
    backgroundColor: "rgba(29,41,53,1)",
    opacity: 1,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "stretch",
    flex: 1
  },
  buttonsStyle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0
  },
  image: {
    width: 35,
    height: 35,
    margin: 0,
    marginRight: 8,
    borderRadius: 6
  },
  text2: {
    color: "rgba(255,255,255,1)"
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
    top: 0,
    left: 0,
    width: 376,
    height: 54,
    position: "absolute"
  }
});
