import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';
import { useFrame } from 'react-three-fiber';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
  };
  materials: {
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const coin = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/3d-assets/PortraitCoin.glb') as GLTFResult;
  useFrame(() => (coin.current.rotation.z += 0.005));
  return (
    <group scale={[1.7, 1.7, 1.7]} ref={group} {...props} dispose={null}>
      <group ref={coin} rotation={[Math.PI / 2 - 0.1, -0.2, 3.5]}>
        <mesh material={materials['Material.005']} geometry={nodes.Circle001.geometry} />
        <mesh material={materials['Material.002']} geometry={nodes.Circle001_1.geometry} />
        <mesh material={materials['Material.006']} geometry={nodes.Circle001_2.geometry} />
      </group>
    </group>
  );
}

useGLTF.preload('/PortraitCoin.glb');
