import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import WaveyImage from '../components/three/WaveyImage';
import WobblySphere from '../components/three/WobblySphere';
import { OrbitControls } from '@react-three/drei';

const Shader: React.FC = () => {
  return (
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
            <WobblySphere />
          </Suspense>
        </Canvas>
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
          background-color: grey;
        }
        .wave {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Shader;
