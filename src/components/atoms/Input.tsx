import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
} from "react-native";

export type InputProps = {
  style?: StyleProp<TextStyle>;
  name?: string;
  value?: string;
  isFocused?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string, name?: string) => void;
};

const Input = (props: InputProps) => {
  const {
    style,
    name,
    value,
    isFocused,
    onChange,
    onChangeText: onChangeTextWithName,
  } = props;

  return (
    <TextInput
      style={style}
      value={value}
      autoFocus={isFocused}
      onChange={onChange}
      onChangeText={(text) =>
        onChangeTextWithName && onChangeTextWithName(text, name)
      }
    />
  );
};

export default Input;
