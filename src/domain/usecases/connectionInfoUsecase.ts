import connectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import { useJsonSerializer } from "@/hooks/useJsonSerializer";
import ConnectionInfo from "../entities/connectionInfo";

type ConnectionInfoUseCase = {
  fetch: () => Promise<ConnectionInfo[] | null>;
};

const connectionInfoUseCase = (): ConnectionInfoUseCase => {
  const connectionInfoRepo = connectionInfoRepository();
  const jsonSerializer = useJsonSerializer();

  return {
    fetch: async () => {
      const data = await connectionInfoRepo.get();

      try {
        const connectionInfos = jsonSerializer.deserialize(
          data,
          Array<ConnectionInfo>,
        ) as ConnectionInfo[];

        return connectionInfos;
      } catch (error) {
        console.log(`connection info usecase fetch error - ${error}`);
        return null;
      }
    },
  };
};

export default connectionInfoUseCase;
