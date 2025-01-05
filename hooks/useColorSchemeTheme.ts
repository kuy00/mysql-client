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

  const DefaultTheme = {
    ...NavigationDefaultTheme,
  };

  return colorScheme === "dark" ? DarkTheme : DefaultTheme;
};
