import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import migrate from "@/utils/migrator";
import { JsonSerializer, throwError } from "typescript-json-serializer";
import { JsonSerializerProvider } from "@/providers/JsonSerializerProvider";
import { RepositoryProvider } from "@/providers/RepositoryProvider";
import { UseCaseProvider } from "@/providers/UseCaseProvider";

const RootLayout = () => {
  const theme = useColorSchemeTheme();
  const queryClient = new QueryClient();
  const jsonSerializer = new JsonSerializer({
    errorCallback: throwError,
    nullishPolicy: {
      undefined: "disallow",
      null: "disallow",
    },
  });

  return (
    <ThemeProvider value={theme}>
      <SQLiteProvider
        databaseName={process.env.EXPO_PUBLIC_DB_NAME}
        onInit={migrate}
      >
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <JsonSerializerProvider serializer={jsonSerializer}>
              <RepositoryProvider>
                <UseCaseProvider>
                  <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="connectionInfo" />
                    <Stack.Screen name="+not-found" />
                  </Stack>
                </UseCaseProvider>
              </RepositoryProvider>
            </JsonSerializerProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
