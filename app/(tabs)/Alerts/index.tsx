// screens/AlertScreen.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import VisaHeader from "@/components/VisaHeader";
import ImageSlider from "@/components/ImageSlider";

const newsData = [
  {
    title: "Breaking News 1",
    image: require("../../../assets/images/news.png"),
  },
  {
    title: "Breaking News 2",
    image: require("../../../assets/images/news.png"),
  },
  {
    title: "Breaking News 3",
    image: require("../../../assets/images/news.png"),
  },
];

const recommendationsData = [
  { title: "Recommendation 1", image: require("../../../assets/images/alert.png") },
  { title: "Recommendation 2", image: require("../../../assets/images/alert.png") },
  { title: "Recommendation 3", image: require("../../../assets/images/alert.png") },
  { title: "Recommendation 4", image: require("../../../assets/images/alert.png") },
];

export default function AlertScreen() {
  return (
    <View style={styles.container}>
      <VisaHeader />
      <Text style={styles.goldTitle}>Search alerts or news.</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image
            source={require("../../../assets/icons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.sliderContainer}>
        <Text style={styles.title}>Breaking News</Text>
        <ImageSlider data={newsData} />
        
        <Text style={styles.title}>Recommendations</Text>
        <View style={styles.recommendationsContainer}>
          {recommendationsData.map((item, index) => (
            <View key={index} style={styles.recommendationItem}>
              <Image source={item.image} style={styles.recommendationImage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 30,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
  },
  goldTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
    color: "gold",
  },
  sliderContainer: {
    paddingVertical: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "22%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
  },
  recommendationsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  recommendationItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recommendationImage: {
    width: 320,
    height: 60,
  },
  recommendationText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});
