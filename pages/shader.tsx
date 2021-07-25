import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import WaveyImage from '../components/three/WaveyImage';

const Shader: React.FC = () => {
  return (
    <>
      <div className="three">
        <Canvas
          camera={{ fov: 10 }}
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <WaveyImage imagePath="/louis.png" />
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
