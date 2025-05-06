import Database from "../entities/database";
import ConnectionInfo from "../entities/connectionInfo";
import Token from "../entities/token";
import DatabaseManagementRepository from "../repositories/databaseManagementRepository";

export interface DatabaseManagementUsecase {
  createConnection: (connectionInfo: ConnectionInfo) => Promise<Token>;
  getDatabases: () => Promise<Database[]>;
}

export const DatabaseManagementUsecaseImpl = (
  databaseManagementRepository: DatabaseManagementRepository,
): DatabaseManagementUsecase => {
  return {
    createConnection: async (connectionInfo: ConnectionInfo) => {
      return await databaseManagementRepository.createConnection(
        connectionInfo,
      );
    },
    getDatabases: async () => {
      return await databaseManagementRepository.getDatabases();
    },
  };
};
