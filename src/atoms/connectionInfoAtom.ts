import { atomWithReset } from "jotai/utils";
import ConnectionInfo from "@/domain/entities/connectionInfo";

export const connectionInfoAtom = atomWithReset<ConnectionInfo>(
  new ConnectionInfo({
    host: "",
    port: 3306,
    userId: "",
    password: "",
  }),
);
