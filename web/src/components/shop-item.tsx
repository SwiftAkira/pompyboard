"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NearestFilter, type Texture, TextureLoader } from "three"

export default function ShopItem({
    name,
    price,
}: {
    name: string
    price: string
}) {
    const [texture, setTexture] = useState<Texture | undefined>(undefined)

    useEffect(() => {
        const texture_ = new TextureLoader().load(
            "/streamline-pixel:interface-essential-question-help-square.png",
        )
        texture_.magFilter = NearestFilter
        texture_.minFilter = NearestFilter
        setTexture(texture_)
    }, [])

    return (
        <div className="w-full border-2 border-transparent bg-zinc-50 p-2 hover:border-zinc-600">
            <div className="h-64 bg-zinc-100">
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

            <div className="relative flex flex-col gap-2 pt-2">
                <Link
                    href="/shop/mk1pro"
                    className="text-2xl before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 hover:underline"
                >
                    {name}
                </Link>

                <span className="text-lg font-bold">${price}</span>
            </div>
        </div>
    )
}
