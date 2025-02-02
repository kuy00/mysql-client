import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import connectionInfoRepositoryImpl from "@/infrastructure/localDatabase/repositories/connectionInfoRepositoryImpl";
import { createContext, ReactNode } from "react";

type RepositoryContainer = {
  connectionInfoRepository: ConnectionInfoRepository;
};

export const RepositoryContext = createContext<RepositoryContainer | null>(
  null,
);

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const repositoryContainer: RepositoryContainer = {
    connectionInfoRepository: connectionInfoRepositoryImpl(),
  };

  return (
    <RepositoryContext.Provider value={repositoryContainer}>
      {children}
    </RepositoryContext.Provider>
  );
};
