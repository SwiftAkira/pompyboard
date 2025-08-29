import Link from "next/link"

export default async function Page({}: {
    params: Promise<{ product: string }>
}) {
    return (
        <div className="flex flex-col items-center gap-2 p-4">
            <h2 className="text-6xl font-black">COMING SOON</h2>
            <span>
                Join our{" "}
                <Link
                    className="underline hover:underline-offset-2"
                    href="https://discord.gg/h27rwcBn73"
                >
                    Discord
                </Link>{" "}
                server to get notified when the product launches
            </span>
        </div>
    )
}
