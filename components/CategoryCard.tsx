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

export default function CategoryCard({
  title,
  image,
  clickedTitle,
}: {
  title: string;
  image: any;
  onPress?: () => void;
  key?: number;
  clickedTitle: string;
}) {

  return (
    <View style={clickedTitle === title ? styles.clickedCard : styles.card}>
      <Image source={image} style={styles.images} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#888",
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
  },
  clickedCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#888",
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderStyle: "solid",
    backgroundColor: "gold",
    borderWidth: 1,
    margin: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  images: {
    width: 50,
    height: 50,
  },
});
