import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HeartIcon from "./Icons/HeartIcon";
import HomeIcon from "./Icons/HomeIcon";
import IGIcon from "./Icons/IGIcon";
import SearchIcon from "./Icons/Search";

const Footer = (props) => {
  return (
    <View style={[styles.screen]}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          height: 75,
          borderTopColor: "rgba(0,0,0,0.05)",
          borderTopWidth: 2,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderLeftColor: "rgba(0,0,0,0.05)",
          borderRightColor: "rgba(0,0,0,0.05)",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
        >
          <HomeIcon width={20} height={20} />
        </View>
        <View
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
        >
          <SearchIcon width={20} height={20} color="#909090" />
        </View>
        <View
          style={[
            {
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <LinearGradient
            colors={["#FC0B7B", "#7820AD"]}
            style={[
              {
                width: 80,
                height: 80,
                borderRadius: 40,
                position: "absolute",
                bottom: -10,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <IGIcon width={35} height={35} />
          </LinearGradient>
        </View>
        <View
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
        >
          <HeartIcon width={20} height={20} color="#909090" />
        </View>
        <View
          style={[
            {
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <View
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                overflow: "hidden",
              },
            ]}
          >
            <Image
              source={{
                uri:
                  "https://res.cloudinary.com/bgarcia95/image/upload/v1600204434/Ig-enhanced-pp-pics/pp7_vqatjj.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default Footer;
