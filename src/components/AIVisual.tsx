"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => {
        const arr = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const r = 1.5 + Math.random() * 0.5;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi);
        }
        return arr;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function AIWaves() {
    const count = 100;
    const sep = 0.2;
    const positions = useMemo(() => {
        const pos = [];
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                pos.push(i * sep - (count * sep) / 2, 0, j * sep - (count * sep) / 2);
            }
        }
        return new Float32Array(pos);
    }, [count, sep]);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        const pos = ref.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const index = (i * count + j) * 3;
                pos[index + 1] = Math.sin(i / 5 + t) * 0.5 + Math.cos(j / 5 + t) * 0.5;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    );
}

const AIVisual = () => {
    return (
        <div className="w-full h-full opacity-40">
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <fog attach="fog" args={["#020617", 5, 15]} />
                <ambientLight intensity={0.5} />
                <ParticleField />
                <AIWaves />
            </Canvas>
        </div>
    );
};

export default AIVisual;
