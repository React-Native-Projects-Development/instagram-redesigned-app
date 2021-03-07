import { LinearGradient } from "expo-linear-gradient/build/LinearGradient";
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FitnessIcon from "../components/Icons/FitnessIcon";
import IGTVIcon from "../components/Icons/IGTVIcon";
import QRSearchIcon from "../components/Icons/QRSearch";
import SearchIcon from "../components/Icons/Search";
import StoreIcon from "../components/Icons/StoreIcon";
import TravelIcon from "../components/Icons/TravelIcon";

const Discover = (props) => {
  const images = [
    { id: "1", url: require("../assets/img/building.jpg") },
    { id: "2", url: require("../assets/img/city-night.jpg") },
    { id: "3", url: require("../assets/img/food.jpg") },
    { id: "4", url: require("../assets/img/japan.jpg") },
    { id: "5", url: require("../assets/img/tech.jpg") },
    { id: "6", url: require("../assets/img/sports.jpg") },
  ];

  return (
    <View style={styles.screen}>
      <Header />
      <View style={[styles.container]}>
        <FlatList
          data={[
            {
              key: "IGTV",
              label: "IGTV",
              icon: <IGTVIcon width={50} height={50} />,
            },
            {
              key: "TIENDA",
              label: "TIENDA",
              icon: <StoreIcon width={50} height={50} />,
            },
            {
              key: "VIAJES",
              label: "VIAJES",
              icon: <TravelIcon width={50} height={50} />,
            },
            {
              key: "FITNESSS",
              label: "FITNESSS",
              icon: <FitnessIcon width={50} height={50} />,
            },
          ]}
          horizontal
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item, index }) =>
            index === 0 && item.label === "IGTV" ? (
              <LinearGradient
                colors={["#FC0B7B", "#7820AD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  {
                    flex: 1,
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 125,
                    width: 125,
                    borderRadius: 15,
                    backgroundColor: "red",
                    marginHorizontal: 10,
                  },
                ]}
              >
                {item.icon}
                <Text
                  style={[{ color: "#fff", marginTop: 10, fontWeight: "bold" }]}
                >
                  {item.label}
                </Text>
              </LinearGradient>
            ) : (
              index > 0 &&
              item.label !== "IGTV" && (
                <View
                  style={[
                    {
                      flex: 1,
                      padding: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      height: 125,
                      width: 125,
                      borderRadius: 15,
                      backgroundColor:
                        index === 1
                          ? "#515BD4"
                          : index === 2
                          ? "#8134AF"
                          : index === 3 && "#DD2A7B",
                      marginHorizontal: 10,
                    },
                  ]}
                >
                  {item.icon}
                  <Text
                    style={[
                      { color: "#fff", marginTop: 10, fontWeight: "bold" },
                    ]}
                  >
                    {item.label}
                  </Text>
                </View>
              )
            )
          }
        />
      </View>

      <View
        style={[
          {
            flexDirection: "row",
            width: "90%",
            borderRadius: 26,
            backgroundColor: "#fff",
            height: 50,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 25,
          },
        ]}
      >
        <SearchIcon width={20} height={20} color="#909090" />
        <Text style={[{ color: "#D5D5D5", flex: 1, marginLeft: 10 }]}>
          Buscar
        </Text>
        <QRSearchIcon width={20} height={20} />
      </View>

      <View
        style={[
          {
            flex: 1,

            height: "100%",
            width: "100%",
            marginTop: 20,
            paddingVertical: 10,
          },
        ]}
      >
        <FlatList
          data={images}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <>
                {!index && (
                  <View
                    style={[
                      {
                        position: "absolute",
                        top: 0,
                        left: 20,
                      },
                    ]}
                  >
                    <Text style={[{ fontSize: 25, fontWeight: "bold" }]}>
                      Populares
                    </Text>
                  </View>
                )}
                <View
                  style={[
                    {
                      flex: 1,
                      width: 180,
                      height: 250,
                      borderRadius: 19,
                      margin: 10,
                      overflow: "hidden",
                      marginTop:
                        index % 2 === 0 && index !== 0
                          ? 30
                          : index === 0
                          ? 50
                          : index === 1
                          ? 0
                          : -20,
                    },
                  ]}
                >
                  <Image
                    source={item.url}
                    style={[{ width: "100%", height: "100%" }]}
                  />
                </View>
              </>
            );
          }}
        />
      </View>
      <Footer navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    height: 150,
    width: "100%",
  },
});
export default Discover;
