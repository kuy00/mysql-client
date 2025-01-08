import { db } from "../database";
import { SelectConnectionInfo } from "../schemas";

type ConnectionInfoRepository = {
  get: () => Promise<SelectConnectionInfo[]>;
};

const connectionInfoRepository = (): ConnectionInfoRepository => {
  return {
    get: async () => {
      return await db.query.connectionInfo.findMany();
    },
  };
};

export default connectionInfoRepository;
