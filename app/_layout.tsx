import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMigration } from "@/hooks/useMigration";
import { SQLiteProvider } from "expo-sqlite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
          <SafeAreaView
            style={{ flex: 1, backgroundColor: theme.colors.background }}
          >
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
          </SafeAreaView>
        </QueryClientProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
