import { jsonb, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core"

/**
 * Subscribers table schema
 *
 * Stores mailing list subscribers with tracking information
 * for marketing and product launch communications.
 */
export const subscribers = pgTable("subscribers", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    source: varchar("source", { length: 100 }), // e.g., "homepage", "shop"
    status: varchar("status", { length: 20 }).default("active").notNull(),
    metadata: jsonb("metadata"), // for future flexibility
    createdAt: timestamp("created_at").defaultNow().notNull(),
    unsubscribedAt: timestamp("unsubscribed_at"),
})
