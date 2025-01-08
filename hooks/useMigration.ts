import { migrate } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "@/db/database";
import migrations from "@/db/migrations/migrations";

export const useMigration = async () => {
  try {
    console.log("Running migrations");

    await migrate(db, migrations);

    console.log("Migrated successfully");
  } catch (error) {
    console.log("Migration error: " + error);
  }
};
