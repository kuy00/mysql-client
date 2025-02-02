interface DatabaseInfoRepository {
  showDatabases: () => Promise<any>;
}

export default DatabaseInfoRepository;
