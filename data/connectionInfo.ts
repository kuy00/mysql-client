import connectionInfoRepository from "@/db/repositories/connectionInfoRepository";
import { useSuspenseQuery } from "@tanstack/react-query";

export const fetch = () => {
  return useSuspenseQuery({
    queryKey: ["connectionInfos"],
    queryFn: connectionInfoRepository().get,
  });
};
