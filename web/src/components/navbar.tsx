import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="h-16 border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-full max-w-4xl items-center justify-between">
                <div className="relative flex h-full items-center px-2">
                    <Image
                        className="mr-4 aspect-square h-12 w-12 select-none"
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
                            className="text-lg font-extrabold select-none"
                        >
                            Pompyboard
                        </span>
                    </Link>
                </div>
                <div className="flex h-full items-center"></div>
            </div>
        </nav>
    )
}
