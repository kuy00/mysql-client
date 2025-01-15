import { View } from "react-native";
import { Link } from "expo-router";
import IconButton from "../molecules/buttons/IconButton";

export const ConnectionInfoHeaderRight = () => {
  return (
    <View>
      <Link href="/connectionInfo/[id]" asChild>
        <IconButton iconName="plus" iconSize={24} />
      </Link>
    </View>
  );
};
