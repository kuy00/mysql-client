import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
} from "react-native";

export type InputProps = {
  style?: StyleProp<TextStyle>;
  value?: string;
  isFocused?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const Input = (props: InputProps) => {
  const { style, value, isFocused, onChange } = props;

  return (
    <TextInput
      style={style}
      value={value}
      autoFocus={isFocused}
      onChange={onChange}
    />
  );
};

export default Input;
