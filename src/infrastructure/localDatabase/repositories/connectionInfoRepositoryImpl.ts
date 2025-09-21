import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import { db } from "../database";
import { default as ConnectionInfoEntity } from "@/domain/entities/connectionInfo";
import { ConnectionInfo } from "../schemas";
import jsonSerializer from "@/utils/jsonSerializer";
import { eq } from "drizzle-orm";

const ConnectionInfoRepositoryImpl = (): ConnectionInfoRepository => {
  return {
    get: async () => {
      const connectionInfos = await db.query.ConnectionInfo.findMany();

      return jsonSerializer.deserialize(
        connectionInfos,
        ConnectionInfoEntity
      ) as ConnectionInfoEntity[];
    },
    getById: async (id: number) => {
      const connectionInfo = await db.query.ConnectionInfo.findFirst({
        where: (ConnectionInfo, { eq }) => {
          return eq(ConnectionInfo.id, id);
        },
      });

      if (!connectionInfo) throw new Error("ConnectionInfo not found");

      return jsonSerializer.deserialize(
        connectionInfo,
        ConnectionInfoEntity
      ) as ConnectionInfoEntity;
    },
    create: async (data: ConnectionInfoEntity) => {
      const connectionInfo = await db
        .insert(ConnectionInfo)
        .values({
          name: data.name,
          host: data.host,
          port: data.port,
          user_id: data.userId,
          password: data.password,
          database: data.database,
        })
        .returning();

      return jsonSerializer.deserialize(
        connectionInfo[0],
        ConnectionInfoEntity
      ) as ConnectionInfoEntity;
    },
    update: async (data: ConnectionInfoEntity) => {
      if (!data.id) throw new Error("ID is required for update");

      const connectionInfo = await db
        .update(ConnectionInfo)
        .set({
          name: data.name,
          host: data.host,
          port: data.port,
          user_id: data.userId,
          password: data.password,
          database: data.database,
        })
        .where(eq(ConnectionInfo.id, data.id))
        .returning();

      return jsonSerializer.deserialize(
        connectionInfo[0],
        ConnectionInfoEntity
      ) as ConnectionInfoEntity;
    },
  };
};

export default ConnectionInfoRepositoryImpl;
