import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useMigration } from "@/hooks/useMigration";
import { SQLiteProvider } from "expo-sqlite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const RootLayout = () => {
  const theme = useColorSchemeTheme();
  const queryClient = new QueryClient();

  return (
    <ThemeProvider value={theme}>
      <SQLiteProvider
        databaseName={process.env.EXPO_PUBLIC_DB_NAME}
        onInit={useMigration}
      >
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="connectionInfo" />
                <Stack.Screen name="+not-found" />
              </Stack>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
