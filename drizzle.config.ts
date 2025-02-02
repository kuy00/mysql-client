import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infrastructure/localDatabase/schemas",
  out: "./src/infrastructure/localDatabase/migrations",
  dialect: "sqlite",
  driver: "expo",
});
