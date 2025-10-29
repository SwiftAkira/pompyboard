import { db } from "@/db"
import { subscribers } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

/**
 * Create a new subscriber in the mailing list
 *
 * @param email - Email address (will be normalized to lowercase and trimmed)
 * @param source - Source of the subscription (e.g., page path, campaign)
 * @param metadata - Optional additional data about the subscriber
 * @returns The created subscriber record
 *
 * @example
 * ```ts
 * await createSubscriber('user@example.com', '/shop/mk1pro', { campaign: 'launch' })
 * ```
 */
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

/**
 * Find a subscriber by their email address
 *
 * @param email - Email address to search for (will be normalized to lowercase and trimmed)
 * @returns Array containing the subscriber record if found, empty array otherwise
 *
 * @example
 * ```ts
 * const existing = await findSubscriberByEmail('user@example.com')
 * if (existing.length > 0) {
 *   console.log('Subscriber already exists')
 * }
 * ```
 */
export async function findSubscriberByEmail(email: string) {
    return await db
        .select()
        .from(subscribers)
        .where(eq(subscribers.email, email.toLowerCase().trim()))
        .limit(1)
}

/**
 * Get the total count of active subscribers
 *
 * @returns Array with a single object containing the count
 *
 * @example
 * ```ts
 * const result = await getActiveSubscriberCount()
 * console.log(`Total subscribers: ${result[0].count}`)
 * ```
 */
export async function getActiveSubscriberCount() {
    return await db
        .select({ count: sql<number>`count(*)` })
        .from(subscribers)
        .where(eq(subscribers.status, "active"))
}
