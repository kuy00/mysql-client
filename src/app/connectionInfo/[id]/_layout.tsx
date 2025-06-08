import HeaderLeftConnectionInfoDetail from "@/components/molecules/HeaderLeftConnectionInfoDetail";
import HeaderRightConnectionInfoDetail from "@/components/molecules/HeaderRightConnectionInfoDetail";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

const ConnectionInfoDetailLayout = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Connection",
          headerLeft: () => <HeaderLeftConnectionInfoDetail />,
          headerRight: () => <HeaderRightConnectionInfoDetail />,
        }}
      />
      <Stack.Screen
        name="database"
        options={{
          headerTitle: "Database",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: theme.colors.text,
        }}
      />
    </Stack>
  );
};

export default ConnectionInfoDetailLayout;
