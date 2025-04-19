"use client";

// ✈️

import { useTheme } from "@/context/ThemeContext";
import { Instance, Instances, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo } from "react";
import { MathUtils, Vector3 } from "three";
import { Parallax } from "react-scroll-parallax";

// Reduced number of particles for better performance
const rows = 20;
const columns = 25;

export default function DotPlain() {
  const mouse = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Throttled mouse event for performance
  useEffect(() => {
    let timeout;
    const updateMousePosition = (event) => {
      if (timeout) return;
      timeout = setTimeout(() => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        timeout = null;
      }, 16); // ~60fps throttling
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timeout);
    };
  }, []);

  // Memoize canvas to prevent unnecessary re-renders
  const canvasElement = useMemo(
    () => (
      <Canvas camera={{ position: [0, 0, 13], fov: 50 }} dpr={[1, 2]}>
        <color
          attach="background"
          args={theme === "light" ? ["white"] : ["black"]}
        />

        <Dots mouse={mouse} />
      </Canvas>
    ),
    [theme],
  );

  return (
    <Parallax
      translateY={[-20, 0]}
      shouldAlwaysCompleteAnimation={true}
      className={`fixed top-0 -z-10 h-[130vh] w-screen opacity-20`}
    >
      {canvasElement}
    </Parallax>
  );
}

function Dots({ mouse }) {
  const ref = useRef();
  const { theme } = useTheme();

  // Pre-compute particles once
  const particles = useMemo(
    () =>
      Array.from({ length: rows * columns }, (_, index) => ({
        factor: MathUtils.randInt(20, 100),
        speed: MathUtils.randFloat(0.01, 0.75),
        xFactor: (index % columns) * 0.5 - columns * 0.25,
        yFactor: MathUtils.randFloatSpread(5),
        zFactor: (Math.floor(index / columns) - 5) * 0.5,
        size: MathUtils.randFloat(0.02, 0.04),
        // Add phase offset for smoother animations
        phaseOffset: Math.random() * Math.PI * 2,
      })),
    [],
  );

  // Pre-calculate positions array for performance
  const tempVector = new Vector3();
  const positions = useMemo(
    () => particles.map(() => new Vector3()),
    [particles],
  );

  useFrame((state, delta) => {
    // Dampened rotation with optimized calculations
    if (ref.current) {
      ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        mouse.current.x * 0.1,
        4,
        delta,
      );
      ref.current.rotation.x = MathUtils.damp(
        ref.current.rotation.x,
        -mouse.current.y * 0.1,
        4,
        delta,
      );

      // Batch calculations for better performance
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < ref.current.children.length; i++) {
        const particle = particles[i];
        const child = ref.current.children[i];

        // Calculate position once with less trig operations
        const t = time * 0.5 + particle.phaseOffset;
        const sinT = Math.sin(t);

        tempVector.set(
          particle.xFactor + sinT * 0.3,
          particle.yFactor + sinT * 0.2,
          particle.zFactor + sinT * 0.4,
        );

        // Lerp instead of direct assignment for smoother movement
        child.position.lerp(tempVector, delta * 2);
      }
    }
  });

  return (
    <Instances ref={ref} limit={particles.length}>
      {/* Reduced geometry complexity */}
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial
        color={theme === "light" ? "black" : "white"}
        transparent
        opacity={0.8}
      />
      {particles.map((particle, index) => (
        <Instance
          key={index}
          scale={[particle.size, particle.size, particle.size]}
          position={[particle.xFactor, particle.yFactor, particle.zFactor]}
        />
      ))}
    </Instances>
  );
}
