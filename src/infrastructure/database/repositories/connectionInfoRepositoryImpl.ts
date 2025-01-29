import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import { db } from "../database";
import { useJsonSerializer } from "@/hooks/useJsonSerializer";
import ConnectionInfo from "@/domain/entities/connectionInfo";

const connectionInfoRepositoryImpl = (): ConnectionInfoRepository => {
  const jsonSerializer = useJsonSerializer();

  return {
    get: async () => {
      const connectionInfos = await db.query.connectionInfo.findMany();
      return jsonSerializer.deserialize(
        connectionInfos,
        Array<ConnectionInfo>,
      ) as ConnectionInfo[];
    },
  };
};

export default connectionInfoRepositoryImpl;
