import { Text, View, Button } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-5 text-4xl">Home</Text>
      <Button title="Login" />
    </View>
  );
}
