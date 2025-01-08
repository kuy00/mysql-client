import connectionInfoRepository from "@/db/repositories/connectionInfoRepository";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchConnectionInfo = () => {
  return useSuspenseQuery({
    queryKey: ["connectionInfos"],
    queryFn: connectionInfoRepository().get,
  });
};
