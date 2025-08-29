import ShopItem from "@/components/shop-item"

export default async function Home() {
    return (
        <div className="flex h-full w-full items-center flex-col gap-2 p-4">
            <ShopItem name="Pompyboard mk.1 Lite" price="147.27" />
            <ShopItem name="Pompyboard mk.1 Pro" price="247.27" />
        </div>
    )
}
