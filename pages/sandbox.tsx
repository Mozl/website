import React, { Suspense, useRef } from 'react';
import AnimationModel from '../components/three/AnimationModel';
import GuitarAnimation from '../components/three/GuitarAnimation';
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
            {/* <AnimationModel scroll={scroll} /> */}
            <GuitarAnimation scroll={scroll} />
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
