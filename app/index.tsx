import ConnectionInfo from "@/components/ConnectionInfo";
import { useTheme } from "@react-navigation/native";
import { Suspense } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ color: theme.colors.text }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Suspense
        fallback={<Text style={{ color: theme.colors.text }}>Loading...</Text>}
      >
        <ConnectionInfo />
      </Suspense>
    </View>
  );
}
