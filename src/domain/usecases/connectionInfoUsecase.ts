import ConnectionInfo from "../entities/connectionInfo";
import connectionInfoRepositoryImpl from "@/infrastructure/database/repositories/connectionInfoRepositoryImpl";

type ConnectionInfoUseCase = {
  fetch: () => Promise<ConnectionInfo[] | null>;
};

const connectionInfoUseCase = (): ConnectionInfoUseCase => {
  const connectionInfoRepo = connectionInfoRepositoryImpl();

  return {
    fetch: async () => {
      return await connectionInfoRepo.get();
    },
  };
};

export default connectionInfoUseCase;
