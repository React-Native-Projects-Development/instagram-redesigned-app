import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Badge, Button, Icon } from "native-base";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="shape-circle-plus"
          size={24}
          color="black"
        />
        <Text style={styles.headerTitle}>Instagram</Text>
        <Button
          badge
          vertical
          style={{ backgroundColor: "transparent", elevation: 0 }}
        >
          <Badge>
            <Text>2</Text>
          </Badge>
          <Feather name="message-circle" size={24} color="black" />
        </Button>
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
    fontSize: 32,
  },
});
export default Header;
