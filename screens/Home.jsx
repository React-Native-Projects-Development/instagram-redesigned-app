import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Timeline from "../components/Timeline";

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Contacts />
        <SearchBar />
        <Timeline />
      </ScrollView>
      <Footer navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F6FA",
  },
});
export default Home;
