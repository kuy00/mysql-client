import { setTokenInMemory } from "@/auth/tokenMemory";
import { GET_CONNECTION_INFOS } from "@/constants/queryKey";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import { ConnectionInfoUsecasImpl } from "@/domain/usecases/connectionInfoUsecase";
import { DatabaseManagementUsecaseImpl } from "@/domain/usecases/databaseManagementUsecase";
import apiClient from "@/infrastructure/api/clients/apiClient";
import DatabaseManagementRepositoryImpl from "@/infrastructure/api/repositories/databaseManagementRepositoryImpl";
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
  const databaseManagementUsecase = DatabaseManagementUsecaseImpl(
    DatabaseManagementRepositoryImpl(apiClient),
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
      const apiToken = await databaseManagementUsecase.createConnection(
        connectionInfo,
      );
      setTokenInMemory(apiToken.token);

      const databases = await databaseManagementUsecase.getDatabases();
      console.log("get databases");
      console.log(databases);
    } catch (error) {
      Alert.alert("Unexpected error");
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
