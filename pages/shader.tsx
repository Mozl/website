import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0), uTexture: new THREE.Texture() },

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
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;

    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef<THREE.Texture>();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      <planeBufferGeometry args={[3, 5]} />
      {/* 
        // @ts-ignore */}
      <waveShaderMaterial uColor="hotpink" ref={ref} />
    </mesh>
  );
};

const Shader = () => {
  return (
    <>
      <div className="three">
        <Canvas
          shadows
          raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Wave />
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
