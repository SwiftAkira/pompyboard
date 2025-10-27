import Link from "next/link"

// TODO: Actually build this page instead of just showing a construction cone emoji
export default async function Page({}: {
    params: Promise<{ product: string }>
}) {
    return (
        <div className="flex flex-col items-center gap-6 p-8 text-center">
            <div className="text-9xl">🚧</div>
            <h2 className="text-6xl font-black text-slate-900">COMING SOON</h2>
            <p className="max-w-md text-lg text-slate-600">
                We're still building this page. In the meantime, why not join our{" "}
                <Link
                    className="font-semibold text-blue-600 underline decoration-2 underline-offset-2 transition-colors hover:text-blue-700"
                    href="https://discord.gg/h27rwcBn73"
                >
                    Discord
                </Link>{" "}
                server? You'll get notified when we launch (and probably some memes too)
            </p>
        </div>
    )
}
