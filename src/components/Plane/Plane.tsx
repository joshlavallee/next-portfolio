import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'

const Plane: React.FC = () => {
    const ref = useRef<any>()

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
        <mesh ref={ref} scale={[2, 2, 2]} position={[3, 0, 0]} >
            <planeBufferGeometry />
            <meshBasicMaterial color={"green"} side={DoubleSide}/>
        </mesh>
    )
}

export default Plane