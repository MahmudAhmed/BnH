import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faDirections, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends React.Component {

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
        <View style={styles.contactContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 40.73266,
              longitude: -73.98509,
              latitudeDelta: 0.0068,
              longitudeDelta: 0.0013,
            }}
          >
            <Marker
              coordinate={{ latitude: 40.73266, longitude: -73.98509 }}
              title={"Bait & Hook"}
              description={"231 2nd Ave. New York, NY 10003"}
            />
          </MapView>
        </View>
        <View style={styles.mainBtns}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${6466697833}`)}
            style={styles.btnContainer}
          >
            <View style={styles.btn}>
              <FontAwesomeIcon icon={faPhone} size={20} color={"green"} />
              <Text style={styles.callNow}>Ready to Order?</Text>
            </View> 
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.google.com/maps/dir//bait+and+hook/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c2599e5abb9fc1:0x2093fdafd77b31ac?sa=X&ved=2ahUKEwj8s_iDvdznAhUAj3IEHV9yC6AQ9RcwCnoECA8QEA"
              )
            }
            style={styles.btnContainer}
          >
            <View style={styles.btn}>
              <FontAwesomeIcon icon={faDirections} size={25} color={"blue"} />
              <Text style={styles.direction}>Get Directions</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.socialContainer}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            Connect With Us:
          </Text>
          <View style={styles.contactInfo}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.facebook.com/baitandhook/")
              }
              style={styles.btnContainer}
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size={50}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/baitandhook/")
              }
              style={styles.btnContainer}
            >
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size={50}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:support@example.com")}
              title="info@baitnhooknyc.com"
              style={styles.btnContainer}
            >
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                size={50}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menuSplash}>
          <View>
            <Text style={styles.h2}>Hungry?</Text>
            <Text style={styles.h3}>Let's fix that</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Menu")}
            style={styles.btnContainerBlue}
          >
            <Text style={styles.btnTxtWhite}>Start Ordering</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSplash: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  btnContainerBlue: {
    backgroundColor: "#051057",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 3,
  },
  btnTxtWhite: {
    color: "#FFF",
    fontSize: 15,
  },
  h2: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
    textAlign: "center",
  },
  h3: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  socialContainer: {
    backgroundColor: "#051057",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  callNow: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "green",
  },
  direction: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "blue",
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    marginVertical: 10,
    height: 50,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainBtns: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 240,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#FFF",
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
