import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./infrastructure/databaes/schemas",
  out: "./infrastructure/databaes/migrations",
  dialect: "sqlite",
  driver: "expo",
});
