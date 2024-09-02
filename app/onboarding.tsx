import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

const data = [
  {
    title: "Welcome to Your Safe Journey in Sri Lanka",
    paragraph:
      "Explore the beauty of Sri Lanka with peace of mind. Our app is designed to keep you informed and safe throughout your journey.",
    image: require("../assets/images/onboarding1.png"),
  },
  {
    title: "Stay Informed with Real-Time Safety Alerts",
    paragraph:
      "Receive timely notifications about safety conditions wherever you are in Sri Lanka. Be prepared and stay safe.",
    image: require("../assets/images/onboarding2.png"),
  },
  {
    title: "Quick Access to Emergency Services",
    paragraph:
      "Receive timely notifications about safety conditions wherever you are in Sri Lanka. Be prepared and stay safe.",
    image: require("../assets/images/onboarding3.png"),
  },
  {
    title: "Respect the Culture and Local Guidelines",
    paragraph:
      "Receive timely notifications about safety conditions wherever you are in Sri Lanka. Be prepared and stay safe.",
    image: require("../assets/images/onboarding4.png"),
  },
];

const Onboarding1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={data[currentIndex].image}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientOverlay}
      />

      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data[currentIndex].title}</Text>
          <Text style={styles.paragraph}>{data[currentIndex].paragraph}</Text>
        </View>

        {currentIndex === data.length - 1 ? (
          <Link href="/signup1">
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Your Journey</Text>
            </TouchableOpacity>
          </Link>
        ) : (
          <>
            <View style={styles.indicatorContainer}>
              {data.map((_, index) => (
                <Image
                  key={index}
                  source={
                    currentIndex === index
                      ? require("../assets/icons/Line.png")
                      : require("../assets/icons/Dot.png")
                  }
                  style={[
                    styles.indicatorImage,
                    currentIndex === index && styles.activeIndicatorImage,
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <View style={styles.ring}>
                <View style={styles.buttonCircle}>
                  <Image
                    source={require("../assets/icons/arrow-icon.jpg")}
                    style={styles.icon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    paddingBottom: 60,
  },
  textContainer: {
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginBottom: 130,
  },
  title: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 2,
  },
  ring: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCircle: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    elevation: 3,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    left: 20,
    alignItems: "center",
  },
  indicatorImage: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
  },
  activeIndicatorImage: {
    width: 30,
    height: 10,
  },
  startButton: {
    backgroundColor: "#FCC423",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: width - 70,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Onboarding1;
