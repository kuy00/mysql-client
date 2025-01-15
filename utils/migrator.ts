import { migrate as drizzleMigrate } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "@/db/database";
import migrations from "@/db/migrations/migrations";

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
