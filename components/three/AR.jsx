import React from 'react';
import { Suspense } from 'react';
import { OrbitControls, Box } from '@react-three/drei';
import { ARCanvas } from '@react-three/xr';

const AR = () => {
  return (
    <>
      <div className="three">
        <ARCanvas
          camera={{ fov: 30 }}
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <OrbitControls />
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Box position={[0, 0, -5]} rotation={[6, 3, 3]} width={10} height={10} depth={10} />
          </Suspense>
        </ARCanvas>
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
};

// let ARButton;
// const AREnv = () => {
//   // ARButton = require('three/examples/jsm/webxr/ARButton').ARButton;
//   const { gl } = useThree();
//   const arButton = ARButton.createButton(gl);
//   gl.xr.enabled = true;
//   return <arButton />;
// };

export default AR;
