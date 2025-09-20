import { setTokenInMemory } from "@/auth/tokenMemory";
import { GET_DATABASES } from "@/constants/queryKey";
import { DatabaseManagementUsecaseImpl } from "@/application/usecases/databaseManagementUsecase";
import apiClient from "@/infrastructure/api/clients/apiClient";
import DatabaseManagementRepositoryImpl from "@/infrastructure/api/repositories/databaseManagementRepositoryImpl";
import { connectionInfoAtom } from "@/states/connectionInfoAtom";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai/react";
import { useEffect } from "react";
import { Alert } from "react-native";

const useDatabase = () => {
  const connectionInfo = useAtomValue(connectionInfoAtom);
  const queryClient = useQueryClient();
  const databaseManagementUsecase = DatabaseManagementUsecaseImpl(
    DatabaseManagementRepositoryImpl(apiClient)
  );

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

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: GET_DATABASES });
    };
  }, []);

  return {
    databases,
  };
};

export default useDatabase;
