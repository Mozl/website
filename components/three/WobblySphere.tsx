import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import VertexDisplacementShaderMaterial from './materials/VertexDisplacementShaderMaterial';

extend({ VertexDisplacementShaderMaterial });

const WobblySphere = () => (
  <>
    <div className="three">
      <Canvas
        camera={{ fov: 30 }}
        shadows
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
      >
        {/* 
        // @ts-ignore */}
        <OrbitControls />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Icosahedron />
        </Suspense>
      </Canvas>
    </div>
    <style jsx>{`
      .three {
        height: 100vh;
        background: linear-gradient(125deg, #f98734, #66a0fb);
      }
      .wave {
        height: 100vh;
      }
    `}</style>
  </>
);

const Icosahedron = () => {
  const ref = useRef<THREE.Texture>();
  // @ts-ignore
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      <icosahedronBufferGeometry args={[1, 64]} />
      {/* 
      // @ts-ignore */}
      <vertexDisplacementShaderMaterial ref={ref} />
    </mesh>
  );
};

export default WobblySphere;
