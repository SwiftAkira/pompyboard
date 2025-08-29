export default async function Page({
    params,
}: {
    params: Promise<{ product: string }>
}) {
    const { product } = await params
    return <div className="flex items-center flex-col gap-2 p-4">{product}</div>
}
