PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_connection_infos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`host` text NOT NULL,
	`port` integer NOT NULL,
	`user_id` text NOT NULL,
	`password` text NOT NULL,
	`database` text
);
--> statement-breakpoint
INSERT INTO `__new_connection_infos`("id", "name", "host", "port", "user_id", "password", "database") SELECT "id", "name", "host", "port", "user_id", "password", "database" FROM `connection_infos`;--> statement-breakpoint
DROP TABLE `connection_infos`;--> statement-breakpoint
ALTER TABLE `__new_connection_infos` RENAME TO `connection_infos`;--> statement-breakpoint
PRAGMA foreign_keys=ON;