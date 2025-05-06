import useConnectionInfo from "@/hooks/useConnectionInfo";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const ConnectionInfoList = () => {
  const theme = useTheme();
  const { connectionInfos } = useConnectionInfo();

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: theme.colors.text }}>
        {connectionInfos?.map((connectionInfo, index) => (
          <Text key={index}>{connectionInfo.host}</Text>
        ))}
      </Text>
    </View>
  );
};

export default ConnectionInfoList;
