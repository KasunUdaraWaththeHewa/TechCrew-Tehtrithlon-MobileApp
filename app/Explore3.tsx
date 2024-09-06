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


const Explore3 = () => {
  const { title, image } = useLocalSearchParams();
  const router = useRouter();

  const descriptions = [
    {
      title: "Sigiriya",
      description1:
        "Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced SEE-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m (590 ft) high.",
      description2:
        "According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Siṃhagiri, the Lion Rock.",
      image: require("../assets/images/sigiriya.jpg"),
    },
    {
      title: "Nilaveli Beach",
      description1:
        "Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced SEE-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m (590 ft) high.",
      description2:
        "According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Siṃhagiri, the Lion Rock.",
      image: require("../assets/images/sigiriya.jpg"),
    },
  ];


  return (
    <View style={styles.container}>
      {descriptions.map(
        (description, index) =>
          description.title === title ? (
            <View key={index}>
              {/* Image */}
            <View>
                <Image
                    source={description.image}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.imageTitle}>{description.title}</Text>
                </View>
            </View>

              {/* Description */}
              <View>
                <Text style={styles.description}>
                  {description.description1}
                </Text>
                <Text style={styles.description}>
                  {description.description2}
                </Text>
              </View>

              {/* <Text style={styles.location}>Location</Text> */}
            </View>
          ) : 
          ( <Text>Content Not Found</Text> )
      )}
    </View>
  );
};

export default Explore3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 60,
  },
  textContainer: {
    display: "flex",
    position: "absolute",
    bottom: 20,
    left: 30,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  imageTitle: {
    color: "white",
    fontSize: 20,
  },
  description: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  location: {
    fontSize: 20,
    alignSelf: "flex-start",
    paddingLeft: 30,
    paddingTop: 30,
  }
});
