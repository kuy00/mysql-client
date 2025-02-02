import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as schemas from "@/infrastructure/localDatabase/schemas";

const sqlite = SQLite.openDatabaseSync(process.env.EXPO_PUBLIC_DB_NAME, {
  useNewConnection: true,
});

const db = drizzle(sqlite, { schema: schemas });

export { db };
