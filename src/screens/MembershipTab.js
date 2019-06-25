import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  Animated
} from "react-native";
import { Constants } from "expo";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import { Center } from "@builderx/utils";
import CardFlip from "react-native-card-flip";
import { AccordionList } from "accordion-collapse-react-native";

const tableHead = ["Nombre", "Eventos", "Puntos", "Detalles"];
const tableData = [
  ["Impactos", "23", "23", "Ver"],
  ["CheckIns en Store", "1", "1", "Ver"],
  ["CheckIns Georeferencia", "2", "2", "Ver"],
  ["Lecturas de Qr", "5", "5", "Ver"],
  ["Generación de cupones", "7", "7", "Ver"],
  ["Lectura de cupones", "5", "5", "Ver"],
  ["Realizar compra", "3", "3", "Ver"],
  ["Recoger compra", "3", "3", "Ver"],
  ["Web services", "5", "5", "Ver"],
  ["Total", "5", "5", "Ver"]
];

export default class MembershipTab extends Component {
  constructor() {
    super();
    this.state = {
      flip: false,
      list: [
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#F9060A",
          points: "10"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#DC045E",
          points: "20"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#7D09F9",
          points: "30"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#10FA03",
          points: "40"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#10FA03",
          points: "50"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#F4E301",
          points: "60"
        },
        {
          title: "Getting Started",
          id: "1234 5671",
          color: "#F74302",
          points: "60"
        }
      ]
    };
  }

  customStyles(color) {
    return {
      backgroundColor: color,
      alignSelf: "stretch",
      flexDirection: "column"
    };
  }

  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../assets/ic_200x200.png")}
        />
        <View style={styles.label}>
          <View style={[styles.tag, { backgroundColor: section.color }]}>
            <Text style={styles.levelTextK}>1</Text>
            <Text style={styles.textLevelL}>LVL</Text>
          </View>
          <View style={styles.totalLevel}>
            <Text style={styles.levelText}>1/10</Text>
          </View>
        </View>
      </View>
    );
  }

  renderContent(section) {
    console.log("section: ", section);
    return (
      <CardFlip style={styles.cardContainer} ref={card => (flip = card)}>
        <View style={styles.containerContent}>
          <ImageBackground
            source={require("../assets/front_rounded_copy.png")}
            resizeMode="stretch"
            style={[styles.content, { backgroundColor: section.color }]}
          >
            <View style={styles.contentTop}>
              <Image
                style={styles.imageUser}
                source={require("../assets/user.jpg")}
              />
              <View style={styles.contentTopInfo}>
                <View style={styles.contentPoints}>
                  <Text style={styles.textPointsD}>{section.points}</Text>
                  <Text style={styles.textPointsDd}>puntos</Text>
                </View>
                <View style={styles.contentId}>
                  <Text style={styles.textMembershipId}>Membership ID</Text>
                  <TextInput
                    style={[styles.textInput, { borderColor: section.color }]}
                    placeholder="1234 5678"
                  />
                  <Text style={styles.textDateExpiration}>
                    Fecha de expiración: 01/2018
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.contentCenter}>
              <View style={styles.contentCenterLeft}>
                <Text style={styles.textLevelVer}>Nombre Nivel</Text>
              </View>
              <View style={styles.contentCenterCenter}>
                <Text style={styles.textName}>Nombre ApellidoP</Text>
                <Image
                  style={styles.imageQr}
                  source={require("../assets/qr.png")}
                />
              </View>
              <View style={styles.contentCenterRight}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log("this: ", this.state);
                    flip.flip();
                  }}
                >
                  <Image
                    style={styles.imageFlip}
                    source={require("../assets/flip.png")}
                  />
                  <Text style={styles.textFlip}>Flip</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.allContentBack}>
          <View style={styles.contentBack}>
            <View style={styles.containerTopBack}>
              <View style={styles.containerTopBackLeft}>
                <Text style={styles.tittleTexPoints}>
                  Puntos para el siguiente nivel
                </Text>
                <View style={styles.containerTopBackBottom}>
                  <View style={styles.containerTopBackLeftLeft}>
                    <Text style={styles.pointsText}>1800</Text>
                    <Text style={styles.pointsTextT}>puntos</Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerTopBackRight}>
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={() => {
                    console.log("FLIP TO FRONT");
                    flip.flip();
                  }}
                >
                  <Image
                    style={styles.imageFlipBack}
                    source={require("../assets/flip.png")}
                  />
                  <Text style={styles.textFlipBack}>Flip</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerBottomBack}>
              <Table borderStyle={styles.tableStyle}>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.textHead}
                />
                <Rows data={tableData} textStyle={styles.textData} />
              </Table>
            </View>
          </View>
        </View>
      </CardFlip>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollArea}>
          <AccordionList
            list={this.state.list}
            header={this.renderHeader}
            body={this.renderContent}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    paddingTop: Constants.statusBarHeight
  },
  containerContent: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20
  },
  header: {
    backgroundColor: "rgba(48,61,73,1)",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 84
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  },
  content: {
    height: 450,
    flexDirection: "column",
    borderRadius: 20,
    alignSelf: "stretch"
  },

  active: {
    backgroundColor: "rgba(48,61,73,1)"
  },
  inactive: {
    backgroundColor: "rgba(25,39,52,1)"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 10
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center"
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8
  },
  image: {
    width: 95,
    height: 54,
    borderRadius: 6
  },
  label: {
    width: 67.73,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  level: {
    width: 100,
    height: "70%",
    backgroundColor: "rgba(247,8,8,1)",
    opacity: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  totalLevel: {
    height: "34.58%",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  levelText: {
    height: 13,

    backgroundColor: "transparent",
    textAlign: "center",
    width: 66.43
  },
  levelTextK: {
    width: 75,
    height: 31.17,

    backgroundColor: "transparent",
    fontSize: 30,
    color: "rgba(249,249,249,1)",
    textAlign: "center",
    alignSelf: "center"
  },
  textLevelL: {
    width: 25,
    height: 13,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  contentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    height: 164
  },

  imageUser: {
    width: 100,
    height: 120,
    margin: 0,
    marginLeft: 15,
    marginTop: 15
  },
  contentTopInfo: {
    height: 163.8,
    flexDirection: "column",
    flex: 1
  },
  contentId: {
    height: 80,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "flex-end"
  },
  textMembershipId: {
    width: 100,
    height: 15.77,
    fontSize: 14,
    color: "rgba(49,48,48,1)"
  },
  textInput: {
    width: 131,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    color: "rgba(0,0,0,1)"
  },
  textDateExpiration: {
    width: 227.04,
    height: 20.06,
    fontSize: 14,
    color: "rgba(232,232,232,1)",
    textAlign: "right",
    marginTop: 0
  },
  contentPoints: {
    height: 66,
    flexDirection: "column",
    alignItems: "flex-start",

    alignSelf: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginTop: 15
  },
  textPointsD: {
    fontSize: 25,
    color: "rgba(4,4,4,1)",
    height: 27,
    alignSelf: "stretch"
  },

  contentCenter: {
    height: 281,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center"
  },

  contentCenterLeft: {
    width: "15%",
    alignSelf: "stretch",
    alignItems: "center"
  },
  contentCenterCenter: {
    width: "70%",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "column"
  },
  contentCenterRight: {
    width: "15%",
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  imageQr: {
    width: 150,
    height: 150,
    marginTop: 28
  },
  textName: {
    height: 22,
    backgroundColor: "transparent",
    marginTop: 20,
    paddingTop: 0,
    fontSize: 20,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  textLevelVer: {
    height: 15,
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 14,
    letterSpacing: 0,
    color: "rgba(255,255,255,1)",
    marginTop: 100,
    marginRight: 100,
    alignSelf: "stretch",
    paddingRight: 0,
    transform: [
      {
        rotate: "-90deg"
      }
    ]
  },
  button: {
    height: 46,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    opacity: 1
  },
  buttonBack: {
    height: 46,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    opacity: 1
  },
  imageFlip: {
    width: 51,
    height: 22
  },
  imageFlipBack: {
    width: 51,
    height: 22
  },
  textFlip: {
    height: 14,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    alignSelf: "center"
  },
  textFlipBack: {
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    alignSelf: "center"
  },
  backgroundImages: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  contentLevelTexts: {
    alignSelf: "stretch",
    flexDirection: "column"
  },
  contentPointsList: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row"
  },
  contentCenterBack: {
    height: 140.73,
    alignSelf: "stretch"
  },
  contentCenterBottom: {
    height: 100,
    alignSelf: "stretch"
  },
  contentTopBack: {
    height: 81.54,
    alignSelf: "stretch",
    flexDirection: "row"
  },
  contentTopBackLeft: {
    width: "50%",
    height: "100%",
    alignItems: "flex-start"
  },
  contentTopBackRigth: {
    width: "50%",
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  textNextLevel: {
    width: 186,
    height: 13,
    backgroundColor: "transparent"
  },
  textPointsTop: {
    width: 68,
    height: 29,
    backgroundColor: "transparent",
    fontSize: 30
  },
  contentFlipTop: {
    width: 100,
    flex: 1,
    flexDirection: "column"
  },
  flipTop: {
    height: "70%",
    alignSelf: "stretch",
    backgroundColor: "rgba(251,0,0,1)",
    opacity: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  fliptTopLevel: {
    height: "30%",
    alignSelf: "stretch",
    backgroundColor: "#E6E6E6",
    alignItems: "center"
  },
  textLvl: {
    width: 76,
    height: 13,
    backgroundColor: "transparent"
  },
  textLevelTop: {
    width: 76,
    height: 31.91,
    backgroundColor: "transparent",
    fontSize: 40,
    textAlign: "center"
  },
  textPointsDd: {
    width: 43,
    height: 16,
    backgroundColor: "transparent",
    fontSize: 14
  },
  text3: {
    top: 61,
    left: 93,
    width: 76,
    height: 13,
    position: "absolute",
    backgroundColor: "transparent"
  },
  scrollArea: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  allContentBack: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1,
    flexDirection: "column"
  },
  contentBack: {
    width: 374,
    height: 404,
    flexDirection: "column",
    borderRadius: 20
  },
  containerTopBack: {
    height: 74.93,
    alignSelf: "stretch",
    flexDirection: "row"
  },
  containerTopBackLeft: {
    alignSelf: "stretch",
    width: "85%",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  containerTopBackRight: {
    alignSelf: "stretch",
    width: "15%"
  },
  containerTopBackBottom: {
    height: 42.89,
    alignSelf: "stretch",
    flexDirection: "row"
  },
  tittleTexPoints: {
    height: 17,
    backgroundColor: "transparent",
    color: "rgba(10,10,10,1)",
    fontSize: 16,
    alignSelf: "stretch",
    paddingLeft: 28
  },
  containerTopBackLeftLeft: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center"
  },
  pointsText: {
    width: 107,
    height: 31,
    backgroundColor: "transparent",
    fontSize: 30,
    color: "rgba(247,242,242,1)",
    textAlign: "right"
  },
  pointsTextT: {
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(6,6,6,1)",
    fontSize: 14,
    paddingLeft: 15,
    flex: 1
  },
  containerBottomBack: {
    flex: 1,
    alignSelf: "stretch"
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff"
  },
  textHead: {
    margin: 6,
    color: "rgba(6,6,6,1)"
  },
  textData: {
    margin: 6,
    color: "rgba(247,242,242,1)"
  },
  tableStyle: {
    borderWidth: 2,
    borderColor: "#c8e1ff"
  },
  tag: {
    backgroundColor: "rgba(247,242,242,1)",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  cardContainer: {
    height: 450,
    flexDirection: "column",
    borderRadius: 20,
    alignSelf: "stretch"
  }
});
