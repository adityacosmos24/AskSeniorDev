"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/three-js-asset.glb");

function GLBModel() {
  const { scene } = useGLTF("/three-js-asset.glb");

  // Center model ONCE
  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });

  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, -0.4, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function SystemDesignModel() {
  return (
    <Canvas
      className="w-full h-full"
      dpr={1}
      frameloop="demand"
      camera={{ position: [3, 2, 3], fov: 45 }}
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        preserveDrawingBuffer: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#eaf2ff"));
      }}
    >
      {/* LIGHTS — cheap & stable */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1} />

      {/* CONTROLS */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
      />

      <GLBModel />
    </Canvas>
  );
}

// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Float } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// /* ================= COLORS ================= */
// const COLORS = {
//   primary: "#1da1f2",
//   light: "#eaf5ff",
//   mid: "#b6dcff",
//   dark: "#0b5ed7",
//   white: "#ffffff",
//   gray: "#cfd8e3",
//   line: "#93c5fd",
// };

// /* ================= PARALLAX GROUP ================= */
// function Parallax({ children }: { children: React.ReactNode }) {
//   const ref = useRef<THREE.Group>(null);
//   const { mouse } = useThree();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.rotation.y = THREE.MathUtils.lerp(
//       ref.current.rotation.y,
//       mouse.x * 0.25,
//       0.05
//     );
//     ref.current.rotation.x = THREE.MathUtils.lerp(
//       ref.current.rotation.x,
//       -mouse.y * 0.15,
//       0.05
//     );
//   });

//   return <group ref={ref}>{children}</group>;
// }

// /* ================= CONNECTION LINE ================= */
// function Connection({ from, to }: any) {
//   const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   return (
//     <line geometry={geometry}>
//       <lineBasicMaterial color={COLORS.line} linewidth={1} />
//     </line>
//   );
// }

// /* ================= MONITOR (API HUB) ================= */
// function Monitor() {
//   return (
//     <group position={[0, 0.9, 0]}>
//       <mesh>
//         <boxGeometry args={[3.2, 2, 0.25]} />
//         <meshStandardMaterial color={COLORS.light} />
//       </mesh>

//       <mesh position={[0, 0, 0.14]}>
//         <planeGeometry args={[2.2, 1.2]} />
//         <meshStandardMaterial color={COLORS.primary} />
//       </mesh>

//       <mesh position={[0, 0, 0.16]}>
//         <planeGeometry args={[1.2, 0.45]} />
//         <meshStandardMaterial color={COLORS.white} />
//       </mesh>

//       <mesh position={[0, -1.4, 0]}>
//         <cylinderGeometry args={[0.15, 0.15, 1.1]} />
//         <meshStandardMaterial color={COLORS.gray} />
//       </mesh>
//     </group>
//   );
// }

// /* ================= LAPTOP ================= */
// function Laptop() {
//   return (
//     <group position={[-3, -1.3, -1]} rotation={[-0.15, 0.35, 0]}>
//       <mesh>
//         <boxGeometry args={[2.4, 0.18, 1.6]} />
//         <meshStandardMaterial color={COLORS.mid} />
//       </mesh>

//       <mesh position={[0, 0.85, -0.75]} rotation={[-0.8, 0, 0]}>
//         <boxGeometry args={[2.2, 1.4, 0.1]} />
//         <meshStandardMaterial color={COLORS.light} />
//       </mesh>
//     </group>
//   );
// }

// /* ================= FLOATING DEVICE ================= */
// function Device({ position, scale = 1 }: any) {
//   return (
//     <Float speed={1} floatIntensity={0.3}>
//       <group position={position} scale={scale}>
//         <mesh>
//           <boxGeometry args={[1.1, 0.75, 0.15]} />
//           <meshStandardMaterial color={COLORS.light} />
//         </mesh>
//         <mesh position={[0, 0, 0.09]}>
//           <planeGeometry args={[0.8, 0.35]} />
//           <meshStandardMaterial color={COLORS.primary} />
//         </mesh>
//       </group>
//     </Float>
//   );
// }

// /* ================= SCENE ================= */
// export default function SystemDesignIllustration() {
//   return (
//     <Canvas
//       className="w-full h-full"
//       dpr={1}
//       camera={{ position: [0, 3.5, 9], fov: 45 }}
//     >
//       {/* LIGHTING */}
//       <ambientLight intensity={1.1} />
//       <directionalLight position={[6, 8, 6]} intensity={0.8} />
//       <directionalLight position={[-6, 4, -4]} intensity={0.4} />

//       <Parallax>
//         {/* CORE */}
//         <Monitor />
//         <Laptop />

//         {/* DEVICES */}
//         <Device position={[3.5, 1.8, 0]} scale={0.9} />
//         <Device position={[2.6, 0.4, -1.4]} scale={0.8} />
//         <Device position={[-2.4, 2.2, -1]} scale={0.75} />

//         {/* CONNECTIONS */}
//         <Connection from={[0, 1.3, 0]} to={[3.5, 1.8, 0]} />
//         <Connection from={[0, 1.1, 0]} to={[2.6, 0.4, -1.4]} />
//         <Connection from={[0, 1.5, 0]} to={[-2.4, 2.2, -1]} />
//         <Connection from={[0, 0.4, 0]} to={[-3, -1.3, -1]} />
//       </Parallax>
//     </Canvas>
//   );
// }
