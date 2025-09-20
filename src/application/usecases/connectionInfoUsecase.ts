import ConnectionInfo from "@/domain/entities/connectionInfo";
import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";

export interface ConnectionInfoUsecase {
  fetch: () => Promise<ConnectionInfo[]>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo>;
}

export const ConnectionInfoUsecasImpl = (
  connectionInfoRepository: ConnectionInfoRepository
): ConnectionInfoUsecase => {
  return {
    fetch: async () => {
      return await connectionInfoRepository.get();
    },
    create: async (data: ConnectionInfo) => {
      return await connectionInfoRepository.create(data);
    },
  };
};
