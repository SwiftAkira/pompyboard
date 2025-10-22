"use client"

import { Icon } from "@iconify/react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NearestFilter, type Texture, TextureLoader } from "three"

export default function ShopItem({
    name,
    price,
    pollingRate,
    activeArea,
    resolution,
    hoverHeight,
}: {
    name: string
    price: string
    pollingRate: string
    activeArea: string
    resolution: string
    hoverHeight: string
}) {
    const [texture, setTexture] = useState<Texture | undefined>(undefined)

    useEffect(() => {
        const texture_ = new TextureLoader().load(
            "/streamline-pixel--interface-essential-question-help-square.png",
        )
        texture_.magFilter = NearestFilter
        texture_.minFilter = NearestFilter
        setTexture(texture_)
    }, [])

    return (
        <div className="flex h-52 w-full border-2 border-transparent hover:border-slate-800">
            <div className="w-md bg-zinc-50">
                <Canvas camera={{ position: [3, 3, 3], fov: 25 }}>
                    <ambientLight intensity={3} />
                    <OrbitControls
                        enableZoom={false}
                        rotateSpeed={0.5}
                        autoRotate
                        autoRotateSpeed={0.2}
                    />
                    <mesh>
                        <boxGeometry />
                        <meshPhongMaterial map={texture} />
                    </mesh>
                </Canvas>
            </div>

            <div className="relative flex w-full flex-col gap-4 bg-slate-800 pt-2 pl-4 text-zinc-100">
                <Link
                    href="/shop/mk1pro"
                    className="text-2xl before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0"
                >
                    {name}
                </Link>
                <ul>
                    <li>
                        <b>{pollingRate}</b> Polling rate
                    </li>
                    <li>
                        <b>{activeArea}</b> Active area
                    </li>
                    <li>
                        <b>{resolution}</b> resolution
                    </li>
                    <li>
                        <b>{hoverHeight}</b> Hover height
                    </li>
                </ul>
                <span className="mr-2 mb-4 ml-auto flex text-xl font-bold">
                    ${price}
                </span>
            </div>
        </div>
    )
}
