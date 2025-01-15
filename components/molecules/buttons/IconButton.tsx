import Button from "@/components/atoms/Button";
import ThemedText from "@/components/atoms/ThemedText";
import { AntDesign } from "@expo/vector-icons";
import { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";

export type IconButtonProps = {
  iconName: keyof typeof AntDesign.glyphMap;
  iconSize?: number;
  onPress?: () => void;
};

const IconButton = forwardRef(
  (props: IconButtonProps, ref: ForwardedRef<View>) => {
    const { iconName, iconSize, onPress } = props;

    return (
      <Button onPress={onPress}>
        <ThemedText>
          <AntDesign name={iconName} size={iconSize} />
        </ThemedText>
      </Button>
    );
  },
);

export default IconButton;
