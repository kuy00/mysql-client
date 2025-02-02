import ConnectionInfo from "../entities/connectionInfo";
import ConnectionInfoRepository from "../repositories/connectionInfoRepository";

export interface ConnectionInfoUsecase {
  fetch: () => Promise<ConnectionInfo[] | undefined>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo | undefined>;
}

export const ConnectionInfoUsecasImpl = (
  connectionInfoRepository: ConnectionInfoRepository,
): ConnectionInfoUsecase => {
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
