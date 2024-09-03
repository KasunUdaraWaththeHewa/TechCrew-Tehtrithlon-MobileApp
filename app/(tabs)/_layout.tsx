import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0D0D0D",
          height: 70,
          paddingVertical: 10,
        },
        tabBarActiveTintColor: "#FCC423",
        tabBarInactiveTintColor: "#EAEAEA",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
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
        name="Visa"
        options={{
          title: "Visa",
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
                width: 75,
                height: 75,
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
                  width: 55,
                  height: 55,
                  borderRadius: 100,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="compass-outline"
                  size={20}
                  color="black"
                />
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
