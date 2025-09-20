import Database from "@/domain/entities/database";
import ConnectionInfo from "@/domain/entities/connectionInfo";
import Token from "@/domain/entities/token";
import DatabaseManagementRepository from "@/domain/repositories/databaseManagementRepository";

export interface DatabaseManagementUsecase {
  createConnection: (connectionInfo: ConnectionInfo) => Promise<Token>;
  getDatabases: () => Promise<Database[]>;
}

export const DatabaseManagementUsecaseImpl = (
  databaseManagementRepository: DatabaseManagementRepository
): DatabaseManagementUsecase => {
  return {
    createConnection: async (connectionInfo: ConnectionInfo) => {
      return await databaseManagementRepository.createConnection(
        connectionInfo
      );
    },
    getDatabases: async () => {
      return await databaseManagementRepository.getDatabases();
    },
  };
};
