import React, { Component } from "react";
import LayoutStatusBar from "../symbols/LayoutStatusBar";
import HeaderSingleLogo from "../symbols/HeaderSingleLogo";
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  Image,
  CameraRoll,
  Alert,
  ActionSheetIOS,
  TextInput,
  Text
} from "react-native";

import GenericButtonIcon from "../symbols/GenericButtonIcon";
import LineView from "../symbols/LineView";
import Icon from "@builderx/icons";

import HeaderBack from "../symbols/HeaderBack";
import TitleFive from "../symbols/TitleFive";
import DescriptionFive from "../symbols/DescriptionFive";
import GenericButton from "../symbols/GenericButton";
import Swipeout from "react-native-swipeout";
import { Constants, ImagePicker, Permissions } from "expo";

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
      ],
      textInput: [],
      image: null,
      uploading: false
    };
  }
  render() {
    let { image } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.background}>
          <LayoutStatusBar style={styles.layoutStatusBar} />
          {this.displayContent()}
        </View>
      </View>
    );
  }

  addTextInput = key => {
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput style={styles.textInput} placeholder="Codigo promocional" />
    );
    this.setState({ textInput });
  };

  displayContent() {
    var type = this.props.navigation.getParam("type", "content");
    var typeUser = this.props.navigation.getParam("typeUser", "default");
    console.log("TYPE CART: ", type);
    console.log("typeUser?: ", typeUser);
    if (type == "content") {
      return (
        <View style={styles.content}>
          {this.contentHeader()}
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
                  <Swipeout
                    buttonWidth={80}
                    left={[
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
                      <View style={styles.rect20}>
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
                      <Icon
                        style={styles.icon}
                        name="ios-arrow-forward"
                        type="Ionicons"
                      />
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
            text={detail == "false" ? "Agregar codigos" : "Buscar promociones"}
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
            text2={
              typeUser == "notAdmin" ? (
                "Forma de pago"
              ) : (
                "Informacion del cliente"
              )
            }
          />
          <Text style={styles.textDescription}>
            {
              typeUser == "notAdmin" ? (
                "Selecciona la tarjeta con la cual quieres hacer el cargo de tu compra. Desliza hacia la derecha para editar o borrar una tarjeta que hayas dado de alta anteriormente."
              ) : (
                "Para continuar ingresa el email de tu cliente y enviarle su certificado de compra"
              )
            }
          </Text>
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
          <Text style={styles.text}>
            Gracias por su compra le hemos enviado su recibo al correo
            electronico registrado
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push("Cart");
            }}
          >
            <Text style={styles.text2}>Regresar al carrito</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (type == "coupon") {
      return (
        <View style={styles.contentCoupon}>
          <HeaderBack
            style={styles.headerBackCoupon}
            navigation={this.props.navigation}
          />
          <TitleFive
            style={styles.titleFiveCoupon}
            text2="Cupones disponibles"
          />
          <DescriptionFive
            style={styles.descriptionFiveCoupon}
            text2="Selecciona el cupon que deseas aplicar a tu producto, luego da clic en 'Utilizar cupon'. En esta pantalla"
          />
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
                  <View style={styles.rect21}>
                    <Text style={styles.textKey}>{item.key}</Text>
                    <Text style={styles.textSub}>{item.name}</Text>
                  </View>
                  {this.showSelected(item.key)}
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={({}) => {
              return <View style={styles.rect17} />;
            }}
          />
        </View>
      );
    } else if (type == "edit") {
      return (
        <View style={styles.contentEdit}>
          <HeaderBack
            style={styles.headerBackEdit}
            navigation={this.props.navigation}
          />
          <TitleFive style={styles.titleFiveEdit} text2="Numero de piezas" />
          <DescriptionFive
            style={styles.descriptionFiveEdit}
            text2="Agregarlo disminuye el numero de piezas para tu producto"
          />
          <View style={styles.contentEditInput}>
            <TextInput
              style={styles.textInputEditNumber}
              placeholder="contrasena*"
            />
            <GenericButton
              style={styles.genericButtonEdit}
              navigation={this.props.navigation}
              text="Guardar"
            />
          </View>
        </View>
      );
    } else if (type == "addCard") {
      return (
        <View style={styles.contentAddCard}>
          <HeaderBack
            style={styles.headerBackAddCard}
            navigation={this.props.navigation}
          />
          <TitleFive style={styles.titleFiveAddCard} text2="Nueva tarjeta" />
          <DescriptionFive
            style={styles.descriptionFiveAddCard}
            text2="Por favor proporciona la siguiente informacion"
          />
          <View style={styles.contentInputsAddCard}>
            <TextInput
              style={styles.textInputProp}
              placeholder="Nombre del propietario*"
            />
            <TextInput
              style={styles.textInputNumberCard}
              placeholder="Numero de tarjeta*"
            />
            <View style={styles.contentDateAddCard}>
              <TextInput style={styles.textInputMonth} placeholder="MM" />
              <TextInput style={styles.textInputYear} placeholder="YYYY" />
              <TextInput style={styles.textInputCvc} placeholder="CVC" />
            </View>
            <GenericButton
              style={styles.genericButtonSaveCard}
              navigation={this.props.navigation}
              text="Guardar"
              root={() => {
                this.props.navigation.push("Cart", {
                  type: "contentPayment"
                });
              }}
            />
          </View>
        </View>
      );
    }
  }

  contentHeader() {
    var typeUser = this.props.navigation.getParam("typeUser", "default");
    if (typeUser == "default") {
      return <HeaderSingleLogo style={styles.headerSingleLogo} />;
    } else {
      return (
        <HeaderBack
          style={styles.headerBack}
          navigation={this.props.navigation}
        />
      );
    }
  }

  showAdmin() {
    var typeUser = this.props.navigation.getParam("typeUser", "default");
    if (typeUser == "Admin") {
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
                this.showAlert();
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
            text="Selecciona le pago"
            iconType="MaterialCommunityIcons"
            iconName="check"
            navigation={this.props.navigation}
            root={() => {
              this.showActionSheet();
            }}
          />
          <GenericButton
            style={styles.resumeBtn}
            navigation={this.props.navigation}
            text="Resumen"
            root={() => {
              this.props.navigation.push("Cart", {
                type: "content",
                typeUser: typeUser
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
                  <View style={styles.rect21}>
                    <Text style={styles.textKey}>{item.key}</Text>
                    <Text style={styles.textSub}>{item.name}</Text>
                  </View>
                  {this.showSelected(item.key)}
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
            onPress={() => {
              this.props.navigation.push("Cart", {
                type: "addCard"
              });
            }}
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
    var typeUser = this.props.navigation.getParam("typeUser", "default");
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
                typeUser: "Admin"
              });
            }}
          />
        </View>
      );
    }
  }

  displayUserContent() {
    var typeUser = this.props.navigation.getParam("typeUser", "default");
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
            <Text style={styles.textKeyT}>XXXXXXXXXXXXX123</Text>
            <Text style={styles.textSubT}>12/12/20</Text>
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
          {this.state.textInput.map((value, index) => {
            return value;
          })}
          <Icon
            style={styles.icon2}
            name="plus-circle-outline"
            type="MaterialCommunityIcons"
            onPress={() => this.addTextInput(this.state.textInput.length + 1)}
          />
        </View>
      );
    }
  }

  deleteItemById = key => {
    const filteredData = this.state.data.filter(item => item.key !== key);
    this.setState({ data: filteredData });
  };
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
          onPress: () => this.getPhotosCamera(),
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

  getPhotosFromGallery = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      this._handleImagePicked(pickerResult);
    }
  };

  getPhotosCamera = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
}

