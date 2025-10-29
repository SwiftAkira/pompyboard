/**
 * Test script for the subscribe API endpoint
 * Run with: node --experimental-modules test-subscribe.mjs
 * Or use curl, Postman, or Thunder Client
 */

const BASE_URL = "http://localhost:3000"

async function testSubscribe(email, source = "test") {
    try {
        const response = await fetch(`${BASE_URL}/api/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, source }),
        })

        const data = await response.json()
        console.log(`Status: ${response.status}`)
        console.log("Response:", data)
        console.log("---")
    } catch (error) {
        console.error("Error:", error.message)
    }
}

async function runTests() {
    console.log("🧪 Testing Subscribe API Endpoint\n")

    console.log("✅ Test 1: Valid email")
    await testSubscribe("test@example.com", "homepage")

    console.log("✅ Test 2: Duplicate email (should succeed)")
    await testSubscribe("test@example.com", "homepage")

    console.log("❌ Test 3: Invalid email")
    await testSubscribe("invalid-email", "homepage")

    console.log("❌ Test 4: Missing email")
    const response = await fetch(`${BASE_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "test" }),
    })
    console.log(`Status: ${response.status}`)
    console.log("Response:", await response.json())
    console.log("---")

    console.log("⏱️ Test 5: Rate limiting (make 4 quick requests)")
    for (let i = 1; i <= 4; i++) {
        console.log(`Request ${i}:`)
        await testSubscribe(`test${i}@example.com`, "test")
    }

    console.log("\n✨ Tests complete!")
}

// Run tests
runTests()
