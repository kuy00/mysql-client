import { Theme, useTheme } from "@react-navigation/native";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

export type ThemedTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const ThemedText = (props: ThemedTextProps) => {
  const { children, style } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return <Text style={[styles.text, style]}>{children}</Text>;
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
    },
  });

export default ThemedText;
