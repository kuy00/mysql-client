import RowContainer from "../molecules/RowContainer";
import ThemedText from "../atoms/ThemedText";
import useDatabase from "@/hooks/useDatabase";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

const DatabaseList = () => {
  const theme = useTheme();
  const { connectionInfo, databases, changeDatabase } = useDatabase();

  return (
    <>
      {databases.map((database, index) => (
        <RowContainer
          key={index}
          onPress={() => changeDatabase(database.database)}
        >
          <View style={styles.innerContrainer}>
            <ThemedText>{database.database}</ThemedText>
            {connectionInfo.database === database.database && (
              <AntDesign name="check" size={18} color={theme.colors.text} />
            )}
          </View>
        </RowContainer>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  innerContrainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DatabaseList;
