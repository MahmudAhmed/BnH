import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MainDish }from "../utils/maindish"
import { sides, dessert } from "../utils/sides";
import SoupsNVeggies from "../utils/soupsngreens";
import Starters from "../utils/starters";



export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://images.squarespace-cdn.com/content/5e4c85ec9d8d286b95e16196/1582073566753-805DEDK0T3Q6NDZYCOF0/baitnhook-logo.png?content-type=image%2Fpng",
            }}
          />
          <View style={styles.splash}></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  img: {
    resizeMode: "contain",
    width: "35%",
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
