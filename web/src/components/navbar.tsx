import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-zinc-200 h-16">
            <div className="flex items-center justify-between h-full mx-auto max-w-4xl">
                <div className="flex items-center h-full">
                    <Image
                        className="aspect-square w-12 h-12 mr-4 select-none"
                        src="/logo.png"
                        width={48}
                        height={48}
                        alt="pompyboard logo"
                    />
                    <span className="font-extrabold text-lg select-none">
                        Pompyboard
                    </span>
                </div>
                <div className="flex items-center h-full"></div>
            </div>
        </nav>
    )
}
