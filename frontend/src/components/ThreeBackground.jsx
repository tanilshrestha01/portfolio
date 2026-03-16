import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function Orb({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2
    mesh.current.rotation.y = state.clock.elapsedTime * 0.25
  })

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.9, 1]} />
        <MeshDistortMaterial color={color} attach="material" distort={0.25} speed={2.5} roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function ThreeBackground() {
  const orbs = useMemo(
    () => [
      { position: [-2.6, 0.4, -0.8], color: '#22d3ee' },
      { position: [2.4, -0.8, -0.6], color: '#fb7185' },
      { position: [0, 1.5, -1.2], color: '#2dd4bf' },
    ],
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={2} position={[2, 2, 2]} />
        <Stars radius={50} depth={20} count={1800} factor={4} saturation={0} fade speed={0.7} />
        {orbs.map((orb) => (
          <Orb key={orb.color} position={orb.position} color={orb.color} />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.35} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
