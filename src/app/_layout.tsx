import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import migrate from "@/utils/migrator";

const RootLayout = () => {
  const theme = useColorSchemeTheme();
  const queryClient = new QueryClient();

  return (
    <ThemeProvider value={theme}>
      <SQLiteProvider
        databaseName={process.env.EXPO_PUBLIC_DB_NAME}
        onInit={migrate}
      >
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="connectionInfo" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
