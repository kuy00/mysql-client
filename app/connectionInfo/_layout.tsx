import { Stack } from "expo-router";

const ConnectionInfoLayout = () => {
  console.log("test");
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Mysql Client",
        }}
      />
    </Stack>
  );
};

export default ConnectionInfoLayout;
