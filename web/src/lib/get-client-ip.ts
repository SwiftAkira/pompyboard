import type { NextRequest } from "next/server"

/**
 * Extract client IP address from Next.js request
 * Checks multiple headers to handle proxies and load balancers
 */
export function getClientIp(request: NextRequest): string {
    // Check common headers in order of preference
    const forwarded = request.headers.get("x-forwarded-for")
    if (forwarded) {
        // x-forwarded-for can contain multiple IPs, take the first one
        return forwarded.split(",")[0].trim()
    }

    const realIp = request.headers.get("x-real-ip")
    if (realIp) {
        return realIp.trim()
    }

    const cfConnectingIp = request.headers.get("cf-connecting-ip")
    if (cfConnectingIp) {
        return cfConnectingIp.trim()
    }

    // Fallback to a default value if no IP found
    return "unknown"
}
