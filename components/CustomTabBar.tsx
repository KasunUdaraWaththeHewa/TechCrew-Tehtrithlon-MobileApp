import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter, Href } from "expo-router";

type IconName =
  | "home-outline"
  | "document-text-outline"
  | "compass-outline"
  | "notifications-outline"
  | "person-outline";

const tabs = [
  {
    name: "Home",
    title: "Home",
    icon: "home-outline" as IconName,
    path: "/Home",
  },
  {
    name: "Visa",
    title: "Visa",
    icon: "document-text-outline" as IconName,
    path: "/Visa",
  },
  {
    name: "Explore",
    title: "Explore",
    icon: "compass-outline" as IconName,
    path: "/Explore",
  },
  {
    name: "Alerts",
    title: "Alerts",
    icon: "notifications-outline" as IconName,
    path: "/Alerts",
  },
  {
    name: "Profile",
    title: "Profile",
    icon: "person-outline" as IconName,
    path: "/Profile",
  },
];

const CustomTabBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlePress = (path: string) => {
    router.push(path as Href);
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isVisaTab = tab.name === "Visa";
        const isActiveTab = pathname === tab.path;

        return (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabItem,
              isActiveTab && styles.activeTab,
              isVisaTab && isActiveTab && styles.activeVisaTab,
            ]}
            onPress={() => handlePress(tab.path)}
          >
            {tab.name === "Explore" ? (
              <>
                <View style={styles.exploreIconContainer}>
                  <View style={styles.exploreIconInner}>
                    <Ionicons name={tab.icon} size={30} color="black" />
                  </View>
                </View>
                <Text
                  style={[
                    styles.tabLabel,
                    pathname === tab.path
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
                  size={25}
                  color={
                    isVisaTab && isActiveTab
                      ? "black" // Icon color when Visa tab is active
                      : isActiveTab
                      ? "#FCC423"
                      : "#EAEAEA"
                  }
                />
                <Text
                  style={[
                    styles.tabLabel,
                    isVisaTab && isActiveTab
                      ? styles.activeVisaTabLabel
                      : isActiveTab && styles.activeTabLabel,
                  ]}
                >
                  {tab.title}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
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
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FCC423",
  },
  activeVisaTab: {
    backgroundColor: "#FCC423", // Gold background color for active Visa tab
    borderRadius: 10, // Optional: add border radius to match the look
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#EAEAEA",
  },
  activeTabLabel: {
    color: "#FCC423",
  },
  activeVisaTabLabel: {
    color: "black", // Black text color for active Visa tab
  },
  inactiveTabLabelExplore: {
    color: "#EAEAEA",
  },
  activeTabLabelExplore: {
    color: "white",
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
