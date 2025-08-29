import ShopItem from "@/components/shop-item"

export default async function Home() {
    return (
        <div className="flex h-full w-full flex-col items-center gap-4 p-4">
            <ShopItem
                name="Pompyboard mk.1 Lite"
                price="147.27"
                pollingRate="1000Hz"
                activeArea="180 × 100 mm"
                resolution="200 lpmm"
                hoverHeight="15mm"
            />
            <ShopItem
                name="Pompyboard mk.1 Pro"
                price="247.27"
                pollingRate="8000Hz"
                activeArea="180 × 100 mm"
                resolution="200 lpmm"
                hoverHeight="20mm"
            />
        </div>
    )
}
