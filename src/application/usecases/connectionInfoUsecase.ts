import ConnectionInfo from "@/domain/entities/connectionInfo";
import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";

export interface ConnectionInfoUsecase {
  fetch: () => Promise<ConnectionInfo[]>;
  getById?: (id: number) => Promise<ConnectionInfo>;
  create: (data: ConnectionInfo) => Promise<ConnectionInfo>;
  update: (data: ConnectionInfo) => Promise<ConnectionInfo>;
}

export const ConnectionInfoUsecasImpl = (
  connectionInfoRepository: ConnectionInfoRepository
): ConnectionInfoUsecase => {
  return {
    fetch: async () => {
      return await connectionInfoRepository.get();
    },
    getById: async (id: number) => {
      return await connectionInfoRepository.getById(id);
    },
    create: async (data: ConnectionInfo) => {
      return await connectionInfoRepository.create(data);
    },
    update: async (data: ConnectionInfo) => {
      return await connectionInfoRepository.update(data);
    },
  };
};
