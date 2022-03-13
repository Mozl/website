import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, ScrollControls } from '@react-three/drei';
import WebsitePushedDown2 from '../components/three/WebsitePushedDown2';
import Effects from '../components/three/Effects';

const Web: React.FC = () => {
  return (
    <>
      <div className="three">
        <Canvas
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={0.4} />
          <Suspense fallback={null}>
            <ScrollControls pages={20}>
              <WebsitePushedDown2 />
            </ScrollControls>
            <Environment preset="city" />
          </Suspense>
          <Effects />
        </Canvas>
        <Loader />
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Web;
