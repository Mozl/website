import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function AnimationModel({ scroll, ...props }) {
  const t = useRef(0);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model.glb');
  console.log('animations: ', animations);
  const { actions, mixer } = useAnimations(animations, group);
  console.log('actions: ', actions['CameraAction.005']);
  const extras = { 'receiveShadow': true, 'castShadow': true, 'material-envMapIntensity': 0.2 };
  useEffect(() => void actions['CameraAction.005'].play(), []);
  useFrame(() => {
    mixer.setTime(
      (t.current = THREE.MathUtils.lerp(t.current, actions['CameraAction.005']._clip.duration * scroll.current, 0.05))
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.06, 4.04, 0.35]} scale={[0.25, 0.25, 0.25]}>
        <mesh name="Headphones" geometry={nodes.Headphones.geometry} material={materials.M_Headphone} {...extras} />
        <mesh name="Notebook" geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} />
        <mesh name="Rocket003" geometry={nodes.Rocket003.geometry} material={materials.M_Rocket} {...extras} />
        <mesh name="Roundcube001" geometry={nodes.Roundcube001.geometry} material={materials.M_Roundcube} {...extras} />
        <mesh name="Table" geometry={nodes.Table.geometry} material={materials.M_Table} {...extras} />
        <mesh name="VR_Headset" geometry={nodes.VR_Headset.geometry} material={materials.M_Headset} {...extras} />
        <mesh name="Zeppelin" geometry={nodes.Zeppelin.geometry} material={materials.M_Zeppelin} v />
      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
}

useGLTF.preload('/model.glb');
