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

            <body className={`${notoSans.className} antialiased`}>
                {children}
                <Script
                    src="/api/script.js"
                    data-site-id="6"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
