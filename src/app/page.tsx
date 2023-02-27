'use client'

import { Canvas } from '@react-three/fiber'
import { Cube, Sphere, Plane } from '@/app/components'

export default function Home() {


  return (
    <Canvas>
      <Cube />
      <Sphere />
      <Plane />
    </Canvas>
  )
}
