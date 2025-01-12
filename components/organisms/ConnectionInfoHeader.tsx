import { View } from "react-native";
import PlusButton from "../molecules/PlusButton";
import { Link } from "expo-router";

export const ConnectionInfoHeaderRight = () => {
  return (
    <View>
      <Link href="/connectionInfo/[id]" asChild>
        <PlusButton />
      </Link>
    </View>
  );
};
