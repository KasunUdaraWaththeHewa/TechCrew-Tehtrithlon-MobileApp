// components/IconBox.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface IconBoxProps {
  icon: any; // Type this according to your icon source
  label: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderBlockColor: "#FCC423",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    borderBlockColor: "#000000",
    elevation: 5,
  },
  label: {
    fontSize: 8,
    color: "#333",
    marginTop: 5,
  },
});

export default IconBox;
