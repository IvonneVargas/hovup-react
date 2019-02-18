import React, { Component } from "react";
import { Center } from "@builderx/utils";
import GenericButton from "../symbols/GenericButton";
import { View, StyleSheet, Text, Image } from "react-native";

export default class ZonesTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <View style={styles.rect3}>
            <View style={styles.rect5}>
              <Image
                style={styles.image}
                source={require("../assets/icon_beacon_on.png")}
              />
              <Text style={styles.text4}>Bluetooth ON</Text>
            </View>
            <Image
              style={styles.image3}
              source={require("../assets/icon_device_phone.png")}
            />
            <View style={styles.rect4}>
              <Image
                style={styles.image2}
                source={require("../assets/icon_gps_on.png")}
              />
              <Text style={styles.text3}>GPS ON</Text>
            </View>
          </View>
          <Text style={styles.text}>
            Búsqueda de resultados por beacons y geolocalización.
          </Text>
          <GenericButton
            style={styles.genericButton}
            navigation={this.props.navigation}
            text="Escanear codigo QR"
          />
        </View>
        <Text style={styles.text2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(25,39,52,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  rect2: {
    height: 372,
    top: 80,
    left: 0,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    width: 344,
    height: 48,
    backgroundColor: "transparent",
    color: "rgba(255,246,246,1)",
    textAlign: "center"
  },
  genericButton: {
    width: 264,
    height: 40,
    backgroundColor: "rgba(101,188,70,1)",
    opacity: 1
  },
  rect3: {
    width: 360,
    height: 228,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text2: {
    top: 544,
    left: 116,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect4: {
    width: 110,
    height: 228,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  image2: {
    width: 60,
    height: 60
  },
  rect5: {
    width: 110,
    height: 228,
    justifyContent: "space-around",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60
  },
  image3: {
    width: 44,
    height: 100
  },
  text3: {
    width: 92,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(101,188,70,1)",
    fontSize: 10,
    textAlign: "center"
  },
  text4: {
    width: 110,
    height: 72,
    backgroundColor: "transparent",
    fontSize: 10,
    color: "rgba(101,188,70,1)",
    textAlign: "center"
  }
});
