import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchIcon from "./Icons/Search";

const SearchBar = (props) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          height: "5%",
          marginVertical: 10,
          width: "90%",
        },
      ]}
    >
      <View
        style={[
          {
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "center",
          },
        ]}
      >
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 24 }}>
          Explorar
        </Text>
      </View>
      <View
        style={[
          {
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            borderRadius: 26,
            paddingLeft: 20,
          },
        ]}
      >
        <SearchIcon width={20} height={20} color="#909090" />
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
});
export default SearchBar;
