import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';

export default function Model({ scroll, ...props }) {
  const group = useRef();
  const t = useRef(0);
  const { nodes, materials, animations } = useGLTF('/WebsiteBakedAnimations.gltf');
  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    actions['Action'].play();
    actions['Action.001'].play();
    actions['Action.002'].play();
    actions['Action.003'].play();
    actions['Action.004'].play();
    actions['Action.005'].play();
    actions['Action.006'].play();
    actions['Action.007'].play();
    actions['Action.008'].play();
  }, []);
  useFrame(() => {
    mixer.setTime(
      (t.current = THREE.MathUtils.lerp(t.current, actions['Action']._clip.duration * scroll.current, 0.05))
    );
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Camera" rotation={[1.13, 0.06, 3.02]}>
        <PerspectiveCamera makeDefault far={1000} near={0.1} fov={28.41} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh
        name="React"
        geometry={nodes.React.geometry}
        material={materials['Material.007']}
        position={[-0.14, 0.43, 0.28]}
        rotation={[2.1, -0.32, 1.09]}
        scale={[1.65, 1.48, 0.65]}
      />
      <mesh
        name="Redux"
        geometry={nodes.Redux.geometry}
        material={materials['Material.006']}
        position={[-0.58, 14.25, -6.03]}
        rotation={[Math.PI / 2, 0, -0.86]}
        scale={4.2}
      />
      <group name="Typescript" position={[0.11, 6.1, -3.22]} rotation={[-1.07, 0.42, 2.21]} scale={2.74}>
        <mesh geometry={nodes.Typescript_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Typescript_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh
        name="NodeJS"
        geometry={nodes.NodeJS.geometry}
        material={materials['Material.005']}
        position={[-2.57, 11.35, 4.25]}
        rotation={[0.36, 1.36, -0.35]}
        scale={38.09}
      />
      <mesh
        name="S"
        geometry={nodes.S.geometry}
        material={nodes.S.material}
        position={[4.63, 17.3, 10.69]}
        rotation={[Math.PI / 2, 0, 1.75]}
        scale={67.16}
      />
      <mesh
        name="Arrow"
        geometry={nodes.Arrow.geometry}
        material={materials['Material.009']}
        position={[5.51, 15.5, 10.69]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={67.16}
      />
      <mesh
        name="A"
        geometry={nodes.A.geometry}
        material={nodes.A.material}
        position={[8.44, 17.21, 10.69]}
        rotation={[Math.PI / 2, 0, -1.75]}
        scale={67.16}
      />
      <mesh
        name="W"
        geometry={nodes.W.geometry}
        material={nodes.W.material}
        position={[6.48, 24.74, 10.69]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={67.16}
      />
    </group>
  );
}

useGLTF.preload('/Website-pusheddown2.gltf');
