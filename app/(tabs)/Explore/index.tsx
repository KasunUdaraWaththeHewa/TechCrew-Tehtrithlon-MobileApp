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
import PlaceCard from '@/components/PlaceCard';
import BlogCard from '@/components/BlogCard';

import { useRouter } from 'expo-router';

export default function ExploreScreen() {

  const router = useRouter();

  const categories = [
    {
      title: "Ocean",
      image: require("../../../assets/images/ocean.png"),
    },
    {
      title: "Beach",
      image: require("../../../assets/images/beach.png"),
    },
    {
      title: "Mountains",
      image: require("../../../assets/images/mountains.png"),
    },
    {
      title: "Forests",
      image: require("../../../assets/images/forests.png"),
    },
  ];

  const recommendedPlaces = [
    {
      title: "Sigiriya",
      venue: "Matale, Sri Lanka",
      image: require("../../../assets/images/sigiriya.jpg"),
    },
    {
      title: "Nilaveli Beach",
      venue: "Trincomalee, Sri Lanka",
      image: require("../../../assets/images/beach.png"),
    },
    {
      title: "Sinharaja Forest",
      venue: "Deniyaya, Sri Lanka",
      image: require("../../../assets/images/mountains.png"),
    },
  ];

  const blogs = [
    {
      profileImage: require("../../../assets/icons/profile.png"),
      bloggerName: "John Doe",
      title: "My best experience in Sri Lanka",
      venue: "Matale, Sri Lanka",
      image: require("../../../assets/images/sigiriya.jpg"),
    },
    {
      profileImage: require("../../../assets/icons/profile.png"),
      bloggerName: "John Doe",
      title: "Sigiriya",
      venue: "Trincomalee, Sri Lanka",
      image: require("../../../assets/images/sigiriya.jpg"),
    },
  ];

  const popularPlaces = [
    {
      title: "Sigiriya",
      venue: "Matale, Sri Lanka",
      image: require("../../../assets/images/sigiriya.jpg"),
      likes: "100",
    },
    {
      title: "Nilaveli Beach",
      venue: "Trincomalee, Sri Lanka",
      image: require("../../../assets/images/beach.png"),
      likes: "100",
    },
    {
      title: "Sinharaja Forest",
      venue: "Deniyaya, Sri Lanka",
      image: require("../../../assets/images/mountains.png"),
      likes: "100",
    },
  ];

  const handleCategoryPress = (category: { title: string; image?: any; }) => {
    router.push({
      pathname: "/Explore2", // Adjust the path if needed
      params: { title: category.title }, // Change 'query' to 'params'
    });
  };

  const handleCardPress = (card: { title: string; image?: any }) => {
    router.push({
      pathname: "/Explore3",
      params: { title: card.title, image: card.image },
    });
  };

  return (
    <View style={styles.container}>
      <VisaHeader />

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
            source={require("../../../assets/icons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/explore1.png")}
            style={{ width: "100%" }}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Categories</Text>
            <Text style={{ color: "blue" }}>See All</Text>
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
                  clickedTitle={""}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommended Places */}
        <View style={styles.placesContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Recommended Places
            </Text>
            <Text style={{ color: "blue" }}>See All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedPlaces.map((recommendedPlace, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCardPress(recommendedPlace)}
              >
                <PlaceCard
                  key={index}
                  place={recommendedPlace.title}
                  venue={recommendedPlace.venue}
                  image={recommendedPlace.image}
                  likes={""}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* New Blogs */}
        <View style={styles.placesContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>New Blogs</Text>
            <Text style={{ color: "blue" }}>See All</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {blogs.map((blog, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCardPress(blog)}
              >
                <BlogCard
                  key={index}
                  profileImage={blog.profileImage}
                  bloggerName={blog.bloggerName}
                  title={blog.title}
                  venue={blog.venue}
                  image={blog.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular places */}
        <View style={styles.placesContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Popular Places
            </Text>
            <Text style={{ color: "blue" }}>See All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularPlaces.map((popularPlace, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCardPress(popularPlace)}
              >
                <PlaceCard
                  key={index}
                  place={popularPlace.title}
                  venue={popularPlace.venue}
                  image={popularPlace.image}
                  likes={popularPlace.likes}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
    alignSelf: "flex-start"
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
    width: "95%",
    marginHorizontal: 10,
    marginTop: 20,
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
    width: "95%",
    marginHorizontal: 10,
    marginTop: 20,
    maxHeight: 400
  },
});
