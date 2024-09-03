import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="signup1" />
      <Stack.Screen name="login1" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
