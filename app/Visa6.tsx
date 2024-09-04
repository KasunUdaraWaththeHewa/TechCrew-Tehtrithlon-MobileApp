import React, { useState } from "react";
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

export default function ReviewInformation() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const CustomCheckBox = ({ isChecked, onPress }) => (
    <TouchableOpacity
      style={styles.checkBox}
      onPress={onPress}
    >
      <Ionicons
        name={isChecked ? "checkbox" : "square-outline"}
        size={24}
        color="#000"
      />
    </TouchableOpacity>
  );

  return (
    <>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Review and Confirm Information Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Review and Confirm Your Information</Text>

          <View style={styles.checkBoxContainer}>
            <CustomCheckBox
              isChecked={isChecked1}
              onPress={() => setChecked1(!isChecked1)}
            />
            <Text style={styles.checkBoxText}>
              I hereby declare that the information provided in this application is true,
              accurate, and complete to the best of my knowledge.
            </Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <CustomCheckBox
              isChecked={isChecked2}
              onPress={() => setChecked2(!isChecked2)}
            />
            <Text style={styles.checkBoxText}>
              I understand and agree to comply with all applicable Sri Lankan immigration laws
              and regulations during my stay.
            </Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <CustomCheckBox
              isChecked={isChecked3}
              onPress={() => setChecked3(!isChecked3)}
            />
            <Text style={styles.checkBoxText}>
              I have read and agree to the terms and conditions outlined by the Sri Lankan
              immigration authorities, including policies on visa issuance and use.
            </Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>
              Please provide your electronic signature to complete this application
            </Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <TextInput
                style={styles.input}
                placeholder="Image of your Signature"
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
        </View>

        {/* Previous and Submit Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.previousButton}>
            <Text style={styles.previousButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
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
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  checkBox: {
    marginRight: 10,
    marginTop: 3,
  },
  checkBoxText: {
    flex: 1,
    fontSize: 14,
    color: "#555",
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
  submitButton: {
    backgroundColor: "#FCC423",
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
