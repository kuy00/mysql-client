import Button from "@/components/atoms/Button";
import ThemedText from "@/components/atoms/ThemedText";
import InputField from "@/components/molecules/InputField";
import RowContainer from "@/components/molecules/RowContainer";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ConnectionInfoDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>CONNECTION</ThemedText>
        <RowContainer>
          <InputField label="Host/IP" />
        </RowContainer>
        <RowContainer>
          <InputField label="Port" />
        </RowContainer>
        <RowContainer>
          <InputField label="Id" />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <InputField label="Password" />
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ADVANCED</ThemedText>
        <RowContainer>
          <InputField label="Alias" />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <InputField label="Database" />
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ACTIONS</ThemedText>
        <RowContainer>
          <Button
            style={{ flex: 1 }}
            label={<ThemedText style={styles.buttonLabel}>Save</ThemedText>}
          />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <Button
            style={{ flex: 1 }}
            label={
              <ThemedText style={styles.buttonLabel}>
                Test Connection
              </ThemedText>
            }
          />
        </RowContainer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
  title: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonLabel: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default ConnectionInfoDetail;
