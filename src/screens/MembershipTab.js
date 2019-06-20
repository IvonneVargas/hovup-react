import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { Constants } from "expo";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

const BACON_IPSUM =
  "Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ";

const CONTENT = [
  {
    title: "First",
    content: BACON_IPSUM,
    color: "#F9060A",
    points: "10"
  },
  {
    title: "Second",
    content: BACON_IPSUM,
    color: "#DC045E",
    points: "20"
  },
  {
    title: "Third",
    content: BACON_IPSUM,
    color: "#7D09F9",
    points: "30"
  },
  {
    title: "Fourth",
    content: BACON_IPSUM,
    color: "#020AF4",
    points: "40"
  },
  {
    title: "Fifth",
    content: BACON_IPSUM,
    color: "#10FA03",
    points: "50"
  },
  {
    title: "Six",
    content: BACON_IPSUM,
    color: "#F4E301",
    points: "60"
  },
  {
    title: "Seven",
    content: BACON_IPSUM,
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
          <View style={styles.level}>
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
      <View
          style={[styles.content, isActive ? styles.active : styles.inactive]}
        >
          <Image
            style={styles.imageUser}
            source={require("../assets/user.jpg")}
          />
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    paddingTop: Constants.statusBarHeight
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
    backgroundColor: "rgba(25,39,52,1)",
    flexDirection: "row"
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
    height: 54
  },
  label: {
    width: 100,
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
    width: 100,
    height: "30%",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    alignItems: "center"
  },
  levelText: {
    height: 13,

    backgroundColor: "transparent",
    textAlign: "center",
    width: 66.43
  },
  levelTextK: {
    width: 75,
    height: 38.93,

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
    color: "rgba(255,255,255,1)"
  },
  imageUser: {
    width: 100,
    height: 120
  },
  contentPoints: {
    height: 48.97,
    flexDirection: "column",
    flex: 1
  },
  textPointsD: {
    width: 163,
    height: 32.84,
    fontSize: 25,
    color: "rgba(232,232,232,1)"
  },
  text: {
    width: 152,
    height: 13,
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  contentId: {
    height: 55.24,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end"
  },
  textMembershipId: {
    height: 15.77,
    fontSize: 14,
    color: "rgba(232,232,232,1)",
    width: 100
  },
  textInput: {
    width: 131.37,
    height: 22,
    fontSize: 20,
    color: "rgba(0,0,0,1)",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    textAlign: "right"
  },
  textDateExpiration: {
    width: 200,
    height: 16,
    fontSize: 14,
    color: "rgba(232,232,232,1)"
  }
});
