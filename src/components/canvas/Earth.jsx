import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';
import { useWebGLSupport } from '../../utils/webgl';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  const supportsWebGL = useWebGLSupport();

  if (!supportsWebGL) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-tertiary/60">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary">Available for</p>
          <p className="mt-3 text-2xl font-bold text-white">Web, product, and blockchain work</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near:0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
