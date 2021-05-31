import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ scroll, ...props }) {
  const t = useRef(0);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/GuitarAnimation.gltf');
  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    console.log('actions: ', actions);
    void actions['AnimatedCameraAction'].play();
  }, []);
  useFrame(() => {
    mixer.setTime(
      (t.current = THREE.MathUtils.lerp(
        t.current,
        actions['AnimatedCameraAction']._clip.duration * scroll.current,
        0.05
      ))
    );
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[7.84, 7.84, 7.84]}>
        <mesh geometry={nodes.Cylinder033.geometry} material={materials.MetalTremolo} />
        <mesh geometry={nodes.Cylinder033_1.geometry} material={materials.BodyColor} />
        <mesh geometry={nodes.Cylinder033_2.geometry} material={materials.NeckWood} />
        <mesh geometry={nodes.Cylinder033_3.geometry} material={materials.screws} />
        <mesh geometry={nodes.Cylinder033_4.geometry} material={materials.Fret} />
        <mesh geometry={nodes.Cylinder033_5.geometry} material={materials['WhitePart.001']} />
        <mesh geometry={nodes.Cylinder033_6.geometry} material={materials.Alumium} />
        <mesh geometry={nodes.Cylinder033_7.geometry} material={materials.Bridge} />
        <mesh geometry={nodes.Cylinder033_8.geometry} material={materials['screws 2']} />
      </group>
      <group name="AnimatedCamera" position={[-0.25, -3.68, 0.35]} rotation={[3.01, 0.03, 0]}>
        <PerspectiveCamera makeDefault far={1000} near={0.1} fov={58.72} rotation={[-Math.PI / 2, 0, 0]} />
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
      </group>
    </group>
  );
}

useGLTF.preload('/GuitarAnimation9.gltf');
