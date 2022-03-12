import React, { Suspense, useRef } from 'react';
import GuitarAnimationWithCameraSpin2 from '../components/three/GuitarAnimationWithCameraSpin2';
import { Canvas } from '@react-three/fiber';
import { Loader, ScrollControls } from '@react-three/drei';

const Sandbox: React.FC = () => {
  const scroll = useRef(0);

  return (
    <>
      <div className="three">
        <Canvas
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ScrollControls pages={3}>
              <GuitarAnimationWithCameraSpin2 scroll={scroll} />
            </ScrollControls>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
          background-color: black;
        }
      `}</style>
    </>
  );
};

export default Sandbox;
