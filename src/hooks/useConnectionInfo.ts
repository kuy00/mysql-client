import { connectionInfoAtom } from "@/atoms/connectionInfoAtom";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { useUseCase } from "./useUseCase";
import { useNavigation } from "expo-router";

const useConnectionInfo = () => {
  const [connectionInfo, setConnectionInfo] = useAtom(connectionInfoAtom);
  const resestConnectionInfo = useResetAtom(connectionInfoAtom);
  const usecase = useUseCase();
  const navigation = useNavigation();

  const handleChange = (text: string, name?: string) => {
    if (name) {
      setConnectionInfo(
        (connectionInfo) =>
          new ConnectionInfo({ ...connectionInfo, [name]: text }),
      );
    }
  };

  const getDatabases = () => {
    const databases = usecase.databaseInfoUsecase.showDatabases();
    console.log(databases);
  };

  const save = async () => {
    await usecase.connectionInfoUsecase.create(connectionInfo);
    navigation.goBack();
  };

  useEffect(() => {
    return () => {
      resestConnectionInfo();
    };
  }, []);

  return {
    connectionInfo,
    handleChange,
    getDatabases,
    save,
  };
};

export default useConnectionInfo;
