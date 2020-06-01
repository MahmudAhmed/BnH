import React from "react";
import { TouchableOpacity, Linking, FlatList, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const SPECIALS = [
  {
    title: "Happy Hours",
    day: "Everyday",
    details: "Every Day 5 pm - 7 pm",
    url:
      "https://cdn.touchbistro.com/wp-content/uploads/2019/12/happy-hour-thumbnail-570x300-1.png",
  },
  {
    title: "Mussels Monday",
    day: "Monday",
    details: "Every Monday. All you can Eat Mussels.",
    url:
      "https://www.telegraph.co.uk/content/dam/recipes/2020/03/11/cod-and-mussels_trans_NvBQzQNjv4Bq-IWLY18X4-CzgyIcjLEAj2gHASe0qT_uoC13QW9bQig.jpg",
  },
  {
    title: "Taco Tuesday",
    day: "Tuesday",
    details: "$1 Fish Taco's",
    url:
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
  },
  {
    title: "Wine Wednesday",
    day: "Wednesday",
    details: "Wine Tasting, Every Wednesday",
    url:
      "https://img.winespectator.com/wso/bolt/2019-06/1561485468_ww_glassware062519_1600.jpg",
  },
  {
    title: "Thirsty Thursday",
    day: "Thursday",
    details: "All you can Drink Thursday",
    url:
      "https://images.squarespace-cdn.com/content/v1/5a7497e29f8dcee376b70f7e/1521138297095-HA1W4QS3XF3HGRBEJDNQ/ke17ZwdGBToddI8pDm48kDEDYh4Y0JGhR6hzuwcJ44gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcz6bs2FkMoqlrQIzq4g5ogDqXr_T7rMikH_TfPkEE4wwzGwe9KEhUq6A0DxOZf-75/williams_bar.jpg?format=2500w",
  },
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default class Deals extends React.Component {

  constructor(props){
    super(props);
    this.state = { day: DAYS[new Date().getDay()] };
  }

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
        <View style={styles.splash}>
          <Text style={styles.h1}>SPECIALS</Text>
        </View>
        <FlatList
          data={SPECIALS}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ImageBackground
              source={{
                uri: item.url,
              }}
              style={styles.imgBackground}
            >
              <View
                style={[
                  styles.imgTxt,
                  this.state.day === item.day || "Everyday" === item.day
                    ? { backgroundColor: "purple" }
                    : "",
                ]}
              >
                <Text style={styles.h2White}>{item.title}</Text>
                <Text style={styles.h3White}>{item.details}</Text>
              </View>
            </ImageBackground>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgTxt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#051057",
    opacity: 0.7,
  },
  imgBackground: {
    height: 200,
    borderWidth: 1,
    borderColor: "white",
  },
  imgSelectBackground: {
    height: 200,
    borderWidth: 1,
    borderColor: "white",
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
  h2White: {
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
  splash: {
    marginTop: 20,
    backgroundColor: "#A7A9AC",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 40,
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