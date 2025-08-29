import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-48 bg-slate-800 p-4 text-slate-300">
            <div className="mx-auto flex max-w-4xl justify-between">
                <div>
                    made by{" "}
                    <Link
                        target="_blank"
                        className="font-bold hover:text-slate-50 hover:underline"
                        href="https://osu.ppy.sh/users/15691003"
                    >
                        pomp
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        title="Discord"
                        href="https://discord.gg/h27rwcBn73"
                        target="_blank"
                        className="hover:text-slate-50"
                    >
                        <Icon
                            icon="fa7-brands:discord"
                            width="32"
                            height="32"
                        />
                    </Link>
                    <Link
                        title="Open Collective"
                        href="https://opencollective.com/pompyboard"
                        target="_blank"
                        className="hover:text-slate-50"
                    >
                        <Icon
                            icon="simple-icons:opencollective"
                            width="26"
                            height="26"
                        />
                    </Link>
                    <Link
                        title="GitHub"
                        href="https://github.com/pompyboard/pompyboard"
                        target="_blank"
                        className="hover:text-slate-50"
                    >
                        <Icon
                            className="hover:text-slate-50"
                            icon="fa7-brands:github"
                            width="27"
                            height="27"
                        />
                    </Link>
                    <Link
                        title="Email"
                        href="mailto:pompydev@proton.me"
                        className="hover:text-slate-50"
                    >
                        <Icon
                            className="hover:text-slate-50"
                            icon="material-symbols:mail"
                            width="38"
                            height="38"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
