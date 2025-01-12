import ConnectionInfo from "@/components/organisms/ConnectionInfo";
import { ConnectionInfoHeaderRight } from "@/components/organisms/ConnectionInfoHeader";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Suspense, useEffect } from "react";
import { Text, View } from "react-native";

const Index = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Mysql Client",
      headerRight: () => <ConnectionInfoHeaderRight />,
    });
  }, [navigation]);

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
