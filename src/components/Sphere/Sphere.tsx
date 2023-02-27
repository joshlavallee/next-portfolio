import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere: React.FC = () => {
    const ref = useRef<any>()

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
        <mesh ref={ref} position={[-3, 0, 0]}>
            <sphereGeometry />
            <meshBasicMaterial color={"blue"} wireframe />
        </mesh>
    )
}

export default Sphere