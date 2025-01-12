import Button from "../atoms/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "../atoms/ThemedText";
import { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";

export type PlusButtonPropsType = {
  onPress?: () => void;
};

const PlusButton = forwardRef(
  (props: PlusButtonPropsType, ref: ForwardedRef<View>) => {
    const { onPress } = props;

    return (
      <Button onPress={onPress}>
        <ThemedText>
          <AntDesign name="plus" size={24} />
        </ThemedText>
      </Button>
    );
  },
);

export default PlusButton;
