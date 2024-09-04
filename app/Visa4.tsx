import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";
import CustomTabBar from "@/components/CustomTabBar";
import { useRouter } from "expo-router";

export default function VisaApplication() {
  const router = useRouter();
  return (
    <>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Travel Information</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Purpose of Visit</Text>
            <TextInput
              style={styles.input}
              placeholder="Tourism, Medical Treatment, etc."
              placeholderTextColor="#888888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Intended Date of Arrival</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.inputWithFlex}
                placeholder="YYYY-MM-DD"
                value="2024-09-12"
              />
              <Ionicons
                name="calendar"
                size={24}
                color="#000"
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Intended Duration of Stay</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 2 weeks"
              value="2 weeks"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Address in Sri Lanka</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter address"
              value="Apt.12, Spring Hotel, Colombo 7"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Previous Visits to Sri Lanka</Text>
            <TextInput
              style={styles.input}
              placeholder="If Any"
              placeholderTextColor="#888888"
            />
          </View>
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity style={styles.previousButton} onPress={() => router.push("/Visa3")}>
            <Text style={styles.previousButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => router.push("/Visa5")}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomTabBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FCC423",
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  inputWithFlex: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  icon: {
    marginLeft: 10,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  previousButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  previousButtonText: {
    color: "#000",
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "#FCC423",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
