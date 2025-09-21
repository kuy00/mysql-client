import { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  label?: string | ReactNode;
  icon?: ReactNode;
  iconDirection?: "left" | "right";
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
};

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<View>) => {
  const {
    style,
    icon,
    iconDirection = "left",
    onPress = () => {},
    children,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      ref={ref}
    >
      {children ? (
        children
      ) : (
        <>
          {icon && iconDirection === "left" && icon}
          {props.label}
          {icon && iconDirection === "right" && icon}
        </>
      )}
    </TouchableOpacity>
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
