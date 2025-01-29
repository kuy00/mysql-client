import { ForwardedRef, forwardRef, ReactNode } from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  label?: string | ReactNode;
  icon?: ReactNode;
  iconDirection?: "left" | "right";
  onPress?: () => void;
};

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<View>) => {
  const { style, icon, iconDirection, onPress } = props;

  return (
    <Pressable style={style} onPress={onPress}>
      {icon && iconDirection === "left" && icon}
      {props.label}
      {icon && iconDirection === "right" && icon}
    </Pressable>
  );
});

export default Button;
