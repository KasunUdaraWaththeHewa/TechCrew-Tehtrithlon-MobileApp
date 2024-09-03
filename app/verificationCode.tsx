import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const Signup1 = () => {
  const router = useRouter();
  const [code, setCode] = useState(Array(5).fill(""));
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/onboarding4.png")}
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
        <Text style={styles.text}>Enter Verification Code</Text>
        <Text style={styles.paragraph}>
          We’ve sent a code to John******@gmail.com
        </Text>
        <Text style={styles.timer}>
          {Math.floor(seconds / 60)}:
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </Text>
        <View style={styles.codeContainer}>
          {code.map((_, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleCodeChange(index, value)}
              value={code[index]}
            />
          ))}
        </View>
        <Text style={styles.paragraph}>
          Didn’t get a code ?{" "}
          <TouchableOpacity onPress={() => router.push("/resend")}>
            <Text style={{ color: "#FCC423", fontWeight: "bold" }}>
              Click to resend.
            </Text>
          </TouchableOpacity>
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.grayParagraph}>
          by{" "}
          <Text onPress={() => router.push("https://sltda.gov.lk")}>
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
    height: height * 0.55,
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
  cancelButton: {
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: (width - 90) / 2,
    marginRight: 10,
  },
  cancelButtonText: {
    color: "#000",
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: "#FCC423",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: (width - 90) / 2,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 120,
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  timer: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Signup1;
