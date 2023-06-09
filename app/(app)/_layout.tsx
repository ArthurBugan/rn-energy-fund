import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import {
  MaterialCommunityIcons,
  Foundation,
  Feather,
} from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        options={{
          tabBarActiveTintColor: "#771fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] text-xs ${
                    focused && "font-regular"
                  } ${!focused && " font-bold"}`}
                >
                  Home
                </Text>
              </View>
            );
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="home" color={color} size={24} />
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          title: "Trade",
          tabBarActiveTintColor: "#771fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] text-xs ${
                    focused && "font-regular"
                  } ${!focused && " font-bold"}`}
                >
                  Trade
                </Text>
              </View>
            );
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="swap-horizontal"
              color={color}
              size={24}
            />
          ),
        }}
        name="trade"
      />
      <Tabs.Screen
        options={{
          title: "Portfolio",
          tabBarActiveTintColor: "#771fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] text-xs ${
                    focused && "font-regular"
                  } ${!focused && " font-bold"}`}
                >
                  Portfolio
                </Text>
              </View>
            );
          },
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" color={color} size={20} />
          ),
        }}
        name="portfolio"
      />
    </Tabs>
  );
}
