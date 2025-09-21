import { GET_CONNECTION_INFOS } from "@/constants/queryKey";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import { ConnectionInfoUsecasImpl } from "@/application/usecases/connectionInfoUsecase";
import ConnectionInfoRepositoryImpl from "@/infrastructure/localDatabase/repositories/connectionInfoRepositoryImpl";
import { connectionInfoAtom } from "@/states/connectionInfoAtom";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "expo-router";
import { useAtom } from "jotai/react";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";

const useConnectionInfoDetail = (id?: string) => {
  const [connectionInfo, setConnectionInfo] = useAtom(connectionInfoAtom);
  const reset = useResetAtom(connectionInfoAtom);
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const connectionInfoUsecase = ConnectionInfoUsecasImpl(
    ConnectionInfoRepositoryImpl()
  );

  useEffect(() => {
    if (id && id !== "[id]") {
      getConnectionInfo(id);
    }
  }, []);

  const getConnectionInfo = async (id: string) => {
    const data = await connectionInfoUsecase.getById?.(Number(id));
    if (data) {
      setConnectionInfo(data);
    }
  };

  const handleChange = (text: string, name?: string) => {
    if (name) {
      setConnectionInfo(
        (connectionInfo) =>
          new ConnectionInfo({ ...connectionInfo, [name]: text })
      );
    }
  };

  const save = async () => {
    if (connectionInfo.id) {
      await connectionInfoUsecase.update(connectionInfo);
    } else {
      await connectionInfoUsecase.create(connectionInfo);
    }

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
    save,
    close,
  };
};

export default useConnectionInfoDetail;
