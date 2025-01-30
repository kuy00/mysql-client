import Button from "@/components/atoms/Button";
import ThemedText from "@/components/atoms/ThemedText";
import InputField from "@/components/molecules/InputField";
import RowContainer from "@/components/molecules/RowContainer";
import useForm from "@/hooks/useForm";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ConnectionInfoDetail = () => {
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const [formData, handleChange] = useForm({
    host: "",
    port: "",
    id: "",
    password: "",
    alias: null,
    database: null,
  });

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>CONNECTION</ThemedText>
        <RowContainer>
          <InputField
            label="Host/IP"
            name="host"
            value={formData.host}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer>
          <InputField
            label="Port"
            name="port"
            value={formData.port}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer>
          <InputField
            label="Id"
            name="id"
            value={formData.id}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <InputField
            label="Password"
            name="password"
            value={formData.password}
            onChangeText={handleChange}
          />
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ADVANCED</ThemedText>
        <RowContainer>
          <InputField
            label="Alias"
            name="alias"
            value={formData.alias}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <Button
            style={{ flex: 1 }}
            label={<ThemedText style={{ fontSize: 18 }}>Database</ThemedText>}
            icon={
              <AntDesign name="right" size={18} color={theme.colors.text} />
            }
            iconDirection="right"
          />
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ACTIONS</ThemedText>
        <RowContainer>
          <Button
            style={{ flex: 1 }}
            label={<ThemedText style={styles.buttonLabel}>Save</ThemedText>}
            onPress={() => console.log(formData)}
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
            onPress={() => console.log("test connection")}
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
