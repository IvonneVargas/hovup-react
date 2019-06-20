import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
    color: '#F9060A'
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
    color: '#DC045E'
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
    color: '#7D09F9'
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
    color: '#020AF4'
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
    color: '#10FA03'
  },
  {
    title: 'Six',
    content: BACON_IPSUM,
    color: '#F4E301'
  },
  {
    title: 'Seven',
    content: BACON_IPSUM,
    color: '#F74302'
  },
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
      activeSections: sections.includes(undefined) ? [] : sections,
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
      <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>card stack membresias</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(25,39,52,1)",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: "rgba(48,61,73,1)",
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: "rgba(25,39,52,1)",
  },
  active: {
    backgroundColor: "rgba(48,61,73,1)",
  },
  inactive: {
    backgroundColor: "rgba(25,39,52,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: "rgba(25,39,52,1)",
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
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
    fontSize: 40,
    color: "rgba(249,249,249,1)",
    textAlign: "center",
    alignSelf: "center"
  },
  textLevelL: {
    width: 25,
    height: 13,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  }
});