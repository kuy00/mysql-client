import { GET_CONNECTION_INFOS } from "@/constants/queryKey";
import { ConnectionInfoUsecasImpl } from "@/application/usecases/connectionInfoUsecase";
import ConnectionInfoRepositoryImpl from "@/infrastructure/localDatabase/repositories/connectionInfoRepositoryImpl";
import { useSuspenseQuery } from "@tanstack/react-query";

const useConnectionInfo = () => {
  const connectionInfoUsecase = ConnectionInfoUsecasImpl(
    ConnectionInfoRepositoryImpl()
  );

  const { data: connectionInfos } = useSuspenseQuery({
    queryKey: GET_CONNECTION_INFOS,
    queryFn: connectionInfoUsecase.fetch,
  });

  return {
    connectionInfos,
  };
};

export default useConnectionInfo;
