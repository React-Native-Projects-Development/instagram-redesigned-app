import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Badge } from "native-base";
import { IconButton } from "react-native-paper";
import AddStoryIcon from "./Icons/AddStoryIcon";
import ChatIcon from "./Icons/ChatIcon";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <IconButton
          icon={() => <AddStoryIcon height={24} width={24} color="#000" />}
          onPress={() => {}}
        />
        <Text style={styles.headerTitle}>Instagram</Text>

        <View>
          <Badge style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </Badge>
          <IconButton
            icon={() => <ChatIcon height={24} width={24} color="#000" />}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 75,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Billabong",
    fontSize: 36,
  },
  badge: {
    zIndex: 1,
    marginLeft: 25,
    marginBottom: -23,
    borderRadius: 10,
    height: 20,
    backgroundColor: "#DD2A7B",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default Header;
