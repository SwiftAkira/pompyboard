import Navbar from "@/components/navbar"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const notoSans = Noto_Sans()

export const metadata: Metadata = {
    title: "Pompyboard",
    description: "Pompyboard",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>

            <body
                className={`${notoSans.className} antialiased bg-zinc-100 text-zinc-950`}
            >
                <Navbar />
                <div className="mx-auto max-w-4xl">{children}</div>
                <Script
                    src="/api/script.js"
                    data-site-id="6"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
