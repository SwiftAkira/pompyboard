import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/script.js",
        destination: "https://rybbit.pompy.dev/api/script.js",
      },
      {
        source: "/api/track",
        destination: "https://rybbit.pompy.dev/api/track",
      },
    ]
  },
}

export default nextConfig
