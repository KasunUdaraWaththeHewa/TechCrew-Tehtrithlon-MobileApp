import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: 70, // Adjust the height as needed
          paddingVertical: 10, // Adjust padding if necessary
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#EAEAEA",
        tabBarLabelStyle: {
          fontSize: 14, // Increase the font size here
          fontWeight: "bold", // Optional: make the font bold
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="E-Passport"
        options={{
          title: "E-Passport",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <View
              style={{
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
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  backgroundColor: "#FBBC04",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="compass-outline" size={35} color="white" />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
