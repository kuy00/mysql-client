import ThemedText from "@/components/atoms/ThemedText";
import RowContainer from "@/components/molecules/RowContainer";
import DatabaseList from "@/components/organisms/DatabaseList";
import SuspenseBoundary from "@/components/shared/SuspenseBoundary";
import { GET_DATABASES } from "@/constants/queryKey";
import useDatabase from "@/hooks/useDatabase";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Database = () => {
  const { changeDatabase } = useDatabase();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.databaseContainer}>
          <ThemedText style={styles.title}>DATABASES</ThemedText>
          <SuspenseBoundary
            fallback={
              <RowContainer align="center">
                <ThemedText>Loading...</ThemedText>
              </RowContainer>
            }
            errorFallback={
              <RowContainer align="center">
                <ThemedText>No results</ThemedText>
              </RowContainer>
            }
            queryKey={GET_DATABASES}
          >
            <DatabaseList />
          </SuspenseBoundary>
        </View>
        <RowContainer align="center" onPress={() => changeDatabase("")}>
          <ThemedText>Clear database</ThemedText>
        </RowContainer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  databaseContainer: {
    marginBottom: 35,
  },
  title: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
});

export default Database;
