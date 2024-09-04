import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

// Define a type alias for valid icon names
type IconName =
  | "home-outline"
  | "document-text-outline"
  | "compass-outline"
  | "notifications-outline"
  | "person-outline";

// Define the tabs configuration
const tabs = [
  { name: "Home/index", title: "Home", icon: "home-outline" as IconName },
  {
    name: "Visa/index",
    title: "Visa",
    icon: "document-text-outline" as IconName,
  },
  {
    name: "Explore/index",
    title: "Explore",
    icon: "compass-outline" as IconName,
  },
  {
    name: "Alerts/index",
    title: "Alerts",
    icon: "notifications-outline" as IconName,
  },
  {
    name: "Profile/index",
    title: "Profile",
    icon: "person-outline" as IconName,
  },
];

const CustomTabBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlePress = (path: string) => {
    // router.push(path);
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[styles.tabItem, pathname === tab.name && styles.activeTab]}
          onPress={() => handlePress(tab.name)}
        >
          {tab.name === "Explore/index" ? (
            <>
              <View style={styles.exploreIconContainer}>
                <View style={styles.exploreIconInner}>
                  <Ionicons name={tab.icon} size={25} color="black" />
                </View>
              </View>
              <Text
                style={[
                  styles.tabLabel,
                  pathname === tab.name
                    ? styles.activeTabLabelExplore
                    : styles.inactiveTabLabelExplore,
                ]}
              >
                {tab.title}
              </Text>
            </>
          ) : (
            <>
              <Ionicons
                name={tab.icon}
                size={30}
                color={pathname === tab.name ? "#FCC423" : "#EAEAEA"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  pathname === tab.name && styles.activeTabLabel,
                ]}
              >
                {tab.title}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    height: 70,
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FCC423",
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#EAEAEA",
  },
  activeTabLabel: {
    color: "#FCC423",
  },
  inactiveTabLabelExplore: {
    color: "#EAEAEA", // Default inactive color for Explore
  },
  activeTabLabelExplore: {
    color: "white", // Active color for Explore
  },
  exploreIconContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  exploreIconInner: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBar;
