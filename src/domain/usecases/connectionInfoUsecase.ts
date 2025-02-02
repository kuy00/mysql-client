import ConnectionInfo from "../entities/connectionInfo";
import ConnectionInfoRepository from "../repositories/connectionInfoRepository";

export interface ConnectionInfoUseCase {
  fetch: () => Promise<ConnectionInfo[] | undefined>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo | undefined>;
}

export const ConnectionInfoUseCasImpl = (
  connectionInfoRepository: ConnectionInfoRepository,
): ConnectionInfoUseCase => {
  return {
    fetch: async () => {
      try {
        return await connectionInfoRepository.get();
      } catch (error) {
        console.error(error);
      }
    },
    create: async (data: ConnectionInfo) => {
      try {
        return await connectionInfoRepository.create(data);
      } catch (error) {
        console.error(error);
      }
    },
  };
};
