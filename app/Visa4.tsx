import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";  

export default function VisaApplication() {
  return (
    <>
      
      <VisaHeader />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Travel Information</Text>

          
          <TextInput 
            style={styles.input} 
            placeholder="Tourism, visiting friends or relatives, medical treatment, cultural performance" 
            placeholderTextColor="#888888" 
          />

      
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.inputWithFlex}
              placeholder="Intended Date of Arrival in Sri Lanka"
              value="2024-09-12"  
            />
            <Ionicons name="calendar" size={24} color="#000" style={styles.icon} />
          </View>

         
          <TextInput 
            style={styles.input} 
            placeholder="Intended Duration of Stay" 
            value="2 weeks" 
          />

          
          <TextInput 
            style={styles.input} 
            placeholder="Address in Sri Lanka" 
            value="Apt.12, Spring Hotel, Colombo 7"  
          />

         
          <TextInput 
            style={styles.input} 
            placeholder="Previous Visits to Sri Lanka (If Any)" 
            placeholderTextColor="#888888" 
          />
        </View>
      </ScrollView>

    
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
});
