import { Stack } from "expo-router";
const styles = require("../../services/styles/globalStyles");

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>


      <Stack.Screen name="activity" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="pet" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="profile" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="rewards" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="scanner" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="shop" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="stats" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="about" options={{ headerShown: false}}></Stack.Screen>



      <Stack.Screen name="test" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  )
}
