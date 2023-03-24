import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  title: string;
  Svg: JSX.Element;
  price: string;
  variation: string;
  signal?: "positive" | "negative";
}

const Card: React.FC<CardProps> = (props) => {
  const {
    icon,
    color,
    title,
    Svg,
    price,
    variation,
    signal = "positive",
  } = props;
  const up = signal === "positive";

  return (
    <View className="ml-4 rounded-lg border border-gray-200 p-3">
      <MaterialCommunityIcons size={20} name={icon} color={color} />
      <Text className="mt-1 font-semi-bold text-sm">{title}</Text>

      <View className="mt-3">{Svg}</View>

      <View className="mt-4 flex-row items-center">
        <Text className="mr-2 font-regular text-sm">{price}</Text>
        <MaterialCommunityIcons
          size={16}
          color={up ? "#0FDF8F" : "#EE8688"}
          name={up ? "arrow-top-right-thin" : "arrow-bottom-right-thin"}
        />
        <Text
          className={`font-regular text-sm ${
            up ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {variation}
        </Text>
      </View>
    </View>
  );
};
export default Card;