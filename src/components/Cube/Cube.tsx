import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber'

const Cube: React.FC = () => {
    const ref = useRef<any>()

    const { clock } = useThree()

    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 1 * delta
        ref.current.position.x = Math.sin(clock.elapsedTime)
    })

    return (
        <mesh ref={ref} >
            <boxGeometry />
            <meshBasicMaterial color={"red"} />
        </mesh>
    )
}

export default Cube