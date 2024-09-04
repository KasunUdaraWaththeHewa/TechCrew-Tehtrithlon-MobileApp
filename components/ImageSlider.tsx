import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  NativeScrollEvent,
  ImageSourcePropType,
} from "react-native";

interface SliderItem {
  image: ImageSourcePropType;
  title: string;
}

interface ImageSliderProps {
  data: SliderItem[];
}

const { width: screenWidth } = Dimensions.get("window");

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: { nativeEvent: NativeScrollEvent }) => {
    const slideIndex = Math.floor(
      event.nativeEvent.contentOffset.x / (screenWidth * 0.7)
    );
    setActiveSlide(slideIndex);
  };

  return (
    <View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
        snapToInterval={screenWidth * 0.7}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollViewContent}
      >
        {data.map((item, index) => {
          const scale = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth * 0.7,
              index * screenWidth * 0.7,
              (index + 1) * screenWidth * 0.7,
            ],
            outputRange: [0.7, 1, 0.7],
            extrapolate: "clamp",
          });

          const translateX = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth * 0.7,
              index * screenWidth * 0.7,
              (index + 1) * screenWidth * 0.7,
            ],
            outputRange: [-screenWidth * 0.2, 0, screenWidth * 0.2],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[styles.slide, { transform: [{ scale }, { translateX }] }]}
              key={index}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeSlide === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10,
  },
  slide: {
    width: screenWidth * 0.6,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: screenWidth * 0.03,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  title: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000000",
  },
  inactiveDot: {
    backgroundColor: "#EAEAEA",
  },
});

export default ImageSlider;
