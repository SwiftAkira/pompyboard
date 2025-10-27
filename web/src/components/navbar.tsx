import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all">
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
                <Link 
                    href="/"
                    className="group relative flex items-center gap-3 transition-opacity hover:opacity-80"
                    aria-label="Go to home"
                >
                    <Image
                        className="h-10 w-10 select-none transition-transform group-hover:scale-105"
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="Pompyboard logo"
                        priority
                    />
                    <span className="text-xl font-bold text-slate-900 select-none">
                        Pompyboard
                    </span>
                </Link>
                
                <div className="flex items-center gap-6">
                    <Link
                        href="#products"
                        className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    >
                        Products
                    </Link>
                    <Link
                        href="https://discord.gg/h27rwcBn73"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    >
                        Community
                        <Icon icon="mdi:open-in-new" className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
