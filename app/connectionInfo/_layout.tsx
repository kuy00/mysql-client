import HeaderLeftConnectionInfoDetail from "@/components/molecules/HeaderLeftConnectionInfoDetail";
import HeaderRightConnectionInfo from "@/components/molecules/HeaderRightConnectionInfo";
import HeaderRightConnectionInfoDetail from "@/components/molecules/HeaderRightConnectionInfoDetail";
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
          headerTitle: "Connection",
          presentation: "modal",
          gestureEnabled: false,
          headerLeft: () => <HeaderLeftConnectionInfoDetail />,
          headerRight: () => <HeaderRightConnectionInfoDetail />,
        }}
      />
    </Stack>
  );
};

export default ConnectionInfoLayout;
