import React from 'react';
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
import CategoryCard from '@/components/CategoryCard';

export default function ExploreScreen() {

  const categories = [
    {
      title: "Ocean",
      image: require("../../../assets/images/news.png"),
    },
    {
      title: "Beach",
      image: require("../../../assets/images/news.png"),
    },
    {
      title: "Mountains",
      image: require("../../../assets/images/news.png"),
    },
    {
      title: "Forests",
      image: require("../../../assets/images/news.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <VisaHeader />
      <Text style={styles.goldTitle}>Where do you want to explore today?</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search places, photos or hashtags "
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image
            source={require("../../../assets/icons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/explore1.png")} />
      </View>

        <View style={styles.categoryContainer}>
          <Text>Categories</Text>
          <Text>See All</Text>
          <ScrollView horizontal>
            {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
          </ScrollView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goldTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
    color: "gold",
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
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  searchIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    height: 100,
  },
  categoryContainer: {
    width: "90%",

  }
});
