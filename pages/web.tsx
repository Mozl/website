import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Overlay from '../components/three/Overlay';
import { Loader, Environment } from '@react-three/drei';
import WebsitePushedDown2 from '../components/three/WebsitePushedDown2';

const Web: React.FC = () => {
  const scroll = useRef(0);
  const overlay = useRef();
  const caption = useRef();

  return (
    <>
      <div className="three">
        <Canvas
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
          color="lightblue"
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <WebsitePushedDown2 scroll={scroll} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        {/* 
        // @ts-ignore */}
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
        <Loader />
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
          background-color: #4fafcc;
        }
      `}</style>
    </>
  );
};

export default Web;
