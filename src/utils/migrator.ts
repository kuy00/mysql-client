import { migrate as drizzleMigrate } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "@/infrastructure/database/database";
import migrations from "@/infrastructure/database/migrations/migrations";

const migrate = async () => {
  try {
    console.log("Running migrations");

    await drizzleMigrate(db, migrations);

    console.log("Migrated successfully");
  } catch (error) {
    console.log("Migration error: " + error);
  }
};

export default migrate;
