import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "sign-in",
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen options={{ title: "" }} name="sign-in" />
    </Stack>
  );
}