'use client'

import { Canvas } from '@react-three/fiber'
import { Cube, Sphere, Plane } from '@/components'

const Home: React.FC = () => {
  return (
    <Canvas>
      <Cube />
      <Sphere />
      <Plane />
    </Canvas>
  )
}

export default Home