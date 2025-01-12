import { useNavigation } from "expo-router";
import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";

export const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.goBack()}>
      <ThemedText>Close</ThemedText>
    </Button>
  );
};

export const HeaderRight = ({ onPress }: { onPress: () => void }) => {
  return (
    <Button onPress={onPress}>
      <ThemedText>Save</ThemedText>
    </Button>
  );
};
