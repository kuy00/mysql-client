import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export const useColorSchemeTheme = () => {
  const colorScheme = useColorScheme();

  const DarkTheme = {
    ...NavigationDarkTheme,
  };

  DarkTheme.colors.background = "rgb(43,43,43)";
  DarkTheme.colors.card = "rgb(43,43,43)";
  DarkTheme.colors.primary = "rgb(53,53,53)";
  DarkTheme.colors.border = "rgb(56,56,56)";

  const DefaultTheme = {
    ...NavigationDefaultTheme,
  };

  DefaultTheme.colors.background = "rgb(243,242,248)";
  DefaultTheme.colors.card = "rgb(243,242,248)";
  DefaultTheme.colors.primary = "rgb(255,255,255)";
  DefaultTheme.colors.border = "rgb(237,237,237)";

  return colorScheme === "dark" ? DarkTheme : DefaultTheme;
};
