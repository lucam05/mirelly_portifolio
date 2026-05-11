import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 100]} ref={meshRef}>
          <MeshDistortMaterial
            color="#1a1a1a"
            attach="material"
            distort={0.4}
            speed={4}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <mesh position={[0, 0, -2]}>
        <ringGeometry args={[2.5, 2.6, 64]} />
        <meshBasicMaterial color="#FF00FF" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0, -3]}>
        <ringGeometry args={[3.2, 3.25, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default function CanvasScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <Scene />
    </Canvas>
  );
}
