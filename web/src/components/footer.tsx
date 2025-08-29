import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-48 bg-slate-800 text-slate-300 p-4">
            <div className="flex justify-between max-w-4xl mx-auto">
                <div>
                    <div className="flex gap-2">
                        <Link
                            href="https://github.com/pompyboard/pompyboard"
                            target="_blank"
                            className="hover:text-slate-50"
                        >
                            <Icon
                                className="hover:text-slate-50"
                                icon="pixel:github"
                                width="32"
                                height="32"
                            />
                        </Link>
                        <Link
                            href="mailto:pompydev@proton.me"
                            className="hover:text-slate-50"
                        >
                            <Icon
                                className="hover:text-slate-50"
                                icon="pixelarticons:mail"
                                width="32"
                                height="32"
                            />
                        </Link>
                    </div>
                    <span>
                        made by{" "}
                        <Link
                            target="_blank"
                            className="hover:underline font-bold hover:text-slate-50"
                            href="https://osu.ppy.sh/users/15691003"
                        >
                            pomp
                        </Link>
                    </span>
                </div>

                <div>
                    <Link
                        href="https://discord.gg/h27rwcBn73"
                        target="_blank"
                        className="hover:text-slate-50"
                    >
                        <Icon
                            aria-label="Discord"
                            icon="pixel:discord"
                            width="32"
                            height="32"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
