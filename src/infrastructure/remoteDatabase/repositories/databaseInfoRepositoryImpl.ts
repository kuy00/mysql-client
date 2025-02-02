import DatabaseInfoRepository from "@/domain/repositories/databaseInfoRepository";
import useConnectionPool from "@/hooks/useConnectionPool";

const DatabaseInfoRepositoryImpl = (): DatabaseInfoRepository => {
  // XXX : repository 영역에서 ui 상태를 이용하는 custom hook은 사용하지 않는 패턴으로 변경 필요
  const connectionPool = useConnectionPool();

  return {
    showDatabases: async () => {
      const pool = connectionPool.get();

      const result = pool.execute("SHOW DATABASES");
      return result;
    },
  };
};

export default DatabaseInfoRepositoryImpl;
