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
import { useRouter, useLocalSearchParams } from "expo-router";

import CategoryCard from "@/components/CategoryCard";
import PlaceCard from "@/components/PlaceCard";

const Explore2 = () => {

  const { title } = useLocalSearchParams(); // Retrieve query parameters
  const router = useRouter();

   const categories = [
     {
       title: "Ocean",
       image: require("../assets/images/ocean.png"),
     },
     {
       title: "Beaches",
       image: require("../assets/images/beach.png"),
     },
     {
       title: "Mountains",
       image: require("../assets/images/mountains.png"),
     },
     {
       title: "Forests",
       image: require("../assets/images/forests.png"),
     },
   ];

   const mountains = [
     {
       title: "Sigiriya",
       image: require("../assets/images/sigiriya.jpg"),
     },
     {
       title: "Sigiriya",
       image: require("../assets/images/sigiriya.jpg"),
     },
     {
       title: "Sigiriya",
       image: require("../assets/images/sigiriya.jpg"),
     },
     {
       title: "Sigiriya",
       image: require("../assets/images/sigiriya.jpg"),
     },
   ];

   const beaches = [
     {
       title: "Nilaveli Beach",
       image: require("../assets/images/nilaveli.jpg"),
     },
     {
       title: "Nilaveli Beach",
       image: require("../assets/images/nilaveli.jpg"),
     },
   ];

   const handleCategoryPress = (category: { title: string; image?: any }) => {
     router.push({
       pathname: "/Explore2", // Adjust the path if needed
       params: { title: category.title }, // Change 'query' to 'params'
     });
   };

   const handleCardPress = (card: { title: string; image?: any }) => {
     router.push({
       pathname: "/Explore3", // Adjust the path if needed
       params: { title: card.title, image: card.image }, // Change 'query' to 'params'
     });
   };

  return (
    <View style={styles.container}>
      <Text style={styles.goldTitle}>Where do you want to explore today?</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search places, photos or hashtags "
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image
            source={require("../assets/icons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.categoryContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Categories</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategoryPress(category)}
              >
                <CategoryCard
                  key={index}
                  title={category.title}
                  image={category.image}
                  clickedTitle={title.toString()} // Convert title to string
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Places */}
        <View style={styles.placesContainer}>
          {title === "Mountains" &&
            mountains.map((mountain, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCardPress(mountain)}
              >
                <PlaceCard
                  key={index}
                  place={mountain.title}
                  venue={""}
                  image={mountain.image}
                  likes={""}
                />
              </TouchableOpacity>
            ))}
          {title === "Beaches" &&
            beaches.map((beach, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCardPress(beach)}
              >
                <PlaceCard
                  key={index}
                  place={beach.title}
                  venue={""}
                  image={beach.image}
                  likes={""}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 40,
  },
  goldTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 10,
    textAlign: "left",
    color: "gold",
    alignSelf: "flex-start",
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
  categoryContainer: {
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  placesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    paddingHorizontal: 30,
    alignItems: "flex-start",
    justifyContent: "space-around"
  }
});
