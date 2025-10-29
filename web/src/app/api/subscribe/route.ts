import { createSubscriber, findSubscriberByEmail } from "@/db/queries"
import { getClientIp } from "@/lib/get-client-ip"
import { checkRateLimit } from "@/lib/rate-limit"
import { subscribeSchema } from "@/lib/validations/subscriber"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        // 1. Rate limiting - check FIRST before expensive operations
        const ip = getClientIp(request)
        const rateLimit = checkRateLimit(ip)

        if (!rateLimit.success) {
            return NextResponse.json(
                {
                    error: "Too many requests. Please try again later.",
                    retryAfter: rateLimit.resetAt
                        ? Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
                        : 60,
                },
                { status: 429 },
            )
        }

        // 2. Parse and validate request body
        const body = await request.json()
        const validation = subscribeSchema.safeParse(body)

        if (!validation.success) {
            const firstError = validation.error.issues[0]
            return NextResponse.json(
                {
                    error: firstError?.message ?? "Invalid input",
                },
                { status: 400 },
            )
        }

        const { email, source, metadata } = validation.data

        // 3. Check if email already exists
        const existing = await findSubscriberByEmail(email)

        if (existing.length > 0) {
            // Return success to prevent email enumeration attacks
            // Attackers shouldn't be able to determine if an email is in the system
            return NextResponse.json(
                { message: "Thank you for subscribing!" },
                { status: 200 },
            )
        }

        // 4. Create subscriber
        await createSubscriber(email, source, metadata)

        // 5. Success response
        return NextResponse.json(
            { message: "Successfully subscribed!" },
            { status: 201 },
        )
    } catch (error) {
        // Log error for debugging but don't expose internals to client
        console.error("Subscribe error:", error)

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 },
        )
    }
}
