import ThemedText from "@/components/atoms/ThemedText";
import RowContainer from "@/components/molecules/RowContainer";
import DatabaseList from "@/components/organisms/DatabaseList";
import SuspenseBoundary from "@/components/shared/SuspenseBoundary";
import { GET_DATABASES } from "@/constants/queryKey";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Database = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <RowContainer align="center">
          <ThemedText>Manually specify</ThemedText>
        </RowContainer>
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
        <RowContainer align="center">
          <ThemedText>Clear database</ThemedText>
        </RowContainer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  databaseContainer: {
    marginVertical: 35,
  },
  title: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
});

export default Database;
