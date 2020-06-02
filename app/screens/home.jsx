import React from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ width: 20 }}></Text>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://images.squarespace-cdn.com/content/5e4c85ec9d8d286b95e16196/1582073566753-805DEDK0T3Q6NDZYCOF0/baitnhook-logo.png?content-type=image%2Fpng",
            }}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${6466697833}`)}
          >
            <FontAwesomeIcon icon={faPhone} size={20} color={"#A7A9AC"} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.mainScroll}>
          <ImageBackground
            source={{
              uri: "https://wallpaperaccess.com/full/1491751.jpg",
            }}
            style={styles.imgBackground}
          >
            <View style={styles.splash}>
              <Text style={styles.h1}>Discover your specials</Text>
              <Text style={styles.h3White}>
                There's fresh offers every week
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Deals")}
                style={styles.btnContainer}
              >
                <Text style={styles.btnTxt}>View Specials</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.subSplashContainer}>
            <Text style={styles.h2}>Menu</Text>
            <ImageBackground
              source={{
                uri: "https://pbs.twimg.com/media/Ds3RDhAXgAAg4pf.jpg",
              }}
              style={styles.subSplashWhite}
            >
              <View style={styles.menuSplash}>
                <Text style={styles.h2}>Hungry?</Text>
                <Text style={styles.h3}>Let's fix that</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Menu")}
                  style={styles.btnContainerBlue}
                >
                  <Text style={styles.btnTxtWhite}>Start Ordering</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.subSplashContainer}>
            <Text style={styles.h2}>Specials</Text>
            <View style={styles.subSplash}>
              <Text style={styles.h21}>Daily Specials</Text>
              <Text style={styles.h3White}>On everything you love</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Deals")}
                style={styles.btnContainer}
              >
                <Text style={styles.btnTxt}>View Specials</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subSplashContainer}>
            <Text style={styles.h2}>Delivery</Text>
            <View style={[styles.subSplash, { backgroundColor: "#F5343E" }]}>
              <Text style={styles.h21}>Order Seafood Now</Text>
              <Text style={styles.h3White}>Let your favorite come to...</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.grubhub.com/restaurant/bait--hook-231-2nd-ave-new-york/555238"
                  )
                }
                style={styles.btnContainer}
              >
                <Text style={styles.btnTxt}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSplash: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBackground: {
    height: 200,
    borderWidth: 1,
    borderColor: "white",
  },
  mainScroll: {
    backgroundColor: "#F2F2F2",
  },
  h1: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
  },
  h2: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
  },
  h21: {
    fontWeight: "bold",
    color: "white", 
    fontSize: 25,
  },
  h3White: {
    color: "#fff",
    fontSize: 20,
  },
  h3: {
    color: "black",
    fontSize: 20,
  },
  btnContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 3,
  },
  btnContainerBlue: {
    backgroundColor: "#051057",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 3,
  },
  btnTxt: {
    color: "#051057",
    fontSize: 15,
  },
  btnTxtWhite: {
    color: "#FFF",
    fontSize: 15,
  },
  splash: {
    width: "100%",
    height: 200,
    backgroundColor: "#051057",
    opacity: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
  subSplashContainer: {
    marginHorizontal: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  subSplash: {
    marginTop: 10,
    paddingTop: 10,
    width: "100%",
    height: 160,
    backgroundColor: "#051057",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  subSplashWhite: {
    marginTop: 10,
    // paddingTop: 10,
    width: "100%",
    height: 160,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
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
