import { db } from "@/db"
import { subscribers } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

export async function createSubscriber(
    email: string,
    source?: string,
    metadata?: Record<string, unknown>,
) {
    return await db
        .insert(subscribers)
        .values({
            email: email.toLowerCase().trim(),
            source: source ?? "unknown",
            metadata: metadata ?? null,
            status: "active",
        })
        .returning()
}

export async function findSubscriberByEmail(email: string) {
    return await db
        .select()
        .from(subscribers)
        .where(eq(subscribers.email, email.toLowerCase().trim()))
        .limit(1)
}

export async function getActiveSubscriberCount() {
    return await db
        .select({ count: sql<number>`count(*)` })
        .from(subscribers)
        .where(eq(subscribers.status, "active"))
}
