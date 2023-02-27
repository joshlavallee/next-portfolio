import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'

const Cube: React.FC = () => {
    const ref = useRef<any>();

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
        <mesh ref={ref} >
            <boxGeometry />
            <meshBasicMaterial color={"red"} wireframe />
        </mesh>
    )
}

export default Cube