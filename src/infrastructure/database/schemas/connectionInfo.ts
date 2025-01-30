import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const connectionInfo = sqliteTable("connection_infos", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
  host: text().notNull(),
  port: int().notNull(),
  user_id: text().notNull(),
  password: text().notNull(),
  database: text(),
});

export type SelectConnectionInfo = typeof connectionInfo.$inferSelect;
