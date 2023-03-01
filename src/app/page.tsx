'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Cube, Sphere, Plane } from '@/components'

const Home: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Cube />
      <Sphere />
      <Plane />
    </Canvas>
  )
}

export default Home