// screens/HomeScreen.tsx
import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import VisaHeader from "@/components/VisaHeader";
import ImageSlider from "@/components/ImageSlider";
import IconBox from "@/components/IconBox"; // Import the new component

// Replace with actual icon paths
const heartIcon = require("../../../assets/icons/heart.png");
const bitesIcon = require("../../../assets/icons/bug.png");
const seizureIcon = require("../../../assets/icons/mask.png");
const emergencyIcon = require("../../../assets/icons/health.png");
const policeIcon = require("../../../assets/icons/police.png");

const emergencyButtonImage = require("../../../assets/images/emergency.png");
const policeButtonImage = require("../../../assets/images/callPolice.png");

const newsData = [
  {
    title: "Breaking News 1",
    image: require("../../../assets/images/news.png"),
  },
  {
    title: "Breaking News 2",
    image: require("../../../assets/images/news.png"),
  },
  {
    title: "Breaking News 3",
    image: require("../../../assets/images/news.png"),
  },
];

export default function HomeScreen() {
  const handleEmergencyButtonPress = () => {
    console.log("Emergency button pressed");
  };

  const handlePoliceButtonPress = () => {
    console.log("Police button pressed");
  };

  return (
    <View style={styles.container}>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.sliderContainer}>
        <Text style={styles.title}>Breaking News</Text>
        <ImageSlider data={newsData} />
        <Text style={styles.title}>Cause of Emergency</Text>
        <TouchableOpacity onPress={handleEmergencyButtonPress}>
          <Image source={emergencyButtonImage} style={styles.emergencyButton} />
        </TouchableOpacity>
        <View style={styles.iconBoxesContainer}>
          <IconBox icon={heartIcon} label="heart" />
          <IconBox icon={bitesIcon} label="bites" />
          <IconBox icon={seizureIcon} label="seizure" />
          <IconBox icon={emergencyIcon} label="emergency" />
          <IconBox icon={policeIcon} label="police" />
        </View>
        <TouchableOpacity onPress={handlePoliceButtonPress}>
          <Image source={policeButtonImage} style={styles.policeButton} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
  },
  sliderContainer: {
    paddingVertical: 10,
  },
  emergencyButton: {
    width: 340,
    alignSelf: "center",
    marginVertical: 20,
  },
  policeButton: {
    width: 340,
    alignSelf: "center",
    marginVertical: 20,
    marginTop: 10,
  },
  iconBoxesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
