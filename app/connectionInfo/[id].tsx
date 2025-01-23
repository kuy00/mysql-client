import ThemedText from "@/components/atoms/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ConnectionInfoDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <ThemedText>test: {id}</ThemedText>
    </View>
  );
};

export default ConnectionInfoDetail;
