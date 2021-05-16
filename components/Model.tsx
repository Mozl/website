import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

interface Props {
  modelPath: string;
  shouldRotate?: boolean;
  scale: number[];
}

let GLTFLoader;
const Model = ({ modelPath, shouldRotate, scale }: Props) => {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const gltf: any = useLoader(GLTFLoader, modelPath);
  const mesh = useRef<THREE.Mesh>();

  if (shouldRotate) {
    useFrame(() => (mesh.current.rotation.y += 0.01));
  }
  return (
    <mesh castShadow ref={mesh} scale={scale}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
