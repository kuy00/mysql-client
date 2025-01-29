import ThemedText from "@/components/atoms/ThemedText";
import InputField from "@/components/molecules/InputField";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ConnectionInfoDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <ThemedText>test: {id}</ThemedText>
      <InputField label="Host/IP" />
    </View>
  );
};

export default ConnectionInfoDetail;
