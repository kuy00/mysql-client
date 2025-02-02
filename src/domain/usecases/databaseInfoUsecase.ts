import DatabaseInfoRepository from "../repositories/databaseInfoRepository";

export interface DatabaseInfoUsecase {
  showDatabases: () => Promise<any | undefined>;
}

export const DatabaseInfoUsecaseImpl = (
  databaseInfoRepository: DatabaseInfoRepository,
): DatabaseInfoUsecase => {
  return {
    showDatabases: async () => {
      try {
        return await databaseInfoRepository.showDatabases();
      } catch (error) {
        console.error(error);
      }
    },
  };
};
