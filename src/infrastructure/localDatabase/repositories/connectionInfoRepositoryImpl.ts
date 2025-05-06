import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import { db } from "../database";
import { default as ConnectionInfoEntity } from "@/domain/entities/connectionInfo";
import { ConnectionInfo } from "../schemas";
import jsonSerializer from "@/utils/jsonSerializer";

const ConnectionInfoRepositoryImpl = (): ConnectionInfoRepository => {
  return {
    get: async () => {
      const connectionInfos = await db.query.ConnectionInfo.findMany();

      return jsonSerializer.deserialize(
        connectionInfos,
        ConnectionInfoEntity,
      ) as ConnectionInfoEntity[];
    },
    create: async (data: ConnectionInfoEntity) => {
      const connectionInfo = await db
        .insert(ConnectionInfo)
        .values({
          name: data.name ?? data.host,
          host: data.host,
          port: data.port,
          user_id: data.userId,
          password: data.password,
          database: data.database,
        })
        .returning();

      return jsonSerializer.deserialize(
        connectionInfo[0],
        ConnectionInfoEntity,
      ) as ConnectionInfoEntity;
    },
  };
};

export default ConnectionInfoRepositoryImpl;
