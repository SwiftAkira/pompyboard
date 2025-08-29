import Footer from "@/components/footer"
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
        <html lang="en" className="h-screen">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>

            <body
                className={`${notoSans.className} h-full bg-zinc-100 text-zinc-950 antialiased`}
            >
                <div className="flex h-full flex-col">
                    <Navbar />
                    <main className="mx-auto w-full max-w-4xl grow p-4">
                        {children}
                    </main>
                    <Footer />
                </div>

                <Script
                    src="/api/script.js"
                    data-site-id="6"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
