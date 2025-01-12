import ThemedText from "@/components/atoms/ThemedText";
import { Stack } from "expo-router";

const ConnectionInfoLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default ConnectionInfoLayout;
