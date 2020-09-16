import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import { SliderBox } from "react-native-image-slider-box";

const Card = (props) => {
  const images = [
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222966/ig-enhanced-tl-pics/tl-1_k7v6tl.png",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222957/ig-enhanced-tl-pics/tl-2_e53gwr.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222956/ig-enhanced-tl-pics/tl-3_ygwf7g.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222957/ig-enhanced-tl-pics/tl-4_ortvgv.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222958/ig-enhanced-tl-pics/tl-5_m6l8zj.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222963/ig-enhanced-tl-pics/tl-6_mtwoky.png",
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: props.profilePicture }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {props.user}
            </Text>
            <Text style={{ color: "#969696" }}>Hace 20 min</Text>
          </View>
          <View
            style={[
              styles.cardHeader,
              {
                flex: 1,
                paddingHorizontal: 0,
                justifyContent: "flex-end",
              },
            ]}
          >
            <View style={{ marginHorizontal: 5 }}>
              <FontAwesome5 name="telegram-plane" size={24} color="#969696" />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <AntDesign name="sharealt" size={24} color="#969696" />
            </View>
          </View>
        </View>
        {/* Card Header */}

        <View
          style={{
            width: "100%",
            height: 350,
            marginVertical: 10,
            alignItems: "center",
            borderColor: "#e8e8e8",
            borderWidth: 1,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <SliderBox
            images={images}
            sliderBoxHeight={350}
            parentWidth={350}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    height: 500,
    width: "90%",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default Card;
