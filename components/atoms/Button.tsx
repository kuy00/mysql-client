import { Pressable, StyleProp, ViewStyle } from "react-native";

export type ButtonPropsType = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Button = (props: ButtonPropsType) => {
  const { children, style, onPress } = props;

  return (
    <Pressable style={style} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
