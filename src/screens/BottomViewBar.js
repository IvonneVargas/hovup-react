import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";

import Main from "./Main";
import Favorites from "./Favorites";
import Wallet from "./Wallet";
import Notifications from "./Notifications";
import Cart from "./Cart";
import Icon from "@builderx/icons";

import BottomBarButton from "../symbols/BottomBarButton";
import BottomBar from "../symbols/BottomBar";

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
          {this.displayContent()}
          <View style={styles.rect3}>
            <BottomBarButton
              style={styles.bottomBarButton}
              root={() => {
                this.setState({
                  display: "main"
                });
              }}
            />
            <BottomBarButton
              style={styles.bottomBarButton2}
              root={() => {
                this.setState({
                  display: "fav"
                });
              }}
              homeType="MaterialCommunityIcons"
              homeName="heart-outline"
              homeText="Favoritos"
            />
            <BottomBarButton
              style={styles.bottomBarButton3}
              homeType="MaterialCommunityIcons"
              homeName="wallet"
              homeText="Wallet"
              root={() => {
                this.setState({
                  display: "wallet"
                });
              }}
            />
            <BottomBarButton
              style={styles.bottomBarButton4}
              homeType="MaterialCommunityIcons"
              homeName="bell-outline"
              homeText="Notificaciones"
              root={() => {
                this.setState({
                  display: "notify"
                });
              }}
            />
            <BottomBarButton
              style={styles.bottomBarButton5}
              homeType="MaterialCommunityIcons"
              homeName="cart-outline"
              homeText="Carrito"
              root={() => {
                this.setState({
                  display: "cart"
                });
              }}
            />
          </View>
          <BottomBar
            style={styles.bottomBar}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }

  changeFav() {
    this.setState({
      display: "fav"
    });
    console.log("this.setState, ", this.state.display);
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
        <Notifications style={styles.rect} navigation={this.props.navigation} />
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
    backgroundColor: "#E6E6E6"
  },
  bottomBar: {
    height: 77,
    alignSelf: "stretch",
    display: "none"
  },
  rect: {
    height: 725,
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch"
  },
  icon: {
    top: 226.71,
    left: 75.14,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  },
  text: {
    top: 239.52,
    left: 128.98,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(251,251,251,1)"
  },
  rect3: {
    height: 93,
    backgroundColor: "rgba(29,41,53,1)",
    opacity: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center"
  },
  bottomBarButton: {
    height: 67,
    flex: 1
  },
  bottomBarButton2: {
    height: 67,
    flex: 1
  },
  bottomBarButton3: {
    height: 67,
    flex: 1
  },
  bottomBarButton4: {
    height: 67,
    flex: 1
  },
  bottomBarButton5: {
    height: 67,
    flex: 1
  }
});
