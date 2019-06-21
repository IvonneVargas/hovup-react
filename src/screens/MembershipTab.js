import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground
} from "react-native";
import { Constants } from "expo";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT = [
  {
    title: "First",
    id: "1234 5671",
    color: "#F9060A",
    points: "10"
  },
  {
    title: "Second",
    id: "1234 5672",
    color: "#DC045E",
    points: "20"
  },
  {
    title: "Third",
    id: "1234 5673",
    color: "#7D09F9",
    points: "30"
  },
  {
    title: "Fourth",
    id: "1234 5674",
    color: "#020AF4",
    points: "40"
  },
  {
    title: "Fifth",
    id: "1234 5675",
    color: "#10FA03",
    points: "50"
  },
  {
    title: "Six",
    id: "1234 5676",
    color: "#F4E301",
    points: "60"
  },
  {
    title: "Seven",
    id: "1234 5677",
    color: "#F74302",
    points: "70"
  }
];

export default class MembershipTab extends Component {
  constructor() {
    super();

    this.state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false
    };
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Image
          style={styles.image}
          source={require("../assets/ic_200x200.png")}
        />
        <View style={styles.label}>
          <View style={this.customStyles(section.color)}>
            <Text style={styles.levelTextK}>1</Text>
            <Text style={styles.textLevelL}>LVL</Text>
          </View>
          <View style={styles.totalLevel}>
            <Text style={styles.levelText}>1/10</Text>
          </View>
        </View>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View style={styles.containerContent}>
        <ImageBackground
          source={require("../assets/front_corners.png")}
          resizeMode="stretch"
          style={[
            styles.content,
            isActive ? { backgroundColor: section.color } : styles.inactive
          ]}
        >
          <View style={styles.contentTop}>
            <Image
              style={styles.imageUser}
              source={require("../assets/user.jpg")}
            />
            <View style={styles.contentTopInfo}>
              <View style={styles.contentPoints}>
                <Text style={styles.textPointsD}>{section.points}</Text>
                <Text style={styles.text}>puntos</Text>
              </View>
              <View style={styles.contentId}>
                <Text style={styles.textMembershipId}>Membership ID</Text>
                <TextInput style={styles.textInput} placeholder="1234 5678" />
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
                    console.log("click to flip")
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
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
      </View>
    );
  }

  customStyles(color) {
    return {
      backgroundColor: color,
      alignSelf: "stretch",
      flexDirection: "column"
    };
  }

  customContentStyle(color) {
    return {
      backgroundColor: color
    };
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
    backgroundColor: "rgba(255,255,255,1)",
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
    padding: 20,
    flexDirection: "column"
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
    height: 129.93,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  imageUser: {
    width: 100,
    height: 120
  },
  contentTopInfo: {
    height: 100,
    flexDirection: "column",
    flex: 1
  },
  contentId: {
    width: 231.5,
    height: 66,
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
    width: 131.37,
    height: 22,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 20,
    textAlign: "right",
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
    alignItems: "flex-end",
    width: 223.26,
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  textPointsD: {
    width: 191.1,
    height: 32,
    fontSize: 25,
    color: "rgba(4,4,4,1)",
    paddingLeft: 10,
    alignSelf: "flex-start"
  },
  text: {
    width: 152,
    height: 13,
    fontSize: 14,
    color: "rgba(14,0,0,1)",
    alignSelf: "flex-start",
    paddingLeft: 10
  },
  contentCenter: {
    height: 201.19,
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
    width: "60%",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "column"
  },
  contentCenterRight: {
    width: "25%",
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  imageQr: {
    width: 150,
    height: 150,
    marginTop: 13
  },
  textName: {
    width: 160.82,
    height: 20,
    backgroundColor: "transparent",
    marginTop: 10,
    paddingTop: 0,
    fontSize: 20,
    color: "rgba(255,255,255,1)"
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
    height: 52.72,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  imageFlip: {
    width: 59,
    height: 27
  },
  textFlip: {
    height: 14,
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
  }
});
