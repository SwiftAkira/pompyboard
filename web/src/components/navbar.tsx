import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-zinc-200 h-16">
            <div className="flex items-center justify-between h-full mx-auto max-w-4xl">
                <div className="flex px-2 relative items-center h-full">
                    <Image
                        className="aspect-square w-12 h-12 mr-4 select-none"
                        src="/logo.png"
                        width={48}
                        height={48}
                        alt="pompyboard logo"
                    />
                    <Link
                        href="/"
                        aria-label="Go to home"
                        className="before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0"
                    >
                        <span
                            aria-hidden
                            className="font-extrabold text-lg select-none"
                        >
                            Pompyboard
                        </span>
                    </Link>
                </div>
                <div className="flex items-center h-full"></div>
            </div>
        </nav>
    )
}
