import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface Props {
  modelPath: string;
  shouldRotate?: boolean;
  scale: Vector3;
}

const SandboxModel = ({ modelPath, shouldRotate, scale }: Props) => {
  const gltf: any = useGLTF(modelPath);
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

export default SandboxModel;
