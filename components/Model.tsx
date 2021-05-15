import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

let GLTFLoader;
const Model = ({ modelPath }: { modelPath: string }) => {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const gltf: any = useLoader(GLTFLoader, modelPath);
  const mesh = useRef<THREE.Mesh>();
  const material = new THREE.MeshPhongMaterial({
    color: 0x996633,
    specular: 0x050505,
    shininess: 100
  });
  // @ts-ignore
  // useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh material={material} castShadow ref={mesh} scale={[4, 4, 4]}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
