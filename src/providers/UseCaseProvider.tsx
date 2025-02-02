import {
  ConnectionInfoUsecase,
  ConnectionInfoUsecasImpl,
} from "@/domain/usecases/connectionInfoUsecase";
import { useRepository } from "@/hooks/useRepository";
import { createContext, ReactNode } from "react";

type UseCaseContainer = {
  connectionInfoUsecase: ConnectionInfoUsecase;
};

export const UseCaseContext = createContext<UseCaseContainer | null>(null);

export const UseCaseProvider = ({ children }: { children: ReactNode }) => {
  const repositoryContainer = useRepository();
  const useCaseContainer: UseCaseContainer = {
    connectionInfoUsecase: ConnectionInfoUsecasImpl(
      repositoryContainer.connectionInfoRepository,
    ),
  };

  return (
    <UseCaseContext.Provider value={useCaseContainer}>
      {children}
    </UseCaseContext.Provider>
  );
};
