import ThemedText from "@/components/atoms/ThemedText";
import {
  HeaderLeft,
  HeaderRight,
} from "@/components/organisms/ConnectionInfoDetailHeader";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const ConnectionInfoDetail = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Connection",
      presentation: "modal",
      gestureEnabled: false,
      headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
      headerRight: () => <HeaderRight onPress={() => console.log("save")} />,
    });
  }, []);

  return (
    <View>
      <ThemedText>test: {id}</ThemedText>
    </View>
  );
};

export default ConnectionInfoDetail;
