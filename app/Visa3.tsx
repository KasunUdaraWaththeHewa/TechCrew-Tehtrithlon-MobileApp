import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, FlatList,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";

export default function VisaApplication() {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [isGenderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const genders = ["Male", "Female", "Other"];

  return (
    <>
      {/* Header */}
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <TextInput style={styles.input} placeholder="Full Name (As per passport)" value="John Doe" />
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.inputWithFlex}
              placeholder="Date of Birth"
              value="1987-05-12"
            />
            <Ionicons name="calendar" size={24} color="#000" style={styles.icon} />
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.halfInput}
              onPress={() => setGenderDropdownVisible(true)}
            >
              <Text>{selectedGender}</Text>
              <Ionicons name="chevron-down" size={24} color="#000" />
            </TouchableOpacity>

            <TextInput style={styles.halfInput} placeholder="Nationality" value="Sri Lankan" />
          </View>

          <TextInput style={styles.input} placeholder="Place of Birth" value="Country" />
          <TextInput style={styles.input} placeholder="Marital Status" value="Married" />
          <TextInput style={styles.input} placeholder="Residential Address (Current and Permanent)" value="No.123, Rose Road, Town Square" />
          <TextInput style={styles.input} placeholder="Phone Number (Mobile)" value="+04 123 456 789" />
          <TextInput style={styles.input} placeholder="Email Address" value="john@gmail.com" editable={false} />
        </View>
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
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text" size={24} color="#FCC423" />
          <Text style={{ color: "#FCC423" }}>E-Passport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass" size={24} color="#000" />
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#000" />
          <Text>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#000" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FCC423",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  inputWithFlex: {
    flex: 1,
    fontSize: 14,
    color: "#999",
  },
  icon: {
    marginLeft: 10,  
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  halfInput: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
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
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
