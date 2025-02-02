import { useUseCase } from "@/hooks/useUseCase";
import { useTheme } from "@react-navigation/native";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const ConnectionInfoList = () => {
  const theme = useTheme();
  const { data: connectionInfos } = useSuspenseQuery({
    queryKey: ["connectionInfos"],
    queryFn: useUseCase().connectionInfoUsecase.fetch,
  });

  console.log(connectionInfos);

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
