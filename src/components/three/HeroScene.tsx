"use client";

// Swap the GLB by changing hero.modelPath in site.config.ts.
import { Bounds, Center, Float, PerformanceMonitor, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

import { siteConfig } from "@/content/site.config";

type HeroSceneProps = {
  modelPath: string;
};

function Model({ modelPath }: HeroSceneProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!modelRef.current) {
      return;
    }

    modelRef.current.rotation.y += delta * 0.12;
    modelRef.current.rotation.x += (pointer.y * 0.12 - modelRef.current.rotation.x) * 0.04;
    modelRef.current.rotation.z += (-pointer.x * 0.12 - modelRef.current.rotation.z) * 0.04;
  });

  return (
    <Bounds fit clip observe margin={1.4}>
      <Center>
        <Float floatIntensity={0.25} rotationIntensity={0.08} speed={1.1}>
          <group ref={modelRef}>
            <primitive object={scene} />
          </group>
        </Float>
      </Center>
    </Bounds>
  );
}

function SceneContent({ modelPath }: HeroSceneProps) {
  const setDpr = useThree((state) => state.setDpr);

  return (
    <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={1.1}
        color={siteConfig.theme.accent}
      />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
    </PerformanceMonitor>
  );
}

export default function HeroScene({ modelPath }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="absolute inset-0"
    >
      <SceneContent modelPath={modelPath} />
    </Canvas>
  );
}
