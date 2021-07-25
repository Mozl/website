import * as THREE from 'three';
import React, { useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import WaveShaderMaterial from './WaveShaderMaterial';

extend({ WaveShaderMaterial });

const WaveyImage = ({ imagePath }) => {
  const ref = useRef<THREE.Texture>();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [imagePath]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.6, 0.6, 16, 16]} />
      {/* 
        // @ts-ignore */}
      <waveShaderMaterial uColor="hotpink" ref={ref} uTexture={image} />
    </mesh>
  );
};

export default WaveyImage;
