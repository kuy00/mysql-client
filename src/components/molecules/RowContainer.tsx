import { Theme, useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type RowContainerProps = {
  children: ReactNode;
  visibleBottomBorder?: boolean;
  align?: "left" | "right" | "center";
  onPress?: (event: GestureResponderEvent) => void;
};

const RowContainer = (props: RowContainerProps) => {
  const {
    children,
    visibleBottomBorder = true,
    align = "left",
    onPress = null,
  } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);
  const content = (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          { borderBottomWidth: visibleBottomBorder ? 0.5 : 0 },
          {
            justifyContent:
              align === "left"
                ? "flex-start"
                : align === "right"
                ? "flex-end"
                : "center",
          },
        ]}
      >
        {children}
      </View>
    </View>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  ) : (
    content
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 16,
    },
    innerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomColor: theme.colors.border,
      paddingVertical: 12,
      alignItems: "center",
    },
  });

export default RowContainer;
