import React, { useState } from "react";
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
import { CheckBox } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Signup2 = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isUsernameFocused, setUsernameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [isCountryFocused, setCountryFocused] = useState(false);

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
        <Text style={styles.text}>Create Your Account</Text>
        <Text style={styles.paragraph}>
          Join us for a safe and informed journey,
        </Text>

        <TextInput
          style={[styles.input, isEmailFocused && styles.inputFocused]}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <TextInput
          style={[styles.input, isUsernameFocused && styles.inputFocused]}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
        />
        <TextInput
          style={[styles.input, isPasswordFocused && styles.inputFocused]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        <TextInput
          style={[
            styles.input,
            isConfirmPasswordFocused && styles.inputFocused,
          ]}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
        />
        <TextInput
          style={[styles.input, isCountryFocused && styles.inputFocused]}
          placeholder="Country"
          placeholderTextColor="#999"
          value={country}
          onChangeText={setCountry}
          onFocus={() => setCountryFocused(true)}
          onBlur={() => setCountryFocused(false)}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={privacyPolicy}
            onPress={() => setPrivacyPolicy(!privacyPolicy)}
            containerStyle={styles.checkbox}
            title="I agree with Privacy Policy"
            textStyle={styles.checkboxLabel}
          />
        </View>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/verificationCode")}
        >
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>

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
    height: height * 0.85,
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
    textAlign: "left",
    width: width - 120,
    marginBottom: 20,
    marginTop: 10,
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
    marginBottom: 10,
    width: width - 90,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: width - 90,
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputFocused: {
    borderColor: "#FCC423",
    shadowColor: "#FCC423",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  checkboxLabel: {
    color: "#666",
    fontSize: 14,
  },
  forgotPassword: {
    color: "#666",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default Signup2;
