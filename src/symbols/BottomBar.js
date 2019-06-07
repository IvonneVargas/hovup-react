import React, { Component } from "react";
import BottomBarButton from "./BottomBarButton";
import { View, StyleSheet } from "react-native";

export default class BottomBar extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 67
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <BottomBarButton
          style={styles.bottomBarButton}
          navigation={this.props.navigation}
          /*root={() => {
      this.props.navigation.push("BottomViewBar");
      }}*/
        />
        <BottomBarButton
          style={styles.bottomBarButton2}
          navigation={this.props.navigation}
          /*root={() => {
      this.props.navigation.push("Favorites");
      }}*/
          homeType="MaterialCommunityIcons"
          homeName="heart-outline"
        />
        <BottomBarButton
          style={styles.bottomBarButton3}
          navigation={this.props.navigation}
          /*onPress={() => {
      this.props.navigation.push("Launcher");
      }}*/
          homeType="MaterialCommunityIcons"
          homeName="wallet"
        />
        <BottomBarButton
          style={styles.bottomBarButton4}
          navigation={this.props.navigation}
          onPress={() => {
            this.props.navigation.push("Launcher");
          }}
          homeType="MaterialCommunityIcons"
          homeName="bell-outline"
        />
        <BottomBarButton
          style={styles.bottomBarButton5}
          navigation={this.props.navigation}
          /*onPress={() => {
      this.props.navigation.push("Launcher");
      }}*/
          homeType="MaterialCommunityIcons"
          homeName="cart-outline"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bottomBarButton: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  bottomBarButton2: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  bottomBarButton3: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  bottomBarButton4: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  bottomBarButton5: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  root: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  }
});
