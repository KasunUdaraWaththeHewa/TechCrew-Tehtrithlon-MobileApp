import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";

export default function VisaApplication() {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [isGenderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const genders = ["Male", "Female", "Other"];

  return (
    <>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Personal Information Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Full Name (As per passport)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value="John Doe"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Date of Birth</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.inputWithFlex}
                placeholder="YYYY-MM-DD"
                value="1987-05-12"
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
            <Text style={styles.subTitle}>Gender</Text>
            <TouchableOpacity
              style={styles.halfInput}
              onPress={() => setGenderDropdownVisible(true)}
            >
              <Text>{selectedGender}</Text>
              <Ionicons name="chevron-down" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Nationality</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your nationality"
              value="Sri Lankan"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Place of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your place of birth"
              value="Country"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Marital Status</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your marital status"
              value="Married"
            />
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Contact Details</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Residential Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your current and permanent address"
              value="No.123, Rose Road, Town Square"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Phone Number (Mobile)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile phone number"
              value="+04 123 456 789"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.subTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              value="john@gmail.com"
              editable={false}
            />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Custom Dropdown for Gender */}
      <Modal
        transparent={true}
        visible={isGenderDropdownVisible}
        animationType="fade"
        onRequestClose={() => setGenderDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setGenderDropdownVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={genders}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedGender(item);
                    setGenderDropdownVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FCC423",
    marginBottom: 20,
    textAlign: "left",
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
    fontSize: 16,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  inputWithFlex: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    marginLeft: 10,
  },
  halfInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: "#FCC423",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdown: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
