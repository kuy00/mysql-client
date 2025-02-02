import ConnectionInfo from "../entities/connectionInfo";

interface ConnectionInfoRepository {
  get: () => Promise<ConnectionInfo[]>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo>;
}

export default ConnectionInfoRepository;
