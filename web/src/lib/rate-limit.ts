/**
 * In-memory rate limiter for API endpoints
 * Limits requests per IP address to prevent spam and abuse
 */

interface RateLimitRecord {
    count: number
    resetAt: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @param limit - Maximum number of requests allowed in the time window (default: 3)
 * @param windowMs - Time window in milliseconds (default: 60000 = 1 minute)
 * @returns Object with success status and remaining attempts
 */
export function checkRateLimit(
    identifier: string,
    limit = 3,
    windowMs = 60000,
) {
    const now = Date.now()
    const record = rateLimitMap.get(identifier)

    // Clean up old entries
    if (record && now > record.resetAt) {
        rateLimitMap.delete(identifier)
    }

    const current = rateLimitMap.get(identifier)

    if (!current) {
        rateLimitMap.set(identifier, { count: 1, resetAt: now + windowMs })
        return { success: true, remaining: limit - 1 }
    }

    if (current.count >= limit) {
        return {
            success: false,
            remaining: 0,
            resetAt: current.resetAt,
        }
    }

    current.count++
    return { success: true, remaining: limit - current.count }
}

/**
 * Clean up expired rate limit entries (call periodically to prevent memory leaks)
 */
export function cleanupRateLimits() {
    const now = Date.now()
    for (const [key, record] of rateLimitMap.entries()) {
        if (now > record.resetAt) {
            rateLimitMap.delete(key)
        }
    }
}

/**
 * Clear all rate limit records (useful for testing)
 */
export function clearRateLimits() {
    rateLimitMap.clear()
}
