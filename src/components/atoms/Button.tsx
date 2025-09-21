import { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  label?: string | ReactNode;
  icon?: ReactNode;
  iconDirection?: "left" | "right";
  onPress?: () => void;
};

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<View>) => {
  const { style, icon, iconDirection = "left", onPress = () => {} } = props;

  return (
    <Pressable style={[styles.button, style]} onPress={onPress} ref={ref}>
      {icon && iconDirection === "left" && icon}
      {props.label}
      {icon && iconDirection === "right" && icon}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Button;
