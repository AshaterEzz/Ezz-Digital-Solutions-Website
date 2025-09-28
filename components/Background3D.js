'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, shape = 'sphere', color = '#00f5ff' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'sphere' && <Sphere args={[0.5, 32, 32]} />}
        {shape === 'box' && <Box args={[0.8, 0.8, 0.8]} />}
        {shape === 'torus' && <Torus args={[0.6, 0.2, 16, 32]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef()
  const particleCount = 1000

  useEffect(() => {
    if (pointsRef.current) {
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100

        const color = new THREE.Color()
        color.setHSL(Math.random() * 0.1 + 0.5, 1, 0.5)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      }

      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <ParticleField />
        
        <FloatingShape position={[-8, 2, -5]} shape="sphere" color="#00f5ff" />
        <FloatingShape position={[8, -2, -3]} shape="box" color="#bf00ff" />
        <FloatingShape position={[-5, -4, -7]} shape="torus" color="#00ff88" />
        <FloatingShape position={[6, 4, -4]} shape="sphere" color="#00f5ff" />
        <FloatingShape position={[-10, 0, -6]} shape="box" color="#bf00ff" />
        <FloatingShape position={[4, -6, -8]} shape="torus" color="#00ff88" />
      </Canvas>
    </div>
  )
}
