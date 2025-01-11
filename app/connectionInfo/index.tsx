import ConnectionInfo from "@/components/ConnectionInfo";
import { useTheme } from "@react-navigation/native";
import { Suspense } from "react";
import { Text, View } from "react-native";

const Index = () => {
  console.log("connection info");
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ color: theme.colors.text }}>Mysql DB Connection</Text>
      <Suspense
        fallback={<Text style={{ color: theme.colors.text }}>Loading...</Text>}
      >
        <ConnectionInfo />
      </Suspense>
    </View>
  );
};

export default Index;
