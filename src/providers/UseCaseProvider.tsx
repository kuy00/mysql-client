import {
  ConnectionInfoUsecase,
  ConnectionInfoUsecasImpl,
} from "@/domain/usecases/connectionInfoUsecase";
import {
  DatabaseInfoUsecase,
  DatabaseInfoUsecaseImpl,
} from "@/domain/usecases/databaseInfoUsecase";
import { useRepository } from "@/hooks/useRepository";
import { createContext, ReactNode } from "react";

type UseCaseContainer = {
  connectionInfoUsecase: ConnectionInfoUsecase;
  databaseInfoUsecase: DatabaseInfoUsecase;
};

export const UseCaseContext = createContext<UseCaseContainer | null>(null);

export const UseCaseProvider = ({ children }: { children: ReactNode }) => {
  const repositoryContainer = useRepository();
  const useCaseContainer: UseCaseContainer = {
    connectionInfoUsecase: ConnectionInfoUsecasImpl(
      repositoryContainer.connectionInfoRepository,
    ),
    databaseInfoUsecase: DatabaseInfoUsecaseImpl(
      repositoryContainer.databaseInfoRepository,
    ),
  };

  return (
    <UseCaseContext.Provider value={useCaseContainer}>
      {children}
    </UseCaseContext.Provider>
  );
};
