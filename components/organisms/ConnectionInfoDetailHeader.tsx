import Button from "../atoms/Button";
import ThemedText from "../atoms/ThemedText";

export const HeaderLeft = ({ onPress }: { onPress: () => void }) => {
  return (
    <Button onPress={onPress}>
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
