interface DatabaseInfoRepository {
  getDatabases: () => Promise<any>;
}

export default DatabaseInfoRepository;
