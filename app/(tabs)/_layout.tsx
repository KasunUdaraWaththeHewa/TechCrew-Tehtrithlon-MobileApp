import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: 70,
          paddingVertical: 10,
        },
        tabBarActiveTintColor: "#FCC423",
        tabBarInactiveTintColor: "#EAEAEA",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Visa/index"
        options={{
          title: "Visa",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore/index"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 80,
                height: 80,
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
                  width: 65,
                  height: 65,
                  borderRadius: 100,
                  backgroundColor: focused ? "#FCC423" : "#ffffff", // Gold when focused, white when not
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="compass-outline"
                  size={30}
                  color={focused ? "black" : "black"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Alerts/index"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
