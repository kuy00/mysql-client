import HeaderRightConnectionInfo from "@/components/molecules/HeaderRightConnectionInfo";
import { Stack } from "expo-router";

const ConnectionInfoLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Mysql Client",
          headerRight: () => <HeaderRightConnectionInfo />,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          presentation: "modal",
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
};

export default ConnectionInfoLayout;
