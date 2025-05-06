import DatabaseInfoRepository from "@/domain/repositories/databaseInfoRepository";
import Database from "@/domain/entities/database";
import ApiError from "@/errors/apiClientError";
import RepositoryError from "@/errors/repositoryError";
import jsonSerializer from "@/utils/jsonSerializer";
import { AxiosInstance } from "axios";

const DatabaseInfoRepositoryImpl = (
  client: AxiosInstance,
): DatabaseInfoRepository => {
  return {
    getDatabases: async () => {
      try {
        const databases = await client.get("/databases");

        return jsonSerializer.deserialize(databases, Database) as Database[];
      } catch (error) {
        if (error instanceof ApiError) {
          throw new RepositoryError("Failed to fetch database info", error);
        }

        throw new RepositoryError("Unexpected error", error as Error);
      }
    },
  };
};

export default DatabaseInfoRepositoryImpl;
