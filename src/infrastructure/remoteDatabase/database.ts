import * as mysql from "mysql2/promise";

const poolMap = new Map();

const getPool = (config: mysql.ConnectionOptions): mysql.Pool => {
  const key = `${config.host}-${config.port}-${config.user}-${config.database}`;

  if (!poolMap.has(key)) {
    console.log(`create new pool connection : ${key}`);
    const pool = mysql.createPool(config);
    poolMap.set(key, pool);
  }

  return poolMap.get(key);
};

export { getPool };
