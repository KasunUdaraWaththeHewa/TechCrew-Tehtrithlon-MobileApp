import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaHeader from "@/components/VisaHeader";

export default function VisaScreen() {
  const [selectedVisa, setSelectedVisa] = useState(null);

  const visaOptions = [
    {
      id: 1,
      title: "Tourist Visa – 30 Days",
      description:
        "Enables short-term visitors to come to Sri Lanka for a period of 30 days with the single entry facility.",
    },
    {
      id: 2,
      title: "Standard Visitor Visa",
      description:
        "Enables short-term visitors to come to Sri Lanka for a period of 06 months limiting the 60 days stay at each visit with the double entry facility.",
    },
    {
      id: 3,
      title: "One Year Multiple Entry Visa",
      description:
        "A visa issued to a foreigner who wishes to enter Sri Lanka on several occasions within the overall period authorized by a visa for the purpose of tourism permitting to stay one year limiting 90 days visit at each stay for the potential applicant with the multiple entry facility.",
    },
    {
      id: 4,
      title: "Two Years Multiple Entry Visa",
      description:
        "A visa issued to a foreigner who wishes to enter Sri Lanka on several occasions within the overall period authorized by a visa for the purpose of tourism activities permitting to stay two years limiting 180 days visit at each stay for the potential applicant.",
    },
  ];

  const handleVisaSelection = (id: any) => {
    setSelectedVisa(id);
  };

  return (
    <>
      <VisaHeader />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Visa Application</Text>

        <Text style={styles.title2}>Select Your Visa Type</Text>
        <Text style={styles.paragraph}>
          Choose the visa that best fits your travel plans. Review the
          eligibility, duration, and permitted activities for each option.
        </Text>
        {visaOptions.map((visa) => (
          <TouchableOpacity
            key={visa.id}
            style={[
              styles.visaOption,
              selectedVisa === visa.id && styles.selectedVisaOption,
            ]}
            onPress={() => handleVisaSelection(visa.id)}
          >
            <View style={styles.optionContent}>
              <Ionicons
                name={
                  selectedVisa === visa.id
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={20}
                color={selectedVisa === visa.id ? "#FCC423" : "#000"}
              />
              <View style={styles.optionTextContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.optionTitle}>{visa.title}</Text>
                  <Text style={styles.viewDetails}>View Details ➔</Text>
                </View>
                <Text style={styles.optionDescription}>{visa.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#FCC423",
  },
  title2: {
    fontSize: 18,
    marginTop: 20,
    color: "#000000",
  },
  paragraph: {
    fontSize: 14,
    color: "#000000",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "justify",
  },
  visaOption: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 0,
    marginTop: 10,
    marginBottom: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedVisaOption: {
    borderColor: "#FCC423",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  optionTextContainer: {
    marginLeft: 5,
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row", // Ensures elements are in a row
    justifyContent: "space-between", // Adds space between the title and details
    alignItems: "center", // Vertically aligns text in the center
    width: "100%",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  optionDescription: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  viewDetails: {
    color: "#FCC423",
    fontSize: 12,
    textAlign: "right",
    marginTop: 0,
  },
  proceedButton: {
    backgroundColor: "#FCC423",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  proceedButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
