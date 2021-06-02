import React, { Suspense, useRef } from 'react';
import GuitarAnimationWithCameraSpin2 from '../components/three/GuitarAnimationWithCameraSpin2';
import Overlay from '../components/three/Overlay';
import { Canvas } from '@react-three/fiber';

const Sandbox: React.FC = () => {
  const scroll = useRef(0);
  const overlay = useRef();
  const caption = useRef();
  return (
    <>
      <div className="three">
        <Canvas
          shadows
          onCreated={(state) => state.events.connect(overlay.current)}
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <GuitarAnimationWithCameraSpin2 scroll={scroll} />
          </Suspense>
        </Canvas>
        {/* 
        // @ts-ignore */}
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
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
