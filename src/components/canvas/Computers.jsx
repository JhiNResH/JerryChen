import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const FloatingShape = () => {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    wireRef.current.rotation.x = t * 0.15;
    wireRef.current.rotation.y = t * 0.2;
    wireRef.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#915eff"
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#915eff"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingShape />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
