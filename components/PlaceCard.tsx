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

export default function PlaceCard({
  place, 
  venue,
  image,
  likes,
}: {
  place: string;
  venue: string;
  image: any;
  likes: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.images} />
      <View style={styles.textContainer}>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.venue}>{venue}</Text>
        { likes ? <Text style={styles.likes}>{likes} likes</Text> : null }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: 15,
    width: 150,
    height: 180,
    margin: 5,
    marginBottom: 15,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  place: {
    fontSize: 18,
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
    width: 150,
    height: 180,
    borderRadius: 15,
  },
  likes: {
    fontSize: 12,
    color: "white",
  },
});
