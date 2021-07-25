import * as THREE from 'three';
import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import VertexDisplacementShaderMaterial from './materials/VertexDisplacementShaderMaterial';

extend({ VertexDisplacementShaderMaterial });

const WobblySphere = () => {
  const ref = useRef<THREE.Texture>();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      <icosahedronBufferGeometry args={[1, 64]} />
      {/* 
        // @ts-ignore */}
      <vertexDisplacementShaderMaterial ref={ref} wireframe />
    </mesh>
  );
};

export default WobblySphere;
