import ConnectionInfo from "../entities/connectionInfo";
import ConnectionInfoRepository from "../repositories/connectionInfoRepository";

export interface ConnectionInfoUseCaseType {
  fetch: () => Promise<ConnectionInfo[] | null>;
}

export const ConnectionInfoUseCase = (
  connectionInfoRepository: ConnectionInfoRepository,
): ConnectionInfoUseCaseType => {
  return {
    fetch: async () => {
      return await connectionInfoRepository.get();
    },
  };
};
