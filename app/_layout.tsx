import { useColorSchemeTheme } from "@/hooks/useColorSchemeTheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  const theme = useColorSchemeTheme();

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default RootLayout;
