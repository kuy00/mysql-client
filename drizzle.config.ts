import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infrastructure/database/schemas",
  out: "./src/infrastructure/database/migrations",
  dialect: "sqlite",
  driver: "expo",
});
