import { Theme, ThemeContext, useTheme } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.text}>This screen doesn't exist.</Text>
      </View>
    </>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    text: {
      color: theme.colors.text,
    },
  });
