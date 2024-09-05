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

export default function CategoryCard({ title, image }: { title: string; image: any }) {

    return (
        <View style={styles.card}>
            <Image source={image} />
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
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
  },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
});
