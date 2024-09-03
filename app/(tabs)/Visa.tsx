import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function VisaScreen() {
  return (
    <View style={styles.container}>
      {/* Using ImageBackground to allow content overlay */}
      <ImageBackground
        source={require("../../assets/images/VisaTop.png")}
        style={styles.image}
        resizeMode="cover"
      >
        {/* Header content goes here */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require("../../assets/icons/profile.png")}
              style={styles.profileImage}
            />
            <Text style={styles.greetingText}>Ayubowan John!</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height / 5,
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: 100, // Adjust this value to control vertical position
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
