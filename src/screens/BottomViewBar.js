import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";

import Main from "./Main";
import Favorites from "./Favorites";
import Wallet from "./Wallet";
import Cart from "./Cart";
import Icon from "@builderx/icons";

import Footer from "../symbols/Footer";

export default class BottomViewBar extends Component {
  constructor() {
    super();

    this.state = {
      display: "main"
    };
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect2}>
          <View style={styles.display}>{this.displayContent()}</View>
          <Footer
            style={styles.footer}
            active={this.state.display}
            buttonWrapper={() => {
              this.setState({
                display: "main"
              });
            }}
            buttonWrapper1={() => {
              this.setState({
                display: "fav"
              });
            }}
            buttonWrapper2={() => {
              this.setState({
                display: "wallet"
              });
            }}
            buttonWrapper3={() => {
              this.setState({
                display: "notify"
              });
            }}
            buttonWrapper4={() => {
              this.setState({
                display: "cart"
              });
            }}
          />
        </View>
      </View>
    );
  }

  displayContent() {
    var typeT = this.props.navigation.getParam("type", this.props.type);
    console.log("this.state.display, ", this.state.display);
    if (this.state.display == "main") {
      return <Main style={styles.rect} navigation={this.props.navigation} />;
    } else if (this.state.display == "fav") {
      return (
        <Favorites style={styles.rect} navigation={this.props.navigation} />
      );
    } else if (this.state.display == "wallet") {
      return <Wallet style={styles.rect} navigation={this.props.navigation} />;
    } else if (this.state.display == "notify") {
      return (
        <Favorites style={styles.rect} navigation={this.props.navigation} />
      );
    } else if (this.state.display == "cart") {
      return <Cart style={styles.rect} navigation={this.props.navigation} />;
    }
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect2: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#E6E6E6",
    flexDirection: "column"
  },

  rect: {
    height: 725,
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch"
  },
  icon: {
    top: 86,
    left: 116,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40,
    width: 41,
    height: 39
  },
  text: {
    top: 239.52,
    left: 128.98,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(251,251,251,1)"
  },

  footer: {
    alignSelf: "stretch",
    height: "13%"
  },
  display: {
    alignSelf: "stretch",
    height: "87%"
  }
});
