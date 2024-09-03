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

export default function VisaHeader() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/VisaTop.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/icons/profile.png")}
              style={styles.profileImage}
            />
            <Text style={styles.greetingText}>Ayubowan John !</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
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
    color: "black",
  },
});
