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
        <div className="hover:border-zinc-600 border-transparent border-2 w-full bg-zinc-50 p-2">
            <div className="h-64 bg-zinc-100">
                <Canvas camera={{ position: [3, 3, 3], fov: 25 }}>
                    <ambientLight intensity={3} />
                    <OrbitControls
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

            <div className="flex relative flex-col gap-2 pt-2">
                <Link
                    href="/shop/mk1pro"
                    className="text-2xl hover:underline before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0"
                >
                    {name}
                </Link>

                <span className="text-lg font-bold">${price}</span>
            </div>
        </div>
    )
}
