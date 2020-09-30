import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./components/Header";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Contacts from "./components/Contacts";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const loadFonts = async () =>
  await Font.loadAsync({
    Billabong: require("./assets/fonts/Billabong.ttf"),
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setLoading(false)} />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Contacts />
      <SearchBar />
      <Timeline />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    paddingTop: 50,
    alignItems: "center",
  },
});

export default App;
