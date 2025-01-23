import { useTheme } from "@react-navigation/native";
import { Suspense } from "react";
import { Text, View } from "react-native";
import ConnectionInfoList from "@/components/organisms/ConnectionInfoList";

const Index = () => {
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
        <ConnectionInfoList />
      </Suspense>
    </View>
  );
};

export default Index;
