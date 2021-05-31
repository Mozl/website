import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ModelViewer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Canvas
      camera={{ position: [-5, 2, 10], fov: 60 }}
      shadows
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
    >
      {/* 
      // @ts-ignore */}
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={2.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight intensity={5} />
      <pointLight position={[0, -10, 2]} intensity={5} />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default ModelViewer;
