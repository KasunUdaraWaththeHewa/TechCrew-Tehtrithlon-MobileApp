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

export default function BlogCard({
  profileImage,
  bloggerName,
  title,
  venue,
  image,
}: {
    profileImage: any;
    bloggerName: string;
  title: string;
  venue: string;
  image: any;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.images} />
      <View style={styles.textContainer}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Image source={profileImage} style={{ width: 30, height: 30, marginRight: 10 }} />
            <Text style={styles.name}>{bloggerName}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.venue}>{venue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: 15,
    width: "98%",
    height: 140,
    margin: 5,
    marginBottom: 15,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 10,
    left: 30,
  },
  name: {
    fontSize: 12,
    color: "white",
  },
  title: {
    fontSize: 15,
    fontWeight: "semibold",
    marginBottom: 4,
    width: "100%",
    color: "white",
  },
  venue: {
    fontSize: 12,
    color: "white",
  },
  images: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});
