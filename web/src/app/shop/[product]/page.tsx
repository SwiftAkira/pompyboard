export default async function Page({
    params,
}: {
    params: Promise<{ product: string }>
}) {
    const { product } = await params
    return <div className="flex flex-col items-center gap-2 p-4">{product}</div>
}
