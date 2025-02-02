import ConnectionInfoRepository from "@/domain/repositories/connectionInfoRepository";
import DatabaseInfoRepository from "@/domain/repositories/databaseInfoRepository";
import connectionInfoRepositoryImpl from "@/infrastructure/localDatabase/repositories/connectionInfoRepositoryImpl";
import DatabaseInfoRepositoryImpl from "@/infrastructure/remoteDatabase/repositories/databaseInfoRepositoryImpl";
import { createContext, ReactNode } from "react";

type RepositoryContainer = {
  connectionInfoRepository: ConnectionInfoRepository;
  databaseInfoRepository: DatabaseInfoRepository;
};

export const RepositoryContext = createContext<RepositoryContainer | null>(
  null,
);

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const repositoryContainer: RepositoryContainer = {
    connectionInfoRepository: connectionInfoRepositoryImpl(),
    databaseInfoRepository: DatabaseInfoRepositoryImpl(),
  };

  return (
    <RepositoryContext.Provider value={repositoryContainer}>
      {children}
    </RepositoryContext.Provider>
  );
};
