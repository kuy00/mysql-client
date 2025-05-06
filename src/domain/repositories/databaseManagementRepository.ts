import ConnectionInfo from "../entities/connectionInfo";
import Database from "../entities/database";
import Token from "../entities/token";

interface DatabaseManagementRepository {
  createConnection: (connectionInfo: ConnectionInfo) => Promise<Token>;
  getDatabases: () => Promise<Database[]>;
}

export default DatabaseManagementRepository;
