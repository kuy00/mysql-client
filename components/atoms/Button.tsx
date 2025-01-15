import { Pressable, StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, style, onPress } = props;

  return (
    <Pressable style={style} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
