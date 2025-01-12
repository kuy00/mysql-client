import ThemedText from "@/components/atoms/ThemedText";
import {
  HeaderLeft,
  HeaderRight,
} from "@/components/organisms/ConnectionInfoDetailHeader";
import { useNavigationOptions } from "@/hooks/useNavigationOptions";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ConnectionInfoDetail = () => {
  const { id } = useLocalSearchParams();
  useNavigationOptions({
    headerTitle: "Connection",
    presentation: "modal",
    gestureEnabled: false,
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight onPress={() => console.log("save")} />,
  });

  return (
    <View>
      <ThemedText>test: {id}</ThemedText>
    </View>
  );
};

export default ConnectionInfoDetail;
