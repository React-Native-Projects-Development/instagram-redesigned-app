import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Badge } from "native-base";
import { IconButton } from "react-native-paper";
import AddStoryIcon from "./Icons/AddStoryIcon";
import ChatIcon from "./Icons/ChatIcon";

const Header = (props) => {
  return (
    <View style={[styles.header, { marginTop: StatusBar.currentHeight }]}>
      <View style={styles.row}>
        <IconButton
          icon={() => <AddStoryIcon height={24} width={24} color='#000' />}
          onPress={() => {}}
        />
        <Text style={styles.headerTitle}>Instagram</Text>

        <View>
          <Badge style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </Badge>
          <IconButton
            icon={() => <ChatIcon height={22} width={22} color='#000' />}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
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
    width: 20,
    backgroundColor: "#DD2A7B",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },
});
export default Header;
