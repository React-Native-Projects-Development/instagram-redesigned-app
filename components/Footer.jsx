import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HeartIcon from "./Icons/HeartIcon";
import HomeIcon from "./Icons/HomeIcon";
import IGIcon from "./Icons/IGIcon";
import SearchIcon from "./Icons/Search";

const Footer = ({ navigation }) => {
  return (
    <View style={[styles.screen]}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          height: 60,
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
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <HomeIcon width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
          onPress={() => navigation.navigate("Discover")}
        >
          <SearchIcon width={20} height={20} color='#909090' />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            {
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          // onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            colors={["#FC0B7B", "#7820AD"]}
            style={[
              {
                width: 60,
                height: 60,
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
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
          // onPress={() => navigation.navigate("Home")}
        >
          <HeartIcon width={20} height={20} color='#909090' />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            {
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          // onPress={() => navigation.navigate("Home")}
        >
          <View
            style={[
              {
                width: 30,
                height: 30,
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
        </TouchableOpacity>
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
