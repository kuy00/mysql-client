import ConnectionInfo from "../entities/connectionInfo";

interface ConnectionInfoRepository {
  get: () => Promise<ConnectionInfo[]>;
}

export default ConnectionInfoRepository;
