import { useFetchConnectionInfo } from "@/data/connectionInfo";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const ConnectionInfo = () => {
  const theme = useTheme();
  const { data: connectionInfos } = useFetchConnectionInfo();

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: theme.colors.text }}>
        {connectionInfos.map((connectionInfo, index) => (
          <Text key={index}>{connectionInfo.name}</Text>
        ))}
      </Text>
    </View>
  );
};

export default ConnectionbbInfo;
