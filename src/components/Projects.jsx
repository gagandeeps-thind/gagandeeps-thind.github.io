import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Node({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.15, 12, 12]} />
      <meshBasicMaterial color="#00ffff" />
    </mesh>
  );
}

function NeuralNetwork() {
  const groupRef = useRef();

  const neurons = useMemo(() => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      points.push([
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return points;
  }, []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const [x1, y1, z1] = neurons[i];
        const [x2, y2, z2] = neurons[j];
        const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
        if (dist < 1.2) {
          lines.push([new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)]);
        }
      }
    }
    return lines;
  }, [neurons]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0008;
    }
  });

  return (
    <group ref={groupRef}>
      {neurons.map((pos, i) => (
        <Node key={i} position={pos} />
      ))}
      {connections.map(([start, end], i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#66ccff" transparent opacity={0.15} />
          </line>
        );
      })}
    </group>
  );
}

export default function ImmersiveTechBackground() {
  const [scrollY, setScrollY] = useState(0);
  const parallax = (factor) => `${scrollY * factor}px`;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 3D Neural Background Canvas */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <ambientLight intensity={0.7} />
          <NeuralNetwork />
        </Canvas>
      </div>

      {/* 2D Overlay: Tech Grid + Lights + Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-tr from-gray-950 via-black to-gray-900">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating Particles */}
        {Array.from({ length: 35 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                animation: `float ${duration}s ease-in-out infinite`,
              }}
            />
          );
        })}

        {/* Central Blue Glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)`,
            transform: `translateY(${parallax(0.1)})`,
          }}
        />

        {/* Purple Glow */}
        <div
          className="absolute top-[30%] left-[15%] w-[300px] h-[300px] bg-purple-500 opacity-15 rounded-full blur-[150px] animate-pulse"
          style={{ transform: `translateY(${parallax(0.25)})` }}
        />

        {/* Amber Glow */}
        <div
          className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-amber-400 opacity-20 rounded-full blur-[150px]"
          style={{ transform: `translateY(${parallax(0.3)})` }}
        />

        {/* Spinning Tech Ring */}
        <div
          className="absolute top-[50%] left-[50%] w-[500px] h-[500px] rounded-full border border-sky-400/10 animate-spin-slow"
          style={{
            transform: `translate(-50%, -50%) rotate(${scrollY * 0.04}deg)`,
          }}
        />

        {/* Hover Distortion */}
        <div className="absolute inset-0 pointer-events-none hover:animate-distort" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>
    </>
  );
}
