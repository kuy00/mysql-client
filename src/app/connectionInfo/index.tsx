import { useTheme } from "@react-navigation/native";
import { Suspense } from "react";
import { StyleSheet, Text, View } from "react-native";
import ConnectionInfoList from "@/components/organisms/ConnectionInfoList";
import { ScrollView } from "react-native-gesture-handler";

const Index = () => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ color: theme.colors.text }}>DB Connections</Text>
      </View>
      <Suspense
        fallback={<Text style={{ color: theme.colors.text }}>Loading...</Text>}
      >
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
