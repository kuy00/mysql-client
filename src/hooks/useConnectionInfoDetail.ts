import { GET_CONNECTION_INFOS } from "@/constants/queryKey";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import { ConnectionInfoUsecasImpl } from "@/domain/usecases/connectionInfoUsecase";
import UsecaseError from "@/errors/usecaseError";
import ConnectionInfoRepositoryImpl from "@/infrastructure/localDatabase/repositories/connectionInfoRepositoryImpl";
import { connectionInfoAtom } from "@/states/connectionInfoAtom";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "expo-router";
import { useAtom } from "jotai/react";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { Alert } from "react-native";

const useConnectionInfoDetail = () => {
  const [connectionInfo, setConnectionInfo] = useAtom(connectionInfoAtom);
  const reset = useResetAtom(connectionInfoAtom);
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const connectionInfoUsecase = ConnectionInfoUsecasImpl(
    ConnectionInfoRepositoryImpl(),
  );

  const handleChange = (text: string, name?: string) => {
    if (name) {
      setConnectionInfo(
        (connectionInfo) =>
          new ConnectionInfo({ ...connectionInfo, [name]: text }),
      );
    }
  };

  const getDatabases = async () => {
    try {
      // const databases = await usecase.databaseInfoUsecase.getDatabases();
      console.log("get databases");
    } catch (error) {
      if (error instanceof UsecaseError) {
        Alert.alert(error.message);
      } else {
        Alert.alert("Unexpected error");
      }
    }
  };

  const save = async () => {
    await connectionInfoUsecase.create(connectionInfo);
    navigation.goBack();
  };

  const close = () => {
    navigation.goBack();
  };

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: GET_CONNECTION_INFOS });
      reset();
    };
  }, []);

  return {
    connectionInfo,
    handleChange,
    getDatabases,
    save,
    close,
  };
};

export default useConnectionInfoDetail;
