import { Suspense } from "react";
import { StyleSheet, View } from "react-native";
import ConnectionInfoList from "@/components/organisms/ConnectionInfoList";
import { ScrollView } from "react-native-gesture-handler";
import ThemedText from "@/components/atoms/ThemedText";

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText>DB Connections</ThemedText>
      </View>
      <Suspense fallback={<ThemedText>Loading...</ThemedText>}>
        <ConnectionInfoList />
      </Suspense>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
});

export default Index;
