'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef1 = useRef<THREE.Mesh>(null)
  const meshRef2 = useRef<THREE.Mesh>(null)
  const meshRef3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.2
      meshRef1.current.rotation.y = time * 0.3
      meshRef1.current.position.y = Math.sin(time * 0.5) * 0.3
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = time * 0.15
      meshRef2.current.rotation.z = time * 0.25
      meshRef2.current.position.x = Math.cos(time * 0.3) * 1.2
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.y = time * 0.4
      meshRef3.current.rotation.x = time * 0.1
      meshRef3.current.position.z = Math.sin(time * 0.2) * 0.8
    }
  })

  return (
    <>
      {/* Sphere */}
      <mesh ref={meshRef1} position={[-2, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color="#9ca3af" 
          emissive="#374151" 
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Box */}
      <mesh ref={meshRef2} position={[2, 1, -1]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#6b7280" 
          emissive="#4b5563" 
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
          wireframe={true}
        />
      </mesh>
      
      {/* Torus */}
      <mesh ref={meshRef3} position={[0, -1, 1]}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial 
          color="#d1d5db" 
          emissive="#9ca3af" 
          emissiveIntensity={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#f8fafc" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#9ca3af" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} color="#d1d5db" />
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}