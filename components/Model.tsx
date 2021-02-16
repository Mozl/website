import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { useControl } from 'react-three-gui';

function RGBToHex(r: number | string, g: number | string, b: number | string) {
  if (r && g && b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return '#' + r + g + b;
  }
}

let GLTFLoader;
const Model = ({ modelPath }: { modelPath: string }) => {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const gltf: any = useLoader(GLTFLoader, modelPath);
  const mesh = useRef<THREE.Mesh>();
  const color = useControl('Color', { type: 'color' });
  const convertedColor = RGBToHex(color.r, color.g, color.b);
  var model = gltf.scene;
  var newMaterial = new THREE.MeshStandardMaterial({ color: convertedColor });
  model.traverse((o) => {
    if (o.isMesh) o.material = newMaterial;
  });
  const rotationX = useControl('Rotation X', { type: 'number' });
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow ref={mesh} scale={[4, 4, 4]} rotation-x={rotationX}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
