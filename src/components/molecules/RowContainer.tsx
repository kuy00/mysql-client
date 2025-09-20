import { Theme, useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

type RowContainerProps = {
  children: ReactNode;
  visibleBottomBorder?: boolean;
  align?: "left" | "right" | "center";
  onPress?: () => void;
};

const RowContainer = (props: RowContainerProps) => {
  const {
    children,
    visibleBottomBorder = true,
    align = "left",
    onPress = () => {},
  } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable onPress={onPress}>
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
    </Pressable>
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
    },
  });

export default RowContainer;
