"use client";

import { Instance, Instances, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Noise, EffectComposer } from "@react-three/postprocessing";
import { useRef, useEffect, useContext } from "react";
import { MathUtils } from "three";

const rows = 25;
const columns = 30;

const particles = Array.from({ length: rows * columns }, (_, index) => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: (index % columns) * 0.5 - columns * 0.25,
  yFactor: MathUtils.randFloatSpread(5),
  zFactor: (Math.floor(index / columns) - 5) * 0.5,
  size: MathUtils.randFloat(0.02, 0.04),
}));

export default function DotPlain() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen opacity-15 dark:opacity-15">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <color attach="background" args={["#1c1c1c"]} />
        <Dots mouse={mouse} />
        <EffectComposer></EffectComposer>
      </Canvas>
    </div>
  );
}

function Dots({ mouse }) {
  const ref = useRef();
  // const { theme } = useContext(ThemeContext);

  useFrame((state, delta) => {
    ref.current.rotation.y = MathUtils.damp(
      ref.current.rotation.y,
      mouse.current.x * 0.05,
      4,
      delta,
    );
    ref.current.rotation.x = MathUtils.damp(
      ref.current.rotation.x,
      -mouse.current.y * 0.05,
      4,
      delta,
    );

    ref.current.children.forEach((child, index) => {
      const time = state.clock.getElapsedTime();
      const yOffset = Math.sin(time * 0.5 + index * 0.5) * 0.2;
      const xOffset = Math.sin(time * 0.5 + index * 0.5) * 0.3;
      const zOffset = Math.sin(time * 0.5 + index * 0.5) * 0.4;

      child.position.y = particles[index].yFactor + yOffset;
      child.position.x = particles[index].xFactor + xOffset;
      child.position.z = particles[index].zFactor + zOffset;
    });
  });

  return (
    <Instances ref={ref} limit={particles.length}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial
        // color={theme === "light" ? "#525252" : "#e2e2e2"}
        roughness={1}
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
