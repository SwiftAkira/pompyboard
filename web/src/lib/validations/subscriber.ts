import { z } from "zod"

/**
 * Validation schema for subscriber email submission
 * - Trims whitespace and converts to lowercase
 * - Validates email format
 * - Enforces max length of 255 characters
 * - Optional source tracking and metadata
 */
export const subscribeSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address")
        .max(255, "Email address is too long"),
    source: z.string().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>
