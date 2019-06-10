import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class footer1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 9,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this.props.buttonWrapper ? this.props.buttonWrapper : null}
        >
          <Icon
            style={[
              styles.icon,
              {
                color:
                  this.props.active == "main"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
            name={this.props.iconName ? this.props.iconName : "home-outline"}
            type={
              this.props.iconType ? (
                this.props.iconType
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <Text
            style={[
              styles.content,
              {
                color:
                  this.props.active == "main"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
          >
            {this.props.content ? this.props.content : "Inicio"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper1}
          onPress={this.props.buttonWrapper1 ? this.props.buttonWrapper1 : null}
        >
          <Icon
            style={[
              styles.icon1,
              {
                color:
                  this.props.active == "fav"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
            name={this.props.icon1Name ? this.props.icon1Name : "heart-outline"}
            type={
              this.props.icon1Type ? (
                this.props.icon1Type
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <Text
            style={[
              styles.content1,
              {
                color:
                  this.props.active == "fav"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
          >
            {this.props.content1 ? this.props.content1 : "Favoritos"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper2}
          onPress={this.props.buttonWrapper2 ? this.props.buttonWrapper2 : null}
        >
          <Icon
            style={[
              styles.icon2,
              {
                color:
                  this.props.active == "wallet"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
            name={this.props.icon2Name ? this.props.icon2Name : "wallet"}
            type={
              this.props.icon2Type ? (
                this.props.icon2Type
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <Text
            style={[
              styles.content2,
              {
                color:
                  this.props.active == "wallet"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
          >
            {this.props.content2 ? this.props.content2 : "Cartera"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper3}
          onPress={this.props.buttonWrapper3 ? this.props.buttonWrapper3 : null}
        >
          <Icon
            style={[
              styles.icon3,
              {
                color:
                  this.props.active == "notify"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
            name={this.props.icon3Name ? this.props.icon3Name : "bell-outline"}
            type={
              this.props.icon3Type ? (
                this.props.icon3Type
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <Text
            style={[
              styles.content3,
              {
                color:
                  this.props.active == "notify"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
          >
            {this.props.content3 ? this.props.content3 : "Notificaciones"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper4}
          onPress={this.props.buttonWrapper4 ? this.props.buttonWrapper4 : null}
        >
          <Icon
            style={[
              styles.icon4,
              {
                color:
                  this.props.active == "cart"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
            name="cart-outline"
            type="MaterialCommunityIcons"
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  this.props.active == "cart"
                    ? "rgba(101,188,70,1)"
                    : "rgba(238,238,238,1)"
              }
            ]}
          >
            Carrito
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "rgba(25,39,52,1)",
    opacity: 1
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  content: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  buttonWrapper1: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,

    fontSize: 24
  },
  content1: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  buttonWrapper2: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  content2: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(238,238,238,1)"
  },
  buttonWrapper3: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  content3: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(238,238,238,1)"
  },
  buttonWrapper4: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "rgba(238,238,238,1)",
    fontSize: 24
  },
  text: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "rgba(238,238,238,1)"
  }
});
