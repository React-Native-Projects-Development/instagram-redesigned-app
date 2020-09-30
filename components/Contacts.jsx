import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { usersData } from "../data/dummy-data";
import AvatarStory from "./AvatarStory";

const Contacts = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={usersData}
        renderItem={({ item, index }) => (
          <AvatarStory
            index={index}
            user={item.user}
            profilePicture={item.profilePicture}
          />
        )}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
  },
});

export default Contacts;
