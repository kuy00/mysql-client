import DatabaseInfoRepository from "@/domain/repositories/databaseManagementRepository";
import Database from "@/domain/entities/database";
import jsonSerializer from "@/utils/jsonSerializer";
import { AxiosInstance } from "axios";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import Token from "@/domain/entities/token";

const DatabaseManagementRepositoryImpl = (
  client: AxiosInstance,
): DatabaseInfoRepository => {
  return {
    createConnection: async (connectionInfo: ConnectionInfo) => {
      const response = await client.post("/connection", {
        host: connectionInfo.host,
        port: connectionInfo.port,
        user: connectionInfo.userId,
        password: connectionInfo.password,
      });
      return jsonSerializer.deserialize(response.data, Token) as Token;
    },
    getDatabases: async () => {
      const response = await client.get("/database");
      return jsonSerializer.deserialize(response.data, Database) as Database[];
    },
  };
};

export default DatabaseManagementRepositoryImpl;
