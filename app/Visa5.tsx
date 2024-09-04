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
        {/* Upload Documents Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Upload Documents</Text>
          <Text style={styles.supportedFormats}>
            Supported File Formats : pdf,png,jpg
          </Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Recent Passport</Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <TextInput
                style={styles.input}
                placeholder="Select the document"
                placeholderTextColor="#888"
                editable={false}
              />
              <Ionicons
                name="cloud-upload-outline"
                size={24}
                color="#000"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>
              Scanned copy of passport data page
            </Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <TextInput
                style={styles.input}
                placeholder="Select the document"
                placeholderTextColor="#888"
                editable={false}
              />
              <Ionicons
                name="cloud-upload-outline"
                size={24}
                color="#000"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Any other supporting documents</Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <TextInput
                style={styles.input}
                placeholder="Select the document"
                placeholderTextColor="#888"
                editable={false}
              />
              <Ionicons
                name="cloud-upload-outline"
                size={24}
                color="#000"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.helperText}>
            e.g., invitation letter, medical certificates, proof of
            accommodation
          </Text>
        </View>

        {/* Previous and Next Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.previousButton}
            onPress={() => router.push("/Visa4")}
          >
            <Text style={styles.previousButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push("/Visa6")}
          >
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
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  formContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FCC423",
    marginBottom: 20,
  },
  supportedFormats: {
    fontSize: 14,
    color: "#888",
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
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    marginLeft: 10,
  },
  helperText: {
    fontSize: 12,
    color: "#999",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  previousButton: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  previousButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  nextButton: {
    backgroundColor: "#FCC423",
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
