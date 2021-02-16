import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { withControls } from 'react-three-gui';
const YourCanvas = withControls(Canvas);

const ModelViewer = ({ children }: { children?: JSX.Element }) => {
  return (
    <>
      <YourCanvas shadowMap colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={1} />
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
        <pointLight position={[0, 0, 20]} intensity={1} />
        <pointLight position={[0, -10, 0]} intensity={1} />
        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>
        <Suspense fallback={null}>{children}</Suspense>
      </YourCanvas>
    </>
  );
};

export default ModelViewer;
