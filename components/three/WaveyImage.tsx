import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import WaveShaderMaterial from './materials/WaveShaderMaterial';

extend({ WaveShaderMaterial });

const WaveyImage = ({ imagePath }) => (
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
          <Plane imagePath={imagePath} />
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

const Plane = ({ imagePath }) => {
  const ref = useRef<THREE.Texture>();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [imagePath]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.6, 0.6, 16, 16]} />
      {/* 
      // @ts-ignore */}
      <waveShaderMaterial uColor="hotpink" ref={ref} uTexture={image} />
    </mesh>
  );
};

export default WaveyImage;
