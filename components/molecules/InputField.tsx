import { StyleSheet, View } from "react-native";
import ThemedText from "../atoms/ThemedText";
import Input from "../atoms/Input";
import { Theme, useTheme } from "@react-navigation/native";

type InputFieldProps = {
  label: string;
};

const InputField = (props: InputFieldProps) => {
  const { label } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ThemedText>{label}</ThemedText>
      <Input />
    </View>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { backgroundColor: "red" },
  });

export default InputField;
