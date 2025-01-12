import ConnectionInfo from "@/components/organisms/ConnectionInfo";
import { ConnectionInfoHeaderRight } from "@/components/organisms/ConnectionInfoHeader";
import { useNavigationOptions } from "@/hooks/useNavigationOptions";
import { useTheme } from "@react-navigation/native";
import { Suspense } from "react";
import { Text, View } from "react-native";

const Index = () => {
  const theme = useTheme();
  useNavigationOptions({
    headerTitle: "Mysql Client",
    headerRight: () => <ConnectionInfoHeaderRight />,
  });

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
