import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const createStars = () => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < 5000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    vertices.push(x, y, z);
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });

  return <points geometry={geometry} material={material} />;
};

const StarsBackground = () => {
  const stars = useMemo(() => createStars(), []);
  const group = useRef();

  useFrame(() => {
    group.current.rotation.x += 0.001;
    group.current.rotation.y += 0.001;
  });

  return <group ref={group}>{stars}</group>;
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-0">
    <Canvas>
      <color attach="background" args={["#000"]} />
      <StarsBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