/*async function uploadImageAsync(uri) {
  let apiUrl = 'https://file-upload-example-backend-dkhqoilqqn.now.sh/upload';

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options);
}*/

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
    height: 66.13,
    backgroundColor: "transparent",
    color: "rgba(241,241,241,1)",
    fontSize: 14,

    textAlign: "left",
    margin: 0,
    alignSelf: "stretch",
    paddingLeft: 30,
    paddingRight: 0
  },
  headerSingleLogo: {
    height: 53,
    alignSelf: "stretch"
  },
  contentProducts: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end"
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
    flexDirection: "row",
    margin: 0,
    height: 80,
    justifyContent: "space-around"
  },
  icon: {
    top: Platform.OS === "android" ? 18 : undefined,
    left: Platform.OS === "android" ? 329 : undefined,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 18,
    marginRight: 23
  },
  image: {
    width: 59,
    height: 60,
    borderRadius: 6,
    margin: 5,
    marginLeft: 18
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
    margin: 5,
    marginLeft: 15
  },
  rect9: {
    height: 70,
    width: 237,

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
  textSubT: {
    width: 237,
    height: 17,
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  textKeyT: {
    width: 237,
    height: 17,
    fontSize: 16,
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  contentPieces: {
    height: 17,
    flexDirection: "row",
    alignSelf: "stretch"
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
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch"
  },
  contentTwo: {
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch"
  },
  contentThree: {
    height: 31,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch"
  },
  textSubtotal: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 30,
    textAlign: "right"
  },

  textTotalT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right",
    marginRight: 30
  },
  textIvaT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 30,
    textAlign: "right"
  },
  textSubtotalT: {
    width: 130,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 30,
    textAlign: "right"
  },
  textTotals: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 5,
    textAlign: "right",
    marginRight: 30
  },
  textIva: {
    width: 75,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    margin: 30,
    textAlign: "right"
  },
  contentCodes: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  titleFive: {
    width: 359,
    height: 17,
    margin: 15,
    alignSelf: "center"
  },

  headerBack: {
    height: 54,
    alignSelf: "stretch"
  },
  contentInputs: {
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
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
    width: 264,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    marginBottom: 35
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
    height: 71.57,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    alignSelf: "stretch"
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
    right: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  textHash: {
    width: 312,
    height: 15,
    fontSize: 16,
    color: "rgba(255,255,255,1)",
    alignSelf: "flex-start",
    paddingLeft: 10
  },
  textDiscountPercentage: {
    width: 312.38,
    height: 17,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    margin: 0,
    padding: 0,
    alignSelf: "flex-start",
    paddingLeft: 10
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)",
    fontSize: 23,
    alignSelf: "center",
    marginRight: 20
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
    height: 37.66,
    alignSelf: "stretch",
    margin: 10
  },

  contentResume: {
    height: 111.53,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center"
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
    height: 154,
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch"
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
    height: 350,
    alignSelf: "stretch"
  },
  headerBack2: {
    height: 54,
    alignSelf: "stretch"
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
    height: 54.6,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  contentTextCard: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 55.17,
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10
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
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center"
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
    height: 60,
    display: "none",
    alignSelf: "stretch"
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
  },
  contentCoupon: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  headerBackCoupon: {
    alignSelf: "stretch",
    height: 54
  },
  titleFiveCoupon: {
    height: 19,
    alignSelf: "stretch",
    marginTop: 15
  },
  descriptionFiveCoupon: {
    height: 59,
    alignSelf: "stretch",
    marginTop: 18
  },
  contentEdit: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  headerBackEdit: {
    height: 54,
    alignSelf: "stretch"
  },
  titleFiveEdit: {
    height: 19,
    alignSelf: "stretch",
    marginTop: 15
  },
  descriptionFiveEdit: {
    height: 61,
    alignSelf: "stretch",
    marginTop: 10
  },
  contentEditInput: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textInputEditNumber: {
    width: 262,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center"
  },
  genericButtonEdit: {
    width: 263,
    height: 42,
    marginTop: 18,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  contentAddCard: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  headerBackAddCard: {
    height: 55,
    alignSelf: "stretch"
  },
  titleFiveAddCard: {
    height: 19,
    alignSelf: "stretch",
    marginTop: 25
  },
  descriptionFiveAddCard: {
    height: 60,
    alignSelf: "stretch",
    marginTop: 13
  },
  contentInputsAddCard: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    height: 217.63,
    justifyContent: "space-between"
  },
  textInputProp: {
    width: 262,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    marginTop: 0
  },
  textInputNumberCard: {
    width: 262,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 7,
    textAlign: "center",
    margin: 0
  },
  contentDateAddCard: {
    height: 49.87,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textInputMonth: {
    width: "30%",
    height: 42,
    backgroundColor: "#E6E6E6",
    marginTop: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInputYear: {
    width: "30%",
    height: 42,
    backgroundColor: "#E6E6E6",
    marginTop: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  textInputCvc: {
    width: "30%",
    height: 42,
    backgroundColor: "#E6E6E6",
    marginTop: 0,
    borderRadius: 7,
    textAlign: "center"
  },
  genericButtonSaveCard: {
    width: 265,
    height: 41,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  text: {
    width: 296,
    height: 47.23,
    backgroundColor: "transparent",
    alignSelf: "center",
    color: "rgba(253,248,248,1)"
  },
  button: {
    height: 17.55,
    alignSelf: "stretch",
    alignItems: "center"
  },
  text2: {
    width: 122,
    height: 13,
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)",
    textAlign: "center",
    alignSelf: "center"
  },
  rect20: {
    flex: 1,
    marginLeft: 18
  },
  rect21: {
    flex: 1,
    alignSelf: "stretch"
  }
});
