import { setTokenInMemory } from "@/auth/tokenMemory";
import { GET_DATABASES } from "@/constants/queryKey";
import { DatabaseManagementUsecaseImpl } from "@/application/usecases/databaseManagementUsecase";
import apiClient from "@/infrastructure/api/clients/apiClient";
import DatabaseManagementRepositoryImpl from "@/infrastructure/api/repositories/databaseManagementRepositoryImpl";
import { connectionInfoAtom } from "@/states/connectionInfoAtom";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import { useEffect } from "react";
import { Alert } from "react-native";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import { router } from "expo-router";

const useDatabase = () => {
  const [connectionInfo, setConnectionInfo] = useAtom(connectionInfoAtom);
  const queryClient = useQueryClient();
  const databaseManagementUsecase = DatabaseManagementUsecaseImpl(
    DatabaseManagementRepositoryImpl(apiClient)
  );

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: GET_DATABASES });
    };
  }, []);

  const { data: databases } = useSuspenseQuery({
    queryKey: GET_DATABASES,
    queryFn: async () => {
      try {
        const apiToken = await databaseManagementUsecase.createConnection(
          connectionInfo
        );
        setTokenInMemory(apiToken.token);

        return await databaseManagementUsecase.getDatabases();
      } catch (error) {
        Alert.alert("Unexpected error");
        throw error;
      }
    },
    retry: false,
  });

  const changeDatabase = (databaseName: string) => {
    setConnectionInfo(
      (connectionInfo) =>
        new ConnectionInfo({
          ...connectionInfo,
          database: databaseName,
        })
    );

    router.back();
  };

  return {
    connectionInfo,
    databases,
    changeDatabase,
  };
};

export default useDatabase;
