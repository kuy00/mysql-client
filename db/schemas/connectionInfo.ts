import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const connectionInfo = sqliteTable("connection_infos", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export type SelectConnectionInfo = typeof connectionInfo.$inferSelect;
