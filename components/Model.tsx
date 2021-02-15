import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';

let GLTFLoader;
const Model = ({ modelPath }: { modelPath: string }) => {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const gltf = useLoader(GLTFLoader, modelPath);
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow ref={mesh}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
