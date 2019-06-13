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
  Image,
  TextInput
} from "react-native";
import GenericButton from "../symbols/GenericButton";
import TitleFive from "../symbols/TitleFive";

import HeaderBack from "../symbols/HeaderBack";
import Icon from "@builderx/icons";

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: ""
    };
  }
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
                  key: "Producto",
                  sub: "10.00",
                  pieces: 2
                },
                {
                  key: "Producto2",
                  sub: "30.00",
                  pieces: 2
                },
                {
                  key: "Producto3",
                  sub: "20.00",
                  pieces: 3
                },
                {
                  key: "Producto4",
                  sub: "40.00",
                  pieces: 5
                },
                {
                  key: "Producto5",
                  sub: "50.00",
                  pieces: 6
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
                        <Text style={styles.textReferenceC}>
                          - 10 % #FB10-2018
                        </Text>
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
          <View style={styles.contentCodes}>
            <HeaderBack
              style={styles.headerBack}
              navigation={this.props.navigation}
            />
            <TitleFive style={styles.titleFive} text2="Codigos promocionales" />
            <Text
              style={styles.description}
              selectionColor="rgba(255,255,255,1)"
            >
              Por favor ingresa los codigos promocionales que deseas usar para
              tu compra, recuerda que solo se aplica a los productos validos
              para cada codigo.
            </Text>
            <View style={styles.contentInputs}>
              <TextInput
                style={styles.textInput}
                placeholder="Codigo promocional"
              />
              <Icon
                style={styles.icon2}
                name="plus-circle-outline"
                type="MaterialCommunityIcons"
              />
            </View>
            <View style={styles.contentDetailCoupon}>
              <FlatList
                style={styles.listReferenceCoupons}
                data={[
                  {
                    key: "123",
                    name: "#3D15",
                    percentage: "15"
                  },
                  {
                    key: "456",
                    name: "#FB10-2018",
                    percentage: "10"
                  },
                  {
                    key: "789",
                    name: "#PRUEBA",
                    percentage: "50"
                  }
                ]}
                renderItem={({ item, separators }) => {
                  return (
                    <View style={styles.rect10}>
                      <TouchableOpacity
                        style={styles.contentListReferenceItem}
                        onPress={() => {
                          console.log("CLICK ITEM KEY,", item.key);
                          this.setState({
                            selectedItem: item.key
                          });
                        }}
                      >
                        <Text style={styles.textHash}>{item.name}</Text>
                        <Text style={styles.textDiscountPercentage}>
                          {item.percentage}
                        </Text>
                      </TouchableOpacity>
                      {this.showSelected(item.key)}
                    </View>
                  );
                }}
                ItemSeparatorComponent={({}) => {
                  return <View style={styles.rect13} />;
                }}
              />
            </View>
            <GenericButton
              style={styles.genericButton}
              navigation={this.props.navigation}
              text="Buscar promociones"
            />
          </View>
        </View>
      </View>
    );
  }

  showSelected(key) {
    if (key == this.state.selectedItem) {
      return (
        <Icon name="check" style={styles.icon3} type="MaterialCommunityIcons" />
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
    height: 32,
    alignSelf: "stretch"
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
    height: 53,
    alignSelf: "stretch"
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

  rect4: {
    left: 15,
    height: 2,
    backgroundColor: "#999999"
  },
  buttonsStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 0,
    height: 80
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
    height: 70,
    width: 237,
    top: 3,
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
  },
  contentCodes: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    display: "none"
  },
  titleFive: {
    width: 359,
    height: 16,
    margin: 15,
    alignSelf: "center"
  },

  headerBack: {
    height: 54,
    alignSelf: "stretch"
  },
  contentInputs: {
    height: 143.86,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  genericButton: {
    width: 265,
    height: 42,
    alignSelf: "center",
    backgroundColor: "rgba(126,211,33,1)",
    opacity: 1,
    margin: 13
  },
  textInput: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  icon2: {
    width: 41,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)",
    fontSize: 40,
    alignSelf: "center",
    margin: 5
  },
  description: {
    width: 330.97,
    height: 71.57,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    alignSelf: "center"
  },
  contentDetailCoupon: {
    height: 148.56,
    alignSelf: "stretch",
    display: "none"
  },
  listReferenceCoupons: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect10: {
    backgroundColor: "rgba(29,41,53,1)",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1,
    height: 50
  },
  rect13: {
    left: 15,
    height: 2,
    backgroundColor: "#999999",
    alignSelf: "stretch"
  },
  contentListReferenceItem: {
    height: 36,
    top: 9,
    left: 0,
    position: "absolute",
    right: 29.72,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  textHash: {
    width: 312,
    height: 15,
    fontSize: 16,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  textDiscountPercentage: {
    width: 312.38,
    height: 17,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    margin: 0,
    padding: 0,
    alignSelf: "center"
  },
  icon3: {
    top: 12.24,
    left: 343,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)",
    fontSize: 23
  },
  textReferenceC: {
    width: 237,
    height: 14,
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  }
});
