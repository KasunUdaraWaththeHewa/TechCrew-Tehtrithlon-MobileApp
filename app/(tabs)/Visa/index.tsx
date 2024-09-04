import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";
import { useRouter } from "expo-router";

export default function VisaScreen() {
  const router = useRouter();
  return (
    <>
      <VisaHeader />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Welcome to Sri Lanka`s Official Tourism Services Portal
        </Text>
        <Text style={styles.paragraph}>
          Whether you're planning your first visit to Sri Lanka or returning to
          explore more, our portal offers everything you need to prepare for
          your journey. Easily apply for a visa, create your Digital Tourist ID,
          and access essential travel information—all in one place.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Get Started with your Digital ID
          </Text>
          <Ionicons name="arrow-forward" size={16} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Visa2")}
        >
          <Text style={styles.buttonText}>Start Visa Application</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.subtitle}>What is a Digital Tourist ID?</Text>
        <Text style={styles.paragraph}>
          Your Digital Tourist ID is your key to smooth and secure travel within
          Sri Lanka. Use it for quick check-ins, access to services, and more.
        </Text>
        <View style={styles.digitalIDFlex}>
          <Image
            source={require("../../../assets/images/DigitalID.png")}
            style={styles.digitalIdImage}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.learnMore}>
            <Text style={styles.learnMoreText}>
              Learn More About the Digital ID
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#000000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>How to Apply for a Visa?</Text>
        <Text style={styles.paragraph}>
          Learn about the different visa options available and how to apply. We
          make the process simple and fast.
        </Text>
        <TouchableOpacity style={styles.exploreVisaOptions}>
          <View style={{ width: "50%", flexDirection: "row" }}>
            <Text style={styles.exploreVisaOptionsText}>
              Explore Visa Options
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#000000" />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#FCC423",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    color: "#000000",
    width: "97%",
  },
  paragraph: {
    fontSize: 12,
    color: "#000000",
    marginTop: 10,
    textAlign: "justify",
    paddingHorizontal: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCC423",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "97%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    marginRight: 8,
    width: "90%",
  },
  digitalIdImage: {
    width: "50%",
    height: 100,
    marginVertical: 20,
  },
  learnMoreText: {
    color: "#000000",
    fontSize: 12,
    marginVertical: 10,
  },
  exploreVisaOptionsText: {
    color: "#000000",
    fontSize: 14,
    width: "80%",
  },
  digitalIDFlex: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  learnMore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  exploreVisaOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
    paddingLeft: 20,
  },
});
