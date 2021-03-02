import * as THREE from 'three';
import React, { useRef } from 'react';
import RGBToHex from '../helpers/RGBToHex';
import { useFrame, useLoader } from 'react-three-fiber';
// import { useControl } from 'react-three-gui';

let GLTFLoader;
const Model = ({ modelPath }: { modelPath: string }) => {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const gltf: any = useLoader(GLTFLoader, modelPath);
  const mesh = useRef<THREE.Mesh>();
  // const color = useControl('Color', { type: 'color' });
  // const convertedColor = RGBToHex(color.r, color.g, color.b);
  var model = gltf.scene;
  // @ts-ignore
  // var newMaterial = new THREE.MeshStandardMaterial({ color: convertedColor });
  // model.traverse((o: any) => {
  //   if (o.isMesh) o.material = newMaterial;
  // });
  // const rotationX = useControl('Rotation X', { type: 'number' });
  const material = new THREE.MeshPhongMaterial({
    color: 0x996633,
    specular: 0x050505,
    shininess: 100
  });
  // @ts-ignore
  // useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh material={material} castShadow ref={mesh} scale={[4, 4, 4]} rotation-x={null}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
