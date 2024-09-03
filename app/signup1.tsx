import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const Signup1 = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/signup1.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientOverlay}
      />
      <View style={styles.whiteDiv}>
        <Image
          source={require("../assets/icons/sltda-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Travel Safely with Confidence</Text>
        <Text style={styles.paragraph}>
          Immerse yourself in the beauty of Sri Lanka, from pristine beaches to
          ancient temples, with the assurance that you're always connected to
          the latest safety information.
        </Text>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={{ color: "#FCC423", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.grayParagraph}>
          by{" "}
          <Text
            onPress={() => router.push("https://sltda.gov.lk")}
          >
            Sri Lanka Tourist Development Authority
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  whiteDiv: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: height * 0.45,
    backgroundColor: "#fff",
    zIndex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  grayParagraph: {
    color: "#999",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: "#FCC423",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: width - 90,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Signup1;
