import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient/build/LinearGradient";

const AvatarStory = (props) => {
  return (
    <View style={styles.avatarWrapper}>
      <LinearGradient
        colors={
          (props.index === 0 && ["#e8e8e8", "#e8e8e8"]) || [
            "#FC0B7B",
            "#7820AD",
          ]
        }
        start={[0, 0.3]}
        end={[0, 0.8]}
        style={[
          styles.avatarContainer,
          props.index === 0 && { marginLeft: 15 },
          {
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Image
          source={{ uri: props.profilePicture }}
          style={styles.avatarImage}
        />

        {props.index === 0 && (
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#fff",
              overflow: "hidden",
              position: "absolute",
              bottom: -15,
            }}
          >
            <LinearGradient
              colors={["#F60B7D", "#7D1FAA"]}
              start={[0, 0.1]}
              end={[0, 0.75]}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
            </LinearGradient>
          </View>
        )}
      </LinearGradient>

      {props.index !== 0 && <Text style={styles.avatarText}>{props.user}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: { alignItems: "center" },
  avatarContainer: {
    marginHorizontal: 5,
    borderWidth: 1,
    height: 75,
    width: 75,
    borderRadius: 50,
    borderColor: "#E8E8E8",
  },
  avatarText: {
    color: "#737476",
    marginVertical: 2,
    fontSize: 10,
  },
  avatarImage: { width: "90%", height: "90%", borderRadius: 50 },
});

export default AvatarStory;
