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
  TextInput,
  CameraRoll,
  Alert,
  ActionSheetIOS
} from "react-native";
import GenericButton from "../symbols/GenericButton";
import TitleFive from "../symbols/TitleFive";

import HeaderBack from "../symbols/HeaderBack";
import DescriptionFive from "../symbols/DescriptionFive";
import GenericButtonIcon from "../symbols/GenericButtonIcon";
import LineView from "../symbols/LineView";
import Icon from "@builderx/icons";

import Swipeout from "react-native-swipeout";

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: "",
      selectedImage: "",
      selectedCard: "",
      data: [
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
            ]
    };
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          {this.displayContent()}
        </View>
      </View>
    );
  }

  displayContent() {
    var type = this.props.navigation.getParam("type", "content");
    var typeUser = this.props.navigation.getParam(
      "typeUser",
      this.props.typeUser
    );
    console.log("TYPE CART: ", type);
    console.log("ADMIN?: ", this.props);
    console.log("typeUser?: ", this.props.typeUser);
    if (type == "content") {
      return (
        <View style={styles.content}>
          <HeaderSingleLogo style={styles.headerSingleLogo} />
          <Text style={styles.title}>Productos en el carrito</Text>
          <Text style={styles.textDescription}>
            Desliza el producto hacia la derecha para: borrar el producto editar
            la cantidad del pedido o aplicar algún cupon disponible en tu
            cartera.
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            data={this.state.data}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect}>
                  <Swipeout left={[
                                    {
                                        component: (
                                          <View style={styles.swipeoutSide}>
                                            <Icon
                                              style={styles.deleteIcon}
                                              name="trash"
                                              type="SimpleLineIcons"
                                              onPress={() => {
                                                this.deleteItemById(item.key);
                                              }}
                                            />
                                            <Text style={styles.textSwipeDes}>Eliminar</Text>
                                          </View>
                                        )
                                    },
                                    {
                                        component: (
                                          <View style={styles.swipeoutSide}>
                                            <Icon
                                              style={styles.editIcon}
                                              name="pencil"
                                              type="SimpleLineIcons"
                                              onPress={() => {
                                                console.log("Click Edit");
                                                this.props.navigation.push("Cart", {
                                                  type: "edit"
                                                });
                                              }}
                                            />
                                            <Text style={styles.textSwipeEdit}>Editar</Text>
                                          </View>
                                        )
                                    },
                                    {
                                        component: (
                                          <View style={styles.swipeoutSide}>
                                            <Icon
                                              style={styles.couponIcon}
                                              name="tag"
                                              type="SimpleLineIcons"
                                              onPress={() => {
                                                console.log("Click coupon");
                                                this.props.navigation.push("Cart", {
                                                  type: "coupon"
                                                });
                                              }}
                                            />
                                            <Text style={styles.textSwipeCupon}>Cupon</Text>
                                          </View>
                                        )
                                    }
                                  ]}
                                  backgroundColor="#1D2935"
                  >
                    <View style={styles.buttonsStyle}>
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
                          <Text style={styles.textTotal}>$ {item.sub} MXN</Text>
                        </View>
                      </View>
                    </View>
                  </Swipeout>
                </View>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect4} />;
            }}
          />
          {this.displayUserContent()}
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
            {this.showButtonsPayment()}
          </View>
        </View>
      );
    } else if (type == "contentCodes") {
      var detail = this.props.navigation.getParam("detail", this.props.detail);
      console.log("AAASH!: ", detail);
      return (
        <View style={styles.contentCodes}>
          <HeaderBack
            style={styles.headerBack}
            navigation={this.props.navigation}
          />
          <TitleFive style={styles.titleFive} text2="Codigos promocionales" />
          <Text style={styles.description} selectionColor="rgba(255,255,255,1)">
            Por favor ingresa los codigos promocionales que deseas usar para tu
            compra, recuerda que solo se aplica a los productos validos para
            cada codigo.
          </Text>
          {this.showDetailCoupon()}
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Buscar promociones"
            root={() => {
              if (detail == "false") {
                this.props.navigation.push("Cart", {
                  type: "content"
                });
              } else {
                this.props.navigation.push("Cart", {
                  type: "contentCodes",
                  detail: "false"
                });
              }
            }}
          />
        </View>
      );
    } else if (type == "contentPayment") {
      return (
        <View style={styles.contentClient}>
          <HeaderBack
            style={styles.headerBack2}
            navigation={this.props.navigation}
          />
          <TitleFive
            style={styles.titleFive3}
            text2="Informacion del cliente"
          />
          <DescriptionFive
            style={styles.descriptionFive}
            text2="Para continuar ingresa el email de tu cliente y enviarle su certificado de compra"
          />
          {this.showAdmin()}
        </View>
      );
    } else if (type == "success") {
      return (
        <View style={styles.contentSuccess}>
          <HeaderSingleLogo style={styles.headerSingleLogoSuccess} />
          <Image
            style={styles.imageSuccess}
            source={require("../assets/ic_gracias_compra.png")}
          />
          <DescriptionFive
            style={styles.descriptionFiveSuccess}
            text2="Gracias por su compra."
          />
        </View>
      );
    }
  }

  showAdmin() {
    var typeUser = this.props.navigation.getParam(
      "typeUser",
      this.props.typeUser
    );
    if (typeUser == "notAdmin") {
      return (
        <View style={styles.contentAdminClient}>
          <View
            style={styles.contentInputsClient}
            navigation={this.props.navigation}
          >
            <TextInput style={styles.textInput2} placeholder="Email*" />
            <TextInput style={styles.textInput3} placeholder="ID Externo" />
            <GenericButtonIcon
              style={styles.takePhotoBtn}
              text="Tomar foto"
              iconType="MaterialCommunityIcons"
              iconName="check"
              root={() => {
                this.props.navigation.push("Cart", {
                  type: "contentPayment"
                });
              }}
            />
          </View>
          <TitleFive style={styles.titleFive4} text2="Forma de pago" />
          <DescriptionFive
            style={styles.descriptionFive2}
            text2="Por favor selecciona la forma de pago."
          />
          <GenericButtonIcon
            style={styles.paymentClientSelectBtn}
            text="Forma de pago"
            iconType="MaterialCommunityIcons"
            iconName="check"
            navigation={this.props.navigation}
            root={() => {
              this.props.navigation.push("Cart", {
                type: "contentPayment"
              });
            }}
          />
          <GenericButton
            style={styles.resumeBtn}
            navigation={this.props.navigation}
            text="Resumen"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "contentPayment"
              });
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.contentNotAdminClient}>
          <FlatList
            style={styles.listCard}
            data={[
              {
                key: "123",
                name: "XXXXXXXXXXXXXXX123",
                date: "15/12/20"
              },
              {
                key: "456",
                name: "XXXXXXXXXXXXXXX124",
                date: "10/12/20"
              },
              {
                key: "789",
                name: "XXXXXXXXXXXXXXX125",
                date: "12/12/20"
              }
            ]}
            renderItem={({ item, separators }) => {
              return (
                <TouchableOpacity
                  style={styles.buttonsStyle}
                  onPress={() => {
                    this.setState({
                      selectedCard: item.key
                    });
                  }}
                >
                  <Image
                    source={require("../assets/ic_card_visa.png")}
                    style={styles.imageCard}
                  />
                  {this.showSelected(item.key)}
                  <View style={styles.rect9}>
                    <Text style={styles.textKey}>{item.key}</Text>
                    <Text style={styles.textSub}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect17} />;
            }}
          />
          <Icon
            style={styles.iconPlus}
            name="plus-circle"
            type="MaterialCommunityIcons"
          />
          <GenericButton
            style={styles.paymentCardBtn}
            navigation={this.props.navigation}
            text="Resumen de compras"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "content",
                typeUser: "notAdmin"
              });
            }}
          />
        </View>
      );
    }
  }

  showButtonsPayment() {
    var typeUser = this.props.navigation.getParam(
      "typeUser",
      this.props.typeUser
    );
    console.log("typeUser11121212, ", typeUser);
    if (typeUser == "Admin" || typeUser == "notAdmin") {
      return (
        <View style={styles.buttonPayments}>
          <GenericButton
            style={styles.addCodesBtn}
            navigation={this.props.navigation}
            text="Hacer el pago"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "success"
              });
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.buttonPayments}>
          <GenericButton
            style={styles.addCodesBtn}
            navigation={this.props.navigation}
            text="Agregar codigos"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "contentCodes",
                detail: "true"
              });
            }}
          />
          <GenericButton
            style={styles.paymentBtn}
            navigation={this.props.navigation}
            text="Forma de pago"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "contentPayment",
                typeUser: this.props.typeUser
              });
            }}
          />
        </View>
      );
    }
  }

  displayUserContent() {
    var typeUser = this.props.navigation.getParam(
      "typeUser",
      this.props.typeUser
    );
    console.log("displayUserContent: ", typeUser);
    if (typeUser == "Admin") {
      return (
        <View style={styles.contentResume}>
          <LineView style={styles.lineView3} />
          <TitleFive style={styles.titleFive5} text2="Forma de pago" />
          <DescriptionFive
            style={styles.descriptionFive4}
            text2="Email: ejemplo@yopmail.com"
          />
          <DescriptionFive
            style={styles.descriptionFive5}
            text2="ID Externo: ninguno"
          />
          <DescriptionFive
            style={styles.descriptionFive6}
            text2="Evidencia: Ninguna"
          />
          <LineView style={styles.lineView2} />
          <TitleFive style={styles.titleFive6} text2="Pago con terminal" />
          <DescriptionFive
            style={styles.descriptionFive7}
            text2="Directo con el vendedor"
          />
          <LineView style={styles.lineView} />
        </View>
      );
    } else if (typeUser == "notAdmin") {
      return (
        <View style={styles.contentCardResume}>
          <Image
            source={require("../assets/ic_card_visa.png")}
            style={styles.imageCardTwo}
          />
          <View style={styles.contentTextCard}>
            <TitleFive
              style={styles.textCardResumen}
              text2={'XXXXXXXXXXX!"\xB7'}
            />
            <DescriptionFive
              style={styles.descriptionCardResumen}
              text2="12/12/20"
            />
          </View>
        </View>
      );
    }
  }

  showDetailCoupon() {
    var detail = this.props.navigation.getParam("detail", this.props.detail);
    console.log("detail: ", detail);
    if (detail == "false") {
      return (
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
      );
    } else {
      return (
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
      );
    }
  }

  deleteItemById = key => {
    const filteredData = this.state.data.filter(item => item.key !== key);
    this.setState({ data: filteredData });
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          "Pago en efectivo",
          "Pago con tarjeta",
          "Pago con terminal",
          "Cancel"
        ],
        destructiveButtonIndex: 3,
        cancelButtonIndex: 3
      },
      buttonIndex => {
        if (buttonIndex === 1) {
        }
      }
    );
  }

  showSelected(key) {
    if (key == this.state.selectedItem || key == this.state.selectedCard) {
      return (
        <Icon name="check" style={styles.icon3} type="MaterialCommunityIcons" />
      );
    }
  }

  showAlert(title, msg) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: "Tomar fotografía",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Seleccionar de la galería",
          onPress: () => this.getPhotosFromGallery()
        }
      ],
      { cancelable: false }
    );
  }

  getPhotosFromGallery() {
    CameraRoll.getPhotos({ first: 10 }).then(res => {
      console.log(res, "images data");
    });
  }

  getPhotosCamera() {
    if (Platform.OS === "android") {
      RNFetchBlob.config({
        fileCache: true,
        appendExt: "jpg"
      })
        .fetch("GET", image.urls.small)
        .then(res => {
          CameraRoll.saveToCameraRoll(res.path())
            .then(Alert.alert("Success", "Photo added to camera roll!"))
            .catch(err => console.log("err:", err));
        });
    } else {
      CameraRoll.saveToCameraRoll(image.urls.small).then(
        Alert.alert("Success", "Photo added to camera roll!")
      );
    }
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },
  background: {
    backgroundColor: "rgba(29,41,53,1)",

    opacity: 1,
    flexDirection: "column",
    flex: 1,
    alignSelf: "stretch"
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch",
    flex: 1
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
  imageCard: {
    width: 70.71,
    height: 42.42,
    borderRadius: 6,
    margin: 5
  },
  imageCardTwo: {
    width: 70.71,
    height: 42.42,
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
    flexDirection: "column"
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
    alignSelf: "stretch"
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
  },
  contentClient: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  titleFive3: {
    width: 360,
    height: 19,
    alignSelf: "center",
    margin: 10,
    marginTop: 30
  },
  descriptionFive: {
    width: 359,
    height: 37.66,
    alignSelf: "center",
    margin: 10
  },

  contentResume: {
    height: 111.53,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  titleFive5: {
    width: 359,
    height: 19
  },
  descriptionFive4: {
    width: 359,
    height: 17
  },
  descriptionFive5: {
    width: 359,
    height: 17
  },
  descriptionFive6: {
    width: 359,
    height: 17
  },
  titleFive6: {
    width: 359,
    height: 19
  },
  descriptionFive7: {
    width: 359,
    height: 17
  },
  lineView: {
    height: 1,
    alignSelf: "stretch"
  },
  lineView2: {
    height: 1,
    alignSelf: "stretch"
  },
  lineView3: {
    height: 1,
    alignSelf: "stretch"
  },
  contentAdminClient: {
    flexDirection: "column",
    flex: 1,
    alignSelf: "stretch"
  },
  resumeBtn: {
    width: 265,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    marginTop: 20,
    alignSelf: "center"
  },
  paymentClientSelectBtn: {
    width: 265,
    height: 41,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    marginTop: 10,
    alignSelf: "center"
  },
  contentInputsClient: {
    width: 374,
    height: 154,
    alignItems: "center",
    justifyContent: "space-around"
  },
  textInput2: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  textInput3: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  takePhotoBtn: {
    width: 263,
    height: 42,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  titleFive4: {
    width: 359,
    height: 19,
    alignSelf: "center",
    marginTop: 20
  },
  descriptionFive2: {
    width: 359,
    height: 22,
    alignSelf: "center",
    marginTop: 18
  },
  contentNotAdminClient: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerBack2: {
    width: 374,
    height: 55
  },
  listCard: {
    height: 320.79,
    alignSelf: "stretch"
  },
  rect14: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  text4: {
    color: "#000000"
  },
  rect17: {
    left: 15,
    height: 2,
    backgroundColor: "#999999"
  },
  iconPlus: {
    width: 41,
    height: 39,
    backgroundColor: "transparent",
    color: "rgba(101,188,70,1)",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 20
  },
  paymentCardBtn: {
    width: 265,
    height: 42,
    alignSelf: "center",
    marginTop: 15,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  contentCardResume: {
    width: 374,
    height: 54.6,
    flexDirection: "row",
    alignItems: "center"
  },
  contentTextCard: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 55.17,
    flex: 1
  },
  textCardResumen: {
    alignSelf: "stretch",
    height: 28
  },
  descriptionCardResumen: {
    height: 27,
    alignSelf: "stretch"
  },
  contentSuccess: {
    flex: 1,
    alignSelf: "stretch"
  },
  imageSuccess: {
    width: 167,
    height: 170,
    alignSelf: "center",
    marginTop: 65
  },
  headerSingleLogoSuccess: {
    height: 53,
    alignSelf: "stretch"
  },
  descriptionFiveSuccess: {
    top: 365,
    left: 0,
    height: 60,
    position: "absolute",
    right: 0
  },
  buttonPayments: {
    height: 101,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  paymentBtn: {
    width: 262,
    height: 41,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  addCodesBtn: {
    width: 262,
    height: 43,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1,
    margin: 8
  },
  swipeoutSide: {
    backgroundColor: "#1D2935",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteIcon: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    width: 30
  },
  textSwipeDes: {
    width: 45,
    height: 12,
    backgroundColor: "transparent",
    fontSize: 12,
    color: "rgba(255,255,255,1)"
  },
  editIcon: {
    width: 30,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  textSwipeEdit: {
    width: 45,
    height: 12,
    backgroundColor: "transparent",
    fontSize: 12,
    color: "rgba(255,255,255,1)"
  },
  couponIcon: {
    width: 30,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  textSwipeCupon: {
    width: 45,
    height: 12,
    backgroundColor: "transparent",
    fontSize: 12,
    color: "rgba(255,255,255,1)"
  }
});
