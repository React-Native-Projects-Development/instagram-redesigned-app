import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Timeline from "../components/Timeline";

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Header />
      <Contacts />
      <SearchBar />
      <Timeline />
      <Footer navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
export default Home;
