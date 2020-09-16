import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { usersData } from "../data/dummy-data";
import Card from "./UI/Card";

const Timeline = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={usersData}
        renderItem={({ item }) => (
          <Card user={item.user} profilePicture={item.profilePicture} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Timeline;
