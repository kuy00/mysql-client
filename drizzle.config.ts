import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schemas",
  out: "./db/migrations",
  dialect: "sqlite",
  driver: "expo",
});
