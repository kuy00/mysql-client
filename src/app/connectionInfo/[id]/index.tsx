import Button from "@/components/atoms/Button";
import ThemedText from "@/components/atoms/ThemedText";
import InputField from "@/components/molecules/InputField";
import RowContainer from "@/components/molecules/RowContainer";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useConnectionInfoDetail from "@/hooks/useConnectionInfoDetail";

const ConnectionInfoDetail = () => {
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const { connectionInfo, handleChange, save } = useConnectionInfoDetail();

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>CONNECTION</ThemedText>
        <RowContainer>
          <InputField
            label="Host/IP"
            name="host"
            value={connectionInfo.host}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer>
          <InputField
            label="Port"
            name="port"
            value={connectionInfo.port.toString()}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer>
          <InputField
            label="Id"
            name="userId"
            value={connectionInfo.userId}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <InputField
            label="Password"
            name="password"
            value={connectionInfo.password}
            onChangeText={handleChange}
            secureTextEntry={true}
          />
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ADVANCED</ThemedText>
        <RowContainer>
          <InputField
            label="Alias"
            name="name"
            value={connectionInfo.name}
            onChangeText={handleChange}
          />
        </RowContainer>
        <RowContainer visibleBottomBorder={false}>
          <Link href="/connectionInfo/[id]/database" asChild>
            <Button
              style={{ flex: 1 }}
              label={<ThemedText style={{ fontSize: 18 }}>Database</ThemedText>}
              icon={
                <AntDesign name="right" size={18} color={theme.colors.text} />
              }
              iconDirection="right"
            />
          </Link>
        </RowContainer>
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.title}>ACTIONS</ThemedText>
        <RowContainer>
          <Button
            style={{ flex: 1 }}
            label={<ThemedText style={styles.buttonLabel}>Save</ThemedText>}
            onPress={save}
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
