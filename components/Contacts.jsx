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
        contentContainerStyle={{ paddingHorizontal: 10, flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
});

export default Contacts;
