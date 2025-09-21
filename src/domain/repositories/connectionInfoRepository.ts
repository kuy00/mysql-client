import ConnectionInfo from "../entities/connectionInfo";

interface ConnectionInfoRepository {
  get: () => Promise<ConnectionInfo[]>;
  getById: (id: number) => Promise<ConnectionInfo>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo>;
  update: (data: ConnectionInfo) => Promise<ConnectionInfo>;
}

export default ConnectionInfoRepository;
