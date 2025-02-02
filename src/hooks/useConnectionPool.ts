import { connectionInfoAtom } from "@/atoms/connectionInfoAtom";
import { getPool } from "@/infrastructure/remoteDatabase/database";
import { useAtom } from "jotai";

const useConnectionPool = () => {
  const [connectionInfo] = useAtom(connectionInfoAtom);

  return {
    get: () => {
      return getPool({
        user: connectionInfo.userId,
        password: connectionInfo.password,
        database: connectionInfo.database,
        host: connectionInfo.host,
        port: connectionInfo.port,
      });
    },
  };
};

export default useConnectionPool;
