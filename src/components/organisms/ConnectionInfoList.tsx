import connectionInfoUseCase from "@/domain/usecases/connectionInfoUsecase";
import { useTheme } from "@react-navigation/native";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const ConnectionInfoList = () => {
  const theme = useTheme();
  const { data: connectionInfos } = useSuspenseQuery({
    queryKey: ["connectionInfos"],
    queryFn: connectionInfoUseCase().fetch,
  });

  console.log(connectionInfos);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: theme.colors.text }}>
        {connectionInfos?.map((connectionInfo, index) => (
          <Text key={index}>{connectionInfo.name}</Text>
        ))}
      </Text>
    </View>
  );
};

export default ConnectionInfoList;
