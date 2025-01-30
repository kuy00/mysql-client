import { Theme, useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type RowContainerProps = {
  children: ReactNode;
  visibleBottomBorder?: boolean;
};

const RowContainer = (props: RowContainerProps) => {
  const { children, visibleBottomBorder = true } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          { borderBottomWidth: visibleBottomBorder ? 0.5 : 0 },
        ]}
      >
        {children}
      </View>
    </View>
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
