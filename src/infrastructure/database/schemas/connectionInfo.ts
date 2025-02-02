import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ConnectionInfo = sqliteTable("connection_infos", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
  host: text().notNull(),
  port: int().notNull(),
  user_id: text().notNull(),
  password: text().notNull(),
  database: text(),
});

export type SelectConnectionInfo = typeof ConnectionInfo.$inferSelect;
export type InsertConnectionInfo = typeof ConnectionInfo.$inferInsert;
