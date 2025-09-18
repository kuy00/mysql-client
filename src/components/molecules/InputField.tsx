import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import ThemedText from "../atoms/ThemedText";
import Input from "../atoms/Input";
import { Theme, useTheme } from "@react-navigation/native";

type InputFieldProps = {
  label: string;
  name?: string;
  value?: string;
  isFocused?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string, name?: string) => void;
  secureTextEntry?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const { label, name, value, onChange, onChangeText, secureTextEntry } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <Input
        style={styles.input}
        name={name}
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    label: {
      fontSize: 18,
    },
    input: {
      flex: 1,
      textAlign: "right",
      color: theme.colors.text,
    },
  });

export default InputField;
