import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
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
          <Stack screenOptions={{ headerTitle: "Mysql Client" }} />
        </QueryClientProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
