import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSingleLogo from "../symbols/HeaderSingleLogo";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import GenericButton from "../symbols/GenericButton";
import Icon from "@builderx/icons";

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          <View style={styles.content}>
            <HeaderSingleLogo style={styles.headerSingleLogo} />
            <Text style={styles.title}>Productos en el carrito</Text>
            <Text style={styles.textDescription}>
              Desliza el producto hacia la derecha para: borrar el producto
              editar la cantidad del pedido o aplicar algún cupon disponible en
              tu cartera.
            </Text>
            <FlatList
              style={styles.list}
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
                        source={require("../assets/ic_200x200.png")}
                        style={styles.image}
                      />
                      <Icon
                        name="ios-arrow-forward"
                        style={styles.icon}
                        type="Ionicons"
                      />
                      <View style={styles.rect9}>
                        <Text style={styles.textKey}>{item.key}</Text>
                        <Text style={styles.textSub}>$ {item.sub} MXN</Text>
                        <View style={styles.contentPieces}>
                          <Text style={styles.textPieces}>
                            x {item.pieces} Pieza
                          </Text>
                          <Text style={styles.textTotal}>
                            $ {item.total} MXN
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
              ItemSeparatorComponent={({}) => {
                return <View style={styles.rect4} />;
              }}
            />
            <View style={styles.contentProducts}>
              <View style={styles.contentOne}>
                <Text style={styles.textSubtotal}>Subtotal</Text>
                <Text style={styles.textSubtotalT}>$ 20,000.00 MXN</Text>
              </View>
              <View style={styles.contentTwo}>
                <Text style={styles.textIva}>IVA</Text>
                <Text style={styles.textIvaT}>$ 3,000.00 MXN</Text>
              </View>
              <View style={styles.contentThree}>
                <Text style={styles.textTotals}>Totald</Text>
                <Text style={styles.textTotalT}>$ 23,000.00 MXN</Text>
              </View>
              <GenericButton
                style={styles.addCodesBtn}
                navigation={this.props.navigation}
                text="Agregar codigos"
              />
              <GenericButton
                style={styles.paymentBtn}
                navigation={this.props.navigation}
                text="Forma de pago"
              />
            </View>
          </View>
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
    backgroundColor: "rgba(29,41,53,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },

  layoutStatusBar: {
    width: 376,
    height: 32
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  title: {
    width: 172,
    height: 17,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    alignSelf: "center",
    margin: 15
  },
  textDescription: {
    width: 350.5,
    height: 49,
    backgroundColor: "transparent",
    color: "rgba(241,241,241,1)",
    fontSize: 14,

    textAlign: "left",
    margin: 0,
    alignSelf: "center"
  },
  headerSingleLogo: {
    width: 374,
    height: 53
  },
  contentProducts: {
    alignSelf: "stretch",
    flex: 0.53,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch",
    flex: 0.47
  },
  rect: {
    backgroundColor: "rgba(29,41,53,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  text2: {
    color: "#000000"
  },
  rect4: {
    left: 15,
    height: 2,
    backgroundColor: "#999999"
  },
  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    height: 76
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
    width: 59,
    height: 60,
    borderRadius: 6,
    margin: 5
  },
  rect9: {
    height: 56,
    width: 237,
    top: 10,
    left: 80,
    position: "absolute",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  textSub: {
    width: 237,
    height: 17,
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  textKey: {
    width: 237,
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)"
  },
  contentPieces: {
    width: 237,
    height: 17,
    flexDirection: "row"
  },
  textPieces: {
    width: "50%",
    height: 14,
    backgroundColor: "transparent",
    color: "rgba(241,241,241,1)"
  },
  textTotal: {
    width: "50%",
    height: 14,
    backgroundColor: "transparent",
    fontSize: 14,
    color: "rgba(255,252,252,1)",
    textAlign: "right"
  },
  contentOne: {
    width: 374,
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  contentTwo: {
    width: 374,
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  contentThree: {
    width: 374,
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  textSubtotal: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  },
  addCodesBtn: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    alignSelf: "center",
    margin: 8
  },
  paymentBtn: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    alignSelf: "center"
  },
  textTotalT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  },
  textIvaT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  },
  textSubtotalT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  },
  textTotals: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  },
  textIva: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right"
  }
});
