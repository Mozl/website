import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uColor: new THREE.Color(0.0, 0.0, 0.0) },

  // Vertex shader
  glsl`
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  
  `,

  // Fragment shader
  glsl`
    varying vec2 vUv;
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(vUv, 1.0, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Shader: React.FC = () => {
  return (
    <>
      <div className="three">
        <Canvas
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <mesh>
              <planeBufferGeometry args={[3, 5]} />
              <waveShaderMaterial uColor="hotpink" />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
          background-color: grey;
        }
      `}</style>
    </>
  );
};

export default Shader;
