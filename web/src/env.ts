// See https://env.t3.gg/docs/nextjs
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        AUTH_OSU_ID: z.string(),
        AUTH_OSU_SECRET: z.string(),
        AUTH_SECRET: z.string(),
        DATABASE_URL: z.string(),
    },
    client: {},
    experimental__runtimeEnv: {},
})
