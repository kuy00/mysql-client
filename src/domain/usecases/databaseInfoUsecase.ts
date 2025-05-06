import RepositoryError from "@/errors/repositoryError";
import DatabaseInfoRepository from "../repositories/databaseInfoRepository";
import UsecaseError from "@/errors/usecaseError";

export interface DatabaseInfoUsecase {
  getDatabases: () => Promise<any | undefined>;
}

export const DatabaseInfoUsecaseImpl = (
  databaseInfoRepository: DatabaseInfoRepository,
): DatabaseInfoUsecase => {
  return {
    getDatabases: async () => {
      try {
        return await databaseInfoRepository.getDatabases();
      } catch (error) {
        if (error instanceof RepositoryError) {
          throw new UsecaseError("Failed to get databases", error);
        }
        throw new UsecaseError("Unexpected error", error as Error);
      }
    },
  };
};
